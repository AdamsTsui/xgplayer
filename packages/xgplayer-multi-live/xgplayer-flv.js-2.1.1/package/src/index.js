import Player from 'xgplayer'
import Flv from './flv/flv'

class FlvJsPlayer extends Player {
  constructor (options) {
    super(options)
    this.flvOpts = { type: 'flv' }
    this.optionalConfig = {}
    Player.util.deepCopy(this.flvOpts, options)
    Player.util.deepCopy(this.optionalConfig, options.flvOptionalConfig)
    const player = this

    Object.defineProperty(player, 'src', {
      get () {
        return player.currentSrc
      },
      set (url) {
        player.flv_load(url.toString())
        player.video.muted = true
        Player.util.addClass(player.root, 'xgplayer-is-enter')
        player.once('playing', function () {
          Player.util.removeClass(player.root, 'xgplayer-is-enter')
          player.video.muted = false
        })
        player.once('canplay', function () {
          player.play()
        })
      },
      configurable: true
    })

    player.once('complete', () => {
      for (let i = 0; i < this.flvOpts.channelNum; i++) {
        let _flvOpts = Player.util.deepCopy({}, this.flvOpts)
        _flvOpts.url = this.flvOpts.url[i]
        player[`__flv__${i === 0 ? '' : i}`] = Flv.createPlayer(_flvOpts, this.optionalConfig)
      }
      player.createInstance()
      if (player.config.isLive) {
        Player.util.addClass(player.root, 'xgplayer-is-live')
        const live = Player.util.createDom('xg-live', '正在直播', {}, 'xgplayer-live')
        player.controls.appendChild(live)
      }
    })
  }

  createInstance () {
    const player = this
    for (let i = 0; i < this.flvOpts.channelNum; i++) {
      let flv = player[`__flv__${i === 0 ? '' : i}`]
      player[`video${i === 0 ? '' : i}`].addEventListener('contextmenu', function (e) {
        e.preventDefault()
      })
      flv.attachMediaElement(player[`video${i === 0 ? '' : i}`])
      flv.load()
      // flv.play()

      flv.on(Flv.Events.ERROR, (e) => {
        player.emit('error', new Player.Errors('other', player.config.url))
      })
      flv.on(Flv.Events.LOADED_SEI, (timestamp, data) => {
        player.emit('loaded_sei', timestamp, data);
      })
      flv.on(Flv.Events.STATISTICS_INFO, (data) => {
        player.emit("statistics_info",data);
      })
      flv.on(Flv.Events.MEDIA_INFO, (data)=>{
        player.mediainfo = data;
        player.emit("MEDIA_INFO",data);
      })
    }
    player.once('destroy', () => {
      for (let i = 0; i < this.flvOpts.channelNum; i++) {
        let flv = player[`__flv__${i === 0 ? '' : i}`]
        flv.destroy()
        flv = null
      }
    })
  }
  flv_load (newUrl) {
    let player = this
    let urlArr = newUrl.split(',')
    this.flvOpts.url = this.config.url = urlArr

    for (let i = 0; i < this.flvOpts.channelNum; i++) {
      let __flv__ = player[`__flv__${i === 0 ? '' : i}`]
      if (typeof __flv__ !== 'undefined') {
        if (__flv__ != null) {
          __flv__.unload()
          __flv__.detachMediaElement()
          __flv__.destroy()
          __flv__ = null
        }
      }
    }

    for (let i = 0; i < player.flvOpts.channelNum; i++) {
      let mediaDataSource = Player.util.deepCopy({}, this.flvOpts)
      mediaDataSource.segments = [
        {
          cors: true,
          duration: undefined,
          filesize: undefined,
          timestampBase: 0,
          url: urlArr[i],
          withCredentials: false
        }
      ]
      // mediaDataSource.cors = true
      // mediaDataSource.hasAudio = true
      // mediaDataSource.hasVideo = true
      // mediaDataSource.isLive = true
      mediaDataSource.url = urlArr[i]
      // mediaDataSource.withCredentials = false

      player[`__flv__${i === 0 ? '' : i}`] = Flv.createPlayer(mediaDataSource, this.optionalConfig)

      player[`__flv__${i === 0 ? '' : i}`].attachMediaElement(player[`video${i === 0 ? '' : i}`])
      player[`__flv__${i === 0 ? '' : i}`].load()
    }
  }

  switchURL (url) {
    const player = this
    let curTime = 0
    if (!player.config.isLive) {
      curTime = player.currentTime
    }
    player.flv_load(url)
    player.video.muted = true
    Player.util.addClass(player.root, 'xgplayer-is-enter')
    player.once('playing', function(){
      Player.util.removeClass(player.root, 'xgplayer-is-enter')
      player.video.muted = false
    })
    player.once('canplay', function () {
      if (!player.config.isLive) {
        player.currentTime = curTime
      }
      player.play()
    })
  }
}
FlvJsPlayer.isSupported = Flv.isSupported
export default FlvJsPlayer
