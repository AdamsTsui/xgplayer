import Player from '../../player'

let s_displayMode = function () {
  let player = this
  let _video, _video1, _video2
  function modeChangeFunc () {
    let winWidth = player.root.clientWidth
    let winHeight = player.root.clientHeight
    switch (player.channelNum) {
      case 1:
        _video = player[`video`]
        _video.style.top = '30px'
        _video.style.left = '20px'
        _video.style.width = (winWidth - 60) + 'px'
        _video.style.height = (winHeight - 105) + 'px'
        break
      case 2:
        _video = player[`video`]
        _video1 = player[`video1`]

        _video.style.top = '30px'
        _video.style.left = '20px'
        _video.style.width = ((winWidth - 60) / 2) + 'px'
        _video.style.height = (winHeight - 105) + 'px'

        _video1.style.top = '30px'
        _video1.style.left = (((winWidth - 60) / 2) + 20) + 'px'
        _video1.style.width = ((winWidth - 60) / 2) + 'px'
        _video1.style.height = (winHeight - 105) + 'px'
        break
      case 3:
        _video = player[`video`]
        _video1 = player[`video1`]
        _video2 = player[`video2`]

        _video.style.top = '30px'
        _video.style.left = '20px'
        _video.style.width = ((winWidth - 60) / 3) + 'px'
        _video.style.height = ((winHeight - 105) / 2) + 'px'

        _video1.style.top = (((winHeight - 105) / 2) + 30) + 'px'
        _video1.style.left = '20px'
        _video1.style.width = ((winWidth - 60) / 3) + 'px'
        _video1.style.height = ((winHeight - 105) / 2) + 'px'

        _video2.style.top = '30px'
        _video2.style.left = (((winWidth - 60) / 3) + 20) + 'px'
        _video2.style.width = ((winWidth - 60) * 2 / 3) + 'px'
        _video2.style.height = (winHeight - 105) + 'px'
        break
      default:
    }
  }

  function destroyFunc () {
    player.off('requestFullscreen', modeChangeFunc)
    player.off('exitFullscreen', modeChangeFunc)
    player.off('playStarted', modeChangeFunc)
    player.off('destroy', destroyFunc)
  }

  player.on('requestFullscreen', modeChangeFunc)
  player.on('exitFullscreen', modeChangeFunc)
  player.on('playStarted', modeChangeFunc)
  player.once('destroy', destroyFunc)
}

Player.install('s_displayMode', s_displayMode)
