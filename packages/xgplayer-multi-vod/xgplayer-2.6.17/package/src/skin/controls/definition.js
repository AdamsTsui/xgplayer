import Player from '../../player'

let s_definition = function () {
  let player = this
  let root = player.root
  let util = Player.util
  let sniffer = Player.sniffer
  let paused
  let hasInit = false
  let container = util.createDom('xg-definition', '', {tabindex: 3}, 'xgplayer-definition')
  if (sniffer.device === 'mobile') {
    player.config.definitionActive = 'click'
  }

  function onCanplayResourceReady () {
    if (hasInit) {
      return false
    } else {
      hasInit = true
    }
    let list = player.definitionList
    let tmp = ['<ul>'], src = player.config.url.toString(), a = document.createElement('a')
    if (player.switchURL) {
      ['mp4'].every(item => {
        if (player[item]) {
          if (player[item].url) {
            a.href = player[item].url
          }
          src = a.href
          return false
        } else {
          return true
        }
      })
    }
    list.forEach(item => {
      a.href = item.url.toString()
      tmp.push(`<li url='${item.url.toString()}' cname='${item.name}' class='${a.href === src ? 'selected' : ''}'>${item.name}</li>`)
    })
    let cursrc = list.filter(item => {
      a.href = item.url
      return a.href === src
    })
    tmp.push(`</ul><p class='name'>${(cursrc[0] || {name: ''}).name}</p>`)
    let urlInRoot = root.querySelector('.xgplayer-definition')
    if (urlInRoot) {
      urlInRoot.innerHTML = tmp.join('')
      let cur = urlInRoot.querySelector('.name')
      if (!player.config.definitionActive || player.config.definitionActive === 'hover') {
        cur.addEventListener('mouseenter', (e) => {
          e.preventDefault()
          e.stopPropagation()
          util.addClass(player.root, 'xgplayer-definition-active')
          urlInRoot.focus()
        })
      }
    } else {
      container.innerHTML = tmp.join('')
      let cur = container.querySelector('.name')
      if (!player.config.definitionActive || player.config.definitionActive === 'hover') {
        cur.addEventListener('mouseenter', (e) => {
          e.preventDefault()
          e.stopPropagation()
          util.addClass(player.root, 'xgplayer-definition-active')
          container.focus()
        })
      }
      player.controls.appendChild(container)
    }
  }
  function onResourceReady (list) {
    player.definitionList = list
    if (list && list instanceof Array && list.length > 1) {
      util.addClass(root, 'xgplayer-is-definition')
      player.on('canplay', onCanplayResourceReady)
    }
  }
  player.on('resourceReady', onResourceReady)

  function onCanplayChangeDefinition () {
    player.currentTime = player.curTime
    if (!paused) {
      let playPromise = player.play()
      if (playPromise !== undefined && playPromise) {
        if (util.typeOf(playPromise) === 'function') {
          playPromise.catch(err => { console.error(err) })
        }
      }
    }
  };
  ['touchend', 'click'].forEach(item => {
    container.addEventListener(item, function (e) {
      e.preventDefault()
      e.stopPropagation()
      let list = player.definitionList
      let li = e.target || e.srcElement, a = document.createElement('a')
      if (li && li.tagName.toLocaleLowerCase() === 'li') {
        player.emit('beforeDefinitionChange', a.href)
        let from, to
        Array.prototype.forEach.call(li.parentNode.childNodes, item => {
          if(util.hasClass(item, 'selected')) {
            from = item.getAttribute('cname')
            util.removeClass(item, 'selected')
          }
        })
        util.addClass(li, 'selected')
        to = li.getAttribute('cname')
        li.parentNode.nextSibling.innerHTML = `${li.getAttribute('cname')}`
        a.href = li.getAttribute('url')
        if (player.switchURL) {
          let curRUL = document.createElement('a');
          ['mp4'].every(item => {
            if (player[item]) {
              if (player[item].url) {
                curRUL.href = player[item].url
              }
              return false
            } else {
              return true
            }
          })
          if (curRUL.href !== a.href && !player.ended) {
            player.switchURL(a.href)
          }
        } else {
          if (a.href !== player.currentSrc.toString()) {
            player.curTime = player.currentTime
            paused = player.paused
            if (!player.ended) {
              player.src = a.href
              player.config.url = a.href.split(',')
              player.once('canplay', onCanplayChangeDefinition)
            }
          }
        }
        player.emit('definitionChange', {from, to})
        if (sniffer.device === 'mobile') {
          util.removeClass(player.root, 'xgplayer-definition-active')
        }
      } else if (player.config.definitionActive === 'click' && li && (li.tagName.toLocaleLowerCase() === 'p' || li.tagName.toLocaleLowerCase() === 'em')) {
        if(sniffer.device === 'mobile') {
          util.toggleClass(player.root, 'xgplayer-definition-active')
        } else {
          util.addClass(player.root, 'xgplayer-definition-active')
        }
        container.focus()
      }
      player.emit('focus')
    }, false)
  })

  container.addEventListener('mouseleave', e => {
    e.preventDefault()
    e.stopPropagation()
    util.removeClass(root, 'xgplayer-definition-active')
  })

  function onBlur () {
    util.removeClass(root, 'xgplayer-definition-active')
  }
  player.on('blur', onBlur)

  function onDestroy () {
    player.off('resourceReady', onResourceReady)
    player.off('canplay', onCanplayResourceReady)
    player.off('canplay', onCanplayChangeDefinition)
    player.off('blur', onBlur)
    player.off('destroy', onDestroy)
  }
  player.once('destroy', onDestroy)
}

Player.install('s_definition', s_definition)
