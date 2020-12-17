import Player from '../../player'

let s_time = function () {
  let player = this
  let util = Player.util
  let container = util.createDom('xg-time', `<span class="xgplayer-time-current">${player.currentTime || util.format(0)}</span>
                                           <span>${player.duration || util.format(0)}</span>`, {}, 'xgplayer-time')
  player.once('ready', () => {
    player.controls.appendChild(container)
  })
  let onTimeChange = function (videoObj) {
    if (player.isSrcChanging || !player.currentTime) {
      return true
    }
    if (player.videoConfig.mediaType !== 'audio' || !player.isProgressMoving || !player.dash) {
      container.innerHTML = `<span class="xgplayer-time-current">${util.format(player.currentTime || 0)}</span>` + `<span>${util.format(player.duration)}</span>`
      // console.log(new Date().getTime() + ' _video:::' + videoObj + ':::::player.currentTime:::' + player.currentTime + ' isAvailable:::' + player.isFuliuAvailable(player.currentTime))
      if (player.is323Meeting) {
        if (player.isFuliuAvailable(player.currentTime)) {
          if (!player.isFuliuPlaying) {
            console.log('开始辅流............')
            player.channelNum = 2
            player.isFuliuPlaying = true
            player.emit('ShowOrHideFuliu')
            player.playFuliu(player.currentTime)
          }
        } else {
          if (player.isFuliuPlaying) {
            console.log('暂停辅流............')
            player.channelNum = 1
            player.isFuliuPlaying = false
            player.emit('ShowOrHideFuliu')
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
