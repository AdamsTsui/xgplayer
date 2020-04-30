import Player from '../../player'

let s_displayMode = function () {
  let player = this, util = Player.util, sniffer = Player.sniffer
  // 一路视频不显示模块切换
  if (player.config.channelNum < 2) {
    return false
  }
  let iconPath = ['M14 9 L46 9 L46 27 L14 27 Z',
    'M14 9 L46 9 L46 27 L14 27 Z M30 9 L30 27',
    'M14 9 L30 9 L30 27 L14 27 Z M30 18 L46 18 L46 27 L30 27',
    'M14 9 L46 9 L46 27 L14 27 Z M46 18 L30 18 L30 27',
    'M14 9 L46 9 L46 27 L14 27 Z M30 9 L30 27 M14 18 L30 18',
    'M14 9 L46 9 L46 27 L14 27 Z M30 9 L30 27 M30 18 L46 18',
    'M14 9 L46 9 L46 27 L14 27 Z M14 18 L46 18 M24.66 18 L24.66 27 M35.32 18 L35.32 27',
    'M14 9 L46 9 L46 27 L14 27 Z M14 18 L46 18 M30 9 L30 27']
  let ul = util.createDom('xg-displaymode', '', {tabindex: 3}, 'xgplayer-displaymode'), root = player.controls
  if (sniffer.device === 'mobile') {
    player.config.displayModeActive = 'click'
  }
  let tmp = ['<ul>']
  switch (player.config.channelNum) {
    case 1:
      player.currMode = 0
      tmp.push(`<li><svg xmlns="http://www.w3.org/2000/svg" width="60" height="36">
        <path name="path-0" d="${iconPath[0]}" class="curr" />
      </svg></li>`)
      break
    case 2:
      player.currMode = 1
      tmp.push(`<li><svg xmlns="http://www.w3.org/2000/svg" width="60" height="36">
        <path name="path-1" d="${iconPath[1]}" class="curr" />
      </svg></li>`)
      tmp.push(`<li><svg xmlns="http://www.w3.org/2000/svg" width="60" height="36">
        <path name="path-2" d="${iconPath[2]}" />
      </svg></li>`)
      tmp.push(`<li><svg xmlns="http://www.w3.org/2000/svg" width="60" height="36">
        <path name="path-3" d="${iconPath[3]}" />
      </svg></li>`)
      break
    case 3:
      player.currMode = 4
      tmp.push(`<li><svg xmlns="http://www.w3.org/2000/svg" width="60" height="36">
        <path name="path-4" d="${iconPath[4]}" class="curr" />
      </svg></li>`)
      tmp.push(`<li><svg xmlns="http://www.w3.org/2000/svg" width="60" height="36">
        <path name="path-5" d="${iconPath[5]}" />
      </svg></li>`)
      break
    case 4:
      player.currMode = 6
      tmp.push(`<li><svg xmlns="http://www.w3.org/2000/svg" width="60" height="36">
        <path name="path-6" d="${iconPath[6]}" class="curr" />
      </svg></li>`)
      tmp.push(`<li><svg xmlns="http://www.w3.org/2000/svg" width="60" height="36">
        <path name="path-7" d="${iconPath[7]}" />
      </svg></li>`)
      break
  }
  tmp.push(`</ul>`)
  tmp.push(`<p class='name'>布局</p>`)
  ul.innerHTML = tmp.join('')
  root.appendChild(ul)
  util.addClass(player.root, 'xgplayer-is-displaymode')

  initDragFunc()

  modeChange()

  let urlInRoot = root.querySelector('.xgplayer-displaymode')
  if (urlInRoot) {
    let cur = urlInRoot.querySelector('.name')
    if (!player.config.displayModeActive || player.config.displayModeActive === 'hover') {
      cur.addEventListener('mouseenter', (e) => {
        e.preventDefault()
        e.stopPropagation()
        util.addClass(player.root, 'xgplayer-displaymode-active')
        urlInRoot.focus()
      })
    }
  }

  ul.addEventListener('mouseleave', (e) => {
    e.preventDefault()
    e.stopPropagation()
    util.removeClass(player.root, 'xgplayer-displaymode-active')
  })

  ul.addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()
    let path = e.target || e.srcElement
    if (path && path.tagName.toLocaleLowerCase() === 'path') {
      let mode = path.getAttribute('name').substring(5)
      if (mode === player.currMode) {
        return false
      }
      player.currMode = parseInt(path.getAttribute('name').substring(5))
      Array.prototype.forEach.call(path.parentNode.parentNode.parentNode.childNodes, item => {
        util.removeClass(item.querySelector('path'), 'curr')
      })
      util.addClass(path, 'curr')
      modeChange()
    }
  })

  function canplayModeFunc () {
    // console.info('播放器初始化完毕，可以执行模式切换')
  }

  function modeChange () {
    let posSize = scanlePosSizes()[`modePosSize${player.currMode + 1}`]
    for (let i = 0; i < player.config.channelNum; i++) {
      let _video = player[`video${(i === 0 ? '' : i)}`]
      _video.style.top = `${posSize[i]['top']}px`
      _video.style.left = `${posSize[i]['left']}px`
      _video.style.width = `${posSize[i]['width']}px`
      _video.style.height = `${posSize[i]['height']}px`
      _video.style.zIndex = `${posSize[i]['zIndex']}`
    }
  }

  function scanlePosSizes () {
    let winWidth = player.root.clientWidth
    let winHeight = player.root.clientHeight
    return {
      'modePosSize1': [{'left': 0, 'top': 0, 'width': winWidth, 'height': winHeight, 'zIndex': 8}],
      'modePosSize2': [{'left': 0, 'top': 0, 'width': winWidth / 2, 'height': winHeight, 'zIndex': 8}, {'left': winWidth / 2, 'top': 0, 'width': winWidth / 2, 'height': winHeight, 'zIndex': 9}],
      'modePosSize3': [{'left': 0, 'top': 0, 'width': winWidth * 2 / 3, 'height': winHeight, 'zIndex': 8}, {'left': winWidth * 2 / 3, 'top': winHeight / 2, 'width': winWidth / 3, 'height': winHeight / 2, 'zIndex': 9}],
      'modePosSize4': [{'left': 0, 'top': 0, 'width': winWidth, 'height': winHeight, 'zIndex': 8}, {'left': winWidth * 2 / 3, 'top': winHeight / 2, 'width': winWidth / 3, 'height': winHeight / 2, 'zIndex': 9}],
      'modePosSize5': [{'left': winWidth / 3, 'top': 0, 'width': winWidth * 2 / 3, 'height': winHeight, 'zIndex': 8}, {'left': 0, 'top': 0, 'width': winWidth / 3, 'height': winHeight / 2, 'zIndex': 9}, {'left': 0, 'top': winHeight / 2, 'width': winWidth / 3, 'height': winHeight / 2, 'zIndex': 9}],
      'modePosSize6': [{'left': 0, 'top': 0, 'width': winWidth * 2 / 3, 'height': winHeight, 'zIndex': 8}, {'left': winWidth * 2 / 3, 'top': 0, 'width': winWidth / 3, 'height': winHeight / 2, 'zIndex': 9}, {'left': winWidth * 2 / 3, 'top': winHeight / 2, 'width': winWidth / 3, 'height': winHeight / 2, 'zIndex': 9}],
      'modePosSize7': [{'left': 0, 'top': 0, 'width': winWidth, 'height': winHeight * 2 / 3, 'zIndex': 8}, {'left': 0, 'top': winHeight * 2 / 3, 'width': winWidth / 3, 'height': winHeight / 3, 'zIndex': 9}, {'left': winWidth / 3, 'top': winHeight * 2 / 3, 'width': winWidth / 3, 'height': winHeight / 3, 'zIndex': 9}, {'left': winWidth * 2 / 3, 'top': winHeight * 2 / 3, 'width': winWidth / 3, 'height': winHeight / 3, 'zIndex': 9}],
      'modePosSize8': [{'left': 0, 'top': 0, 'width': winWidth / 2, 'height': winHeight / 2, 'zIndex': 8}, {'left': 0, 'top': winHeight / 2, 'width': winWidth / 2, 'height': winHeight / 2, 'zIndex': 9}, {'left': winWidth / 2, 'top': 0, 'width': winWidth / 2, 'height': winHeight / 2, 'zIndex': 9}, {'left': winWidth / 2, 'top': winHeight / 2, 'width': winWidth / 2, 'height': winHeight / 2, 'zIndex': 9}]}
  }

  function initDragFunc () {
    let draggbleVideoId
    for (let i = 0; i < player.config.channelNum; i++) {
      player[`video${i === 0 ? '' : i}`].addEventListener('dragover', (e) => {
        e.preventDefault()
      })

      player[`video${i === 0 ? '' : i}`].addEventListener('dragstart', (e) => {
        draggbleVideoId = e.target.id
      })

      player[`video${i === 0 ? '' : i}`].addEventListener('drop', (e) => {
        let _src = player[draggbleVideoId]
        let _dst = e.currentTarget || e.target
        let tmpZindex = _src.style.zIndex
        let tmpTop = _src.style.top
        let tmpLeft = _src.style.left
        let tmpWidth = _src.style.width
        let tmpHeight = _src.style.height

        _src.style.transitionDuration = '1s'
        _dst.style.transitionDuration = '1s'

        _src.style.zIndex = _dst.style.zIndex
        _src.style.top = _dst.style.top
        _src.style.left = _dst.style.left
        _src.style.width = _dst.style.width
        _src.style.height = _dst.style.height

        _dst.style.zIndex = tmpZindex
        _dst.style.top = tmpTop
        _dst.style.left = tmpLeft
        _dst.style.width = tmpWidth
        _dst.style.height = tmpHeight
      })
    }
  }

  ['touchend', 'click'].forEach(item => {
    ul.addEventListener(item, function (e) {
      e.preventDefault()
      e.stopPropagation()
    }, false)
  })

  ul.addEventListener('mouseleave', (e) => {
    e.preventDefault()
    e.stopPropagation()
    util.removeClass(player.root, 'xgplayer-definition-active')
  })

  function destroyFunc () {
    player.off('canplay', canplayModeFunc)
    player.off('destroy', destroyFunc)
    player.off('requestFullscreen', modeChange)
    player.off('exitFullscreen', modeChange)
    window.removeEventListener('resize', modeChange, false)
  }

  player.on('canplay', canplayModeFunc)
  player.on('requestFullscreen', modeChange)
  player.on('exitFullscreen', modeChange)
  window.addEventListener('resize', modeChange, false)
  player.once('destroy', destroyFunc)
}

Player.install('s_displayMode', s_displayMode)
