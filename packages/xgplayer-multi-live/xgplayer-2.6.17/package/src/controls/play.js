import Player from '../player'

let play = function () {
  let player = this

  function onPlayBtnClick () {
    if (!player.config.allowPlayAfterEnded && player.ended) {
      return
    }
    if (player.paused) {
      let playPromise = player.play()
      if (playPromise !== undefined && playPromise) {
        if (typeof playPromise.catch === 'function') {
          playPromise.catch && playPromise.catch(err => {})
        }
      }
    } else {
      player.pause()
    }
  }
  player.on('playBtnClick', onPlayBtnClick)

  function onDestroy () {
    player.off('playBtnClick', onPlayBtnClick)
    player.off('destroy', onDestroy)
  }
  player.once('destroy', onDestroy)
}

Player.install('play', play)
