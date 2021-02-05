import Player from '../../player'

const VERSION = 'multi-vod-v1.0.3'

let s_version = function () {
  let player = this, util = Player.util, root = player.root
  let container = root.querySelector('.xgplayer-version')
  if (!container) {
    container = util.createDom('xg-version', '', {tabindex: 3}, 'xgplayer-version')
    let innerStr = []
    innerStr.push(`<svg id="verClose" xmlns="http://www.w3.org/2000/svg" width="36" height="36">`)
    innerStr.push(`<path d="M13 13 L23 23 M13 23 L23 13"/>`)
    innerStr.push(`</svg>`)
    innerStr.push(`<p>播放器版本：<span>${VERSION}</span></p>`)
    container.innerHTML = innerStr.join('')
    root.appendChild(container)
  }
  root.addEventListener('keydown', (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.keyCode === 120) {
      util.addClass(root, 'xgplayer-skin-version')
    }
  }, false)
  let verCloseDom = document.getElementById('verClose')
  if (verCloseDom) {
    verCloseDom.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()
      util.removeClass(root, 'xgplayer-skin-version')
    }, false)
  }

  function destroyFunc () {
    player.off('destroy', destroyFunc)
  }

  player.once('destroy', destroyFunc)
}

Player.install('s_version', s_version)
