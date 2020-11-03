import Player from '../../player'

let s_headtail = function () {
  let player = this
  let util = Player.util
  let container = util.createDom('xg-headtail', `
            <img class="xgplayer-headtail-head"></img>
            <img class="xgplayer-headtail-tail"></img>
            <div class="xgplayer-headtail-counter">
                <span class="xgplayer-headtail-counter-title">剩余秒数：</span>
                <span class="xgplayer-headtail-counter-time">0</span>
            </div>
            `, {}, 'xgplayer-headtail')
  player.once('ready', () => {
    player.root.appendChild(container)
  })
}

Player.install('s_headtail', s_headtail)
