import Player from '../../player'

let s_displayMode = function () {
  let player = this, util = Player.util, sniffer = Player.sniffer
  // 一路视频不显示模块切换
  if (player.config.channelNum < 2) {
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
  let container = util.createDom('xg-displaymode', '', {tabindex: 3}, 'xgplayer-displaymode'), root = player.controls
  if (sniffer.device === 'mobile') {
    player.config.displayModeActive = 'click'
  }
  let tmp = ['<ul>']
  switch (player.config.channelNum) {
    case 1:
      player.currMode = 0
      tmp.push(`<li><svg xmlns="http://www.w3.org/2000/svg" width="36" height="22">
        <path name="path-0" d="${iconPath[0]}" class="curr" />
      </svg></li>`)
      break
    case 2:
      player.currMode = 3
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
  container.innerHTML = tmp.join('')
  root.appendChild(container)
  util.addClass(player.root, 'xgplayer-is-displaymode')

  let label = container.querySelector('.name')
  if (label) {
    label.addEventListener('mouseenter', (e) => {
      e.preventDefault()
      e.stopPropagation()
      util.addClass(player.root, 'xgplayer-displaymode-active')
      container.focus()
    })
  }

  container.addEventListener('mouseleave', (e) => {
    e.preventDefault()
    e.stopPropagation()
    util.removeClass(player.root, 'xgplayer-displaymode-active')
  })

  container.addEventListener('click', (e) => {
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
  window.onscroll = function () {
    modeChange()
  }

  function canplayModeFunc () {
    // console.info('播放器初始化完毕，可以执行模式切换')
  }

  function modeChange () {
    let posSize = scanlePosSizes()[`modePosSize${player.currMode + 1}`]
    for (let i = 0; i < player.config.channelNum; i++) {
      let _video = player[`video${(i === 0 ? '' : i)}`]
      _video.style.top = posSize[i]['top']
      _video.style.bottom = posSize[i]['bottom']
      _video.style.left = posSize[i]['left']
      _video.style.width = posSize[i]['width']
      _video.style.height = posSize[i]['height']
      _video.style.zIndex = posSize[i]['zIndex']
    }
  }

  function scanlePosSizes () {
    let winWidth = player.root.clientWidth
    let winHeight = player.root.clientHeight
    return {
      'modePosSize1': [{'left': '0px', 'top': '0px', 'bottom': 'initial', 'width': winWidth + 'px', 'height': winHeight + 'px', 'zIndex': 8}],
      'modePosSize2': [{'left': winWidth / 2 + 'px', 'top': '0px', 'bottom': 'initial', 'width': winWidth / 2 + 'px', 'height': winHeight + 'px', 'zIndex': 9},
        {'left': '0px', 'top': '0px', 'bottom': 'initial', 'width': winWidth / 2 + 'px', 'height': winHeight + 'px', 'zIndex': 8}],
      'modePosSize3': [{'left': winWidth * 2 / 3 + 'px', 'top': winHeight / 2 + 'px', 'bottom': 'initial', 'width': winWidth / 3 + 'px', 'height': winHeight / 2 + 'px', 'zIndex': 9},
        {'left': '0px', 'top': '0px', 'bottom': 'initial', 'width': winWidth * 2 / 3 + 'px', 'height': winHeight + 'px', 'zIndex': 8}],
      'modePosSize4': [{'left': winWidth * 2 / 3 + 'px', 'top': 'initial', 'bottom': '0px', 'width': winWidth / 3 + 'px', 'height': 'auto', 'zIndex': 9},
        {'left': '0px', 'top': '0px', 'bottom': 'initial', 'width': winWidth + 'px', 'height': winHeight + 'px', 'zIndex': 8}],
      'modePosSize5': [{'left': winWidth / 3 + 'px', 'top': '0px', 'bottom': 'initial', 'width': winWidth * 2 / 3 + 'px', 'height': winHeight + 'px', 'zIndex': 8},
        {'left': '0px', 'top': 'initial', 'bottom': winHeight / 2 + 'px', 'width': winWidth / 3 + 'px', 'height': 'auto', 'zIndex': 9},
        {'left': '0px', 'top': winHeight / 2 + 'px', 'bottom': 'initial', 'width': winWidth / 3 + 'px', 'height': 'auto', 'zIndex': 9}],
      'modePosSize6': [{'left': '0px', 'top': '0px', 'bottom': 'initial', 'width': winWidth * 2 / 3 + 'px', 'height': winHeight + 'px', 'zIndex': 8},
        {'left': winWidth * 2 / 3 + 'px', 'top': 'initial', 'bottom': winHeight / 2 + 'px', 'width': winWidth / 3 + 'px', 'height': 'auto', 'zIndex': 9},
        {'left': winWidth * 2 / 3 + 'px', 'top': winHeight / 2 + 'px', 'bottom': 'initial', 'width': winWidth / 3 + 'px', 'height': 'auto', 'zIndex': 9}],
      'modePosSize7': [{'left': '0px', 'top': '0px', 'bottom': 'initial', 'width': winWidth + 'px', 'height': winHeight * 2 / 3 + 'px', 'zIndex': 8},
        {'left': '0px', 'top': winHeight * 2 / 3 + 'px', 'bottom': 'initial', 'width': winWidth / 3 + 'px', 'height': winHeight / 3 + 'px', 'zIndex': 9},
        {'left': winWidth / 3 + 'px', 'top': winHeight * 2 / 3 + 'px', 'bottom': 'initial', 'width': winWidth / 3 + 'px', 'height': winHeight / 3 + 'px', 'zIndex': 9},
        {'left': winWidth * 2 / 3 + 'px', 'top': winHeight * 2 / 3 + 'px', 'bottom': 'initial', 'width': winWidth / 3 + 'px', 'height': winHeight / 3 + 'px', 'zIndex': 9}],
      'modePosSize8': [{'left': '0px', 'top': '0px', 'bottom': 'initial', 'width': winWidth / 2 + 'px', 'height': winHeight / 2 + 'px', 'zIndex': 8},
        {'left': '0px', 'top': winHeight / 2 + 'px', 'bottom': 'initial', 'width': winWidth / 2 + 'px', 'height': winHeight / 2 + 'px', 'zIndex': 9},
        {'left': winWidth / 2 + 'px', 'top': '0px', 'bottom': 'initial', 'width': winWidth / 2 + 'px', 'height': winHeight / 2 + 'px', 'zIndex': 9},
        {'left': winWidth / 2 + 'px', 'top': winHeight / 2 + 'px', 'bottom': 'initial', 'width': winWidth / 2 + 'px', 'height': winHeight / 2 + 'px', 'zIndex': 9}]}
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
        let tmpBottom = _src.style.bottom

        _src.style.transitionDuration = '1s'
        _dst.style.transitionDuration = '1s'

        _src.style.zIndex = _dst.style.zIndex
        _src.style.top = _dst.style.top
        _src.style.left = _dst.style.left
        _src.style.width = _dst.style.width
        _src.style.height = _dst.style.height
        _src.style.bottom = _dst.style.bottom

        _dst.style.zIndex = tmpZindex
        _dst.style.top = tmpTop
        _dst.style.left = tmpLeft
        _dst.style.width = tmpWidth
        _dst.style.height = tmpHeight
        _dst.style.bottom = tmpBottom
      })
    }
  }
  function initVideoDblclick () {
    for (let i = 0; i < player.config.channelNum; i++) {
      let videoName = `video${i === 0 ? '' : i}`
      player[videoName].addEventListener('dblclick', (e) => {
        e.preventDefault()
        e.stopPropagation()
        util.event(e)
        let _video = e._target
        if (!util.hasClass(_video, 'fullscreen')) {
          util.addClass(_video, 'fullscreen')
        } else {
          util.removeClass(_video, 'fullscreen')
        }
      }, false)
    }
  }

  initDragFunc()

  modeChange()

  initVideoDblclick()

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
