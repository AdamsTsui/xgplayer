window.Music=function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Analyze=e.Lyric=void 0;var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=s(r(1)),o=s(r(9)),a=s(r(10));function s(t){return t&&t.__esModule?t:{default:t}}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var c=void 0,u=15,f=i.default.util,p=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=f.deepCopy({controls:!0,mediaType:"audio",ignores:["fullscreen","start","definition","makeBullet","textTrack","loading","pc","mobile","playbackRate","replay","volume","error","poster"]},t),n=l(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,r));return n.rawConfig=t,n.list="Array"===f.typeOf(r.url)?r.url:[{src:r.url,name:r.name}],n.history=[],n.index=0,f.addClass(n.root,"xgplayer-music"),r.controls?(f.addClass(n.root,"xgplayer-music-default"),r.theme&&"default"!==r.theme||(r.width||(n.config.width="100%",n.root.style.width="100%"),r.height||(n.config.height="50px",n.root.style.height="50px")),Object.defineProperty(n,"src",{get:function(){return this.video.currentSrc},set:function(t){var e="String"===f.typeOf(t)?{src:t,name:""}:t;this.history.push(e),this.video.src=e.src},configurable:!0}),n.once("canplay",function(){r.autoplay?n.volume=0:n.volume=r.volume}),n.on("ended",function(){n.ended&&(n.currentTime=0)}),n.start(),n):(n.root.style.display="none",l(n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,i.default),n(e,[{key:"lyric",value:function(t,e){return this.__lyric__&&this.__lyric__.unbind(this),"Array"!==i.default.util.typeOf(t)&&(t=[].concat(t)),this.__lyric__=new o.default(t,e),this.__lyric__.bind(this),this.__lyric__}},{key:"add",value:function(t){this.list.push({src:t.src,name:t.name})}},{key:"remove",value:function(t){var e=-1;this.list.every(function(r,n){return r.src!==t&&r.name!==t||(e=n,!1)}),e>-1&&this.list.splice(e,1)}},{key:"random",value:function(){var t=this.list.length;return this.index=Math.ceil(Math.random()*t),this.list[this.index]}},{key:"next",value:function(){switch(this.mode){case"order":case"loop":this.index+1<this.list.length&&(this.index++,this.emit("change",this.list[this.index]),this.src=this.list[this.index].src);break;default:var t=this.random();t&&(this.emit("change",t),this.src=t.src)}}},{key:"prev",value:function(){switch(this.mode){case"order":case"loop":this.index-1>-1&&this.list.length>0&&(this.index--,this.emit("change",this.list[this.index]),this.src=this.list[this.index].src);break;default:var t=this.random();t&&(this.emit("change",t),this.src=t.src)}}},{key:"forward",value:function(){console.log("music go forward "+u+"s"),this.currentTime=this.currentTime+u<this.duration?this.currentTime+u:this.duration-.1}},{key:"backward",value:function(){console.log("music go backward "+u+"s"),this.currentTime=this.currentTime-u>0?this.currentTime-u:0}},{key:"analyze",value:function(t){return new a.default(this,t)}},{key:"mode",get:function(){return c||e.ModeType[0]},set:function(t){switch(t){case 0:case 1:case 2:c=e.ModeType[t]}}},{key:"timeScale",get:function(){return u||15},set:function(t){u=t}}],[{key:"AudioCtx",get:function(){return window.AudioContext||window.webkitAudioContext}},{key:"ModeType",get:function(){return["order","random","loop"]}}]),e}();e.default=p,e.Lyric=o.default,e.Analyze=a.default},function(t,e){t.exports=window.Player},function(t,e,r){t.exports=r(3)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r(4);var n=c(r(0)),i=c(r(12)),o=c(r(13)),a=c(r(14)),s=c(r(15)),l=c(r(16));function c(t){return t&&t.__esModule?t:{default:t}}var u={};function f(t,e,r){var n=t;e.map(function(t,i){n[t]=i==e.length-1?r:n[t]||{},n=n[t]})}f(u,["controls","backward"],c(r(17)).default),f(u,["controls","cover"],l.default),f(u,["controls","forward"],s.default),f(u,["controls","meta"],a.default),f(u,["controls","next"],o.default),f(u,["controls","prev"],i.default),e.default=n.default,t.exports=e.default},function(t,e,r){var n=r(5);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r(7)(n,i);n.locals&&(t.exports=n.locals)},function(t,e,r){(t.exports=r(6)(!1)).push([t.i,'.xgplayer-music .xgplayer-controls{display:-webkit-box;display:-ms-flexbox;display:flex;height:50px;cursor:default}.xgplayer-music .xgplayer-controls .xgplayer-backward{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;cursor:pointer}.xgplayer-music .xgplayer-controls .xgplayer-prev{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;cursor:pointer}.xgplayer-music .xgplayer-controls .xgplayer-play{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.xgplayer-music .xgplayer-controls .xgplayer-play .xgplayer-tips{display:none}.xgplayer-music .xgplayer-controls .xgplayer-next{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3;cursor:pointer}.xgplayer-music .xgplayer-controls .xgplayer-forward{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4;cursor:pointer}.xgplayer-music .xgplayer-controls .xgplayer-poster{position:static;-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5;width:40px;height:40px;text-align:center;vertical-align:middle;position:relative;top:50%;margin-top:-17px}.xgplayer-music .xgplayer-controls .xgplayer-poster img{max-width:100%;max-height:100%}.xgplayer-music .xgplayer-controls .xgplayer-progress{position:relative;-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6;top:70%;left:20px;margin-top:-11px;-webkit-box-flex:99;-ms-flex:99;flex:99}.xgplayer-music .xgplayer-controls .xgplayer-progress>*{height:3px;margin-top:8.5px}.xgplayer-music .xgplayer-controls .xgplayer-progress .xgplayer-progress-played:after{top:-4px;width:10px;height:10px;content:" ";display:block}.xgplayer-music .xgplayer-controls .xgplayer-progress .xgplayer-tips{display:none!important}.xgplayer-music .xgplayer-controls .xgplayer-time{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7;margin-left:30px;line-height:1;position:relative;top:55%}.xgplayer-music .xgplayer-controls .xgplayer-placeholder{-webkit-box-ordinal-group:1000;-ms-flex-order:999;order:999;width:0}.xgplayer-music .xgplayer-controls .xgplayer-icon{padding-top:5px}.xgplayer-music .xgplayer-controls .xgplayer-name{position:absolute;left:255px;bottom:50%;font-size:12px;color:#ddd}.xgplayer-music.xgplayer-ended .xgplayer-controls{display:-webkit-box;display:-ms-flexbox;display:flex}.xgplayer-lyric-item{display:block;line-height:22px;font-size:14px;color:#000}.xgplayer-lyric-item.xgplayer-lyric-item-active{color:#7fffd4}.xgplayer-lrcWrap{overflow:auto;height:300px;border:1px solid #ddd;padding:20px}.xgplayer-lrcForward{top:20%;border-width:0 10px 10px;border-color:transparent transparent #333}.xgplayer-lrcBack,.xgplayer-lrcForward{position:absolute;left:300px;cursor:pointer;width:0;height:0;border-style:solid}.xgplayer-lrcBack{top:80%;border-width:10px 10px 0;border-color:#333 transparent transparent}',""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var i=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(n),o=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[r].concat(o).concat([i]).join("\n")}return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(t,e,r){var n={},i=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),o=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),a=null,s=0,l=[],c=r(8);function u(t,e){for(var r=0;r<t.length;r++){var i=t[r],o=n[i.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(g(i.parts[a],e))}else{var s=[];for(a=0;a<i.parts.length;a++)s.push(g(i.parts[a],e));n[i.id]={id:i.id,refs:1,parts:s}}}}function f(t,e){for(var r=[],n={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}function p(t,e){var r=o(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=l[l.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),l.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(t.insertInto+" "+t.insertAt.before);r.insertBefore(e,i)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function h(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),y(e,t.attrs),p(t,e),e}function y(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function g(t,e){var r,n,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var l=s++;r=a||(a=h(e)),n=m.bind(null,r,l,!1),i=m.bind(null,r,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),p(t,e),e}(e),n=function(t,e,r){var n=r.css,i=r.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(n=c(n));i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([n],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,r,e),i=function(){d(r),r.href&&URL.revokeObjectURL(r.href)}):(r=h(e),n=function(t,e){var r=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,r),i=function(){d(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=f(t,e);return u(r,e),function(t){for(var i=[],o=0;o<r.length;o++){var a=r[o];(s=n[a.id]).refs--,i.push(s)}t&&u(f(t,e),e);for(o=0;o<i.length;o++){var s;if(0===(s=i[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete n[s.id]}}}};var _=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}();function m(t,e,r,n){var i=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=_(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LyricTime=void 0;var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=function(t){return t&&t.__esModule?t:{default:t}}(r(1));function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function t(e){o(this,t),this.regRule=/(\d{2}(?=:)):(\d{2}(?=\.))\.(\d{2,3})/g,this.regRule.test(e)?this.time=60*RegExp.$1+1*RegExp.$2+1*("0."+RegExp.$3):this.time=-1};e.LyricTime=a;var s=function(){function t(e,r){var n=this;o(this,t),this.rawTxts=e,this.txts=e.map(function(t){return t.replace(/^[\r\n]|[\r\n]$/g,"").match(/(\[.*\])[^[]+/g)}),this.isDynamics=e.map(function(t,e){return[].concat(t.match(/\[\d{2}:\d{2}\.\d{2,3}\]/g)).length===n.txts[e].length&&n.txts[e].length===n.txts[0].length&&n.txts[e].length>1}),this.isDynamic=this.isDynamics.some(function(t){return t}),this.__ainimateInterval__=0,this.__offset__=0,this.__offsetScale__=.5,this.dom=r,this.lists=[],this.isDynamics.map(function(t,e){t&&n.lists.push(n.txts[e].map(function(t,r){var n=/(\[[\d:\S]+\])([^[]+)/g.test(t),i=RegExp.$1,o=RegExp.$2;return{time:n?new a(i).time:-1,lyric:o,idx:e}}))}),this.list=this.lists.reduce(function(t,e){return t.map(function(t,r){return{time:t.time,lyric:"\n"===t.lyric?""+t.lyric+e[r].lyric:t.lyric+"<br/>"+e[r].lyric,idx:r}})}),this.line=0}return n(t,[{key:"adjust",value:function(){for(var t,e,r=this.list,n=0,i=r.length;n<i;n++){for(t=n+1;t<i&&!(r[t].time>r[n].time);t++);if(t<i){var o=(r[t].time-r[n].time)/(t-n);for(e=n+1;e<t;e++)r[e].time=r[e-1].time+o}}}},{key:"find",value:function(t){var e=this.list,r=this.__ainimateInterval__,n=this.__offset__;return t=t+n>0?t+n:0,e.filter(function(n,i){var o=n.time,a=i+1;return t>=o&&e[a]&&1*t+1*r<=e[a].time})}},{key:"bind",value:function(t){var e=this;return this.__player__=t,!!this.isDynamic&&(this.__handle__=function(){var r=e.find(t.currentTime)[0];r&&r.idx!==e.line&&(e.line=r.idx,t.emit("lyricUpdate",r))}.bind(this,t),t.on("timeupdate",this.__handle__),!0)}},{key:"unbind",value:function(t){delete this.__player__,this.__handle__&&(t.off("lyricUpdate",this.__handle__),delete this.__handle__)}},{key:"show",value:function(){var t=this,e=this.dom,r=[],n=this,o=["click","touchstart"];if(e&&1===e.nodeType){var a=i.default.util.createDom("div","<div></div>",{},"xgplayer-lrcWrap");e.appendChild(a),this.list.forEach(function(t){r.push('<xg-lyric-item class="xgplayer-lyric-item" data-idx="'+t.idx+'">'+t.lyric.replace(/[\r\n]/g,"")+"</xg-lyric-item>")}),a.innerHTML=r.join("");var s=i.default.util.createDom("xg-lrcForward","<div></div>",{},"xgplayer-lrcForward");e.appendChild(s),o.forEach(function(t){s.addEventListener(t,function(t){t.preventDefault(),t.stopPropagation(),n.offset-=n.offsetScale,console.log("lyric go forward "+n.offsetScale+"s")},!1)});var l=i.default.util.createDom("xg-lrcBack","<div></div>",{},"xgplayer-lrcBack");e.appendChild(l),o.forEach(function(t){l.addEventListener(t,function(t){t.preventDefault(),t.stopPropagation(),n.offset+=n.offsetScale,console.log("lyric go back "+n.offsetScale+"s")},!1)}),this.__updateHandle__=function(e){var r=t.dom.querySelector(".xgplayer-lrcWrap"),n=r.querySelector(".xgplayer-lyric-item-active"),i=r.offsetHeight,o=void 0;n&&(n.className="xgplayer-lyric-item"),(n=r.querySelector('.xgplayer-lyric-item[data-idx="'+e.idx+'"]'))&&(n.className="xgplayer-lyric-item xgplayer-lyric-item-active",(o=n.getBoundingClientRect().top-r.getBoundingClientRect().top+r.scrollTop-i/2)&&(r.scrollTop=o))},this.__player__.on("lyricUpdate",this.__updateHandle__)}else this.__player__.emit("error","lyric container can not be empty")}},{key:"hide",value:function(){this.__updateHandle__.off("lyricUpdate",this.__updateHandle__)}},{key:"interval",set:function(t){this.__ainimateInterval__=t},get:function(){return this.__ainimateInterval__}},{key:"offset",set:function(t){this.__offset__=t},get:function(){return this.__offset__}},{key:"offsetScale",set:function(t){this.__offsetScale__=t},get:function(){return this.__offsetScale__}}]),t}();e.default=s},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=r(11);var o=function(){function t(e,r){var n=this;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=r,this.player=e,t.AudioCtx){var o=new t.AudioCtx,a=o.createAnalyser(),s=o.createGain();a.minDecibels=-90,a.maxDecibels=-10,a.smoothingTimeConstant=.85,s.gain.setValueAtTime(e.volume,e.currentTime),this.er=o.createMediaElementSource(e.video),this.analyser=a,this.ctx=r.getContext("2d"),this.er.connect(a),a.connect(s),s.connect(o.destination),this.style={bgColor:"#c8c8c8",color:"#643232"},this.__type__="bars",this.__size__=256,this.__status__={switch:"on"},["play","playing","seeked"].forEach(function(t){e.on(t,function(){n["__"+n.__type__+"__"]()})}),["seeking","waiting","pause","ended"].forEach(function(t){(0,i.cancelAnimationFrame)(n.__status__[n.__type__])}),e.on("volumechange",function(){s.gain.setValueAtTime(e.volume,e.currentTime)}),e.on("destroy",function(){o.close()})}}return n(t,[{key:"__wave__",value:function(){var t=this;if((0,i.cancelAnimationFrame)(this.__status__.wave),(0,i.cancelAnimationFrame)(this.__status__.bars),"off"!==this.__status__.switch){var e=this.analyser,r=this.canvas,n=this.ctx,o=e.frequencyBinCount,a=new Uint8Array(o),s=r.width,l=r.height,c=new i.Color(this.style.color).toRGB(),u=new i.Color(this.style.color).toRGB();e.fftSize=this.__size__;!function f(){t.__status__.wave=(0,i.requestAnimationFrame)(f),e.getByteTimeDomainData(a),n.clearRect(0,0,s,l),n.fillStyle=u,n.lineWidth=2,n.strokeStyle=c,n.beginPath();for(var p=1*s/o,d=0,h=0;h<o;h++){var y=a[h]/128*l/2;0===h?n.moveTo(d,y):n.lineTo(d,y),d+=p}n.lineTo(r.width,r.height/2),n.stroke()}()}}},{key:"__bars__",value:function(){var t=this;if((0,i.cancelAnimationFrame)(this.__status__.wave),(0,i.cancelAnimationFrame)(this.__status__.bars),"off"!==this.__status__.switch){var e=this.analyser,r=this.canvas,n=this.ctx,o=e.frequencyBinCount,a=new Uint8Array(o),s=r.width,l=r.height,c=new i.Color(this.style.color).toArray(),u=new i.Color(this.style.color).toRGB();e.fftSize=this.__size__;!function r(){t.__status__.bars=(0,i.requestAnimationFrame)(r),e.getByteFrequencyData(a),n.clearRect(0,0,s,l),n.fillStyle=u,n.fillRect(0,0,s,l);for(var f=s/o*2.5,p=void 0,d=0,h=0;h<o;h++)p=a[h],n.fillStyle="rgb("+(p+c[0])+","+c[1]+","+c[2]+")",n.fillRect(d,l-p/2,f,p/2),d+=f+1}()}}},{key:"on",value:function(){this.__status__.switch="on",this["__"+this.__type__+"__"]()}},{key:"off",value:function(){this.__status__.switch="off",(0,i.cancelAnimationFrame)(this.__status__.wave),(0,i.cancelAnimationFrame)(this.__status__.bars)}},{key:"mode",set:function(e){t.Mode.filter(function(t){return t===e}).length&&(this.__type__=e,"on"===this.__status__.switch&&this["__"+e+"__"]())},get:function(){return this.__type__}},{key:"size",set:function(t){t<65536&&(0,i.isSqrt)(t,2)&&(this.__size__=t,this.analyser.fftSize=t,this["__"+this.__type__+"__"]())},get:function(){return this.__size__}},{key:"status",get:function(){return this.__status__.switch}}],[{key:"AudioCtx",get:function(){return window.AudioContext||window.webkitAudioContext}},{key:"Mode",get:function(){return["wave","bars"]}}]),t}();e.default=o,t.exports=e.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();for(var i,o=0,a="webkit moz ms o".split(" "),s=window.requestAnimationFrame,l=window.cancelAnimationFrame,c=0;c<a.length&&(!s||!l);c++)i=a[c],s=s||window[i+"RequestAnimationFrame"],l=l||window[i+"CancelAnimationFrame"]||window[i+"CancelRequestAnimationFrame"];s&&l||(s=function(t,e){var r=(new Date).getTime(),n=Math.max(0,16-(r-o)),i=window.setTimeout(function(){t.call(r+n)},n);return o=r+n,i},l=function(t){window.clearTimeout(t)});var u=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.color=t.Valid.test(e)?e:"#ffffff",this.opacity=r}return n(t,[{key:"toArray",value:function(){var t=this.color.slice(1),e=[];return 6===t.length&&(e=(t=t.match(/\d{2}/g)).map(function(t){return Number("0x"+t)})),e}},{key:"toRGB",value:function(){var t=this.toArray();return 3===t.length?"rgb("+t[0]+","+t[1]+","+t[2]+")":""}},{key:"toGRBA",value:function(){var t=this.toArray();return 3===t.length?"rgba("+t[0]+","+t[1]+","+t[2]+","+this.opacity+")":""}}],[{key:"Valid",get:function(){return/^#[0-9A-F]{6}$|^#[0-9A-F]{3}$/i}}]),t}();e.default={requestAnimationFrame:s,cancelAnimationFrame:l,isSqrt:function(t,e){if(1!==t){for(;1!==t;){if(t%e!=0)return!1;t/=e}return!0}return!0},Color:u},t.exports=e.default},function(t,e,r){"use strict";var n=function(t){return t&&t.__esModule?t:{default:t}}(r(0));n.default.install("prev",function(t){var e=n.default.util,r=t.controls,i=e.createDom("xg-prev",'<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n            <path transform = "scale(0.025 0.025)"\n            d="M600 1140v-768h128v352l320-320v704l-320-320v352zz"></path>\n        </svg></xg-icon>',{},"xgplayer-prev");r.appendChild(i),["click","touchstart"].forEach(function(e){i.addEventListener(e,function(e){e.preventDefault(),e.stopPropagation(),t.prev()},!1)})})},function(t,e,r){"use strict";var n=function(t){return t&&t.__esModule?t:{default:t}}(r(0));n.default.install("next",function(t){var e=n.default.util,r=t.controls,i=e.createDom("xg-next",'<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n            <path transform="scale(0.025 0.025)"\n            d="M800 380v768h-128v-352l-320 320v-704l320 320v-352z"></path>\n        </svg></xg-icon>',{},"xgplayer-next");r.appendChild(i),["click","touchstart"].forEach(function(e){i.addEventListener(e,function(e){e.preventDefault(),e.stopPropagation(),t.next()},!1)})})},function(t,e,r){"use strict";var n=function(t){return t&&t.__esModule?t:{default:t}}(r(0));n.default.install("meta",function(t){var e=n.default.util,r=t.controls,i=e.createDom("xg-name",""+t.config.name,{},"xgplayer-name");r.appendChild(i)})},function(t,e,r){"use strict";var n=function(t){return t&&t.__esModule?t:{default:t}}(r(0));n.default.install("forward",function(t){var e=n.default.util,r=t.controls,i=e.createDom("xg-forward",'<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n            <path transform = "scale(1.5 1.5) translate(-2 4.5)"\n            d="m 2,2.99996 0,10 7,-5 -7,-5 z m 7,5 0,5 7,-5 -7,-5 0,5 z m 7,0 0,0 z"></path>\n        </svg></xg-icon>',{},"xgplayer-forward");r.appendChild(i),["click","touchstart"].forEach(function(e){i.addEventListener(e,function(e){e.preventDefault(),e.stopPropagation(),t.forward()},!1)})})},function(t,e,r){"use strict";var n=function(t){return t&&t.__esModule?t:{default:t}}(r(0));n.default.install("cover",function(t){var e=n.default.util,r=t.controls,i=e.createDom("xg-poster",'<img src="'+t.config.poster+'">',{},"xgplayer-poster");r.appendChild(i)})},function(t,e,r){"use strict";var n=function(t){return t&&t.__esModule?t:{default:t}}(r(0));n.default.install("backward",function(t){var e=n.default.util,r=t.controls,i=e.createDom("xg-backward",'<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n            <path transform = "scale(1.5 1.5) translate(8 4.5)"\n            d="m 14,2.99996 0,10 -7,-5 7,-5 z m -7,5 0,5 -7,-5 7,-5 0,5 z m -7,0 0,0 z"></path>\n        </svg></xg-icon>',{},"xgplayer-backward");r.appendChild(i),["click","touchstart"].forEach(function(e){i.addEventListener(e,function(e){e.preventDefault(),e.stopPropagation(),t.backward()},!1)})})}]);