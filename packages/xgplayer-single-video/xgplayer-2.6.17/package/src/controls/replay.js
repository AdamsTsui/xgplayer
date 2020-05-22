import Player from '../player'

let replay = function () {
  let player = this
  let util = Player.util
  let root = player.root

  function replayFunc () {
    util.removeClass(root, 'replay')
    player.replay()
  }
  function onReplayBtnClick () {
    util.removeClass(root, 'replay')
    player.replay()
    let headTails = player.config.headTails
    if (headTails && headTails.head) {
      // 存在片头片尾
      // console.log(JSON.stringify(headTails))
      util.removeClass(this.root, 'xgplayer-ended')
      util.addClass(root, 'xgplayer-head-active')
      let time = headTails.head.time
      let timeContainer = util.findDom(root, '.xgplayer-headtail-counter-time')
      timeContainer.innerHTML = `${time}`
      let imgContainer = util.findDom(root, '.xgplayer-headtail-head')
      imgContainer.src = headTails.head.img
      let intervalID = window.setInterval(function () {
        timeContainer.innerHTML = `${--time}`
        if (time === 0) {
          util.removeClass(root, 'xgplayer-head-active')
          window.clearInterval(intervalID)
          replayFunc()
        }
      }, 1000)
    } else {
      replayFunc()
    }
  }
  player.on('replayBtnClick', onReplayBtnClick)

  function onEnded () {
    if (!player.config.loop) {
      util.addClass(root, 'replay')
    }
  }
  player.on('ended', onEnded)

  function onDestroy () {
    player.off('replayBtnClick', onReplayBtnClick)
    player.off('destroy', onDestroy)
  }
  player.once('destroy', onDestroy)
}

Player.install('replay', replay)
