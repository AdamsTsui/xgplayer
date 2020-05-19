import Player from '../../player'

let s_displayMode = function () {
  let player = this, util = Player.util, sniffer = Player.sniffer, root = player.controls

  function canplayModeFunc () {
    // console.info('播放器初始化完毕，可以初始化布局')
    player.volume = player.volume
    for (let i = 0; i < 4; i++) {
      let _video = player[`video${(i === 0 ? '' : i)}`]
      if (i < player.channelNum) {
        _video.style.display = 'block'
      } else {
        _video.style.display = 'none'
      }
    }
    // 一路视频不显示模块切换
    if (player.channelNum < 2) {
      util.removeClass(player.root, 'xgplayer-is-displaymode')
      return false
    }
    let iconPath = ['M2 2 L34 2 L34 20 L2 20 Z',
      'M2 2 L34 2 L34 20 L2 20 Z M18 2 L18 20',
      'M2 2 L18 2 L18 20 L2 20 Z M18 11 L34 11 L34 20 L18 20',
      'M2 2 L34 2 L34 20 L2 20 Z M34 11 L18 11 L18 20',
      'M2 2 L34 2 L34 20 L2 20 Z M18 2 L18 20 M2 11 L18 11',
      'M2 2 L34 2 L34 20 L2 20 Z M18 2 L18 20 M18 11 L34 11',
      'M2 2 L34 2 L34 20 L2 20 Z M2 11 L34 11 M12.67 11 L12.67 20 M23.34 11 L23.34 20 M34 11 L34 20',
      'M2 2 L34 2 L34 20 L2 20 Z M18 2 L18 20 M2 11 L34 11']
    let ul = root.querySelector('.xgplayer-displaymode')
    if (!ul) {
      ul = util.createDom('xg-displaymode', '', {tabindex: 3}, 'xgplayer-displaymode')
    }
    if (sniffer.device === 'mobile') {
      player.config.displayModeActive = 'click'
    }
    let tmp = ['<ul>']
    switch (player.channelNum) {
      case 1:
        player.currMode = 0
        tmp.push(`<li><svg xmlns="http://www.w3.org/2000/svg" width="36" height="22">
        <path name="path-0" d="${iconPath[0]}" class="curr" />
      </svg></li>`)
        break
      case 2:
        player.currMode = 1
        tmp.push(`<li><svg xmlns="http://www.w3.org/2000/svg" width="36" height="22">
        <path name="path-1" d="${iconPath[1]}" class="curr" />
      </svg></li>`)
        tmp.push(`<li><svg xmlns="http://www.w3.org/2000/svg" width="36" height="22">
        <path name="path-2" d="${iconPath[2]}" />
      </svg></li>`)
        tmp.push(`<li><svg xmlns="http://www.w3.org/2000/svg" width="36" height="22">
        <path name="path-3" d="${iconPath[3]}" />
      </svg></li>`)
        break
      case 3:
        player.currMode = 4
        tmp.push(`<li><svg xmlns="http://www.w3.org/2000/svg" width="36" height="22">
        <path name="path-4" d="${iconPath[4]}" class="curr" />
      </svg></li>`)
        tmp.push(`<li><svg xmlns="http://www.w3.org/2000/svg" width="36" height="22">
        <path name="path-5" d="${iconPath[5]}" />
      </svg></li>`)
        break
      case 4:
        player.currMode = 6
        tmp.push(`<li><svg xmlns="http://www.w3.org/2000/svg" width="36" height="22">
        <path name="path-6" d="${iconPath[6]}" class="curr" />
      </svg></li>`)
        tmp.push(`<li><svg xmlns="http://www.w3.org/2000/svg" width="36" height="22">
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
      player.emit('focus')
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
  }

  function modeChange () {
    let posSize = scanlePosSizes()[`modePosSize${player.currMode + 1}`]
    for (let i = 0; i < player.channelNum; i++) {
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

  let draggbleVideoId
  function onDragover (e) {
    e.preventDefault()
  }
  function onDragstart (e) {
    draggbleVideoId = e.target.id
  }
  function onDrop (e) {
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
  }
  function initDragFunc () {
    for (let i = 0; i < player.channelNum; i++) {
      let _video = player[`video${i === 0 ? '' : i}`]
      _video.removeEventListener('dragover', onDragover)
      _video.removeEventListener('dragstart', onDragstart)
      _video.removeEventListener('drop', onDrop)
      _video.addEventListener('dragover', onDragover)
      _video.addEventListener('dragstart', onDragstart)
      _video.addEventListener('drop', onDrop)
    }
  }

  function onBlur () {
    util.removeClass(root, 'xgplayer-definition-active')
  }
  function destroyFunc () {
    player.off('canplay', canplayModeFunc)
    player.off('displayModeChange', canplayModeFunc)
    player.off('requestFullscreen', modeChange)
    player.off('exitFullscreen', modeChange)
    player.off('blur', onBlur)
    window.removeEventListener('resize', modeChange, false)
    player.off('destroy', destroyFunc)
  }

  player.on('blur', onBlur)
  player.once('canplay', canplayModeFunc)
  player.on('displayModeChange', canplayModeFunc)
  player.on('requestFullscreen', modeChange)
  player.on('exitFullscreen', modeChange)
  window.addEventListener('resize', modeChange, false)
  player.once('destroy', destroyFunc)
}

Player.install('s_displayMode', s_displayMode)
