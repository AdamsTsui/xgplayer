import Player from '../../player'

let s_caption = function () {
  let player = this
  let util = Player.util
  let container = util.createDom('xg-caption', `
            <img class="xgplayer-caption-img"></img>
            `, {}, 'xgplayer-caption')
  player.once('ready', () => {
    player.root.appendChild(container)
  })
}

Player.install('s_caption', s_caption)
