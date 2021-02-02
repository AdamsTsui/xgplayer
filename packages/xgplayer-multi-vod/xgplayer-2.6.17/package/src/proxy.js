import EventEmitter from 'event-emitter'
import util from './utils/util'
import Errors from './error'

class Proxy {
  constructor (options) {
    this.logParams = {
      bc: 0,
      bu_acu_t: 0,
      played: []
    }
    this._hasStart = false
    this.currFileNumArr = [0, 0, 0, 0]
    this.is323Meeting = false
    this.isFuliuPlaying = false
    this.channelNum = 0
    this.videoConfig = {
      controls: !!options.isShowControl,
      // autoplay: options.autoplay,
      playsinline: options.playsinline,
      'webkit-playsinline': options.playsinline,
      'x5-playsinline': options.playsinline,
      'x5-video-player-type': options['x5-video-player-type'] || options['x5VideoPlayerType'],
      'x5-video-player-fullscreen': options['x5-video-player-fullscreen'] || options['x5VideoPlayerFullscreen'],
      'x5-video-orientation': options['x5-video-orientation'] || options['x5VideoOrientation'],
      airplay: options['airplay'],
      'webkit-airplay': options['airplay'],
      tabindex: 2,
      draggable: true,
      mediaType: options.mediaType || 'video'
    }
    if (options.useCORS) {
      this.videoConfig = util.deepCopy({
        useCORS: true,
        crossOrigin: 'Anonymous'
      }, this.videoConfig)
    }
    // options.autoplay = false
    if (options.loop) {
      this.videoConfig.loop = 'loop'
    }
    if (options.url) {
      this.channelNum = options.url.channel.length
      util.transMp4ToSegment(options.url)
      // console.log('options.url:::' + JSON.stringify(options.url))
    }

    this.soundChannelId = options.soundChannelId
    if (!this.soundChannelId || this.channelNum === 1) {
      this.soundChannelId = 1
    }
    // 图片那一路的id
    this.imageChannelId = -1
    for (let i = 0; i < this.channelNum; i++) {
      let channel = options.url.channel[i]
      if (channel.type === 'jpg') {
        this.imageChannelId = i
        break
      }
    }

    let totalDuration = 0
    let channels = options.url.channel
    for (let i = 0; i < channels.length; i++) {
      let files = channels[i].files
      for (let j = 0; j < files.length; j++) {
        let file = files[j]
        if (i === 0) {
          totalDuration += parseFloat(file.totaltime)
        }
        if (file['endtime'] && file['endtime'] * 1 > 0) {
          this.is323Meeting = true
          break
        }
      }
    }
    this.totalDuration = totalDuration
    for (let i = 0; i < 4; i++) {
      let videoName = `video${(i === 0) ? '' : i}`
      this.videoConfig['id'] = videoName
      this[videoName] = util.createDom(this.videoConfig.mediaType, '', this.videoConfig, videoName)
    }
    if (options.autoplay) {
      let index = this.soundChannelId - 1
      let videoName = `video${(index === 0) ? '' : index}`
      this[videoName].autoplay = true
      this['video1'].auto = true
      if (options.autoplayMuted) {
        this[videoName].muted = true
      }
    }
    this.ev = ['play', 'playing', 'pause', 'ended', 'error', 'seeking', 'seeked',
      'timeupdate', 'waiting', 'canplay', 'canplaythrough', 'durationchange', 'volumechange', 'loadeddata'
    ].map((item) => {
      return {
        [item]: `on${item.charAt(0).toUpperCase()}${item.slice(1)}`
      }
    })
    EventEmitter(this)

    this._interval = {}
    let lastBuffer = '0,0'
    let self = this

    this.ev.forEach(item => {
      self.evItem = Object.keys(item)[0]
      let name = Object.keys(item)[0]
      self.video.addEventListener(Object.keys(item)[0], function () {
        // fix when video destroy called and video reload
        if (!self.logParams) {
          return
        }
        if (name === 'play') {
          self.hasStart = true
        } else if (name === 'waiting') {
          self.logParams.bc++
          self.inWaitingStart = new Date().getTime()
        } else if (name === 'playing') {
          if (self.inWaitingStart) {
            self.logParams.bu_acu_t += new Date().getTime() - self.inWaitingStart
            self.inWaitingStart = undefined
          }
        } else if (name === 'loadeddata') {
          self.logParams.played.push({
            begin: 0,
            end: -1
          })
        } else if (name === 'seeking') {
          self.logParams.played.push({
            begin: self.video.currentTime,
            end: -1
          })
        } else if (self && self.logParams && self.logParams.played && name === 'timeupdate') {
          if (self.logParams.played.length < 1) {
            self.logParams.played.push({
              begin: self.video.currentTime,
              end: -1
            })
          }
          self.logParams.played[self.logParams.played.length - 1].end = self.video.currentTime
        }
        if (name === 'error') {
          // process the error
          self._onError(name)
        } else {
          self.emit(name, self)
        }

        if (self.hasOwnProperty('_interval')) {
          if (['ended', 'error', 'timeupdate'].indexOf(name) < 0) {
            clearInterval(self._interval['bufferedChange'])
            util.setInterval(self, 'bufferedChange', function () {
              if (self.video && self.video.buffered) {
                let curBuffer = []
                for (let i = 0, len = self.video.buffered.length; i < len; i++) {
                  curBuffer.push([self.video.buffered.start(i), self.video.buffered.end(i)])
                }
                if (curBuffer.toString() !== lastBuffer) {
                  lastBuffer = curBuffer.toString()
                  self.emit('bufferedChange', curBuffer)
                }
              }
            }, 200)
          } else {
            if (name !== 'timeupdate') {
              util.clearInterval(self, 'bufferedChange')
            }
          }
        }
      }, false)
    })
  }
  /**
   * 错误监听处理逻辑抽离
   */
  _onError (name) {
    if (this.video && this.video.error) {
      this.emit(name, new Errors('other', this.currentTime, this.duration, this.networkState, this.readyState, this.currentSrc, this.src,
        this.ended, {
          line: 162,
          msg: this.error,
          handle: 'Constructor'
        }, this.video.error.code, this.video.error))
    }
  }

  get hasStart () {
    return this._hasStart
  }
  set hasStart (bool) {
    if (typeof bool === 'boolean' && bool === true && !this._hasStart) {
      this._hasStart = true
      this.emit('hasstart')
    }
  }
  destroy () {
    if (this.textTrackStyle) {
      this.textTrackStyle.parentNode.removeChild(this.textTrackStyle)
    }
  }
  play () {
    let ret = true
    for (let i = 0; i < this.channelNum; i++) {
      if (this.imageChannelId < 0 || (this.imageChannelId > 0 && this.imageChannelId !== i)) {
        ret && this[`video${i === 0 ? '' : i}`].play()
      }
    }
    return ret
  }
  pause () {
    for (let i = 0; i < this.channelNum; i++) {
      this[`video${i === 0 ? '' : i}`].pause()
    }
  }
  canPlayType (type) {
    return this.video.canPlayType(type)
  }
  getBufferedRange () {
    let range = [0, 0]
    let video = this.video
    let buffered = video.buffered
    let currentTime = video.currentTime
    if (buffered) {
      for (let i = 0, len = buffered.length; i < len; i++) {
        range[0] = buffered.start(i)
        range[1] = buffered.end(i)
        if (range[0] <= currentTime && currentTime <= range[1]) {
          break
        }
      }
    }
    if (range[0] - currentTime <= 0 && currentTime - range[1] <= 0) {
      return range
    } else {
      return [0, 0]
    }
  }
  set autoplay (isTrue) {
    this.video.autoplay = isTrue
  }
  get autoplay () {
    return this.video.autoplay
  }
  get buffered () {
    return this.video.buffered
  }
  get crossOrigin () {
    return this.video.crossOrigin
  }
  set crossOrigin (isTrue) {
    this.video.crossOrigin = isTrue
  }
  get currentSrc () {
    return JSON.stringify(this.config.url)
  }
  set currentSrc (src) {
    // this.config.url = src
  }
  get currentTime () {
    let tmpTime = 0
    let mainFiles = this.config.url.channel[0].files
    for (let i = 0; i < this.currFileNumArr[0]; i++) {
      tmpTime += parseFloat(mainFiles[i].totaltime)
    }
    return (tmpTime + this['video'].currentTime)
  }
  set currentTime (time) {
    let channels = this.config.url.channel
    for (let k = 0; k < channels.length; k++) {
      let toFileNum = 0
      let toCurrTime = 0
      let tmpTime = 0
      let mainFiles = channels[k].files
      if (this.is323Meeting && k === 1) {
        break
      }
      for (let i = 0; i < mainFiles.length; i++) {
        tmpTime += parseFloat(mainFiles[i].totaltime)
        if (tmpTime > time) {
          toFileNum = i
          toCurrTime = time - (tmpTime - parseFloat(mainFiles[i].totaltime))
          break
        }
      }
      if (toFileNum === this.currFileNumArr[k]) {
        // console.log('分片内。。。')
        this[`video${k === 0 ? '' : k}`].currentTime = toCurrTime
        this.emit('currentTimeChange')
      } else {
        // console.log('跨分片。。。')
        let self = this
        this.currFileNumArr[k] = toFileNum
        this.isSrcChanging = true
        // this.src = this.config.url
        this[`video${k === 0 ? '' : k}`].src = this.config.url.channel[k].files[this.currFileNumArr[k]].url
        this.once('canplay', function () {
          let playPromise = self.play()
          if (playPromise !== undefined && playPromise) {
            // console.log('跨分片后，继续播放。。。')
            self.currentTime = time
            this.isSrcChanging = false
            if (util.typeOf(playPromise) === 'function') {
              playPromise.catch(err => { console.error(err) })
            }
          }
        })
      }
    }
  }
  get defaultMuted () {
    return this.video.defaultMuted
  }
  set defaultMuted (isTrue) {
    this.video.defaultMuted = isTrue
  }
  get duration () {
    return this.totalDuration
  }
  get ended () {
    return this.video.ended
  }
  get error () {
    let err = this.video.error
    if (!err) {
      return null
    }
    let status = [{
      en: 'MEDIA_ERR_ABORTED',
      cn: '取回过程被用户中止'
    }, {
      en: 'MEDIA_ERR_NETWORK',
      cn: '当下载时发生错误'
    }, {
      en: 'MEDIA_ERR_DECODE',
      cn: '当解码时发生错误'
    }, {
      en: 'MEDIA_ERR_SRC_NOT_SUPPORTED',
      cn: '不支持音频/视频'
    }]
    return this.lang ? this.lang[status[err.code - 1].en] : status[err.code - 1].en
  }
  get loop () {
    return this.video.loop
  }
  set loop (isTrue) {
    this.video.loop = isTrue
  }
  get muted () {
    let index = this.soundChannelId - 1
    let videoName = `video${(index === 0) ? '' : index}`
    return this[videoName].muted
  }
  set muted (isTrue) {
    let index = this.soundChannelId - 1
    for (let i = 0; i < this.channelNum; i++) {
      let videoName = `video${i === 0 ? '' : i}`
      if (i === index) {
        this[videoName].muted = isTrue
      } else {
        this[videoName].muted = true
      }
    }
  }
  get networkState () {
    let status = [{
      en: 'NETWORK_EMPTY',
      cn: '音频/视频尚未初始化'
    }, {
      en: 'NETWORK_IDLE',
      cn: '音频/视频是活动的且已选取资源，但并未使用网络'
    }, {
      en: 'NETWORK_LOADING',
      cn: '浏览器正在下载数据'
    }, {
      en: 'NETWORK_NO_SOURCE',
      cn: '未找到音频/视频来源'
    }]
    return this.lang ? this.lang[status[this.video.networkState].en] : status[this.video.networkState].en
  }
  get paused () {
    return this.video.paused
  }
  get playbackRate () {
    return this.video.playbackRate
  }
  set playbackRate (rate) {
    this.video.playbackRate = rate
  }
  get played () {
    return this.video.played
  }
  get preload () {
    return this.video.preload
  }
  set preload (isTrue) {
    this.video.preload = isTrue
  }
  get readyState () {
    let status = [{
      en: 'HAVE_NOTHING',
      cn: '没有关于音频/视频是否就绪的信息'
    }, {
      en: 'HAVE_METADATA',
      cn: '关于音频/视频就绪的元数据'
    }, {
      en: 'HAVE_CURRENT_DATA',
      cn: '关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒'
    }, {
      en: 'HAVE_FUTURE_DATA',
      cn: '当前及至少下一帧的数据是可用的'
    }, {
      en: 'HAVE_ENOUGH_DATA',
      cn: '可用数据足以开始播放'
    }]
    return this.lang ? this.lang[status[this.video.readyState].en] : status[this.video.readyState]
  }
  get seekable () {
    return this.video.seekable
  }
  get seeking () {
    return this.video.seeking
  }
  get src () {
    return this.config.url
  }
  set src (url) {
    let self = this
    if (!util.hasClass(this.root, 'xgplayer-ended')) {
      this.emit('urlchange', JSON.parse(JSON.stringify(self.logParams)))
    }
    this.logParams = {
      bc: 0,
      bu_acu_t: 0,
      played: [],
      pt: new Date().getTime(),
      vt: new Date().getTime(),
      vd: 0
    }
    for (let i = 0; i < this.channelNum; i++) {
      this[`video${i === 0 ? '' : i}`].pause()
    }
    let urlArr = url.channel
    for (let i = 0; i < this.channelNum; i++) {
      this[`video${i === 0 ? '' : i}`].src = urlArr[i].files[this.currFileNumArr[i]].url
    }
    this.emit('srcChange')
    this.logParams.playSrc = url
    this.logParams.pt = new Date().getTime()
    this.logParams.vt = this.logParams.pt
    function ldFunc () {
      self.logParams.vt = new Date().getTime()
      if (self.logParams.pt > self.logParams.vt) {
        self.logParams.pt = self.logParams.vt
      }
      self.logParams.vd = self.video.duration
      self.off('loadeddata', ldFunc)
    }
    this.once('loadeddata', ldFunc)
  }
  set poster (posterUrl) {
    let poster = util.findDom(this.root, '.xgplayer-poster')
    if (poster) {
      poster.style.backgroundImage = `url(${posterUrl})`
    }
  }
  get volume () {
    let index = this.soundChannelId - 1
    let videoName = `video${(index === 0) ? '' : index}`
    return this[videoName].volume
  }
  set volume (vol) {
    let index = this.soundChannelId - 1
    for (let i = 0; i < this.channelNum; i++) {
      let videoName = `video${i === 0 ? '' : i}`
      if (i === index) {
        this[videoName].volume = vol
      } else {
        this[videoName].volume = 0
      }
    }
  }
  get fullscreen () {
    return util.hasClass(this.root, 'xgplayer-is-fullscreen') || util.hasClass(this.root, 'xgplayer-fullscreen-active')
  }
  get bullet () {
    return util.findDom(this.root, 'xg-danmu') ? util.hasClass(util.findDom(this.root, 'xg-danmu'), 'xgplayer-has-danmu') : false
  }
  get textTrack () {
    return util.hasClass(this.root, 'xgplayer-is-textTrack')
  }
  get pip () {
    return util.hasClass(this.root, 'xgplayer-pip-active')
  }

  getFuliuCountTime (listNum) {
    let sumTime = 0
    let channel = this.config.url.channel[1]
    if (channel) {
      let files = channel.files
      if (listNum > files.length - 1) {
        listNum = files.length - 1
      }
      for (let i = 0; i <= listNum; i++) {
        let file = files[i]
        sumTime += file['totaltime'] * 1 + file['starttime'] * 1
      }
    }
    return sumTime
  }

  getFuliuVideoListNum (time) {
    let channel = this.config.url.channel[1]
    if (channel) {
      let sumTime = 0
      let files = channel.files
      for (let i = 0; i < files.length; i++) {
        let file = files[i]
        let startTime = sumTime
        sumTime += file['totaltime'] * 1 + file['starttime'] * 1
        if (time >= startTime && time < sumTime) {
          return i
        }
      }
    }
    return 0
  }
  isFuliuAvailable (time) {
    let listNum = this.getFuliuVideoListNum(time)
    let file = this.config.url.channel[1].files[listNum]
    let countTime = this.getFuliuCountTime(listNum - 1)
    let timeStart = countTime + file['starttime']
    let timeEnd = countTime + file['starttime'] * 1 + file['endtime'] * 1
    return time >= timeStart && time <= timeEnd
  }
  playFuliu (time) {
    let self = this
    let listNum = this.getFuliuVideoListNum(time)
    let file = this.config.url.channel[1].files[listNum]
    let seekTime = time - file['starttime'] * 1
    this['video1'].src = file.url
    if (seekTime > 0) {
      self.isSrcChanging = true
      this.once('canplay', function () {
        let playPromise = self.play()
        if (playPromise !== undefined && playPromise) {
          // console.log('辅流播放，seek。。。')
          self['video1'].currentTime = seekTime
          self.isSrcChanging = false
          if (util.typeOf(playPromise) === 'function') {
            playPromise.catch(err => { console.error(err) })
          }
        }
      })
    }
  }
  playerResize () {
    this.emit('playerResize')
  }
}

export default Proxy
