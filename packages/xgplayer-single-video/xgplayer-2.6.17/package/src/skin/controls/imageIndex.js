import Player from '../../player'

let s_imageIndex = function () {
  let player = this, util = Player.util, sniffer = Player.sniffer, root = player.controls
  let isMoving = false
  let locking = false
  let timeoutID

  if (sniffer.device === 'mobile' || !player.config.imageIndex || player.config.imageIndex.length < 1) {
    return false
  }
  let container = root.querySelector('.xgplayer-imageindex')
  if (!container) {
    container = util.createDom('xg-imageindex', '', {tabindex: 3}, 'xgplayer-imageindex')
  }
  let imageIndexs = player.config.imageIndex
  let tmp = ['<ul>']

  for (let i = 0; i < imageIndexs.length; i++) {
    let ind = imageIndexs[i]
    tmp.push(`<li><div name="time-${ind.time}" style="background-image: url('${ind.img}');"></div></li>`)
  }
  tmp.push(`</ul>`)
  container.innerHTML = tmp.join('')
  root.appendChild(container)

  let divList = container.querySelectorAll('div')
  // console.log('liList::::::::' + divList.length)
  Array.prototype.forEach.call(divList, _div => {
    _div.addEventListener('click', function (e) {
      if(isMoving) {
        isMoving = false
        return false
      }
      let tar = e.target || e.srcElement
      let time = parseInt(tar.getAttribute('name').substring(5))

      Array.prototype.forEach.call(tar.parentNode.parentNode.childNodes, li => {
        util.removeClass(li, 'selected')
      })
      util.addClass(tar.parentNode, 'selected')

      // console.info('time to seek:::::::::::::' + time)
      player.currentTime = time
    })
  })

  document.body.ondrop = function(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  let startX
  let startScroll
  let ul = container.querySelector('ul')
  ul.addEventListener('mousedown', start)

  function start(e) {
    if (e.button === 0) {
      if(timeoutID) {
        window.clearTimeout(timeoutID)
      }
      locking = true
      startX = e.clientX
      startScroll = ul.scrollLeft
      // console.info('startX:::' + startX + '::::startScroll:::' + startScroll)
      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', stop)
    }
  }

  function move(e) {
    let changeX = e.clientX - startX
    if (Math.abs(changeX) > 5) {
      // console.info(':::::::move:::')
      isMoving = true
      ul.scrollLeft = startScroll - changeX
    }
    return false
  }

  function stop(e) {
    // console.info(':::::::stop:::')
    document.removeEventListener('mousemove', move)
    document.removeEventListener("mouseup", stop)
    timeoutID = window.setTimeout(function () {
      locking = false
    }, 5000)
  }

  function onTimeupdate() {
    for (let i = divList.length - 1; i >= 0; i--) {
      let _div = divList[i]
      let time = parseInt(_div.getAttribute('name').substring(5))
      if ( player.currentTime >= time) {
        if (!util.hasClass(_div.parentNode, 'selected')) {
          // console.log('111111111111111111')
          Array.prototype.forEach.call(_div.parentNode.parentNode.childNodes, li => {
            util.removeClass(li, 'selected')
          })
          util.addClass(_div.parentNode, 'selected')
        }
        if (!locking) {
          ul.scrollTo(_div.parentNode.offsetLeft, 0)
        }
        break
      }
    }
  }

  function destroyFunc () {
    player.off('destroy', destroyFunc)
    player.off('timeupdate', onTimeupdate)
  }

  player.on('timeupdate', onTimeupdate)
  player.once('destroy', destroyFunc)
}

Player.install('s_imageIndex', s_imageIndex)
