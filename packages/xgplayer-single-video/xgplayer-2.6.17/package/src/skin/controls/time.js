import Player from '../../player'

let s_time = function () {
  let player = this
  let root = player.root
  let util = Player.util
  let supposedCurrentTime = 0
  let container = util.createDom('xg-time', `<span class="xgplayer-time-current">${player.currentTime || util.format(0)}</span>
                                           <span>${player.duration || util.format(0)}</span>`, {}, 'xgplayer-time')
  player.once('ready', () => {
    player.controls.appendChild(container)
  })

  let onTimeChange = function () {
    if (player.videoConfig.mediaType !== 'audio' || !player.isProgressMoving || !player.dash) {
      let currTime = player.currentTime
      if (supposedCurrentTime && (currTime - supposedCurrentTime > 1)) {
        player.currentTime = supposedCurrentTime
        return
      }
      supposedCurrentTime = currTime
      container.innerHTML = `<span class="xgplayer-time-current">${util.format(player.currentTime || 0)}</span>` + `<span>${util.format(player.duration)}</span>`
    }
  }

  /*
  let onSeeking = function () {
    var delta = player.currentTime - supposedCurrentTime
    if (delta > 0.01) {
      player.currentTime = supposedCurrentTime
    }
  }
  */

  let onEnded = function () {
    supposedCurrentTime = 0
  }

  player.on('ended', onEnded)
  player.on('durationchange', onTimeChange)
  // player.on('seeking', onSeeking)
  player.on('timeupdate', onTimeChange)

  function onDestroy () {
    player.off('ended', onEnded)
    player.off('durationchange', onTimeChange)
    // player.off('seeking', onSeeking)
    player.off('timeupdate', onTimeChange)
    player.off('destroy', onDestroy)
  }
  player.once('destroy', onDestroy)
}

Player.install('s_time', s_time)
