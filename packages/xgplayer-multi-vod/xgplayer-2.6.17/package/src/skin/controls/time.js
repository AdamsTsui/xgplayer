import Player from '../../player'

let s_time = function () {
  let player = this
  let root = player.root
  let util = Player.util
  let container = util.createDom('xg-time', `<span class="xgplayer-time-current">${player.currentTime || util.format(0)}</span>
                                           <span>${player.duration || util.format(0)}</span>`, {}, 'xgplayer-time')
  player.once('ready', () => {
    player.controls.appendChild(container)
  })
  let onTimeChange = function () {
    // let liveText = player.lang.LIVE
    // if(player.duration === Infinity) {
    //   util.addClass(player.root, 'xgplayer-is-live')
    //   if(!util.findDom(player.root, '.xgplayer-live')) {
    //     const live = util.createDom('xg-live', liveText, {}, 'xgplayer-live')
    //     player.controls.appendChild(live)
    //   }
    // }
    if (player.isSrcChanging || !player.currentTime) {
      return true
    }
    if (player.videoConfig.mediaType !== 'audio' || !player.isProgressMoving || !player.dash) {
      container.innerHTML = `<span class="xgplayer-time-current">${util.format(player.currentTime || 0)}</span>` + `<span>${util.format(player.duration)}</span>`
      if (player.is323Meeting) {
        if (player.isFuliuAvailable(player.currentTime)) {
          if (!player.isFuliuPlaying) {
            // console.log('开始辅流............')
            player.channelNum = 2
            player.isFuliuPlaying = true
            player.emit('ShowOrHideFuliu')
            player.playFuliu(player.currentTime)
          }
        } else {
          if (player.isFuliuPlaying) {
            // console.log('暂停辅流............')
            player.channelNum = 1
            player.isFuliuPlaying = false
            player.emit('ShowOrHideFuliu')
          }
        }
      } else {
        // 三路视频同步
        let currTime = player['video'].currentTime
        for (let i = 1; i < player.channelNum; i++) {
          let _video = player[`video${i}`]
          let channel = player.config.url.channel[i]
          if (channel.type === 'mp4') {
            if (Math.abs(currTime - _video.currentTime) > 1) {
              _video.currentTime = currTime
            }
          } else if (channel.type === 'jpg') {
            const currentAllTime = player.currentTime
            let files = channel.files
            for (let j = (files.length - 1); j >= 0; j--) {
              let file = files[j]
              if (currentAllTime > file.starttime) {
                if (_video.poster !== file.imageUrl) {
                  // console.log('_video.paused:::' + _video.paused + ':::_video.src:::' + _video.src + ':::file.imageUrl:::' + file.imageUrl + ':::file.starttime:::' + file.starttime)
                  if (!_video.paused) {
                    _video.pause()
                  }
                  if (_video.src) {
                    _video.src = ''
                  }
                  _video.poster = file.imageUrl
                }
                break
              }
            }
          }
        }
      }
    }
  }
  player.on('durationchange', onTimeChange)
  player.on('timeupdate', onTimeChange)

  function onDestroy () {
    player.off('durationchange', onTimeChange)
    player.off('timeupdate', onTimeChange)
    player.off('destroy', onDestroy)
  }
  player.once('destroy', onDestroy)
}

Player.install('s_time', s_time)
