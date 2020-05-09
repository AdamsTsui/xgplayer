import Player from '../player'

let displayMode = function () {
  let player = this
  let root = player.root

  function onDestroy () {
    player.off('destroy', onDestroy)
  }
  player.once('destroy', onDestroy)
}

Player.install('displayMode', displayMode)
