import Player from '../../player'

let s_error = function () {
  let player = this
  let root = player.root
  let util = Player.util
  // let winInteval = undefined
  // let retryCounter = 0;

  let error = util.createDom('xg-error', '<span class="xgplayer-error-text">请<span class="xgplayer-error-refresh">刷新</span>试试</span>', {}, 'xgplayer-error')
  player.once('ready', () => {
    root.appendChild(error)
  });

  let text = error.querySelector('.xgplayer-error-text')
  let refresh = null

  function onError () {
    return false
    // player.controls.style.display = 'none'
    // if (player.error) {
    //   text.innerHTML = player.error
    // } else {
    if (player.config.lang && player.config.lang === 'zh-cn') {
      text.innerHTML = player.config.errorTips || `请<span class="xgplayer-error-refresh">刷新</span>试试`
    } else {
      text.innerHTML = player.config.errorTips || `please try to <span class="xgplayer-error-refresh">refresh</span>`
    }
    // }
    // util.addClass(player.root, 'xgplayer-is-error')
    // util.addClass(player.root, 'xgplayer-is-enter')
    refresh = error.querySelector('.xgplayer-error-refresh')
    if (refresh) {
      ['touchend', 'click'].forEach(item => {
        refresh.addEventListener(item, function (e) {
          e.preventDefault()
          e.stopPropagation()
          // replayVideo()
        })
      })
    }
    /*
    if(!winInteval) {
      winInteval = window.setInterval(replayVideo, 1000 * 60)
    }
    */
  }
/*
  function replayVideo() {
    if (retryCounter >= 5) {
      if (winInteval) {
        window.clearInterval(winInteval)
      }
      return
    }
    player.autoplay = true
    player.once('playing', () => {
      if(winInteval) {
        window.clearInterval(winInteval)
        winInteval = undefined
      }
      // util.removeClass(player.root, 'xgplayer-is-error')
      util.removeClass(player.root, 'xgplayer-is-enter')
    })
    player.src = player.config.url
    retryCounter++;
  }
  */
  player.on('error', onError)
  function onDestroy () {
    player.off('error', onError)
    player.off('destroy', onDestroy)
  }
  player.once('destroy', onDestroy)
}

Player.install('s_error', s_error)
