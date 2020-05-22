import Player from '../player'

let start = function () {
  let player = this
  let root = player.root
  let util = Player.util

  function onCanplay () {
    util.removeClass(root, 'xgplayer-is-enter')
  }

  function onPlaying () {
    util.removeClass(root, 'xgplayer-is-enter')
  }

  function onStartBtnClick () {
    function firstPlay () {
      util.removeClass(root, 'xgplayer-nostart') // for ie quick switch
      util.addClass(root, 'xgplayer-is-enter')
      player.on('canplay', onCanplay)
      player.once('playing', onPlaying)
      if (!root.querySelector('video')) {
        player.start()
      }
      let playPromise = player.play()
      if (playPromise !== undefined && playPromise) {
        if (typeof playPromise.catch === 'function') {
          playPromise.catch(err => {
            console.error(err)
          })
        }
      }
    }
    if (util.hasClass(root, 'xgplayer-nostart')) {
      // console.info('第一次开始播放。。。')
      let headTails = player.config.headTails
      if (headTails && headTails.head) {
        // 存在片头片尾
        // console.log(JSON.stringify(headTails))
        util.addClass(root, 'xgplayer-head-active')
        let time = headTails.head.time
        let timeContainer = util.findDom(root, '.xgplayer-headtail-counter-time')
        timeContainer.innerHTML = `${time}`
        let imgContainer = util.findDom(root, '.xgplayer-headtail-head')
        imgContainer.src = headTails.head.img
        let intervalID = window.setInterval(function () {
          timeContainer.innerHTML = `${--time}`
          if (time === 0) {
            firstPlay()
            util.removeClass(root, 'xgplayer-head-active')
            window.clearInterval(intervalID)
          }
        }, 1000)
      } else {
        firstPlay()
      }
    } else {
      if (player.paused) {
        // console.info('暂停播放后，再继续播放。。。')
        util.removeClass(root, 'xgplayer-nostart xgplayer-isloading')
        setTimeout(() => {
          let playPromise = player.play()
          if (playPromise !== undefined && playPromise) {
            if (typeof playPromise.catch === 'function') {
              playPromise.catch(err => {
                console.error(err)
              })
            }
          }
        }, 10)
      }
    }
  }
  player.on('startBtnClick', onStartBtnClick)

  function onDestroy () {
    player.off('canplay', onCanplay)
    player.off('playing', onPlaying)
    player.off('startBtnClick', onStartBtnClick)
    player.off('destroy', onDestroy)
  }
  player.once('destroy', onDestroy)
}

Player.install('start', start)
