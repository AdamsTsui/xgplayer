(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["xgplayer"] = factory();
	else
		root["xgplayer"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _proxy = __webpack_require__(10);

var _proxy2 = _interopRequireDefault(_proxy);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

var _database = __webpack_require__(30);

var _database2 = _interopRequireDefault(_database);

var _sniffer = __webpack_require__(6);

var _sniffer2 = _interopRequireDefault(_sniffer);

var _error = __webpack_require__(4);

var _error2 = _interopRequireDefault(_error);

var _draggabilly = __webpack_require__(31);

var _draggabilly2 = _interopRequireDefault(_draggabilly);

var _url = __webpack_require__(36);

var _downloadjs = __webpack_require__(37);

var _downloadjs2 = _interopRequireDefault(_downloadjs);

var _package = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Proxy) {
  _inherits(Player, _Proxy);

  function Player(options) {
    _classCallCheck(this, Player);

    var _this2 = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, options));

    _this2.config = _util2.default.deepCopy({
      width: 600,
      height: 337.5,
      ignores: [],
      whitelist: [],
      lang: (document.documentElement.getAttribute('lang') || navigator.language || 'zh-cn').toLocaleLowerCase(),
      inactive: 3000,
      volume: 0.6,
      controls: true,
      controlsList: ['nodownload']
    }, options);
    _this2.version = _package.version;
    _this2.userTimer = null;
    _this2.waitTimer = null;
    _this2.database = new _database2.default();
    _this2.history = [];
    _this2.isProgressMoving = false;
    _this2.root = _util2.default.findDom(document, '#' + _this2.config.id);
    _this2.controls = _util2.default.createDom('xg-controls', '', {
      unselectable: 'on',
      onselectstart: 'return false'
    }, 'xgplayer-controls');
    if (_this2.config.isShowControl) {
      _this2.controls.style.display = 'none';
    }
    if (!_this2.root) {
      var el = _this2.config.el;
      if (el && el.nodeType === 1) {
        _this2.root = el;
      } else {
        var _ret;

        _this2.emit('error', new _error2.default({
          type: 'use',
          errd: {
            line: 45,
            handle: 'Constructor',
            msg: 'container id can\'t be empty'
          },
          vid: _this2.config.vid
        }));
        console.error('container id can\'t be empty');
        return _ret = false, _possibleConstructorReturn(_this2, _ret);
      }
    }
    // this.rootBackup = util.copyDom(this.root)
    _util2.default.addClass(_this2.root, 'xgplayer xgplayer-' + _sniffer2.default.device + ' xgplayer-nostart ' + (_this2.config.controls ? '' : 'no-controls'));
    _this2.root.appendChild(_this2.controls);
    if (_this2.config.fluid) {
      _this2.root.style['max-width'] = '100%';
      _this2.root.style['width'] = '100%';
      _this2.root.style['height'] = '0';
      _this2.root.style['padding-top'] = _this2.config.height * 100 / _this2.config.width + '%';

      _this2.video.style['position'] = 'absolute';
      _this2.video.style['top'] = '0';
      _this2.video.style['left'] = '0';
    } else {
      // this.root.style.width = `${this.config.width}px`
      // this.root.style.height = `${this.config.height}px`
      if (_this2.config.width) {
        if (typeof _this2.config.width !== 'number') {
          _this2.root.style.width = _this2.config.width;
        } else {
          _this2.root.style.width = _this2.config.width + 'px';
        }
      }
      if (_this2.config.height) {
        if (typeof _this2.config.height !== 'number') {
          _this2.root.style.height = _this2.config.height;
        } else {
          _this2.root.style.height = _this2.config.height + 'px';
        }
      }
    }
    if (_this2.config.execBeforePluginsCall) {
      _this2.config.execBeforePluginsCall.forEach(function (item) {
        item.call(_this2, _this2);
      });
    }
    if (_this2.config.controlStyle && _util2.default.typeOf(_this2.config.controlStyle) === 'String') {
      var self = _this2;
      fetch(self.config.controlStyle, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      }).then(function (res) {
        if (res.ok) {
          res.json().then(function (obj) {
            for (var prop in obj) {
              if (obj.hasOwnProperty(prop)) {
                self.config[prop] = obj[prop];
              }
            }
            self.pluginsCall();
          });
        }
      }).catch(function (err) {
        console.log('Fetch错误:' + err);
      });
    } else {
      _this2.pluginsCall();
    }
    _this2.ev.forEach(function (item) {
      var evName = Object.keys(item)[0];
      var evFunc = _this2[item[evName]];
      if (evFunc) {
        _this2.on(evName, evFunc);
      }
    });

    ['focus', 'blur'].forEach(function (item) {
      _this2.on(item, _this2['on' + item.charAt(0).toUpperCase() + item.slice(1)]);
    });
    var player = _this2;
    _this2.mousemoveFunc = function () {
      player.emit('focus');
      if (!player.config.closeFocusVideoFocus) {
        player.video.focus();
      }
    };
    // this.root.addEventListener('mousemove', this.mousemoveFunc)
    _this2.playFunc = function () {
      player.emit('focus');
      if (!player.config.closePlayVideoFocus) {
        player.video.focus();
      }
    };
    player.once('play', _this2.playFunc);

    _this2.getVideoSize = function () {
      if (this.video.videoWidth && this.video.videoHeight) {
        var containerSize = player.root.getBoundingClientRect();
        if (player.config.fitVideoSize === 'auto') {
          if (containerSize.width / containerSize.height > this.video.videoWidth / this.video.videoHeight) {
            player.root.style.height = this.video.videoHeight / this.video.videoWidth * containerSize.width + 'px';
          } else {
            player.root.style.width = this.video.videoWidth / this.video.videoHeight * containerSize.height + 'px';
          }
        } else if (player.config.fitVideoSize === 'fixWidth') {
          player.root.style.height = this.video.videoHeight / this.video.videoWidth * containerSize.width + 'px';
        } else if (player.config.fitVideoSize === 'fixHeight') {
          player.root.style.width = this.video.videoWidth / this.video.videoHeight * containerSize.height + 'px';
        }
      }
    };
    player.once('loadeddata', _this2.getVideoSize);

    setTimeout(function () {
      _this2.emit('ready');
      _this2.isReady = true;
    }, 0);

    if (!_this2.config.keyShortcut || _this2.config.keyShortcut === 'on') {
      ['video', 'controls'].forEach(function (item) {
        player[item].addEventListener('keydown', function (e) {
          player.onKeydown(e, player);
        });
      });
    }
    if (_this2.config.videoInit) {
      if (_util2.default.hasClass(_this2.root, 'xgplayer-nostart')) {
        _this2.start();
      }
    }
    if (player.config.rotate) {
      player.on('requestFullscreen', _this2.updateRotateDeg);
      player.on('exitFullscreen', _this2.updateRotateDeg);
    }

    function onMediaPlayerMediaChanged() {
      console.log('mediaChanging::' + this.mediaChanging);
      if (this.mediaChanging) {
        this.mediaChanging = false;
      } else {
        // console.log('this.currFileNum::::' + this.currFileNum)
        this.currFileNum++;
      }
      console.log('onMediaPlayerMediaChanged function.....');
    }
    function onDestroy() {
      player.root.removeEventListener('mousemove', player.mousemoveFunc);
      player.off('destroy', onDestroy);
      player.off('MediaPlayerMediaChanged', onMediaPlayerMediaChanged);
    }
    player.once('destroy', onDestroy);
    player.on('MediaPlayerMediaChanged', onMediaPlayerMediaChanged);
    return _this2;
  }

  _createClass(Player, [{
    key: 'start',
    value: function start() {
      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.config.url;

      if (url && _util2.default.typeOf(url.channels) === 'Array') {
        var root = this.root;
        for (var i = 0; i < this.channelNum; i++) {
          root.insertBefore(this['video' + (i === 0 ? '' : i)], root.firstChild);
          var _vlc = document.getElementById('video' + (i === 0 ? '' : i));
          var _files = url.channels[i].files;
          for (var j = 0; j < _files.length; j++) {
            _vlc.playlist.add(_files[j].url);
          }
          // console.log('_vlc.playlist.itemCount:' + _vlc.playlist.itemCount)
        }
      }
    }
  }, {
    key: 'reload',
    value: function reload() {
      this.video.load();
      this.reloadFunc = function () {
        // eslint-disable-next-line handle-callback-err
        var playPromise = this.play();
        if (playPromise !== undefined && playPromise) {
          playPromise.catch(function (err) {});
        }
      };
      this.once('loadeddata', this.reloadFunc);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      var isDelDom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var player = this;
      clearInterval(this.bulletResizeTimer);
      for (var k in this._interval) {
        clearInterval(this._interval[k]);
        this._interval[k] = null;
      }
      if (this.checkTimer) {
        clearInterval(this.checkTimer);
      }
      if (this.waitTimer) {
        clearTimeout(this.waitTimer);
      }
      this.ev.forEach(function (item) {
        var evName = Object.keys(item)[0];
        var evFunc = _this3[item[evName]];
        if (evFunc) {
          _this3.off(evName, evFunc);
        }
      });
      if (this.loadeddataFunc) {
        this.off('loadeddata', this.loadeddataFunc);
      }
      if (this.reloadFunc) {
        this.off('loadeddata', this.reloadFunc);
      }
      if (this.replayFunc) {
        this.off('play', this.replayFunc);
      }
      if (this.playFunc) {
        this.off('play', this.playFunc);
      }
      if (this.getVideoSize) {
        this.off('loadeddata', this.getVideoSize);
      };
      ['focus', 'blur'].forEach(function (item) {
        _this3.off(item, _this3['on' + item.charAt(0).toUpperCase() + item.slice(1)]);
      });
      if (!this.config.keyShortcut || this.config.keyShortcut === 'on') {
        ['video', 'controls'].forEach(function (item) {
          if (_this3[item]) {
            _this3[item].removeEventListener('keydown', function (e) {
              player.onKeydown(e, player);
            });
          }
        });
      }

      function destroyFunc() {
        this.emit('destroy');
        // this.root.id = this.root.id + '_del'
        // parentNode.insertBefore(this.rootBackup, this.root)

        // fix video destroy https://stackoverflow.com/questions/3258587/how-to-properly-unload-destroy-a-video-element
        this.video.removeAttribute('src'); // empty source
        this.video.load();
        if (isDelDom) {
          // parentNode.removeChild(this.root)
          this.root.innerHTML = '';
          var classNameList = this.root.className.split(' ');
          if (classNameList.length > 0) {
            this.root.className = classNameList.filter(function (name) {
              return name.indexOf('xgplayer') < 0;
            }).join(' ');
          } else {
            this.root.className = '';
          }
        }

        for (var _k in this) {
          // if (k !== 'config') {
          delete this[_k];
          // }
        }
        this.off('pause', destroyFunc);
      }

      if (!this.paused) {
        this.pause();
        this.once('pause', destroyFunc);
      } else {
        destroyFunc.call(this);
      }
      _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'replay',
    value: function replay() {
      var self = this;
      var _replay = this._replay;
      // ie9 bugfix
      _util2.default.removeClass(this.root, 'xgplayer-ended');
      this.logParams = {
        bc: 0,
        bu_acu_t: 0,
        played: [],
        pt: new Date().getTime(),
        vt: new Date().getTime(),
        vd: 0
      };
      this.logParams.pt = new Date().getTime();
      this.logParams.vt = this.logParams.pt;
      this.replayFunc = function () {
        self.logParams.vt = new Date().getTime();
        if (self.logParams.pt > self.logParams.vt) {
          self.logParams.pt = self.logParams.vt;
        }
        self.logParams.vd = self.video.duration;
      };
      this.once('play', this.replayFunc);
      this.logParams.playSrc = this.video.currentSrc;
      if (_replay && _replay instanceof Function) {
        _replay();
      } else {
        this.currentTime = 0;
        // eslint-disable-next-line handle-callback-err
        var playPromise = this.play();
        if (playPromise !== undefined && playPromise && _util2.default.typeOf(playPromise.catch) === 'function') {
          playPromise.catch(function (err) {
            console.error(err);
          });
        }
      }
    }
  }, {
    key: 'getFullscreen',
    value: function getFullscreen(el) {
      var player = this;
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.mozRequestFullScreen) {
        el.mozRequestFullScreen();
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen(window.Element.ALLOW_KEYBOARD_INPUT);
      } else if (player.video.webkitSupportsFullscreen) {
        player.video.webkitEnterFullscreen();
      } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen();
      } else {
        _util2.default.addClass(el, 'xgplayer-is-cssfullscreen');
      }
    }
  }, {
    key: 'exitFullscreen',
    value: function exitFullscreen(el) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      _util2.default.removeClass(el, 'xgplayer-is-cssfullscreen');
    }
  }, {
    key: 'getCssFullscreen',
    value: function getCssFullscreen() {
      var player = this;
      if (player.config.fluid) {
        player.root.style['padding-top'] = '';
      }
      _util2.default.addClass(player.root, 'xgplayer-is-cssfullscreen');
      player.emit('requestCssFullscreen');
    }
  }, {
    key: 'exitCssFullscreen',
    value: function exitCssFullscreen() {
      var player = this;
      if (player.config.fluid) {
        player.root.style['width'] = '100%';
        player.root.style['height'] = '0';
        player.root.style['padding-top'] = player.config.height * 100 / player.config.width + '%';
      }
      _util2.default.removeClass(player.root, 'xgplayer-is-cssfullscreen');
      player.emit('exitCssFullscreen');
    }
  }, {
    key: 'getRotateFullscreen',
    value: function getRotateFullscreen() {
      var player = this;
      document.documentElement.style.width = '100%';
      document.documentElement.style.height = '100%';
      if (player.root && !Player.util.hasClass(player.root, 'xgplayer-rotate-fullscreen')) {
        Player.util.addClass(player.root, 'xgplayer-rotate-fullscreen');
      }
      player.emit('getRotateFullscreen');
    }
  }, {
    key: 'exitRotateFullscreen',
    value: function exitRotateFullscreen() {
      var player = this;
      document.documentElement.style.width = 'unset';
      document.documentElement.style.height = 'unset';
      if (player.root && Player.util.hasClass(player.root, 'xgplayer-rotate-fullscreen')) {
        Player.util.removeClass(player.root, 'xgplayer-rotate-fullscreen');
      }
      player.emit('exitRotateFullscreen');
    }
  }, {
    key: 'download',
    value: function download() {
      var url = (0, _url.getAbsoluteURL)(this.config.url);
      (0, _downloadjs2.default)(url);
    }
  }, {
    key: 'pluginsCall',
    value: function pluginsCall() {
      var _this4 = this;

      var self = this;
      if (Player.plugins) {
        var ignores = this.config.ignores;
        Object.keys(Player.plugins).forEach(function (name) {
          var descriptor = Player.plugins[name];
          if (!ignores.some(function (item) {
            return name === item || name === 's_' + item;
          })) {
            if (['pc', 'tablet', 'mobile'].some(function (type) {
              return type === name;
            })) {
              if (name === _sniffer2.default.device) {
                setTimeout(function () {
                  descriptor.call(self, self);
                }, 0);
              }
            } else {
              descriptor.call(_this4, _this4);
            }
          }
        });
      }
    }
  }, {
    key: 'getPIP',
    value: function getPIP() {
      // let ro = this.root.getBoundingClientRect()
      // let Top = ro.top
      // let Left = ro.left
      var dragLay = _util2.default.createDom('xg-pip-lay', '<div></div>', {}, 'xgplayer-pip-lay');
      this.root.appendChild(dragLay);
      var dragHandle = _util2.default.createDom('xg-pip-drag', '<div class="drag-handle"><span>点击按住可拖动视频</span></div>', { tabindex: 9 }, 'xgplayer-pip-drag');
      this.root.appendChild(dragHandle);
      // eslint-disable-next-line no-unused-vars
      var draggie = new _draggabilly2.default('.xgplayer', {
        handle: '.drag-handle'
      });
      _util2.default.addClass(this.root, 'xgplayer-pip-active');
      this.root.style.right = 0;
      this.root.style.bottom = '200px';
      this.root.style.top = '';
      this.root.style.left = '';
      this.root.style.width = '320px';
      this.root.style.height = '180px';
      if (this.config.pipConfig) {
        if (this.config.pipConfig.top !== undefined) {
          this.root.style.top = this.config.pipConfig.top + 'px';
          this.root.style.bottom = '';
        }
        if (this.config.pipConfig.bottom !== undefined) {
          this.root.style.bottom = this.config.pipConfig.bottom + 'px';
        }
        if (this.config.pipConfig.left !== undefined) {
          this.root.style.left = this.config.pipConfig.left + 'px';
          this.root.style.right = '';
        }
        if (this.config.pipConfig.right !== undefined) {
          this.root.style.right = this.config.pipConfig.right + 'px';
        }
        if (this.config.pipConfig.width !== undefined) {
          this.root.style.width = this.config.pipConfig.width + 'px';
        }
        if (this.config.pipConfig.height !== undefined) {
          this.root.style.height = this.config.pipConfig.height + 'px';
        }
      }
      if (this.config.fluid) {
        this.root.style['padding-top'] = '';
      }
      var player = this;
      ['click', 'touchend'].forEach(function (item) {
        dragLay.addEventListener(item, function (e) {
          e.preventDefault();
          e.stopPropagation();
          player.exitPIP();
          // player.root.style.top = `${Top}px`
          // player.root.style.left = `${Left}px`
        });
      });
    }
  }, {
    key: 'exitPIP',
    value: function exitPIP() {
      _util2.default.removeClass(this.root, 'xgplayer-pip-active');
      this.root.style.right = '';
      this.root.style.bottom = '';
      this.root.style.top = '';
      this.root.style.left = '';
      if (this.config.fluid) {
        this.root.style['width'] = '100%';
        this.root.style['height'] = '0';
        this.root.style['padding-top'] = this.config.height * 100 / this.config.width + '%';
      } else {
        if (this.config.width) {
          if (typeof this.config.width !== 'number') {
            this.root.style.width = this.config.width;
          } else {
            this.root.style.width = this.config.width + 'px';
          }
        }
        if (this.config.height) {
          if (typeof this.config.height !== 'number') {
            this.root.style.height = this.config.height;
          } else {
            this.root.style.height = this.config.height + 'px';
          }
        }
      }

      var dragLay = _util2.default.findDom(this.root, '.xgplayer-pip-lay');
      if (dragLay && dragLay.parentNode) {
        dragLay.parentNode.removeChild(dragLay);
      }
      var dragHandle = _util2.default.findDom(this.root, '.xgplayer-pip-drag');
      if (dragHandle && dragHandle.parentNode) {
        dragHandle.parentNode.removeChild(dragHandle);
      }
    }
  }, {
    key: 'updateRotateDeg',
    value: function updateRotateDeg() {
      var player = this;
      if (!player.rotateDeg) {
        player.rotateDeg = 0;
      }

      var width = player.root.offsetWidth;
      var height = player.root.offsetHeight;
      var targetWidth = player.video.videoWidth;
      var targetHeight = player.video.videoHeight;

      if (!player.config.rotate.innerRotate && player.config.rotate.controlsFix) {
        player.root.style.width = height + 'px';
        player.root.style.height = width + 'px';
      }

      var scale = void 0;
      if (player.rotateDeg === 0.25 || player.rotateDeg === 0.75) {
        if (player.config.rotate.innerRotate) {
          if (targetWidth / targetHeight > height / width) {
            // 旋转后纵向撑满
            var videoWidth = 0;
            if (targetHeight / targetWidth > height / width) {
              // 旋转前是纵向撑满
              videoWidth = height * targetWidth / targetHeight;
            } else {
              // 旋转前是横向撑满
              videoWidth = width;
            }
            scale = height / videoWidth;
          } else {
            // 旋转后横向撑满
            var videoHeight = 0;
            if (targetHeight / targetWidth > height / width) {
              // 旋转前是纵向撑满
              videoHeight = height;
            } else {
              // 旋转前是横向撑满
              videoHeight = width * targetHeight / targetWidth;
            }
            scale = width / videoHeight;
          }
        } else {
          if (width >= height) {
            scale = width / height;
          } else {
            scale = height / width;
          }
        }
        scale = parseFloat(scale.toFixed(5));
      } else {
        scale = 1;
      }

      if (player.config.rotate.innerRotate) {
        player.video.style.transformOrigin = 'center center';
        player.video.style.transform = 'rotate(' + player.rotateDeg + 'turn) scale(' + scale + ')';
        player.video.style.webKitTransform = 'rotate(' + player.rotateDeg + 'turn) scale(' + scale + ')';
      } else {
        if (player.config.rotate.controlsFix) {
          player.video.style.transformOrigin = 'center center';
          player.video.style.transform = 'rotate(' + player.rotateDeg + 'turn) scale(' + scale + ')';
          player.video.style.webKitTransform = 'rotate(' + player.rotateDeg + 'turn) scale(' + scale + ')';
        } else {
          player.root.style.transformOrigin = 'center center';
          player.root.style.transform = 'rotate(' + player.rotateDeg + 'turn) scale(' + 1 + ')';
          player.root.style.webKitTransform = 'rotate(' + player.rotateDeg + 'turn) scale(' + 1 + ')';
        }
      }
    }
  }, {
    key: 'rotate',
    value: function rotate() {
      var clockwise = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var innerRotate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var times = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      var player = this;
      if (!player.rotateDeg) {
        player.rotateDeg = 0;
      }
      var factor = clockwise ? 1 : -1;

      player.rotateDeg = (player.rotateDeg + 1 + factor * 0.25 * times) % 1;
      this.updateRotateDeg();

      player.emit('rotate', player.rotateDeg * 360);
    }
  }, {
    key: 'onFocus',
    value: function onFocus() {
      var player = this;
      _util2.default.removeClass(this.root, 'xgplayer-inactive');
      if (player.userTimer) {
        clearTimeout(player.userTimer);
      }
      player.userTimer = setTimeout(function () {
        player.emit('blur');
      }, player.config.inactive);
    }
  }, {
    key: 'onBlur',
    value: function onBlur() {
      // this.video.blur()
      if (!this.paused && !this.ended && !this.config.closeInactive) {
        _util2.default.addClass(this.root, 'xgplayer-inactive');
      }
    }
  }, {
    key: 'onPlay',
    value: function onPlay() {
      _util2.default.addClass(this.root, 'xgplayer-isloading');
      _util2.default.addClass(this.root, 'xgplayer-playing');
      _util2.default.removeClass(this.root, 'xgplayer-pause');
    }
  }, {
    key: 'onPause',
    value: function onPause() {
      _util2.default.addClass(this.root, 'xgplayer-pause');
      if (this.userTimer) {
        clearTimeout(this.userTimer);
      }
      this.emit('focus');
    }
  }, {
    key: 'onEnded',
    value: function onEnded() {
      var _this = this;
      // util.addClass(_this.root, 'xgplayer-ended')
      _this.currFileNum = -1;
      _util2.default.removeClass(_this.root, 'xgplayer-playing');
    }
  }, {
    key: 'onSeeking',
    value: function onSeeking() {
      this.isSeeking = true;
      // 兼容IE下无法触发waiting事件的问题 seeking的时候直接出发waiting
      this.onWaiting();
      // util.addClass(this.root, 'seeking');
    }
  }, {
    key: 'onTimeupdate',
    value: function onTimeupdate() {
      // for ie,playing fired before waiting
      if (this.waitTimer) {
        clearTimeout(this.waitTimer);
      }
      _util2.default.removeClass(this.root, 'xgplayer-isloading');
    }
  }, {
    key: 'onSeeked',
    value: function onSeeked() {
      // for ie,playing fired before waiting
      this.isSeeking = false;
      if (this.waitTimer) {
        clearTimeout(this.waitTimer);
      }
      _util2.default.removeClass(this.root, 'xgplayer-isloading');
    }
  }, {
    key: 'onWaiting',
    value: function onWaiting() {
      var self = this;
      if (self.waitTimer) {
        clearTimeout(self.waitTimer);
      }
      if (self.checkTimer) {
        clearInterval(self.checkTimer);
        self.checkTimer = null;
      }
      var time = self.currentTime;
      self.waitTimer = setTimeout(function () {
        _util2.default.addClass(self.root, 'xgplayer-isloading');
        self.checkTimer = setInterval(function () {
          if (self.currentTime !== time) {
            _util2.default.removeClass(this.root, 'xgplayer-isloading');
            clearInterval(self.checkTimer);
            self.checkTimer = null;
          }
        }, 1000);
      }, 500);
    }
  }, {
    key: 'onPlaying',
    value: function onPlaying() {
      // 兼容safari下无法自动播放会触发该事件的场景
      if (this.paused) {
        return;
      }
      this.isSeeking = false;
      if (this.waitTimer) {
        clearTimeout(this.waitTimer);
      }
      _util2.default.removeClass(this.root, 'xgplayer-isloading xgplayer-nostart xgplayer-pause xgplayer-ended xgplayer-is-error xgplayer-replay');
      _util2.default.addClass(this.root, 'xgplayer-playing');
    }
  }, {
    key: 'onKeydown',
    value: function onKeydown(event, player) {
      // let player = this
      var e = event || window.event;
      if (e && (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40 || e.keyCode === 32)) {
        player.emit('focus');
      }
      if (e && (e.keyCode === 40 || e.keyCode === 38)) {
        if (player.controls) {
          var volumeSlider = player.controls.querySelector('.xgplayer-slider');
          if (volumeSlider) {
            if (_util2.default.hasClass(volumeSlider, 'xgplayer-none')) {
              _util2.default.removeClass(volumeSlider, 'xgplayer-none');
            }
            if (player.sliderTimer) {
              clearTimeout(player.sliderTimer);
            }
            player.sliderTimer = setTimeout(function () {
              _util2.default.addClass(volumeSlider, 'xgplayer-none');
            }, player.config.inactive);
          }
        }
        if (e && e.keyCode === 40) {
          // 按 down
          if (player.volume - 0.1 >= 0) {
            player.volume = parseFloat((player.volume - 0.1).toFixed(1));
          } else {
            player.volume = 0;
          }
        } else if (e && e.keyCode === 38) {
          // 按 up
          if (player.volume + 0.1 <= 1) {
            player.volume = parseFloat((player.volume + 0.1).toFixed(1));
          } else {
            player.volume = 1;
          }
        }
      } else if (e && e.keyCode === 39) {
        // 按 right
        if (player.currentTime + 10 <= player.duration) {
          player.currentTime += 10;
        } else {
          player.currentTime = player.duration - 1;
        }
      } else if (e && e.keyCode === 37) {
        // 按 left
        if (player.currentTime - 10 >= 0) {
          player.currentTime -= 10;
        } else {
          player.currentTime = 0;
        }
      } else if (e && e.keyCode === 32) {
        // 按 spacebar
        if (player.paused) {
          // eslint-disable-next-line handle-callback-err
          var playPromise = player.play();
          if (playPromise !== undefined && playPromise) {
            playPromise.catch(function (err) {});
          }
        } else {
          player.pause();
        }
      }
    }
  }], [{
    key: 'install',
    value: function install(name, descriptor) {
      if (!Player.plugins) {
        Player.plugins = {};
      }
      if (!Player.plugins[name]) {
        Player.plugins[name] = descriptor;
      }
    }
  }, {
    key: 'use',
    value: function use(name, descriptor) {
      if (!Player.plugins) {
        Player.plugins = {};
      }
      Player.plugins[name] = descriptor;
    }
  }]);

  return Player;
}(_proxy2.default);

Player.util = _util2.default;
Player.sniffer = _sniffer2.default;
Player.Errors = _error2.default;

exports.default = Player;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _undefined = __webpack_require__(23)(); // Support ES3 engines

module.exports = function (val) {
  return val !== _undefined && val !== null;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var util = {};

util.createDom = function () {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
  var tpl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var cname = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  var dom = document.createElement(el);
  dom.className = cname;
  dom.innerHTML = tpl;
  Object.keys(attrs).forEach(function (item) {
    var key = item;
    var value = attrs[item];
    if (el === 'video' || el === 'audio') {
      if (value) {
        dom.setAttribute(key, value);
      }
    } else {
      dom.setAttribute(key, value);
    }
  });
  return dom;
};

util.hasClass = function (el, className) {
  if (!el) {
    return false;
  }

  if (el.classList) {
    return Array.prototype.some.call(el.classList, function (item) {
      return item === className;
    });
  } else {
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }
};

util.addClass = function (el, className) {
  if (!el) {
    return;
  }

  if (el.classList) {
    className.replace(/(^\s+|\s+$)/g, '').split(/\s+/g).forEach(function (item) {
      item && el.classList.add(item);
    });
  } else if (!util.hasClass(el, className)) {
    el.className += ' ' + className;
  }
};

util.removeClass = function (el, className) {
  if (!el) {
    return;
  }

  if (el.classList) {
    className.split(/\s+/g).forEach(function (item) {
      el.classList.remove(item);
    });
  } else if (util.hasClass(el, className)) {
    className.split(/\s+/g).forEach(function (item) {
      var reg = new RegExp('(\\s|^)' + item + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
    });
  }
};

util.toggleClass = function (el, className) {
  if (!el) {
    return;
  }

  className.split(/\s+/g).forEach(function (item) {
    if (util.hasClass(el, item)) {
      util.removeClass(el, item);
    } else {
      util.addClass(el, item);
    }
  });
};

util.findDom = function () {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var sel = arguments[1];

  var dom = void 0;
  // fix querySelector IDs that start with a digit
  // https://stackoverflow.com/questions/37270787/uncaught-syntaxerror-failed-to-execute-queryselector-on-document
  try {
    dom = el.querySelector(sel);
  } catch (e) {
    if (sel.indexOf('#') === 0) {
      dom = el.getElementById(sel.slice(1));
    }
  }
  return dom;
};

util.padStart = function (str, length, pad) {
  var charstr = String(pad);
  var len = length >> 0;
  var maxlen = Math.ceil(len / charstr.length);
  var chars = [];
  var r = String(str);
  while (maxlen--) {
    chars.push(charstr);
  }
  return chars.join('').substring(0, len - r.length) + r;
};

util.format = function (time) {
  if (window.isNaN(time)) {
    return '';
  }
  var hour = util.padStart(Math.floor(time / 3600), 2, 0);
  var minute = util.padStart(Math.floor((time - hour * 3600) / 60), 2, 0);
  var second = util.padStart(Math.floor(time - hour * 3600 - minute * 60), 2, 0);
  return (hour === '00' ? [minute, second] : [hour, minute, second]).join(':');
};

util.event = function (e) {
  if (e.touches) {
    var touch = e.touches[0] || e.changedTouches[0];
    e.clientX = touch.clientX || 0;
    e.clientY = touch.clientY || 0;
    e.offsetX = touch.pageX - touch.target.offsetLeft;
    e.offsetY = touch.pageY - touch.target.offsetTop;
  }
  e._target = e.target || e.srcElement;
};

util.typeOf = function (obj) {
  return Object.prototype.toString.call(obj).match(/([^\s.*]+)(?=]$)/g)[0];
};

util.deepCopy = function (dst, src) {
  if (util.typeOf(src) === 'Object' && util.typeOf(dst) === 'Object') {
    Object.keys(src).forEach(function (key) {
      if (util.typeOf(src[key]) === 'Object' && !(src[key] instanceof Node)) {
        if (!dst[key]) {
          dst[key] = src[key];
        } else {
          util.deepCopy(dst[key], src[key]);
        }
      } else if (util.typeOf(src[key]) === 'Array') {
        dst[key] = util.typeOf(dst[key]) === 'Array' ? dst[key].concat(src[key]) : src[key];
      } else {
        dst[key] = src[key];
      }
    });
    return dst;
  }
};
util.getBgImage = function (el) {
  // fix: return current page url when url is none
  var url = (el.currentStyle || window.getComputedStyle(el, null)).backgroundImage;
  if (!url || url === 'none') {
    return '';
  }
  var a = document.createElement('a');
  a.href = url.replace(/url\("|"\)/g, '');
  return a.href;
};

util.copyDom = function (dom) {
  if (dom && dom.nodeType === 1) {
    var back = document.createElement(dom.tagName);
    Array.prototype.forEach.call(dom.attributes, function (node) {
      back.setAttribute(node.name, node.value);
    });
    if (dom.innerHTML) {
      back.innerHTML = dom.innerHTML;
    }
    return back;
  } else {
    return '';
  }
};

util.setInterval = function (context, eventName, intervalFunc, frequency) {
  if (!context._interval[eventName]) {
    context._interval[eventName] = setInterval(intervalFunc.bind(context), frequency);
  }
};

util.clearInterval = function (context, eventName) {
  clearInterval(context._interval[eventName]);
  context._interval[eventName] = null;
};

util.createImgBtn = function (name, imgUrl, width, height) {
  var btn = util.createDom('xg-' + name, '', {}, 'xgplayer-' + name + '-img');
  btn.style.backgroundImage = 'url("' + imgUrl + '")';
  if (width && height) {
    var w = void 0,
        h = void 0,
        unit = void 0;
    ['px', 'rem', 'em', 'pt', 'dp', 'vw', 'vh', 'vm', '%'].every(function (item) {
      if (width.indexOf(item) > -1 && height.indexOf(item) > -1) {
        w = parseFloat(width.slice(0, width.indexOf(item)).trim());
        h = parseFloat(height.slice(0, height.indexOf(item)).trim());
        unit = item;
        return false;
      } else {
        return true;
      }
    });
    btn.style.width = '' + w + unit;
    btn.style.height = '' + h + unit;
    btn.style.backgroundSize = '' + w + unit + ' ' + h + unit;
    if (name === 'start') {
      btn.style.margin = '-' + h / 2 + unit + ' auto auto -' + w / 2 + unit;
    } else {
      btn.style.margin = 'auto 5px auto 5px';
    }
  }
  return btn;
};

util.Hex2RGBA = function (hex, alpha) {
  var rgb = []; // 定义rgb数组
  if (/^\#[0-9A-F]{3}$/i.test(hex)) {
    var sixHex = '#';
    hex.replace(/[0-9A-F]/ig, function (kw) {
      sixHex += kw + kw;
    });
    hex = sixHex;
  }
  if (/^#[0-9A-F]{6}$/i.test(hex)) {
    hex.replace(/[0-9A-F]{2}/ig, function (kw) {
      rgb.push(eval('0x' + kw));
    });
    return 'rgba(' + rgb.join(',') + ', ' + alpha + ')';
  } else {
    return 'rgba(255, 255, 255, 0.1)';
  }
};

util.isWeiXin = function () {
  var ua = window.navigator.userAgent.toLowerCase();
  return ua.indexOf('micromessenger') > -1;
};

exports.default = util;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ES3 safe

var _undefined = void 0;

module.exports = function (value) {
  return value !== _undefined && value !== null;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _package = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ErrorTypes = {
  network: {
    code: 1,
    msg: '视频下载错误',
    remark: '只要视频下载错误就使用此类型，无论是video本身的超时还是xhr的分段请求超时或者资源不存在'
  },
  mse: {
    code: 2,
    msg: '流追加错误',
    remark: '追加流的时候如果类型不对、无法被正确解码则会触发此类错误'
  },
  parse: {
    code: 3,
    msg: '解析错误',
    remark: 'mp4、hls、flv我们都是使用js进行格式解析，如果解析失败则会触发此类错误'
  },
  format: {
    code: 4,
    msg: '格式错误',
    remark: '如果浏览器不支持的格式导致播放错误'
  },
  decoder: {
    code: 5,
    msg: '解码错误',
    remark: '浏览器解码异常会抛出此类型错误'
  },
  runtime: {
    code: 6,
    msg: '语法错误',
    remark: '播放器语法错误'
  },
  timeout: {
    code: 7,
    msg: '播放超时',
    remark: '播放过程中无法正常请求下一个分段导致播放中断'
  },
  other: {
    code: 8,
    msg: '其他错误',
    remark: '不可知的错误或被忽略的错误类型'
  }
};

var Errors = function Errors(type, currentTime, duration, networkState, readyState, src, currentSrc, ended) {
  var errd = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : { line: '', handle: '', msg: '', version: '' };
  var errorCode = arguments[9];
  var mediaError = arguments[10];

  _classCallCheck(this, Errors);

  var r = {};
  if (arguments.length > 1) {
    r.playerVersion = _package.version; // 播放器版本
    r.errorType = type;
    r.domain = document.domain; // domain
    r.duration = duration; // 视频时长
    r.currentTime = currentTime;
    r.networkState = networkState;
    r.readyState = readyState;
    r.currentSrc = currentSrc;
    r.src = src;
    r.ended = ended;
    r.errd = errd; // 错误详情
    r.ex = (ErrorTypes[type] || {}).msg; // 补充信息
    r.errorCode = errorCode;
    r.mediaError = mediaError;
  } else {
    var arg = arguments[0];
    Object.keys(arg).map(function (key) {
      r[key] = arg[key];
    });
    r.ex = (arg.type && ErrorTypes[arg.type] || {}).msg;
  }
  return r;
};

exports.default = Errors;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"xgplayer\",\"version\":\"2.6.17\",\"description\":\"video player\",\"main\":\"./dist/index.js\",\"typings\":\"./types/index.d.ts\",\"bin\":{\"xgplayer\":\"bin/xgplayer.js\"},\"scripts\":{\"prepare\":\"npm run build\",\"build\":\"webpack --progress --display-chunks -p\",\"watch\":\"webpack --progress --display-chunks -p --watch --mode development\"},\"keywords\":[\"video\",\"player\"],\"babel\":{\"presets\":[\"es2015\"],\"plugins\":[\"add-module-exports\",\"babel-plugin-bulk-import\"]},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/bytedance/xgplayer.git\"},\"author\":\"yinguohui@bytedance.com\",\"license\":\"MIT\",\"dependencies\":{\"chalk\":\"^2.3.2\",\"commander\":\"^2.15.1\",\"danmu.js\":\"^0.1.0\",\"deepmerge\":\"^1.5.0\",\"downloadjs\":\"1.4.7\",\"draggabilly\":\"^2.2.0\",\"event-emitter\":\"^0.3.5\",\"fs-extra\":\"^5.0.0\",\"install\":\"^0.13.0\",\"pasition\":\"^1.0.1\",\"request-frame\":\"^1.5.3\"},\"browserslist\":[\"> 5%\",\"IE 9\",\"iOS 7\",\"Firefox > 20\"],\"devDependencies\":{\"@types/events\":\"^3.0.0\",\"autoprefixer\":\"^9.1.5\",\"babel-core\":\"^6.26.3\",\"babel-loader\":\"^7.1.4\",\"babel-plugin-add-module-exports\":\"^0.2.1\",\"babel-plugin-bulk-import\":\"^1.0.2\",\"babel-plugin-transform-object-rest-spread\":\"^6.26.0\",\"babel-plugin-transform-runtime\":\"^6.23.0\",\"babel-preset-es2015\":\"^6.24.1\",\"chai\":\"^4.1.2\",\"core-js\":\"^2.5.4\",\"css-loader\":\"^0.28.11\",\"json-loader\":\"^0.5.7\",\"node-sass\":\"^4.8.3\",\"postcss-cssnext\":\"^3.1.0\",\"postcss-loader\":\"^2.1.5\",\"raw-loader\":\"^2.0.0\",\"sass-loader\":\"^6.0.7\",\"style-loader\":\"^0.20.3\",\"sugarss\":\"^1.0.1\",\"webpack\":\"^4.11.0\",\"webpack-cli\":\"^3.0.2\",\"zlib\":\"^1.0.5\"}}");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sniffer = {
  get device() {
    var r = sniffer.os;
    return r.isPc ? 'pc' : 'mobile';
    // return r.isPc ? 'pc' : r.isTablet ? 'tablet' : 'mobile'
  },
  get browser() {
    var ua = navigator.userAgent.toLowerCase();
    var reg = {
      ie: /rv:([\d.]+)\) like gecko/,
      firfox: /firefox\/([\d.]+)/,
      chrome: /chrome\/([\d.]+)/,
      opera: /opera.([\d.]+)/,
      safari: /version\/([\d.]+).*safari/
    };
    return [].concat(Object.keys(reg).filter(function (key) {
      return reg[key].test(ua);
    }))[0];
  },
  get os() {
    var ua = navigator.userAgent;
    var isWindowsPhone = /(?:Windows Phone)/.test(ua);
    var isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone;
    var isAndroid = /(?:Android)/.test(ua);
    var isFireFox = /(?:Firefox)/.test(ua);
    var isTablet = /(?:iPad|PlayBook)/.test(ua) || isAndroid && !/(?:Mobile)/.test(ua) || isFireFox && /(?:Tablet)/.test(ua);
    var isPhone = /(?:iPhone)/.test(ua) && !isTablet;
    var isPc = !isPhone && !isAndroid && !isSymbian && !isTablet;
    return {
      isTablet: isTablet,
      isPhone: isPhone,
      isAndroid: isAndroid,
      isPc: isPc,
      isSymbian: isSymbian,
      isWindowsPhone: isWindowsPhone,
      isFireFox: isFireFox
    };
  }
};

exports.default = sniffer;
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint-disable */
var _extends = Object.assign || function (e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r];for (var t in n) {
      if (Object.prototype.hasOwnProperty.call(n, t)) {
        e[t] = n[t];
      }
    }
  }return e;
};function _classCallCheck(e, r) {
  if (!(e instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}var undef = undefined;var Env = function e() {
  var A = this;_classCallCheck(this, e);this.set = function (e, r) {
    var n = e;var t = r;if (t === null) {
      return false;
    }var i = "";if (n.indexOf(".") > -1) {
      var s = n.split(".");i = s[0];n = s[1];
    }if (n === "os_version") {
      t = "" + t;
    }if (i) {
      if (i === "user" || i === "header") {
        A.envInfo[i][n] = t;
      } else if (i === "headers") {
        A.envInfo.header.headers[n] = t;
      } else {
        A.envInfo.header.headers.custom[n] = t;
      }
    } else if (A.envInfo.user.hasOwnProperty(n)) {
      if (["user_type", "device_id", "ip_addr_id"].indexOf(n) > -1) {
        A.envInfo.user[n] = Number(t);
      } else if (["user_id", "web_id", "user_unique_id", "ssid"].indexOf(n) > -1) {
        A.envInfo.user[n] = String(t);
      } else if (["user_is_auth", "user_is_login"].indexOf(n) > -1) {
        A.envInfo.user[n] = Boolean(t);
      }
    } else if (A.envInfo.header.hasOwnProperty(n)) {
      A.envInfo.header[n] = t;
    } else if (A.envInfo.header.headers.hasOwnProperty(n)) {
      A.envInfo.header.headers[n] = t;
    } else {
      A.envInfo.header.headers.custom[n] = t;
    }
  };this.get = function () {
    var e = { user: {}, header: { headers: { custom: {} } } };var r = A.envInfo;var n = r.user;var t = Object.keys(n);for (var i = t, s = Array.isArray(i), o = 0, i = s ? i : i[Symbol.iterator]();;) {
      var a;if (s) {
        if (o >= i.length) break;a = i[o++];
      } else {
        o = i.next();if (o.done) break;a = o.value;
      }var u = a;if (n[u] !== undef) {
        e.user[u] = n[u];
      }
    }var f = r.header;var c = Object.keys(f);for (var d = c, l = Array.isArray(d), _ = 0, d = l ? d : d[Symbol.iterator]();;) {
      var v;if (l) {
        if (_ >= d.length) break;v = d[_++];
      } else {
        _ = d.next();if (_.done) break;v = _.value;
      }var h = v;if (f[h] !== undef && h !== "headers") {
        e.header[h] = f[h];
      }
    }var p = r.header.headers;var g = Object.keys(p);for (var b = g, y = Array.isArray(b), m = 0, b = y ? b : b[Symbol.iterator]();;) {
      var w;if (y) {
        if (m >= b.length) break;w = b[m++];
      } else {
        m = b.next();if (m.done) break;w = m.value;
      }var O = w;if (O !== "custom" && p[O] !== undef) {
        e.header.headers[O] = p[O];
      }
    }var k = r.header.headers.custom;var C = Object.keys(k);if (C.length) {
      for (var S = C, E = Array.isArray(S), R = 0, S = E ? S : S[Symbol.iterator]();;) {
        var x;if (E) {
          if (R >= S.length) break;x = S[R++];
        } else {
          R = S.next();if (R.done) break;x = R.value;
        }var z = x;e.header.headers.custom[z] = k[z];
      }
    }var T = { user: e.user, header: _extends({}, e.header, { headers: e.header.headers }) };return T;
  };this.envInfo = { user: { user_unique_id: undef, user_type: undef, user_id: undef, user_is_auth: undef, user_is_login: undef, device_id: undef, web_id: undef, ip_addr_id: undef, ssid: undef }, header: { app_id: undef, app_name: undef, app_install_id: undef, app_package: undef, app_channel: undef, app_version: undef, os_name: undef, os_version: undef, device_model: undef, ab_client: undef, ab_version: undef, traffic_type: undef, utm_source: undef, utm_medium: undef, utm_campaign: undef, client_ip: undef, device_brand: undef, os_api: undef, access: undef, language: undef, region: undef, app_language: undef, app_region: undef, creative_id: undef, ad_id: undef, campaign_id: undef, log_type: undef, rnd: undef, platform: undef, sdk_version: undef, province: undef, city: undef, timezone: undef, tz_offset: undef, tz_name: undef, sim_region: undef, carrier: undef, resolution: undef, browser: undef, browser_version: undef, referrer: undef, referrer_host: undef, headers: { utm_term: undef, utm_content: undef, custom: {} } } };
};var parseURL = function e(r) {
  var n = document.createElement("a");n.href = r;return n;
};var parseUrlQuery = function e(r) {
  var n = parseURL(r).search;n = n.slice(1);var i = {};n.split("&").forEach(function (e) {
    var r = e.split("="),
        n = r[0],
        t = r[1];i[n] = decodeURIComponent(typeof t === "undefined" ? "" : t);
  });return i;
};var undef$1 = "";var screen_width = screen.width || 0;var screen_height = screen.height || 0;var screen_size = screen_width + " x " + screen_height;var appVersion = navigator.appVersion;var userAgent = navigator.userAgent;var language = navigator.language;var referrer = document.referrer;var referrer_host = parseURL(referrer).hostname;var urlQueryObj = parseUrlQuery(location.href);var os_name = undef$1;var os_version = undef$1;var browser = "";var browser_version = "" + parseFloat(appVersion);var versionOffset = void 0;var semiIndex = void 0;if ((versionOffset = userAgent.indexOf("Opera")) !== -1) {
  browser = "Opera";browser_version = userAgent.substring(versionOffset + 6);if ((versionOffset = userAgent.indexOf("Version")) !== -1) {
    browser_version = userAgent.substring(versionOffset + 8);
  }
}if ((versionOffset = userAgent.indexOf("Edge")) !== -1) {
  browser = "Microsoft Edge";browser_version = userAgent.substring(versionOffset + 5);
} else if ((versionOffset = userAgent.indexOf("MSIE")) !== -1) {
  browser = "Microsoft Internet Explorer";browser_version = userAgent.substring(versionOffset + 5);
} else if ((versionOffset = userAgent.indexOf("Chrome")) !== -1) {
  browser = "Chrome";browser_version = userAgent.substring(versionOffset + 7);
} else if ((versionOffset = userAgent.indexOf("Safari")) !== -1) {
  browser = "Safari";browser_version = userAgent.substring(versionOffset + 7);if ((versionOffset = userAgent.indexOf("Version")) !== -1) {
    browser_version = userAgent.substring(versionOffset + 8);
  }
} else if ((versionOffset = userAgent.indexOf("Firefox")) !== -1) {
  browser = "Firefox";browser_version = userAgent.substring(versionOffset + 8);
}if ((semiIndex = browser_version.indexOf(";")) !== -1) {
  browser_version = browser_version.substring(0, semiIndex);
}if ((semiIndex = browser_version.indexOf(" ")) !== -1) {
  browser_version = browser_version.substring(0, semiIndex);
}if ((semiIndex = browser_version.indexOf(")")) !== -1) {
  browser_version = browser_version.substring(0, semiIndex);
}var platform = /Mobile|htc|mini|Android|iP(ad|od|hone)/.test(appVersion) ? "wap" : "web";var clientOpts = [{ s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ }, { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ }, { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ }, { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ }, { s: "Android", r: /Android/ }, { s: "Sun OS", r: /SunOS/ }, { s: "Linux", r: /(Linux|X11)/ }, { s: "iOS", r: /(iPhone|iPad|iPod)/ }, { s: "Mac OS X", r: /Mac OS X/ }, { s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ }];for (var i = 0; i < clientOpts.length; i++) {
  var cs = clientOpts[i];if (cs.r.test(userAgent)) {
    os_name = cs.s;break;
  }
}function getVersion(e, r) {
  var n = e.exec(r);if (n && n[1]) {
    return n[1];
  }return "";
}if (/Windows/.test(os_name)) {
  os_version = getVersion(/Windows (.*)/, os_name);os_name = "windows";
}function getAndroidVersion(e) {
  var r = getVersion(/Android ([\.\_\d]+)/, e);if (!r) {
    r = getVersion(/Android\/([\.\_\d]+)/, e);
  }return r;
}switch (os_name) {case "Mac OS X":
    os_version = getVersion(/Mac OS X (10[\.\_\d]+)/, userAgent);os_name = "mac";break;case "Android":
    os_version = getAndroidVersion(userAgent);os_name = "android";break;case "iOS":
    os_version = /OS (\d+)_(\d+)_?(\d+)?/.exec(appVersion);if (!os_version) {
      os_version = "";
    } else {
      os_version = os_version[1] + "." + os_version[2] + "." + (os_version[3] | 0);
    }os_name = "ios";break;}var browser$1 = { screen_size: screen_size, browser: browser, browser_version: browser_version, platform: platform, os_name: os_name, os_version: os_version, userAgent: userAgent, screen_width: screen_width, screen_height: screen_height, device_model: os_name, language: language, referrer: referrer, referrer_host: referrer_host, utm_source: urlQueryObj.utm_source, utm_medium: urlQueryObj.utm_medium, utm_campaign: urlQueryObj.utm_campaign, utm_term: urlQueryObj.utm_term, utm_content: urlQueryObj.utm_content };var StorageCache = { get: function e(r) {
    var n = 'no localStorage';if (localStorage && localStorage.getItem) {
      n = localStorage.getItem(r);
    }var t = n;try {
      if (n && typeof n === "string") {
        t = JSON.parse(n);
      }
    } catch (e) {}return t;
  }, set: function e(r, n) {
    try {
      var t = typeof n === "string" ? n : JSON.stringify(n);if (localStorage && localStorage.setItem) {
        localStorage.setItem(r, t);
      }
    } catch (e) {}
  } };var TEA_CACHE_PREFIX = "__tea_cache_";var TEA_LOGGER_PREFIX = "[tea-sdk]";var ERROR_CODE = { NO_URL_PREFIX: 4001, IMG_ON_ERROR: 4e3, IMG_CATCH_ERROR: 4002, BEACON_STATUS_FALSE: 4003, XHR_ON_ERROR: 500, RESPONSE_DATA_ERROR: 5001 };var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
};function _classCallCheck$1(e, r) {
  if (!(e instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}var Logger = function e() {
  var s = this;var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";_classCallCheck$1(this, e);this.init = function (e) {
    s.isLog = e;
  };this.info = function (e) {
    for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++) {
      n[t - 1] = arguments[t];
    }if (s.isLog) {
      var i;(i = console).log.apply(i, [s.prefix + e].concat(n));
    }
  };this.warn = function (e) {
    for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++) {
      n[t - 1] = arguments[t];
    }if (s.isLog) {
      var i;(i = console).warn.apply(i, [s.prefix + e].concat(n));
    }
  };this.error = function (e) {
    for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++) {
      n[t - 1] = arguments[t];
    }if (s.isLog) {
      var i;(i = console).error.apply(i, [s.prefix + e].concat(n));
    }
  };this.dir = function () {
    if (s.isLog) {
      var e;(e = console).dir.apply(e, arguments);
    }
  };this.table = function (e) {
    if (s.isLog) {
      console.table(e);
    }
  };this.logJSON = function (e) {
    if ((typeof e === "undefined" ? "undefined" : _typeof(e)) === "object" && s.isLog) {
      s.info("", JSON.stringify(e, null, 2));
    }
  };this.deprecated = function (e) {
    for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++) {
      n[t - 1] = arguments[t];
    }s.warn.apply(s, ["[DEPRECATED]" + e].concat(n));
  };this.throw = function (e) {
    s.error(s.prefix);throw new Error(e);
  };var n = r ? "[" + r + "]" : "";this.prefix = TEA_LOGGER_PREFIX + n;
};var logger = new Logger();var fetchTokens = function e(r, n, t, i) {
  var s = new XMLHttpRequest();s.open("POST", r, true);s.setRequestHeader("Content-Type", "application/json; charset=utf-8");s.onload = function () {
    try {
      var e = JSON.parse(s.responseText);if (t) {
        t(e);
      }
    } catch (e) {
      if (i) {
        i();
      }
    }
  };s.onerror = function () {
    if (i) {
      i();
    }
  };s.send(JSON.stringify(n));
};function _classCallCheck$2(e, r) {
  if (!(e instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}function _possibleConstructorReturn(e, r) {
  if (!e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return r && ((typeof r === "undefined" ? "undefined" : _typeof2(r)) === "object" || typeof r === "function") ? r : e;
}function _inherits(e, r) {
  if (typeof r !== "function" && r !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof r === "undefined" ? "undefined" : _typeof2(r)));
  }e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } });if (r) Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r;
}var date = new Date();var timeZoneMin = date.getTimezoneOffset();var timezone = parseInt(-timeZoneMin / 60, 10);var tz_offset = timeZoneMin * 60;var sdk_version = void 0;try {
  sdk_version = "3.2.7";
} catch (e) {
  sdk_version = "2.x";
}var ClientEnv = function (r) {
  _inherits(n, r);function n() {
    _classCallCheck$2(this, n);var e = _possibleConstructorReturn(this, r.call(this));e.initClientEnv = function () {
      e.set("os_name", browser$1.os_name);e.set("os_version", browser$1.os_version);e.set("device_model", browser$1.device_model);e.set("platform", browser$1.platform);e.set("sdk_version", sdk_version);e.set("browser", browser$1.browser);e.set("browser_version", browser$1.browser_version);e.set("language", browser$1.language);e.set("timezone", timezone);e.set("tz_offset", tz_offset);e.set("resolution", browser$1.screen_width + "x" + browser$1.screen_height);e.set("screen_width", browser$1.screen_width);e.set("screen_height", browser$1.screen_height);e.set("referrer", browser$1.referrer);e.set("referrer_host", browser$1.referrer_host);e.set("utm_source", browser$1.utm_source);e.set("utm_medium", browser$1.utm_medium);e.set("utm_campaign", browser$1.utm_campaign);e.set("utm_term", browser$1.utm_term);e.set("utm_content", browser$1.utm_content);
    };e.initClientEnv();return e;
  }return n;
}(Env);var clientEnvManager = new ClientEnv();function _classCallCheck$3(e, r) {
  if (!(e instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}var Type = function () {
  function e() {
    _classCallCheck$3(this, e);
  }e.prototype.isString = function e(r) {
    return Object.prototype.toString.call(r).slice(8, -1) === "String";
  };e.prototype.isNumber = function e(r) {
    return Object.prototype.toString.call(r).slice(8, -1) === "Number";
  };e.prototype.isBoolean = function e(r) {
    return Object.prototype.toString.call(r).slice(8, -1) === "Boolean";
  };e.prototype.isFunction = function e(r) {
    return Object.prototype.toString.call(r).slice(8, -1) === "Function";
  };e.prototype.isNull = function e(r) {
    return Object.prototype.toString.call(r).slice(8, -1) === "Null";
  };e.prototype.isUndefined = function e(r) {
    return Object.prototype.toString.call(r).slice(8, -1) === "Undefined";
  };e.prototype.isObj = function e(r) {
    return Object.prototype.toString.call(r).slice(8, -1) === "Object";
  };e.prototype.isArray = function e(r) {
    return Object.prototype.toString.call(r).slice(8, -1) === "Array";
  };e.prototype.isFalse = function e(r) {
    if (r === "" || r === undefined || r === null || r === "null" || r === "undefined" || r === 0 || r === false || r === NaN) return true;return false;
  };e.prototype.isTrue = function e(r) {
    return !this.isFalse(r);
  };e.prototype.isLowIE = function e() {
    return window.XDomainRequest;
  };return e;
}();var types = new Type();function decrypto(e, r, n) {
  if (typeof e !== "string" || typeof r !== "number" || typeof n !== "number") {
    return;
  }var t = [];var i = [];n = n <= 25 ? n : n % 25;var s = String.fromCharCode(n + 97);t = e.split(s);for (var o = 0; o < t.length; o++) {
    var a = parseInt(t[o], n);a = a * 1 ^ r;var u = String.fromCharCode(a);i.push(u);
  }var f = i.join("");return f;
}var decodeXXX = function e(r) {
  return decrypto(r, 64, 25);
};function b(e) {
  return e ? (e ^ Math.random() * 16 >> e / 4).toString(10) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
}var webid = function e() {
  return b().replace(/-/g, "").slice(0, 19);
};var _extends$1 = Object.assign || function (e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r];for (var t in n) {
      if (Object.prototype.hasOwnProperty.call(n, t)) {
        e[t] = n[t];
      }
    }
  }return e;
};function _classCallCheck$4(e, r) {
  if (!(e instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}function _possibleConstructorReturn$1(e, r) {
  if (!e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return r && ((typeof r === "undefined" ? "undefined" : _typeof2(r)) === "object" || typeof r === "function") ? r : e;
}function _inherits$1(e, r) {
  if (typeof r !== "function" && r !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof r === "undefined" ? "undefined" : _typeof2(r)));
  }e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } });if (r) Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r;
}var urlPrefix = { cn: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z4az21z1lz21z21z1bz1iz4az1az1mz1k", sg: "1fz22z22z1nz21z4mz4bz4bz21z1ez18z1jz1gz49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k", va: "1fz22z22z1nz21z4mz4bz4bz1kz18z1jz1gz24z18z49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k" };var getCookie = function e(r) {
  try {
    var n = document.cookie.match(new RegExp("(?:^|;)\\s*" + r + "=([^;]+)"));return decodeURIComponent(n ? n[1] : "");
  } catch (e) {
    return "";
  }
};var AppChannelEnv = function (e) {
  _inherits$1(r, e);function r() {
    _classCallCheck$4(this, r);var f = _possibleConstructorReturn$1(this, e.call(this));f.init = function (e) {
      var r = e.app_id,
          n = e.channel,
          t = e.log,
          i = e.channel_domain,
          s = e.name;if (typeof r !== "number") {
        throw new Error("app_id 必须是一个数字，注意检查是否是以`string`的方式传入的？");
      }f.logger = new Logger(s);f.logger.init(t);f.initConfigs(e);f.initUrls(n, i);f.setEnv("app_id", r);
    };f.initConfigs = function (e) {
      var r = e.app_id,
          n = e.disable_ssid,
          t = e.disable_webid,
          i = e.disable_sdk_monitor;f.app_id = r;f.evtDataCacheKey = TEA_CACHE_PREFIX + "events_" + r;if (n) {
        f.logger.info("ssid已禁用，设置user_unique_id不会请求ssid接口。");f.isSsidDisabled = true;
      }if (t) {
        f.logger.info("webid服务已禁用，ssid同时被禁用。将本地生成webid。");f.isWebidDisabled = true;f.isSsidDisabled = true;
      }if (i) {
        f.logger.info("SDK监控已禁用。");f.isSdkMonitorDisabled = true;
      }
    };f.initUrls = function (e, r) {
      if (e === "internal") {
        f.logger.warn("channel 的值 internal 已被废弃，已自动改为 cn。");e = "cn";
      }if (!r && !urlPrefix[e]) {
        throw new Error("channel 变量只能是 `cn`, `sg`,`va`");
      }var n = r || decodeXXX(urlPrefix[e]);n = n.replace(/\/+$/, "");f.reportUrl = n + "/v1/list";f.userTokensPrefix = "" + n;
    };f.setEnv = function (e, r) {
      if (e === "app_id") {
        f.checkUserToken(r);
      }if (e === "user_unique_id") {
        if (f.blackUuid.some(function (e) {
          return e === String(r);
        })) {
          f.logger.warn('设置了无效的值 {user_unique_id："%s"}。该操作已忽略。', r);return;
        }f.verifyTokens(r);
      }if (e === "web_id") {
        if (!r) {
          return;
        }if (!f.envInfo.user.user_unique_id || f.envInfo.user.user_unique_id && f.envInfo.user.user_unique_id === f.envInfo.user.web_id) {
          f.set("user_unique_id", r);
        }
      }f.set(e, r);
    };f.transferFromCookie = function () {
      var e = f.tokensCacheKey;var r = "tt_webid";var n = "__tea_sdk__ssid";var t = "__tea_sdk__user_unique_id";var i = getCookie(r);var s = getCookie(n);var o = getCookie(t);if (types.isLowIE()) {
        if (i) {
          var a = { web_id: i, ssid: i, user_unique_id: i };StorageCache.set(e, JSON.stringify(a));
        }return false;
      }if (i && s && o) {
        var u = { web_id: i, ssid: s, user_unique_id: o };StorageCache.set(e, JSON.stringify(u));
      }
    };f.purifyBlackUuid = function () {
      var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};if (f.blackUuid.some(function (e) {
        return e === r.user_unique_id;
      })) {
        var e = {};f.setUserTokens(e);f.logger.warn('检测到无效的用户标识，已重置用户状态。{user_unique_id: "%s"}', r.user_unique_id);return e;
      }return r;
    };f.getUserTokens = function () {
      return StorageCache.get(f.tokensCacheKey) || {};
    };f.setUserTokens = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};return StorageCache.set(f.tokensCacheKey, e);
    };f.checkUserToken = function (e) {
      var r = TEA_CACHE_PREFIX + "tokens_" + e;f.tokensCacheKey = r;f.transferFromCookie();var n = f.purifyBlackUuid(f.getUserTokens());if (n.user_unique_id && n.web_id) {
        f.envInfo.user.user_unique_id = n.user_unique_id;f.envInfo.user.web_id = n.web_id;f.envInfo.user.ssid = n.ssid || "";f.logger.info("初始化已经检测到了 webid user_unique_id，一般情况下不需要再次验证 id 了");f.unlock();
      } else {
        f.requestWebId(e);
      }
    };f.saveTokenToStorage = function (e) {
      var r = e.web_id,
          n = e.ssid,
          t = e.user_unique_id;f.setUserTokens({ web_id: r, ssid: n, user_unique_id: t });
    };f.requestWebId = function () {
      f.isRequestWebId = true;var n = function e(r) {
        var n = f.envInfo.user.web_id || r.web_id;var t = r.ssid;f.isRequestWebId = false;f.envInfo.user.ssid = t;f.envInfo.user.web_id = n;f.envInfo.user.user_unique_id = n;f.saveTokenToStorage({ web_id: n, ssid: t, user_unique_id: n });if (f.waitForVerifyTokens) {
          f.lock();f.verifyTokens(f.realUuid);
        } else {
          f.unlock();if (f.callback) {
            f.callback();
          }
        }
      };var e = function e() {
        n({ web_id: webid(), ssid: "" });
      };var r = function e() {
        var r = f.userTokensPrefix + "/v1/user/webid";fetchTokens(r, { app_id: f.app_id, url: location.href, user_agent: browser$1.userAgent, referer: browser$1.referrer, user_unique_id: "" }, function (e) {
          if (e.e !== 0) {
            f.logger.error("请求 webid 失败。请联系管理员。");
          } else {
            n(e);
          }
        }, function () {
          f.isRequestWebId = false;f.logger.error("获取 webid 失败，数据将不会被上报");
        });
      };if (f.isWebidDisabled) {
        e();
      } else {
        r();
      }
    };f.verifyTokens = function (e) {
      var r = f.tokensCacheKey;f.waitForVerifyTokens = false;f.realUuid = "" + e;if (f.isRequestWebId) {
        f.waitForVerifyTokens = true;f.logger.info("正在请求 webid，requestSsid 将会在前者请求完毕之后被调用");return false;
      }var n = f.getUserTokens();if (n.user_unique_id === f.realUuid && n.ssid && n.web_id) {
        f.logger.info("传入的 user_id/user_unique_id 与 缓存中的完全一致，无需再次请求");f.unlock();
      } else {
        f.lock();f.envInfo.user.user_unique_id = f.realUuid;var t = _extends$1({}, f.getUserTokens(), { user_unique_id: f.realUuid });StorageCache.set(r, JSON.stringify(t));if (types.isLowIE()) {
          f.unlock();return false;
        }if (f.isSsidDisabled) {
          f.unlock();if (f.callback) {
            f.callback();
          }
        } else {
          f.requestSsid();
        }
      }
    };f.requestSsid = function () {
      var n = f.getUserTokens();var e = f.userTokensPrefix + "/v1/user/ssid";fetchTokens(e, { app_id: f.app_id, web_id: n.web_id, user_unique_id: "" + n.user_unique_id }, function (e) {
        f.unlock();if (e.e !== 0) {
          f.logger.error("请求 ssid 失败~");
        } else {
          f.envInfo.user.ssid = e.ssid;var r = _extends$1({}, n, { ssid: e.ssid });f.setUserTokens(r);f.logger.info("根据 user_unique_id 更新 ssid 成功！注意：在这之前不应该有数据被发出去");if (f.callback) {
            f.callback();
          }
        }
      }, function () {
        f.unlock();f.logger.error("根据 user_unique_id 获取新 ssid 失败");
      });
    };f.setEvtParams = function (e) {
      var r = _extends$1({}, e);Object.keys(r).forEach(function (e) {
        f.evtParams[e] = r[e];
      });
    };f.mergeEnvToEvents = function (e) {
      var r = f.mergeEnv();var n = [];var t = 0;var i = void 0;e.forEach(function (e) {
        var r = !!e.params.__disable_storage__;if (typeof i === "undefined") {
          i = r;
        } else if (r !== i || n[t].length >= 5) {
          t += 1;i = !i;
        }n[t] = n[t] || [];n[t].push(e);
      });var s = n.map(function (e) {
        return { events: e.map(function (e) {
            var r = _extends$1({}, f.evtParams, e.params);delete r.__disable_storage__;return _extends$1({}, e, { params: JSON.stringify(r) });
          }), user: r.user, header: r.header, verbose: f.debugMode ? 1 : undefined, __disable_storage__: e[0].params.__disable_storage__ };
      });return s;
    };f.mergeEnv = function () {
      var e = f.get();var r = clientEnvManager.get();var n = _extends$1({}, e.user);var t = _extends$1({}, r.header.headers.custom, e.header.headers.custom);var i = _extends$1({}, r.header.headers, e.header.headers, { custom: t });var s = _extends$1({}, r.header, e.header);var o = { user: n, header: _extends$1({}, s, { headers: JSON.stringify(i) }) };return o;
    };f.evtParams = {};f.reportUrl = "";f.userTokensPrefix = "";f.isSsidDisabled = false;f.isWebidDisabled = false;f.isSdkMonitorDisabled = false;f.debugMode = false;f.blackUuid = ["null", "undefined", "0", "", "None"];f.logger = function () {};return f;
  }r.prototype.lock = function e() {
    this.isUserTokensReady = false;
  };r.prototype.unlock = function e() {
    this.isUserTokensReady = true;
  };r.prototype.enableDebugMode = function e(r) {
    this.debugMode = r;
  };return r;
}(Env);function _classCallCheck$5(e, r) {
  if (!(e instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}var MemoryCache = function e() {
  var n = this;_classCallCheck$5(this, e);this.set = function (e, r) {
    n.cache[e] = r;
  };this.get = function (e) {
    return n.cache[e];
  };this.clean = function (e) {
    n.cache[e] = undefined;
  };this.cache = {};
};var memoryCacheManager = new MemoryCache();function _classCallCheck$6(e, r) {
  if (!(e instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}var EventStorageManager = function () {
  function t(e) {
    var r = e.disable_storage,
        n = r === undefined ? false : r;_classCallCheck$6(this, t);this._isPersistent = !n;this._storage = this._isPersistent ? StorageCache : new MemoryCache();this._storageKey = "";this._data = undefined;
  }t.prototype.setStorageKey = function e(r) {
    this._storageKey = r;
  };t.prototype.getAllEvents = function e() {
    var n = this.getData();Object.keys(n).reduce(function (e, r) {
      return e.concat(n[r] || []);
    }, []);
  };t.prototype.getData = function e() {
    this._checkIsDataInit();return this._data;
  };t.prototype.add = function e(r) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];this._checkIsDataInit();if (n.length !== 0) {
      this._data[r] = n;this._save();
    }
  };t.prototype.delete = function e(r) {
    this._checkIsDataInit();if (this._data[r]) {
      delete this._data[r];this._save();
    }
  };t.prototype._checkIsDataInit = function e() {
    if (typeof this._data === "undefined") {
      try {
        var r = this._getDataFromStorage();if (types.isArray(r)) {
          var n;this._data = (n = {}, n[webid()] = r, n);this._save();
        } else {
          this._data = r;
        }
      } catch (e) {
        this._data = {};
      }
    }
  };t.prototype._checkStorageKey = function e() {
    if (!this._storageKey) {
      throw new Error("must call setStorageKey('xxx') first");
    }
  };t.prototype._getDataFromStorage = function e() {
    this._checkStorageKey();return this._storage.get(this._storageKey) || {};
  };t.prototype._save = function e() {
    this._checkStorageKey();this._storage.set(this._storageKey, this._data);
  };return t;
}();var encodePayload = function e(r) {
  var n = "";for (var t in r) {
    if (r.hasOwnProperty(t)) {
      n += "&" + t + "=" + encodeURIComponent(JSON.stringify(r[t]));
    }
  }n = n[0] === "&" ? n.slice(1) : n;return n;
};var sendByImg = function e(r, n) {
  try {
    var t = r.split("v1")[0];n.forEach(function (e) {
      var r = encodePayload(e);var n = new Image(1, 1);n.onload = function () {
        n = null;
      };n.onerror = function () {
        n = null;
      };n.src = t + "/v1/gif?" + r;
    });
  } catch (e) {}
};var postSdkLog = function e(r, n) {
  if (window.XDomainRequest) {
    return sendByImg(r, n);
  }var t = new XMLHttpRequest();t.open("POST", r + "?rdn=" + Math.random(), true);t.onload = function () {};t.onerror = function () {
    t.abort();
  };t.send(JSON.stringify(n));
};var encodePayload$1 = function e(r) {
  var n = "";for (var t in r) {
    if (r.hasOwnProperty(t)) {
      n += "&" + t + "=" + encodeURIComponent(JSON.stringify(r[t]));
    }
  }n = n[0] === "&" ? n.slice(1) : n;return n;
};var sendByImg$1 = function e(t, i, s, o) {
  try {
    var a = t.split("v1")[0];if (!a) {
      o(t, i, ERROR_CODE.NO_URL_PREFIX);return;
    }i.forEach(function (e) {
      var r = encodePayload$1(e);var n = new Image(1, 1);n.onload = function () {
        n = null;s();
      };n.onerror = function () {
        n = null;o(t, i, ERROR_CODE.IMG_ON_ERROR);
      };n.src = a + "/v1/gif?" + r;
    });
  } catch (e) {
    o(t, i, ERROR_CODE.IMG_CATCH_ERROR, e.message);
  }
};var request = function e(r) {
  var n = r.url,
      t = r.data,
      i = r.success,
      s = r.fail,
      o = r.notSure,
      a = r.isUnload;var u = t;if (window.XDomainRequest) {
    sendByImg$1(n, u, i, s);return;
  }if (a) {
    if (window.navigator && window.navigator.sendBeacon) {
      o();var f = window.navigator.sendBeacon(n, JSON.stringify(u));if (f) {
        i();
      } else {
        s(n, t, ERROR_CODE.BEACON_STATUS_FALSE);
      }return;
    }sendByImg$1(n, u, i, s);return;
  }var c = new XMLHttpRequest();c.open("POST", n + "?rdn=" + Math.random(), true);c.onload = function () {
    i(n, u, c.responseText);
  };c.onerror = function () {
    c.abort();s(n, u, ERROR_CODE.XHR_ON_ERROR);
  };c.send(JSON.stringify(u));
};function _classCallCheck$7(e, r) {
  if (!(e instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}var EventSender = function e(r) {
  var c = this;_classCallCheck$7(this, e);this.send = function (e) {
    var r = e.url,
        n = e.data,
        a = e.success,
        i = e.fail,
        u = e.eventError,
        t = e.notSure,
        s = e.isUnload;request({ url: r, data: n, success: function e(r, n, t) {
        a();try {
          var i = JSON.parse(t);var s = i.e;if (s !== 0) {
            var o = "未知错误";if (s === -2) {
              o = "事件格式错误！请检查字段类型是否正确。";
            }c.logger.error("数据上报失败！", "错误码：" + s + "。错误信息：" + o);u(n, s);sdkMonitorOnError(r, n, s);
          }
        } catch (e) {
          sdkMonitorOnError(r, n, ERROR_CODE.RESPONSE_DATA_ERROR);
        }
      }, fail: function e(r, n, t) {
        c.logger.error("数据上报失败！", "错误码：" + t);i(n, t);sdkMonitorOnError(r, n, t);
      }, notSure: t, isUnload: s });if (!c.isSdkMonitorDisabled && !c.isSdkOnLoadEventReady) {
      c.isSdkOnLoadEventReady = true;try {
        var o = n[0].header;var f = n[0].user;sdkMonitorOnload(r, { app_id: o.app_id, app_name: o.app_name, sdk_version: o.sdk_version, web_id: f.web_id });
      } catch (e) {}
    }
  };this.logger = r.logger || logger;this.isSdkOnLoadEventReady = false;this.isSdkMonitorDisabled = false;
};var sdkMonitorOnload = function e(r, n) {
  try {
    var t = { event: "onload", params: JSON.stringify({ app_id: n.app_id, app_name: n.app_name || "", sdk_version: n.sdk_version }), local_time_ms: Date.now() };var i = { events: [t], user: { user_unique_id: n.web_id }, header: { app_id: 1338 } };setTimeout(function () {
      postSdkLog(r, [i]);
    }, 16);
  } catch (e) {}
};var sdkMonitorOnError = function e(r, n, t) {
  try {
    var i = n[0].user;var s = n[0].header;var o = [];n.forEach(function (e) {
      e.events.forEach(function (e) {
        o.push(e);
      });
    });var a = o.map(function (e) {
      return { event: "on_error", params: JSON.stringify({ error_code: t, app_id: s.app_id, app_name: s.app_name || "", error_event: e.event, local_time_ms: e.local_time_ms, tea_event_index: Date.now(), params: e.params, header: JSON.stringify(s), user: JSON.stringify(i) }), local_time_ms: Date.now() };
    });var u = { events: a, user: { user_unique_id: i.user_unique_id }, header: { app_id: 1338 } };setTimeout(function () {
      postSdkLog(r, [u]);
    }, 16);
  } catch (e) {}
};function _classCallCheck$8(e, r) {
  if (!(e instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}function _possibleConstructorReturn$2(e, r) {
  if (!e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return r && ((typeof r === "undefined" ? "undefined" : _typeof2(r)) === "object" || typeof r === "function") ? r : e;
}function _inherits$2(e, r) {
  if (typeof r !== "function" && r !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof r === "undefined" ? "undefined" : _typeof2(r)));
  }e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } });if (r) Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r;
}var AppChannel = function (u) {
  _inherits$2(f, u);function f(e) {
    _classCallCheck$8(this, f);var o = _possibleConstructorReturn$2(this, u.call(this));o.addListener = function () {
      window.addEventListener("unload", function () {
        o.report(true);
      }, false);window.addEventListener("beforeunload", function () {
        o.report(true);
      }, false);document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "hidden") {
          o.report(true);
        }
      }, false);
    };o.setReady = function (e) {
      o.isReady = e;o.eventSender.isSdkMonitorDisabled = o.isSdkMonitorDisabled;o.checkAndSendCachedStorageEvents();o.report();
    };o.eventReportTimer = null;o.event = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var n = memoryCacheManager.get(o.evtDataCacheKey) || [];var t = r ? [].concat(e, n) : [].concat(n, e);memoryCacheManager.set(o.evtDataCacheKey, t);if (t.length >= 5) {
        o.report();
      } else {
        if (o.eventReportTimer) {
          clearTimeout(o.eventReportTimer);
        }o.eventReportTimer = setTimeout(function () {
          o.report();o.eventReportTimer = null;
        }, o.waitForBatchTime);
      }
    };o.report = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;if (!o.isUserTokensReady) {
        return false;
      }if (!o.isReady) {
        return false;
      }var r = memoryCacheManager.get(o.evtDataCacheKey) || [];memoryCacheManager.clean(o.evtDataCacheKey);var n = o.mergeEnvToEvents(r);o.sendData(n, e);
    };o.sendData = function (e, n) {
      var t = [];var i = 0;var s = void 0;e.forEach(function (e) {
        var r = !!e.__disable_storage__;if (typeof s === "undefined") {
          s = r;
        } else if (r !== s || t[i].length >= 5) {
          i += 1;s = !s;
        }t[i] = t[i] || [];t[i].push(e);
      });t.forEach(function (e) {
        var r = webid();if (!e[0].__disable_storage__) {
          o.eventStorage.add(r, e);
        }o._sendData(r, e, n);
      });
    };o.checkAndSendCachedStorageEvents = function () {
      var r = o.eventStorage.getData();var e = Object.keys(r);if (e.length > 0) {
        e.forEach(function (e) {
          o._sendData(e, r[e]);
        });
      }
    };o._sendData = function (r, e, n) {
      o.isReporting = true;var t = function e() {
        o.isReporting = false;
      };o.eventSender.send({ url: o.reportUrl, data: e, success: function e() {
          t();o.sendDataSuccess(r);
        }, fail: function e(r, n) {
          t();o.reportErrorCallback(r, n);setTimeout(function () {
            o.report();
          }, 3e3);
        }, eventError: function e(r, n) {
          o.reportErrorCallback(r, n);
        }, notSure: t, isUnload: n });
    };o.sendDataSuccess = function (e) {
      o.eventStorage.delete(e);o.report();
    };var r = e.log,
        n = e.disable_storage,
        t = e.max_batch_num,
        i = t === undefined ? 5 : t,
        s = e.batch_time,
        a = s === undefined ? 30 : s;o.init(e);o.maxBatchNum = i;o.waitForBatchTime = a;o.isReady = false;o.addListener();o.enableDebugMode(!!r);o.eventStorage = new EventStorageManager({ disable_storage: n });o.eventStorage.setStorageKey(o.evtDataCacheKey);o.eventSender = new EventSender({ logger: o.logger });o.reportErrorCallback = function () {};return o;
  }return f;
}(AppChannelEnv);var _extends$2 = Object.assign || function (e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r];for (var t in n) {
      if (Object.prototype.hasOwnProperty.call(n, t)) {
        e[t] = n[t];
      }
    }
  }return e;
};function _classCallCheck$9(e, r) {
  if (!(e instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}var getEventIndex = function () {
  var e = +Date.now() + Number(("" + Math.random()).slice(2, 8));return function () {
    e += 1;return e;
  };
}();var preprocessEvent = function e(r, n) {
  var t = /^event\./;var i = r;if (t.test(r)) {
    i = r.slice(6);
  }var s = n;if (!types.isObj(s)) {
    s = {};
  }s.event_index = getEventIndex();var o = { event: i, params: s, local_time_ms: +new Date() };return o;
};var Collector = function e(r) {
  var u = this;_classCallCheck$9(this, e);this.init = function (e) {
    if (!types.isObj(e)) {
      throw new Error("init 的参数必须是Object类型");
    }u.logger.init(e.log);u.channel = new AppChannel(_extends$2({}, e, { name: u.name }));u.channel.callback = function () {
      if (u.callbackSend) {
        u.start();
      }
    };
  };this.config = function (e) {
    if (!types.isObj(e)) {
      u.logger.throw("config 参数必须是 {} 的格式");
    }if (e.log) {
      u.logger.init(true);u.channel.enableDebugMode(true);e.log = null;
    }var r = Object.keys(e);if (!r.length) {
      return false;
    }for (var n = r, t = Array.isArray(n), i = 0, n = t ? n : n[Symbol.iterator]();;) {
      var s;if (t) {
        if (i >= n.length) break;s = n[i++];
      } else {
        i = n.next();if (i.done) break;s = i.value;
      }var o = s;var a = e[o];switch (o) {case "evtParams":
          u.channel.setEvtParams(a);break;case "disable_ssid":
          u.logger.deprecated("(disable_ssid)请通过init函数来设置。");if (a) {
            u.logger.info("ssid已禁用，设置user_unique_id不会请求ssid接口。");u.channel.isSsidDisabled = a;
          }break;case "disable_auto_pv":
          if (a) {
            u.logger.info("已禁止默认上报predefine_pageview事件，需手动上报。");u._autoSendPV = false;
          }break;case "_staging_flag":
          if ("" + a === "1") {
            u.logger.info("根据_staging_flag设置，数据将会上报到stag 表。");
          }u.channel.setEvtParams({ _staging_flag: Number(a) });break;case "reportErrorCallback":
          if (typeof a === "function") {
            u.channel.reportErrorCallback = a;
          }break;default:
          u.channel.setEnv(o, a);}
    }
  };this.send = function () {
    u.start();
  };this.start = function () {
    if (u.channel.isUserTokensReady) {
      if (u._isSendFuncCalled) {
        return;
      }u._isSendFuncCalled = true;u.logger.info("看到本提示，意味着用户信息已完全就绪，上报通道打开。用户标识如下：");u.logger.logJSON(u.channel.get().user);if (u._autoSendPV) {
        u.predefinePageView();
      }u.channel.setReady(true);
    } else {
      u.callbackSend = true;
    }
  };this.predefinePageView = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var r = { title: document.title || location.pathname, url: location.href, url_path: location.pathname };var n = _extends$2({}, r, e);u.event("predefine_pageview", n, true);
  };this.event = function () {
    for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) {
      r[n] = arguments[n];
    }var t = types.isBoolean(r[r.length - 1]);var i = t ? r[r.length - 1] : false;var s = t ? r.slice(0, r.length - 1) : r;var o = s[0];var a = [];if (!types.isArray(o)) {
      a[0] = s;
    } else {
      a = s;
    }a = a.map(function (e) {
      return preprocessEvent.apply(undefined, e);
    });u.channel.event(a, i);
  };this._isSendFuncCalled = false;this._autoSendPV = true;this.name = r;this.logger = new Logger(r);
};Collector.exportMethods = ["init", "config", "send", "start", "predefinePageView"];function _classCallCheck$a(e, r) {
  if (!(e instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}var CollectorAsync = function e(r) {
  var o = this;_classCallCheck$a(this, e);this._exportCollect = function () {
    for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) {
      r[n] = arguments[n];
    }if (o._isQueueProcessed) {
      o._executeCmd.apply(o, r);return;
    }o.cmdQueue.push(r);o._processCmdQueue();
  };this._processCmdQueue = function () {
    if (o.cmdQueue.length === 0) {
      return;
    }var e = function e(r, t, i) {
      var s = -1;r.forEach(function (e, r) {
        var n = typeof i !== "undefined" ? e[i] : e;if (n === t) {
          s = r;
        }
      });return s;
    };var n = e(o.cmdQueue, "init", "0");if (n !== -1) {
      o._isQueueProcessed = true;o._executeCmd.apply(o, o.cmdQueue[n]);o.cmdQueue.forEach(function (e, r) {
        if (r !== n) {
          o._executeCmd.apply(o, e);
        }
      });o.cmdQueue = [];
    }
  };this._executeCmd = function () {
    for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) {
      r[n] = arguments[n];
    }var t = r[0];if (Collector.exportMethods.indexOf(t) > -1) {
      var i;(i = o.colloctor)[t].apply(i, r.slice(1));
    } else {
      var s;(s = o.colloctor).event.apply(s, r);
    }
  };this.name = r || "Collector" + +new Date();this.cmdQueue = [];this.colloctor = new Collector(this.name);this._isQueueProcessed = false;this._processCmdQueue();this._exportCollect.init = this._exportCollect.bind(this, "init");this._exportCollect.config = this._exportCollect.bind(this, "config");this._exportCollect.send = this._exportCollect.bind(this, "send");this._exportCollect.start = this._exportCollect.bind(this, "start");this._exportCollect.predefinePageView = this._exportCollect.bind(this, "predefinePageView");return this._exportCollect;
};exports.default = CollectorAsync;
module.exports = exports["default"];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _volume = __webpack_require__(38);

var _volume2 = _interopRequireDefault(_volume);

var _start = __webpack_require__(39);

var _start2 = _interopRequireDefault(_start);

var _screenShot = __webpack_require__(40);

var _screenShot2 = _interopRequireDefault(_screenShot);

var _rotate = __webpack_require__(41);

var _rotate2 = _interopRequireDefault(_rotate);

var _replay = __webpack_require__(42);

var _replay2 = _interopRequireDefault(_replay);

var _reload = __webpack_require__(43);

var _reload2 = _interopRequireDefault(_reload);

var _playNext = __webpack_require__(44);

var _playNext2 = _interopRequireDefault(_playNext);

var _play = __webpack_require__(45);

var _play2 = _interopRequireDefault(_play);

var _pip = __webpack_require__(46);

var _pip2 = _interopRequireDefault(_pip);

var _pc = __webpack_require__(47);

var _pc2 = _interopRequireDefault(_pc);

var _mobile = __webpack_require__(48);

var _mobile2 = _interopRequireDefault(_mobile);

var _memoryPlay = __webpack_require__(49);

var _memoryPlay2 = _interopRequireDefault(_memoryPlay);

var _logger = __webpack_require__(50);

var _logger2 = _interopRequireDefault(_logger);

var _localPreview = __webpack_require__(51);

var _localPreview2 = _interopRequireDefault(_localPreview);

var _i18n = __webpack_require__(52);

var _i18n2 = _interopRequireDefault(_i18n);

var _fullscreen = __webpack_require__(53);

var _fullscreen2 = _interopRequireDefault(_fullscreen);

var _errorRetry = __webpack_require__(54);

var _errorRetry2 = _interopRequireDefault(_errorRetry);

var _download = __webpack_require__(55);

var _download2 = _interopRequireDefault(_download);

var _definition = __webpack_require__(56);

var _definition2 = _interopRequireDefault(_definition);

var _danmu = __webpack_require__(57);

var _danmu2 = _interopRequireDefault(_danmu);

var _cssFullscreen = __webpack_require__(58);

var _cssFullscreen2 = _interopRequireDefault(_cssFullscreen);

var _collect = __webpack_require__(7);

var _collect2 = _interopRequireDefault(_collect);

var _skin = __webpack_require__(59);

var _skin2 = _interopRequireDefault(_skin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Controls = {};

function _buildTree(v, p, a) {
  var o = v;
  p.map(function (_, i) {
    o[_] = i == p.length - 1 ? a : o[_] || {};
    o = o[_];
  });
}

_buildTree(Controls, ['controls\\collect'], _collect2.default);

_buildTree(Controls, ['controls\\cssFullscreen'], _cssFullscreen2.default);

_buildTree(Controls, ['controls\\danmu'], _danmu2.default);

_buildTree(Controls, ['controls\\definition'], _definition2.default);

_buildTree(Controls, ['controls\\download'], _download2.default);

_buildTree(Controls, ['controls\\errorRetry'], _errorRetry2.default);

_buildTree(Controls, ['controls\\fullscreen'], _fullscreen2.default);

_buildTree(Controls, ['controls\\i18n'], _i18n2.default);

_buildTree(Controls, ['controls\\localPreview'], _localPreview2.default);

_buildTree(Controls, ['controls\\logger'], _logger2.default);

_buildTree(Controls, ['controls\\memoryPlay'], _memoryPlay2.default);

_buildTree(Controls, ['controls\\mobile'], _mobile2.default);

_buildTree(Controls, ['controls\\pc'], _pc2.default);

_buildTree(Controls, ['controls\\pip'], _pip2.default);

_buildTree(Controls, ['controls\\play'], _play2.default);

_buildTree(Controls, ['controls\\playNext'], _playNext2.default);

_buildTree(Controls, ['controls\\reload'], _reload2.default);

_buildTree(Controls, ['controls\\replay'], _replay2.default);

_buildTree(Controls, ['controls\\rotate'], _rotate2.default);

_buildTree(Controls, ['controls\\screenShot'], _screenShot2.default);

_buildTree(Controls, ['controls\\start'], _start2.default);

_buildTree(Controls, ['controls\\volume'], _volume2.default);

exports.default = _player2.default;
module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventEmitter = __webpack_require__(11);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

var _error = __webpack_require__(4);

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Proxy = function () {
  function Proxy(options) {
    _classCallCheck(this, Proxy);

    this.logParams = {
      bc: 0,
      bu_acu_t: 0,
      played: []
    };
    this._hasStart = false;
    this.videoConfig = {
      draggable: true,
      classid: 'clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921',
      codebase: 'http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab',
      mediaType: options.mediaType || 'object'
    };
    if (options.useCORS) {
      this.videoConfig = _util2.default.deepCopy({
        useCORS: true,
        crossOrigin: 'Anonymous'
      }, this.videoConfig);
    }
    options.autoplay = false;
    if (options.loop) {
      this.videoConfig.loop = 'loop';
    }
    if (options.url) {
      this.channelNum = options.url.channels.length;
    }
    var totalDuration = 0;
    var mainFiles = options.url.channels[0].files;
    for (var i = 0; i < mainFiles.length; i++) {
      totalDuration += parseFloat(mainFiles[i].totaltime);
    }
    this.totalDuration = totalDuration;
    this.currFileNum = -1;
    this.mediaChanging = false;
    var textTrackDom = '';
    this.textTrackShowDefault = true;
    if (options.textTrack && Array.isArray(options.textTrack) && (navigator.userAgent.indexOf('Chrome') > -1 || navigator.userAgent.indexOf('Firefox') > -1)) {
      if (options.textTrack.length > 0 && !options.textTrack.some(function (track) {
        return track.default;
      })) {
        options.textTrack[0].default = true;
        this.textTrackShowDefault = false;
      }
      options.textTrack.some(function (track) {
        if (track.src && track.label && track.default) {
          textTrackDom += '<track src="' + track.src + '" ';
          if (track.kind) {
            textTrackDom += 'kind="' + track.kind + '" ';
          }
          textTrackDom += 'label="' + track.label + '" ';
          if (track.srclang) {
            textTrackDom += 'srclang="' + track.srclang + '" ';
          }
          textTrackDom += (track.default ? 'default' : '') + '>';
          return true;
        }
      });
      this.videoConfig.crossorigin = 'anonymous';
    }
    if (options.textTrackStyle) {
      var style = document.createElement('style');
      this.textTrackStyle = style;
      document.head.appendChild(style);
      var styleStr = '';
      for (var index in options.textTrackStyle) {
        styleStr += index + ': ' + options.textTrackStyle[index] + ';';
      }
      var wrap = options.id ? '#' + options.id : options.el.id ? '#' + options.el.id : '.' + options.el.className;
      if (style.sheet.insertRule) {
        style.sheet.insertRule(wrap + ' video::cue { ' + styleStr + ' }', 0);
      } else if (style.sheet.addRule) {
        style.sheet.addRule(wrap + ' video::cue', styleStr);
      }
    }
    var innerHTML = '<param name="autostart" value="true"/>' + '<param name="controls" value="false"/>' + '<param name="allowfullscreen" value="false"/>';
    for (var _i = 0; _i < this.channelNum; _i++) {
      var videoName = 'video' + (_i === 0 ? '' : _i);
      this.videoConfig['id'] = videoName;
      this[videoName] = _util2.default.createDom(this.videoConfig.mediaType, innerHTML, this.videoConfig, videoName);
    }

    if (!this.textTrackShowDefault && textTrackDom) {
      var trackDoms = this.video.getElementsByTagName('Track');
      trackDoms[0].track.mode = 'hidden';
    }

    if (options.autoplay) {
      this.video.autoplay = true;
      if (options.autoplayMuted) {
        this.video.muted = true;
      }
    }
    this.ev = ['play', 'playing', 'pause', 'ended', 'error', 'seeking', 'seeked', 'timeupdate', 'waiting', 'canplay', 'canplaythrough', 'durationchange', 'volumechange', 'loadeddata'].map(function (item) {
      return _defineProperty({}, item, 'on' + item.charAt(0).toUpperCase() + item.slice(1));
    });
    (0, _eventEmitter2.default)(this);

    this._interval = {};
    var lastBuffer = '0,0';
    var self = this;

    this.ev.forEach(function (item) {
      self.evItem = Object.keys(item)[0];
      var name = Object.keys(item)[0];
      self.video.addEventListener(Object.keys(item)[0], function () {
        // fix when video destroy called and video reload
        if (!self.logParams) {
          return;
        }
        if (name === 'play') {
          self.hasStart = true;
        } else if (name === 'waiting') {
          self.logParams.bc++;
          self.inWaitingStart = new Date().getTime();
        } else if (name === 'playing') {
          if (self.inWaitingStart) {
            self.logParams.bu_acu_t += new Date().getTime() - self.inWaitingStart;
            self.inWaitingStart = undefined;
          }
        } else if (name === 'loadeddata') {
          self.logParams.played.push({
            begin: 0,
            end: -1
          });
        } else if (name === 'seeking') {
          self.logParams.played.push({
            begin: self.video.currentTime,
            end: -1
          });
        } else if (self && self.logParams && self.logParams.played && name === 'timeupdate') {
          if (self.logParams.played.length < 1) {
            self.logParams.played.push({
              begin: self.video.currentTime,
              end: -1
            });
          }
          self.logParams.played[self.logParams.played.length - 1].end = self.video.currentTime;
        }
        if (name === 'error') {
          // process the error
          self._onError(name);
        } else {
          self.emit(name, self);
        }

        if (self.hasOwnProperty('_interval')) {
          if (['ended', 'error', 'timeupdate'].indexOf(name) < 0) {
            clearInterval(self._interval['bufferedChange']);
            _util2.default.setInterval(self, 'bufferedChange', function () {
              if (self.video && self.video.buffered) {
                var curBuffer = [];
                for (var _i2 = 0, len = self.video.buffered.length; _i2 < len; _i2++) {
                  curBuffer.push([self.video.buffered.start(_i2), self.video.buffered.end(_i2)]);
                }
                if (curBuffer.toString() !== lastBuffer) {
                  lastBuffer = curBuffer.toString();
                  self.emit('bufferedChange', curBuffer);
                }
              }
            }, 200);
          } else {
            if (name !== 'timeupdate') {
              _util2.default.clearInterval(self, 'bufferedChange');
            }
          }
        }
      }, false);
    });
  }
  /**
   * 错误监听处理逻辑抽离
   */


  _createClass(Proxy, [{
    key: '_onError',
    value: function _onError(name) {
      if (this.video && this.video.error) {
        this.emit(name, new _error2.default('other', this.currentTime, this.duration, this.networkState, this.readyState, this.currentSrc, this.src, this.ended, {
          line: 162,
          msg: this.error,
          handle: 'Constructor'
        }, this.video.error.code, this.video.error));
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.textTrackStyle) {
        this.textTrackStyle.parentNode.removeChild(this.textTrackStyle);
      }
    }
  }, {
    key: 'play',
    value: function play() {
      var _this = this;
      for (var i = 0; i < this.channelNum; i++) {
        var objectId = 'video' + (i === 0 ? '' : i);
        var vlcObj = document.getElementById(objectId);
        if (vlcObj) {
          console.log('开始播放。。。。。。。');
          if (_this.currFileNum > -1) {
            console.log('开始播放。。。。。。。1');
            vlcObj.playlist.playItem(this.currFileNum);
          } else {
            console.log('开始播放。。。。。。。2');
            vlcObj.playlist.play();
          }
        }
        setTimeout(function () {
          _this.emit('playStarted');
        }, 1000);
      }
    }
  }, {
    key: 'pause',
    value: function pause() {
      for (var i = 0; i < this.channelNum; i++) {
        var objectId = 'video' + (i === 0 ? '' : i);
        var vlcObj = document.getElementById(objectId);
        if (vlcObj) {
          // console.log('暂停了。。。。。。。')
          vlcObj.playlist.pause();
        }
      }
    }
  }, {
    key: 'canPlayType',
    value: function canPlayType(type) {
      return this.video.canPlayType(type);
    }
  }, {
    key: 'getBufferedRange',
    value: function getBufferedRange() {
      var range = [0, 0];
      var video = this.video;
      var buffered = video.buffered;
      var currentTime = video.currentTime;
      if (buffered) {
        for (var i = 0, len = buffered.length; i < len; i++) {
          range[0] = buffered.start(i);
          range[1] = buffered.end(i);
          if (range[0] <= currentTime && currentTime <= range[1]) {
            break;
          }
        }
      }
      if (range[0] - currentTime <= 0 && currentTime - range[1] <= 0) {
        return range;
      } else {
        return [0, 0];
      }
    }
  }, {
    key: 'hasStart',
    get: function get() {
      return this._hasStart;
    },
    set: function set(bool) {
      if (typeof bool === 'boolean' && bool === true && !this._hasStart) {
        this._hasStart = true;
        this.emit('hasstart');
      }
    }
  }, {
    key: 'autoplay',
    set: function set(isTrue) {
      this.video.autoplay = isTrue;
    },
    get: function get() {
      return this.video.autoplay;
    }
  }, {
    key: 'buffered',
    get: function get() {
      return this.video.buffered;
    }
  }, {
    key: 'crossOrigin',
    get: function get() {
      return this.video.crossOrigin;
    },
    set: function set(isTrue) {
      this.video.crossOrigin = isTrue;
    }
  }, {
    key: 'currentSrc',
    get: function get() {
      return JSON.stringify(this.config.url);
    },
    set: function set(src) {
      // this.config.url = src
    }
  }, {
    key: 'currentTime',
    get: function get() {
      var tmpTime = 0;
      var mainFiles = this.config.url.channels[0].files;
      // console.log('this.currFileNum:' + this.currFileNum)
      for (var i = 0; i < this.currFileNum; i++) {
        tmpTime += parseFloat(mainFiles[i].totaltime);
      }
      // console.log('currTime:::' + (tmpTime + this.video.currentTime))
      var vlcObj = document.getElementById('video');
      if (vlcObj) {
        return tmpTime + vlcObj.input.time / 1000;
      } else {
        return 0;
      }
    },
    set: function set(time) {
      if (typeof isFinite === 'function' && !isFinite(time)) return;
      var toFileNum = 0;
      var toCurrTime = 0;
      var tmpTime = 0;
      var mainFiles = this.config.url.channels[0].files;
      for (var i = 0; i < mainFiles.length; i++) {
        tmpTime += parseFloat(mainFiles[i].totaltime);
        if (tmpTime > time) {
          toFileNum = i;
          toCurrTime = time - (tmpTime - parseFloat(mainFiles[i].totaltime));
          break;
        }
      }
      // console.log('time::' + time)
      // console.log('currFileNum::' + this.currFileNum)
      // console.log('toFileNum::' + toFileNum)
      // console.log('toCurrTime::' + toCurrTime)
      if (toFileNum === this.currFileNum) {
        // console.log('分片内。。。')
        for (var _i3 = 0; _i3 < this.channelNum; _i3++) {
          var fileName = 'video' + (_i3 === 0 ? '' : _i3);
          var vlcObj = document.getElementById(fileName);
          if (vlcObj) {
            vlcObj.input.time = toCurrTime * 1000;
          }
        }
        this.emit('currentTimeChange');
      } else {
        // console.log('跨分片。。。')
        this.currFileNum = toFileNum;
        this.mediaChanging = true;
        // console.log('toFileNum:::::' + toFileNum)
        for (var _i4 = 0; _i4 < this.channelNum; _i4++) {
          var _fileName = 'video' + (_i4 === 0 ? '' : _i4);
          var _vlcObj = document.getElementById(_fileName);
          if (_vlcObj) {
            _vlcObj.playlist.playItem(toFileNum);
            _vlcObj.input.time = toCurrTime * 1000;
          }
        }
      }
    }
  }, {
    key: 'defaultMuted',
    get: function get() {
      return this.video.defaultMuted;
    },
    set: function set(isTrue) {
      this.video.defaultMuted = isTrue;
    }
  }, {
    key: 'duration',
    get: function get() {
      return this.totalDuration;
    }
  }, {
    key: 'ended',
    get: function get() {
      return this.video.ended;
    }
  }, {
    key: 'error',
    get: function get() {
      var err = this.video.error;
      if (!err) {
        return null;
      }
      var status = [{
        en: 'MEDIA_ERR_ABORTED',
        cn: '取回过程被用户中止'
      }, {
        en: 'MEDIA_ERR_NETWORK',
        cn: '当下载时发生错误'
      }, {
        en: 'MEDIA_ERR_DECODE',
        cn: '当解码时发生错误'
      }, {
        en: 'MEDIA_ERR_SRC_NOT_SUPPORTED',
        cn: '不支持音频/视频'
      }];
      return this.lang ? this.lang[status[err.code - 1].en] : status[err.code - 1].en;
    }
  }, {
    key: 'loop',
    get: function get() {
      return this.video.loop;
    },
    set: function set(isTrue) {
      this.video.loop = isTrue;
    }
  }, {
    key: 'muted',
    get: function get() {
      return this.video.muted;
    },
    set: function set(isTrue) {
      for (var i = 0; i < this.channelNum; i++) {
        var videoName = 'video' + (i === 0 ? '' : i);
        if (i === 0) {
          this[videoName].muted = isTrue;
        } else {
          this[videoName].muted = true;
        }
      }
    }
  }, {
    key: 'networkState',
    get: function get() {
      var status = [{
        en: 'NETWORK_EMPTY',
        cn: '音频/视频尚未初始化'
      }, {
        en: 'NETWORK_IDLE',
        cn: '音频/视频是活动的且已选取资源，但并未使用网络'
      }, {
        en: 'NETWORK_LOADING',
        cn: '浏览器正在下载数据'
      }, {
        en: 'NETWORK_NO_SOURCE',
        cn: '未找到音频/视频来源'
      }];
      return this.lang ? this.lang[status[this.video.networkState].en] : status[this.video.networkState].en;
    }
  }, {
    key: 'paused',
    get: function get() {
      var ret = false;
      var vlcObj = document.getElementById('video');
      if (vlcObj) {
        ret = vlcObj.input.state === 4 || vlcObj.input.state === 6;
      }
      return ret;
    }
  }, {
    key: 'playbackRate',
    get: function get() {
      return this.video.playbackRate;
    },
    set: function set(rate) {
      this.video.playbackRate = rate;
    }
  }, {
    key: 'played',
    get: function get() {
      return this.video.played;
    }
  }, {
    key: 'preload',
    get: function get() {
      return this.video.preload;
    },
    set: function set(isTrue) {
      this.video.preload = isTrue;
    }
  }, {
    key: 'readyState',
    get: function get() {
      var status = [{
        en: 'HAVE_NOTHING',
        cn: '没有关于音频/视频是否就绪的信息'
      }, {
        en: 'HAVE_METADATA',
        cn: '关于音频/视频就绪的元数据'
      }, {
        en: 'HAVE_CURRENT_DATA',
        cn: '关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒'
      }, {
        en: 'HAVE_FUTURE_DATA',
        cn: '当前及至少下一帧的数据是可用的'
      }, {
        en: 'HAVE_ENOUGH_DATA',
        cn: '可用数据足以开始播放'
      }];
      return this.lang ? this.lang[status[this.video.readyState].en] : status[this.video.readyState];
    }
  }, {
    key: 'seekable',
    get: function get() {
      return this.video.seekable;
    }
  }, {
    key: 'seeking',
    get: function get() {
      return this.video.seeking;
    }
  }, {
    key: 'src',
    get: function get() {
      return this.config.url;
    },
    set: function set(url) {
      // console.log('this.currFileNum::::' + this.currFileNum)
      var self = this;
      if (!_util2.default.hasClass(this.root, 'xgplayer-ended')) {
        this.emit('urlchange', JSON.parse(JSON.stringify(self.logParams)));
      }
      this.logParams = {
        bc: 0,
        bu_acu_t: 0,
        played: [],
        pt: new Date().getTime(),
        vt: new Date().getTime(),
        vd: 0
      };
      for (var i = 0; i < this.channelNum; i++) {
        this['video' + (i === 0 ? '' : i)].pause();
      }
      var urlArr = url.channels;
      for (var _i5 = 0; _i5 < this.channelNum; _i5++) {
        this['video' + (_i5 === 0 ? '' : _i5)].src = urlArr[_i5].files[this.currFileNum].url;
      }
      this.emit('srcChange');
      this.logParams.playSrc = url;
      this.logParams.pt = new Date().getTime();
      this.logParams.vt = this.logParams.pt;
      function ldFunc() {
        self.logParams.vt = new Date().getTime();
        if (self.logParams.pt > self.logParams.vt) {
          self.logParams.pt = self.logParams.vt;
        }
        self.logParams.vd = self.video.duration;
        self.off('loadeddata', ldFunc);
      }
      this.once('loadeddata', ldFunc);
    }
  }, {
    key: 'poster',
    set: function set(posterUrl) {
      var poster = _util2.default.findDom(this.root, '.xgplayer-poster');
      if (poster) {
        poster.style.backgroundImage = 'url(' + posterUrl + ')';
      }
    }
  }, {
    key: 'volume',
    get: function get() {
      return this.video.volume;
    },
    set: function set(vol) {
      for (var i = 0; i < this.channelNum; i++) {
        var videoName = 'video' + (i === 0 ? '' : i);
        if (i === 0) {
          this[videoName].volume = vol;
        } else {
          this[videoName].volume = 0;
        }
      }
    }
  }, {
    key: 'fullscreen',
    get: function get() {
      return _util2.default.hasClass(this.root, 'xgplayer-is-fullscreen') || _util2.default.hasClass(this.root, 'xgplayer-fullscreen-active');
    }
  }, {
    key: 'bullet',
    get: function get() {
      return _util2.default.findDom(this.root, 'xg-danmu') ? _util2.default.hasClass(_util2.default.findDom(this.root, 'xg-danmu'), 'xgplayer-has-danmu') : false;
    }
  }, {
    key: 'textTrack',
    get: function get() {
      return _util2.default.hasClass(this.root, 'xgplayer-is-textTrack');
    }
  }, {
    key: 'pip',
    get: function get() {
      return _util2.default.hasClass(this.root, 'xgplayer-pip-active');
    }
  }]);

  return Proxy;
}();

exports.default = Proxy;
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var d = __webpack_require__(12),
    callable = __webpack_require__(29),
    apply = Function.prototype.apply,
    call = Function.prototype.call,
    create = Object.create,
    defineProperty = Object.defineProperty,
    defineProperties = Object.defineProperties,
    hasOwnProperty = Object.prototype.hasOwnProperty,
    descriptor = { configurable: true, enumerable: false, writable: true },
    on,
    _once2,
    off,
    emit,
    methods,
    descriptors,
    base;

on = function on(type, listener) {
	var data;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) {
		data = descriptor.value = create(null);
		defineProperty(this, '__ee__', descriptor);
		descriptor.value = null;
	} else {
		data = this.__ee__;
	}
	if (!data[type]) data[type] = listener;else if (_typeof(data[type]) === 'object') data[type].push(listener);else data[type] = [data[type], listener];

	return this;
};

_once2 = function once(type, listener) {
	var _once, self;

	callable(listener);
	self = this;
	on.call(this, type, _once = function once() {
		off.call(self, type, _once);
		apply.call(listener, this, arguments);
	});

	_once.__eeOnceListener__ = listener;
	return this;
};

off = function off(type, listener) {
	var data, listeners, candidate, i;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) return this;
	data = this.__ee__;
	if (!data[type]) return this;
	listeners = data[type];

	if ((typeof listeners === 'undefined' ? 'undefined' : _typeof(listeners)) === 'object') {
		for (i = 0; candidate = listeners[i]; ++i) {
			if (candidate === listener || candidate.__eeOnceListener__ === listener) {
				if (listeners.length === 2) data[type] = listeners[i ? 0 : 1];else listeners.splice(i, 1);
			}
		}
	} else {
		if (listeners === listener || listeners.__eeOnceListener__ === listener) {
			delete data[type];
		}
	}

	return this;
};

emit = function emit(type) {
	var i, l, listener, listeners, args;

	if (!hasOwnProperty.call(this, '__ee__')) return;
	listeners = this.__ee__[type];
	if (!listeners) return;

	if ((typeof listeners === 'undefined' ? 'undefined' : _typeof(listeners)) === 'object') {
		l = arguments.length;
		args = new Array(l - 1);
		for (i = 1; i < l; ++i) {
			args[i - 1] = arguments[i];
		}listeners = listeners.slice();
		for (i = 0; listener = listeners[i]; ++i) {
			apply.call(listener, this, args);
		}
	} else {
		switch (arguments.length) {
			case 1:
				call.call(listeners, this);
				break;
			case 2:
				call.call(listeners, this, arguments[1]);
				break;
			case 3:
				call.call(listeners, this, arguments[1], arguments[2]);
				break;
			default:
				l = arguments.length;
				args = new Array(l - 1);
				for (i = 1; i < l; ++i) {
					args[i - 1] = arguments[i];
				}
				apply.call(listeners, this, args);
		}
	}
};

methods = {
	on: on,
	once: _once2,
	off: off,
	emit: emit
};

descriptors = {
	on: d(on),
	once: d(_once2),
	off: d(off),
	emit: d(emit)
};

base = defineProperties({}, descriptors);

module.exports = exports = function exports(o) {
	return o == null ? create(base) : defineProperties(Object(o), descriptors);
};
exports.methods = methods;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(3),
    isPlainFunction = __webpack_require__(13),
    assign = __webpack_require__(17),
    normalizeOpts = __webpack_require__(25),
    contains = __webpack_require__(26);

var d = module.exports = function (dscr, value /*, options*/) {
	var c, e, w, options, desc;
	if (arguments.length < 2 || typeof dscr !== "string") {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (isValue(dscr)) {
		c = contains.call(dscr, "c");
		e = contains.call(dscr, "e");
		w = contains.call(dscr, "w");
	} else {
		c = w = true;
		e = false;
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOpts(options), desc);
};

d.gs = function (dscr, get, set /*, options*/) {
	var c, e, options, desc;
	if (typeof dscr !== "string") {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (!isValue(get)) {
		get = undefined;
	} else if (!isPlainFunction(get)) {
		options = get;
		get = set = undefined;
	} else if (!isValue(set)) {
		set = undefined;
	} else if (!isPlainFunction(set)) {
		options = set;
		set = undefined;
	}
	if (isValue(dscr)) {
		c = contains.call(dscr, "c");
		e = contains.call(dscr, "e");
	} else {
		c = true;
		e = false;
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOpts(options), desc);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(14);

var classRe = /^\s*class[\s{/}]/,
    functionToString = Function.prototype.toString;

module.exports = function (value) {
	if (!isFunction(value)) return false;
	if (classRe.test(functionToString.call(value))) return false;
	return true;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototype = __webpack_require__(15);

module.exports = function (value) {
	if (typeof value !== "function") return false;

	if (!hasOwnProperty.call(value, "length")) return false;

	try {
		if (typeof value.length !== "number") return false;
		if (typeof value.call !== "function") return false;
		if (typeof value.apply !== "function") return false;
	} catch (error) {
		return false;
	}

	return !isPrototype(value);
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(16);

module.exports = function (value) {
	if (!isObject(value)) return false;
	try {
		if (!value.constructor) return false;
		return value.constructor.prototype === value;
	} catch (error) {
		return false;
	}
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isValue = __webpack_require__(3);

// prettier-ignore
var possibleTypes = { "object": true, "function": true, "undefined": true /* document.all */ };

module.exports = function (value) {
	if (!isValue(value)) return false;
	return hasOwnProperty.call(possibleTypes, typeof value === "undefined" ? "undefined" : _typeof(value));
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(18)() ? Object.assign : __webpack_require__(19);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var assign = Object.assign,
	    obj;
	if (typeof assign !== "function") return false;
	obj = { foo: "raz" };
	assign(obj, { bar: "dwa" }, { trzy: "trzy" });
	return obj.foo + obj.bar + obj.trzy === "razdwatrzy";
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(20),
    value = __webpack_require__(24),
    max = Math.max;

module.exports = function (dest, src /*, …srcn*/) {
	var error,
	    i,
	    length = max(arguments.length, 2),
	    assign;
	dest = Object(value(dest));
	assign = function assign(key) {
		try {
			dest[key] = src[key];
		} catch (e) {
			if (!error) error = e;
		}
	};
	for (i = 1; i < length; ++i) {
		src = arguments[i];
		keys(src).forEach(assign);
	}
	if (error !== undefined) throw error;
	return dest;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(21)() ? Object.keys : __webpack_require__(22);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	try {
		Object.keys("primitive");
		return true;
	} catch (e) {
		return false;
	}
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(1);

var keys = Object.keys;

module.exports = function (object) {
  return keys(isValue(object) ? Object(object) : object);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// eslint-disable-next-line no-empty-function

module.exports = function () {};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(1);

module.exports = function (value) {
	if (!isValue(value)) throw new TypeError("Cannot use null or undefined");
	return value;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(1);

var forEach = Array.prototype.forEach,
    create = Object.create;

var process = function process(src, obj) {
	var key;
	for (key in src) {
		obj[key] = src[key];
	}
};

// eslint-disable-next-line no-unused-vars
module.exports = function (opts1 /*, …options*/) {
	var result = create(null);
	forEach.call(arguments, function (options) {
		if (!isValue(options)) return;
		process(Object(options), result);
	});
	return result;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(27)() ? String.prototype.contains : __webpack_require__(28);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var str = "razdwatrzy";

module.exports = function () {
	if (typeof str.contains !== "function") return false;
	return str.contains("dwa") === true && str.contains("foo") === false;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var indexOf = String.prototype.indexOf;

module.exports = function (searchString /*, position*/) {
	return indexOf.call(this, searchString, arguments[1]) > -1;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (fn) {
	if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
	return fn;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INDEXDB = function () {
  function INDEXDB() {
    var mydb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: 'xgplayer', version: 1, db: null, ojstore: { name: 'xg-m4a', keypath: 'vid' } };

    _classCallCheck(this, INDEXDB);

    this.indexedDB = window.indexedDB || window.webkitindexedDB;
    this.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange; // 键范围
    this.myDB = mydb;
  }

  _createClass(INDEXDB, [{
    key: 'openDB',
    value: function openDB(callback) {
      var _this = this;

      // 建立或打开数据库，建立对象存储空间(ObjectStore)
      var self = this;
      var version = this.myDB.version || 1;
      var request = self.indexedDB.open(self.myDB.name, version);
      request.onerror = function (e) {
        // console.log('e.currentTarget.error.message')
      };
      request.onsuccess = function (e) {
        _this.myDB.db = e.target.result;
        // console.log('成功建立并打开数据库:' + this.myDB.name + ' version' + this.myDB.version)
        callback.call(self);
      };
      request.onupgradeneeded = function (e) {
        var db = e.target.result;
        var transaction = e.target.transaction;
        var store = void 0;
        if (!db.objectStoreNames.contains(self.myDB.ojstore.name)) {
          // 没有该对象空间时创建该对象空间
          store = db.createObjectStore(self.myDB.ojstore.name, { keyPath: self.myDB.ojstore.keypath });
          // console.log('成功建立对象存储空间：' + this.myDB.ojstore.name)
        }
      };
    }
  }, {
    key: 'deletedb',
    value: function deletedb() {
      // 删除数据库
      var self = this;
      self.indexedDB.deleteDatabase(this.myDB.name);
      // console.log(this.myDB.name + '数据库已删除')
    }
  }, {
    key: 'closeDB',
    value: function closeDB() {
      // 关闭数据库
      this.myDB.db.close();
      // console.log('数据库已关闭')
    }
  }, {
    key: 'addData',
    value: function addData(storename, data) {
      // 添加数据，重复添加会报错
      var store = this.myDB.db.transaction(storename, 'readwrite').objectStore(storename);
      var request = void 0;
      for (var i = 0; i < data.length; i++) {
        request = store.add(data[i]);
        request.onerror = function () {
          // console.error('add添加数据库中已有该数据')
        };
        request.onsuccess = function () {
          // console.log('add添加数据已存入数据库')
        };
      }
    }
  }, {
    key: 'putData',
    value: function putData(storename, data) {
      // 添加数据，重复添加会更新原有数据
      var store = this.myDB.db.transaction(storename, 'readwrite').objectStore(storename);
      var request = void 0;
      for (var i = 0; i < data.length; i++) {
        request = store.put(data[i]);
        request.onerror = function () {
          // console.error('put添加数据库中已有该数据')
        };
        request.onsuccess = function () {
          // console.log('put添加数据已存入数据库')
        };
      }
    }
  }, {
    key: 'getDataByKey',
    value: function getDataByKey(storename, key, callback) {
      var self = this;
      // 根据存储空间的键找到对应数据
      var store = this.myDB.db.transaction(storename, 'readwrite').objectStore(storename);
      var request = store.get(key);
      request.onerror = function () {
        // console.error('getDataByKey error')
        callback.call(self, null);
      };
      request.onsuccess = function (e) {
        var result = e.target.result;
        // console.log('查找数据成功')
        callback.call(self, result);
      };
    }
  }, {
    key: 'deleteData',
    value: function deleteData(storename, key) {
      // 删除某一条记录
      var store = this.myDB.db.transaction(storename, 'readwrite').objectStore(storename);
      store.delete(key);
      // console.log('已删除存储空间' + storename + '中' + key + '记录')
    }
  }, {
    key: 'clearData',
    value: function clearData(storename) {
      // 删除存储空间全部记录
      var store = this.myDB.db.transaction(storename, 'readwrite').objectStore(storename);
      store.clear();
      // console.log('已删除存储空间' + storename + '全部记录')
    }
  }]);

  return INDEXDB;
}();

exports.default = INDEXDB;
module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Draggabilly v2.3.0
 * Make that shiz draggable
 * https://draggabilly.desandro.com
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /* globals define */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(32), __webpack_require__(33)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (getSize, Unidragger) {
      return factory(window, getSize, Unidragger);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, getSize, Unidragger) {

  // -------------------------- helpers & variables -------------------------- //

  // extend objects
  function extend(a, b) {
    for (var prop in b) {
      a[prop] = b[prop];
    }
    return a;
  }

  function noop() {}

  var jQuery = window.jQuery;

  // --------------------------  -------------------------- //

  function Draggabilly(element, options) {
    // querySelector if string
    this.element = typeof element == 'string' ? document.querySelector(element) : element;

    if (jQuery) {
      this.$element = jQuery(this.element);
    }

    // options
    this.options = extend({}, this.constructor.defaults);
    this.option(options);

    this._create();
  }

  // inherit Unidragger methods
  var proto = Draggabilly.prototype = Object.create(Unidragger.prototype);

  Draggabilly.defaults = {};

  /**
   * set options
   * @param {Object} opts
   */
  proto.option = function (opts) {
    extend(this.options, opts);
  };

  // css position values that don't need to be set
  var positionValues = {
    relative: true,
    absolute: true,
    fixed: true
  };

  proto._create = function () {
    // properties
    this.position = {};
    this._getPosition();

    this.startPoint = { x: 0, y: 0 };
    this.dragPoint = { x: 0, y: 0 };

    this.startPosition = extend({}, this.position);

    // set relative positioning
    var style = getComputedStyle(this.element);
    if (!positionValues[style.position]) {
      this.element.style.position = 'relative';
    }

    // events, bridge jQuery events from vanilla
    this.on('pointerMove', this.onPointerMove);
    this.on('pointerUp', this.onPointerUp);

    this.enable();
    this.setHandles();
  };

  /**
   * set this.handles and bind start events to 'em
   */
  proto.setHandles = function () {
    this.handles = this.options.handle ? this.element.querySelectorAll(this.options.handle) : [this.element];

    this.bindHandles();
  };

  /**
   * emits events via EvEmitter and jQuery events
   * @param {String} type - name of event
   * @param {Event} event - original event
   * @param {Array} args - extra arguments
   */
  proto.dispatchEvent = function (type, event, args) {
    var emitArgs = [event].concat(args);
    this.emitEvent(type, emitArgs);
    this.dispatchJQueryEvent(type, event, args);
  };

  proto.dispatchJQueryEvent = function (type, event, args) {
    var jquery = window.jQuery;
    // trigger jQuery event
    if (!jquery || !this.$element) {
      return;
    }
    // create jQuery event
    /* eslint-disable-next-line new-cap */
    var $event = jquery.Event(event);
    $event.type = type;
    this.$element.trigger($event, args);
  };

  // -------------------------- position -------------------------- //

  // get x/y position from style
  proto._getPosition = function () {
    var style = getComputedStyle(this.element);
    var x = this._getPositionCoord(style.left, 'width');
    var y = this._getPositionCoord(style.top, 'height');
    // clean up 'auto' or other non-integer values
    this.position.x = isNaN(x) ? 0 : x;
    this.position.y = isNaN(y) ? 0 : y;

    this._addTransformPosition(style);
  };

  proto._getPositionCoord = function (styleSide, measure) {
    if (styleSide.indexOf('%') != -1) {
      // convert percent into pixel for Safari, #75
      var parentSize = getSize(this.element.parentNode);
      // prevent not-in-DOM element throwing bug, #131
      return !parentSize ? 0 : parseFloat(styleSide) / 100 * parentSize[measure];
    }
    return parseInt(styleSide, 10);
  };

  // add transform: translate( x, y ) to position
  proto._addTransformPosition = function (style) {
    var transform = style.transform;
    // bail out if value is 'none'
    if (transform.indexOf('matrix') !== 0) {
      return;
    }
    // split matrix(1, 0, 0, 1, x, y)
    var matrixValues = transform.split(',');
    // translate X value is in 12th or 4th position
    var xIndex = transform.indexOf('matrix3d') === 0 ? 12 : 4;
    var translateX = parseInt(matrixValues[xIndex], 10);
    // translate Y value is in 13th or 5th position
    var translateY = parseInt(matrixValues[xIndex + 1], 10);
    this.position.x += translateX;
    this.position.y += translateY;
  };

  // -------------------------- events -------------------------- //

  proto.onPointerDown = function (event, pointer) {
    this.element.classList.add('is-pointer-down');
    this.dispatchJQueryEvent('pointerDown', event, [pointer]);
  };

  proto.pointerDown = function (event, pointer) {
    var isOkay = this.okayPointerDown(event);
    if (!isOkay || !this.isEnabled) {
      this._pointerReset();
      return;
    }
    // track start event position
    // Safari 9 overrides pageX and pageY. These values needs to be copied. flickity#842
    this.pointerDownPointer = {
      pageX: pointer.pageX,
      pageY: pointer.pageY
    };

    event.preventDefault();
    this.pointerDownBlur();
    // bind move and end events
    this._bindPostStartEvents(event);
    this.element.classList.add('is-pointer-down');
    this.dispatchEvent('pointerDown', event, [pointer]);
  };

  /**
   * drag start
   * @param {Event} event
   * @param {[Event, Touch]} pointer
   */
  proto.dragStart = function (event, pointer) {
    if (!this.isEnabled) {
      return;
    }
    this._getPosition();
    this.measureContainment();
    // position _when_ drag began
    this.startPosition.x = this.position.x;
    this.startPosition.y = this.position.y;
    // reset left/top style
    this.setLeftTop();

    this.dragPoint.x = 0;
    this.dragPoint.y = 0;

    this.element.classList.add('is-dragging');
    this.dispatchEvent('dragStart', event, [pointer]);
    // start animation
    this.animate();
  };

  proto.measureContainment = function () {
    var container = this.getContainer();
    if (!container) {
      return;
    }

    var elemSize = getSize(this.element);
    var containerSize = getSize(container);
    var elemRect = this.element.getBoundingClientRect();
    var containerRect = container.getBoundingClientRect();

    var borderSizeX = containerSize.borderLeftWidth + containerSize.borderRightWidth;
    var borderSizeY = containerSize.borderTopWidth + containerSize.borderBottomWidth;

    var position = this.relativeStartPosition = {
      x: elemRect.left - (containerRect.left + containerSize.borderLeftWidth),
      y: elemRect.top - (containerRect.top + containerSize.borderTopWidth)
    };

    this.containSize = {
      width: containerSize.width - borderSizeX - position.x - elemSize.width,
      height: containerSize.height - borderSizeY - position.y - elemSize.height
    };
  };

  proto.getContainer = function () {
    var containment = this.options.containment;
    if (!containment) {
      return;
    }
    var isElement = containment instanceof HTMLElement;
    // use as element
    if (isElement) {
      return containment;
    }
    // querySelector if string
    if (typeof containment == 'string') {
      return document.querySelector(containment);
    }
    // fallback to parent element
    return this.element.parentNode;
  };

  // ----- move event ----- //

  proto.onPointerMove = function (event, pointer, moveVector) {
    this.dispatchJQueryEvent('pointerMove', event, [pointer, moveVector]);
  };

  /**
   * drag move
   * @param {Event} event
   * @param {[Event, Touch]} pointer
   * @param {Object} moveVector - x and y coordinates
   */
  proto.dragMove = function (event, pointer, moveVector) {
    if (!this.isEnabled) {
      return;
    }
    var dragX = moveVector.x;
    var dragY = moveVector.y;

    var grid = this.options.grid;
    var gridX = grid && grid[0];
    var gridY = grid && grid[1];

    dragX = applyGrid(dragX, gridX);
    dragY = applyGrid(dragY, gridY);

    dragX = this.containDrag('x', dragX, gridX);
    dragY = this.containDrag('y', dragY, gridY);

    // constrain to axis
    dragX = this.options.axis == 'y' ? 0 : dragX;
    dragY = this.options.axis == 'x' ? 0 : dragY;

    this.position.x = this.startPosition.x + dragX;
    this.position.y = this.startPosition.y + dragY;
    // set dragPoint properties
    this.dragPoint.x = dragX;
    this.dragPoint.y = dragY;

    this.dispatchEvent('dragMove', event, [pointer, moveVector]);
  };

  function applyGrid(value, grid, method) {
    method = method || 'round';
    return grid ? Math[method](value / grid) * grid : value;
  }

  proto.containDrag = function (axis, drag, grid) {
    if (!this.options.containment) {
      return drag;
    }
    var measure = axis == 'x' ? 'width' : 'height';

    var rel = this.relativeStartPosition[axis];
    var min = applyGrid(-rel, grid, 'ceil');
    var max = this.containSize[measure];
    max = applyGrid(max, grid, 'floor');
    return Math.max(min, Math.min(max, drag));
  };

  // ----- end event ----- //

  /**
   * pointer up
   * @param {Event} event
   * @param {[Event, Touch]} pointer
   */
  proto.onPointerUp = function (event, pointer) {
    this.element.classList.remove('is-pointer-down');
    this.dispatchJQueryEvent('pointerUp', event, [pointer]);
  };

  /**
   * drag end
   * @param {Event} event
   * @param {[Event, Touch]} pointer
   */
  proto.dragEnd = function (event, pointer) {
    if (!this.isEnabled) {
      return;
    }
    // use top left position when complete
    this.element.style.transform = '';
    this.setLeftTop();
    this.element.classList.remove('is-dragging');
    this.dispatchEvent('dragEnd', event, [pointer]);
  };

  // -------------------------- animation -------------------------- //

  proto.animate = function () {
    // only render and animate if dragging
    if (!this.isDragging) {
      return;
    }

    this.positionDrag();

    var _this = this;
    requestAnimationFrame(function animateFrame() {
      _this.animate();
    });
  };

  // left/top positioning
  proto.setLeftTop = function () {
    this.element.style.left = this.position.x + 'px';
    this.element.style.top = this.position.y + 'px';
  };

  proto.positionDrag = function () {
    this.element.style.transform = 'translate3d( ' + this.dragPoint.x + 'px, ' + this.dragPoint.y + 'px, 0)';
  };

  // ----- staticClick ----- //

  proto.staticClick = function (event, pointer) {
    this.dispatchEvent('staticClick', event, [pointer]);
  };

  // ----- methods ----- //

  /**
   * @param {Number} x
   * @param {Number} y
   */
  proto.setPosition = function (x, y) {
    this.position.x = x;
    this.position.y = y;
    this.setLeftTop();
  };

  proto.enable = function () {
    this.isEnabled = true;
  };

  proto.disable = function () {
    this.isEnabled = false;
    if (this.isDragging) {
      this.dragEnd();
    }
  };

  proto.destroy = function () {
    this.disable();
    // reset styles
    this.element.style.transform = '';
    this.element.style.left = '';
    this.element.style.top = '';
    this.element.style.position = '';
    // unbind handles
    this.unbindHandles();
    // remove jQuery data
    if (this.$element) {
      this.$element.removeData('draggabilly');
    }
  };

  // ----- jQuery bridget ----- //

  // required for jQuery bridget
  proto._init = noop;

  if (jQuery && jQuery.bridget) {
    jQuery.bridget('draggabilly', Draggabilly);
  }

  // -----  ----- //

  return Draggabilly;
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

(function (window, factory) {
  /* jshint strict: false */ /* globals define, module */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory() {
  'use strict';

  // -------------------------- helpers -------------------------- //

  // get a number from a string, not a percentage

  function getStyleSize(value) {
    var num = parseFloat(value);
    // not a percent like '100%', and a number
    var isValid = value.indexOf('%') == -1 && !isNaN(num);
    return isValid && num;
  }

  function noop() {}

  var logError = typeof console == 'undefined' ? noop : function (message) {
    console.error(message);
  };

  // -------------------------- measurements -------------------------- //

  var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];

  var measurementsLength = measurements.length;

  function getZeroSize() {
    var size = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    };
    for (var i = 0; i < measurementsLength; i++) {
      var measurement = measurements[i];
      size[measurement] = 0;
    }
    return size;
  }

  // -------------------------- getStyle -------------------------- //

  /**
   * getStyle, get style of element, check for Firefox bug
   * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
   */
  function getStyle(elem) {
    var style = getComputedStyle(elem);
    if (!style) {
      logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See https://bit.ly/getsizebug1');
    }
    return style;
  }

  // -------------------------- setup -------------------------- //

  var isSetup = false;

  var isBoxSizeOuter;

  /**
   * setup
   * check isBoxSizerOuter
   * do on first getSize() rather than on page load for Firefox bug
   */
  function setup() {
    // setup once
    if (isSetup) {
      return;
    }
    isSetup = true;

    // -------------------------- box sizing -------------------------- //

    /**
     * Chrome & Safari measure the outer-width on style.width on border-box elems
     * IE11 & Firefox<29 measures the inner-width
     */
    var div = document.createElement('div');
    div.style.width = '200px';
    div.style.padding = '1px 2px 3px 4px';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px 2px 3px 4px';
    div.style.boxSizing = 'border-box';

    var body = document.body || document.documentElement;
    body.appendChild(div);
    var style = getStyle(div);
    // round value for browser zoom. desandro/masonry#928
    isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
    getSize.isBoxSizeOuter = isBoxSizeOuter;

    body.removeChild(div);
  }

  // -------------------------- getSize -------------------------- //

  function getSize(elem) {
    setup();

    // use querySeletor if elem is string
    if (typeof elem == 'string') {
      elem = document.querySelector(elem);
    }

    // do not proceed on non-objects
    if (!elem || (typeof elem === 'undefined' ? 'undefined' : _typeof(elem)) != 'object' || !elem.nodeType) {
      return;
    }

    var style = getStyle(elem);

    // if hidden, everything is 0
    if (style.display == 'none') {
      return getZeroSize();
    }

    var size = {};
    size.width = elem.offsetWidth;
    size.height = elem.offsetHeight;

    var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

    // get all measurements
    for (var i = 0; i < measurementsLength; i++) {
      var measurement = measurements[i];
      var value = style[measurement];
      var num = parseFloat(value);
      // any 'auto', 'medium' value will be 0
      size[measurement] = !isNaN(num) ? num : 0;
    }

    var paddingWidth = size.paddingLeft + size.paddingRight;
    var paddingHeight = size.paddingTop + size.paddingBottom;
    var marginWidth = size.marginLeft + size.marginRight;
    var marginHeight = size.marginTop + size.marginBottom;
    var borderWidth = size.borderLeftWidth + size.borderRightWidth;
    var borderHeight = size.borderTopWidth + size.borderBottomWidth;

    var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

    // overwrite width and height if we can get it from style
    var styleWidth = getStyleSize(style.width);
    if (styleWidth !== false) {
      size.width = styleWidth + (
      // add padding and border unless it's already including it
      isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
    }

    var styleHeight = getStyleSize(style.height);
    if (styleHeight !== false) {
      size.height = styleHeight + (
      // add padding and border unless it's already including it
      isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
    }

    size.innerWidth = size.width - (paddingWidth + borderWidth);
    size.innerHeight = size.height - (paddingHeight + borderHeight);

    size.outerWidth = size.width + marginWidth;
    size.outerHeight = size.height + marginHeight;

    return size;
  }

  return getSize;
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Unidragger v2.3.1
 * Draggable base class
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

(function (window, factory) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(34)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Unipointer) {
      return factory(window, Unipointer);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, Unipointer) {

  'use strict';

  // -------------------------- Unidragger -------------------------- //

  function Unidragger() {}

  // inherit Unipointer & EvEmitter
  var proto = Unidragger.prototype = Object.create(Unipointer.prototype);

  // ----- bind start ----- //

  proto.bindHandles = function () {
    this._bindHandles(true);
  };

  proto.unbindHandles = function () {
    this._bindHandles(false);
  };

  /**
   * Add or remove start event
   * @param {Boolean} isAdd
   */
  proto._bindHandles = function (isAdd) {
    // munge isAdd, default to true
    isAdd = isAdd === undefined ? true : isAdd;
    // bind each handle
    var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';
    var touchAction = isAdd ? this._touchActionValue : '';
    for (var i = 0; i < this.handles.length; i++) {
      var handle = this.handles[i];
      this._bindStartEvent(handle, isAdd);
      handle[bindMethod]('click', this);
      // touch-action: none to override browser touch gestures. metafizzy/flickity#540
      if (window.PointerEvent) {
        handle.style.touchAction = touchAction;
      }
    }
  };

  // prototype so it can be overwriteable by Flickity
  proto._touchActionValue = 'none';

  // ----- start event ----- //

  /**
   * pointer start
   * @param {Event} event
   * @param {Event or Touch} pointer
   */
  proto.pointerDown = function (event, pointer) {
    var isOkay = this.okayPointerDown(event);
    if (!isOkay) {
      return;
    }
    // track start event position
    // Safari 9 overrides pageX and pageY. These values needs to be copied. flickity#842
    this.pointerDownPointer = {
      pageX: pointer.pageX,
      pageY: pointer.pageY
    };

    event.preventDefault();
    this.pointerDownBlur();
    // bind move and end events
    this._bindPostStartEvents(event);
    this.emitEvent('pointerDown', [event, pointer]);
  };

  // nodes that have text fields
  var cursorNodes = {
    TEXTAREA: true,
    INPUT: true,
    SELECT: true,
    OPTION: true
  };

  // input types that do not have text fields
  var clickTypes = {
    radio: true,
    checkbox: true,
    button: true,
    submit: true,
    image: true,
    file: true
  };

  // dismiss inputs with text fields. flickity#403, flickity#404
  proto.okayPointerDown = function (event) {
    var isCursorNode = cursorNodes[event.target.nodeName];
    var isClickType = clickTypes[event.target.type];
    var isOkay = !isCursorNode || isClickType;
    if (!isOkay) {
      this._pointerReset();
    }
    return isOkay;
  };

  // kludge to blur previously focused input
  proto.pointerDownBlur = function () {
    var focused = document.activeElement;
    // do not blur body for IE10, metafizzy/flickity#117
    var canBlur = focused && focused.blur && focused != document.body;
    if (canBlur) {
      focused.blur();
    }
  };

  // ----- move event ----- //

  /**
   * drag move
   * @param {Event} event
   * @param {Event or Touch} pointer
   */
  proto.pointerMove = function (event, pointer) {
    var moveVector = this._dragPointerMove(event, pointer);
    this.emitEvent('pointerMove', [event, pointer, moveVector]);
    this._dragMove(event, pointer, moveVector);
  };

  // base pointer move logic
  proto._dragPointerMove = function (event, pointer) {
    var moveVector = {
      x: pointer.pageX - this.pointerDownPointer.pageX,
      y: pointer.pageY - this.pointerDownPointer.pageY
    };
    // start drag if pointer has moved far enough to start drag
    if (!this.isDragging && this.hasDragStarted(moveVector)) {
      this._dragStart(event, pointer);
    }
    return moveVector;
  };

  // condition if pointer has moved far enough to start drag
  proto.hasDragStarted = function (moveVector) {
    return Math.abs(moveVector.x) > 3 || Math.abs(moveVector.y) > 3;
  };

  // ----- end event ----- //

  /**
   * pointer up
   * @param {Event} event
   * @param {Event or Touch} pointer
   */
  proto.pointerUp = function (event, pointer) {
    this.emitEvent('pointerUp', [event, pointer]);
    this._dragPointerUp(event, pointer);
  };

  proto._dragPointerUp = function (event, pointer) {
    if (this.isDragging) {
      this._dragEnd(event, pointer);
    } else {
      // pointer didn't move enough for drag to start
      this._staticClick(event, pointer);
    }
  };

  // -------------------------- drag -------------------------- //

  // dragStart
  proto._dragStart = function (event, pointer) {
    this.isDragging = true;
    // prevent clicks
    this.isPreventingClicks = true;
    this.dragStart(event, pointer);
  };

  proto.dragStart = function (event, pointer) {
    this.emitEvent('dragStart', [event, pointer]);
  };

  // dragMove
  proto._dragMove = function (event, pointer, moveVector) {
    // do not drag if not dragging yet
    if (!this.isDragging) {
      return;
    }

    this.dragMove(event, pointer, moveVector);
  };

  proto.dragMove = function (event, pointer, moveVector) {
    event.preventDefault();
    this.emitEvent('dragMove', [event, pointer, moveVector]);
  };

  // dragEnd
  proto._dragEnd = function (event, pointer) {
    // set flags
    this.isDragging = false;
    // re-enable clicking async
    setTimeout(function () {
      delete this.isPreventingClicks;
    }.bind(this));

    this.dragEnd(event, pointer);
  };

  proto.dragEnd = function (event, pointer) {
    this.emitEvent('dragEnd', [event, pointer]);
  };

  // ----- onclick ----- //

  // handle all clicks and prevent clicks when dragging
  proto.onclick = function (event) {
    if (this.isPreventingClicks) {
      event.preventDefault();
    }
  };

  // ----- staticClick ----- //

  // triggered after pointer down & up with no/tiny movement
  proto._staticClick = function (event, pointer) {
    // ignore emulated mouse up clicks
    if (this.isIgnoringMouseUp && event.type == 'mouseup') {
      return;
    }

    this.staticClick(event, pointer);

    // set flag for emulated clicks 300ms after touchend
    if (event.type != 'mouseup') {
      this.isIgnoringMouseUp = true;
      // reset flag after 300ms
      setTimeout(function () {
        delete this.isIgnoringMouseUp;
      }.bind(this), 400);
    }
  };

  proto.staticClick = function (event, pointer) {
    this.emitEvent('staticClick', [event, pointer]);
  };

  // ----- utils ----- //

  Unidragger.getPointerPoint = Unipointer.getPointerPoint;

  // -----  ----- //

  return Unidragger;
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /*global define, module, require */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(35)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (EvEmitter) {
      return factory(window, EvEmitter);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, EvEmitter) {

  'use strict';

  function noop() {}

  function Unipointer() {}

  // inherit EvEmitter
  var proto = Unipointer.prototype = Object.create(EvEmitter.prototype);

  proto.bindStartEvent = function (elem) {
    this._bindStartEvent(elem, true);
  };

  proto.unbindStartEvent = function (elem) {
    this._bindStartEvent(elem, false);
  };

  /**
   * Add or remove start event
   * @param {Boolean} isAdd - remove if falsey
   */
  proto._bindStartEvent = function (elem, isAdd) {
    // munge isAdd, default to true
    isAdd = isAdd === undefined ? true : isAdd;
    var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';

    // default to mouse events
    var startEvent = 'mousedown';
    if (window.PointerEvent) {
      // Pointer Events
      startEvent = 'pointerdown';
    } else if ('ontouchstart' in window) {
      // Touch Events. iOS Safari
      startEvent = 'touchstart';
    }
    elem[bindMethod](startEvent, this);
  };

  // trigger handler methods for events
  proto.handleEvent = function (event) {
    var method = 'on' + event.type;
    if (this[method]) {
      this[method](event);
    }
  };

  // returns the touch that we're keeping track of
  proto.getTouch = function (touches) {
    for (var i = 0; i < touches.length; i++) {
      var touch = touches[i];
      if (touch.identifier == this.pointerIdentifier) {
        return touch;
      }
    }
  };

  // ----- start event ----- //

  proto.onmousedown = function (event) {
    // dismiss clicks from right or middle buttons
    var button = event.button;
    if (button && button !== 0 && button !== 1) {
      return;
    }
    this._pointerDown(event, event);
  };

  proto.ontouchstart = function (event) {
    this._pointerDown(event, event.changedTouches[0]);
  };

  proto.onpointerdown = function (event) {
    this._pointerDown(event, event);
  };

  /**
   * pointer start
   * @param {Event} event
   * @param {Event or Touch} pointer
   */
  proto._pointerDown = function (event, pointer) {
    // dismiss right click and other pointers
    // button = 0 is okay, 1-4 not
    if (event.button || this.isPointerDown) {
      return;
    }

    this.isPointerDown = true;
    // save pointer identifier to match up touch events
    this.pointerIdentifier = pointer.pointerId !== undefined ?
    // pointerId for pointer events, touch.indentifier for touch events
    pointer.pointerId : pointer.identifier;

    this.pointerDown(event, pointer);
  };

  proto.pointerDown = function (event, pointer) {
    this._bindPostStartEvents(event);
    this.emitEvent('pointerDown', [event, pointer]);
  };

  // hash of events to be bound after start event
  var postStartEvents = {
    mousedown: ['mousemove', 'mouseup'],
    touchstart: ['touchmove', 'touchend', 'touchcancel'],
    pointerdown: ['pointermove', 'pointerup', 'pointercancel']
  };

  proto._bindPostStartEvents = function (event) {
    if (!event) {
      return;
    }
    // get proper events to match start event
    var events = postStartEvents[event.type];
    // bind events to node
    events.forEach(function (eventName) {
      window.addEventListener(eventName, this);
    }, this);
    // save these arguments
    this._boundPointerEvents = events;
  };

  proto._unbindPostStartEvents = function () {
    // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
    if (!this._boundPointerEvents) {
      return;
    }
    this._boundPointerEvents.forEach(function (eventName) {
      window.removeEventListener(eventName, this);
    }, this);

    delete this._boundPointerEvents;
  };

  // ----- move event ----- //

  proto.onmousemove = function (event) {
    this._pointerMove(event, event);
  };

  proto.onpointermove = function (event) {
    if (event.pointerId == this.pointerIdentifier) {
      this._pointerMove(event, event);
    }
  };

  proto.ontouchmove = function (event) {
    var touch = this.getTouch(event.changedTouches);
    if (touch) {
      this._pointerMove(event, touch);
    }
  };

  /**
   * pointer move
   * @param {Event} event
   * @param {Event or Touch} pointer
   * @private
   */
  proto._pointerMove = function (event, pointer) {
    this.pointerMove(event, pointer);
  };

  // public
  proto.pointerMove = function (event, pointer) {
    this.emitEvent('pointerMove', [event, pointer]);
  };

  // ----- end event ----- //


  proto.onmouseup = function (event) {
    this._pointerUp(event, event);
  };

  proto.onpointerup = function (event) {
    if (event.pointerId == this.pointerIdentifier) {
      this._pointerUp(event, event);
    }
  };

  proto.ontouchend = function (event) {
    var touch = this.getTouch(event.changedTouches);
    if (touch) {
      this._pointerUp(event, touch);
    }
  };

  /**
   * pointer up
   * @param {Event} event
   * @param {Event or Touch} pointer
   * @private
   */
  proto._pointerUp = function (event, pointer) {
    this._pointerDone();
    this.pointerUp(event, pointer);
  };

  // public
  proto.pointerUp = function (event, pointer) {
    this.emitEvent('pointerUp', [event, pointer]);
  };

  // ----- pointer done ----- //

  // triggered on pointer up & pointer cancel
  proto._pointerDone = function () {
    this._pointerReset();
    this._unbindPostStartEvents();
    this.pointerDone();
  };

  proto._pointerReset = function () {
    // reset properties
    this.isPointerDown = false;
    delete this.pointerIdentifier;
  };

  proto.pointerDone = noop;

  // ----- pointer cancel ----- //

  proto.onpointercancel = function (event) {
    if (event.pointerId == this.pointerIdentifier) {
      this._pointerCancel(event, event);
    }
  };

  proto.ontouchcancel = function (event) {
    var touch = this.getTouch(event.changedTouches);
    if (touch) {
      this._pointerCancel(event, touch);
    }
  };

  /**
   * pointer cancel
   * @param {Event} event
   * @param {Event or Touch} pointer
   * @private
   */
  proto._pointerCancel = function (event, pointer) {
    this._pointerDone();
    this.pointerCancel(event, pointer);
  };

  // public
  proto.pointerCancel = function (event, pointer) {
    this.emitEvent('pointerCancel', [event, pointer]);
  };

  // -----  ----- //

  // utility function for getting x/y coords from event
  Unipointer.getPointerPoint = function (pointer) {
    return {
      x: pointer.pageX,
      y: pointer.pageY
    };
  };

  // -----  ----- //

  return Unipointer;
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

(function (global, factory) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if (true) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof window != 'undefined' ? window : undefined, function () {

  "use strict";

  function EvEmitter() {}

  var proto = EvEmitter.prototype;

  proto.on = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    // set events hash
    var events = this._events = this._events || {};
    // set listeners array
    var listeners = events[eventName] = events[eventName] || [];
    // only add once
    if (listeners.indexOf(listener) == -1) {
      listeners.push(listener);
    }

    return this;
  };

  proto.once = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    // add event
    this.on(eventName, listener);
    // set once flag
    // set onceEvents hash
    var onceEvents = this._onceEvents = this._onceEvents || {};
    // set onceListeners object
    var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
    // set flag
    onceListeners[listener] = true;

    return this;
  };

  proto.off = function (eventName, listener) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    var index = listeners.indexOf(listener);
    if (index != -1) {
      listeners.splice(index, 1);
    }

    return this;
  };

  proto.emitEvent = function (eventName, args) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    // copy over to avoid interference if .off() in listener
    listeners = listeners.slice(0);
    args = args || [];
    // once stuff
    var onceListeners = this._onceEvents && this._onceEvents[eventName];

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      var isOnce = onceListeners && onceListeners[listener];
      if (isOnce) {
        // remove listener
        // remove before trigger to prevent recursion
        this.off(eventName, listener);
        // unset once flag
        delete onceListeners[listener];
      }
      // trigger listener
      listener.apply(this, args);
    }

    return this;
  };

  proto.allOff = function () {
    delete this._events;
    delete this._onceEvents;
  };

  return EvEmitter;
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getAbsoluteURL = exports.getAbsoluteURL = function getAbsoluteURL(url) {
  // Check if absolute URL
  if (!url.match(/^https?:\/\//)) {
    var div = document.createElement('div');
    div.innerHTML = '<a href="' + url + '">x</a>';
    url = div.firstChild.href;
  }
  return url;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//download.js v4.2, by dandavis; 2008-2016. [MIT] see http://danml.com/download.html for tests/usage
// v1 landed a FF+Chrome compat way of downloading strings to local un-named files, upgraded to use a hidden frame and optional mime
// v2 added named files via a[download], msSaveBlob, IE (10+) support, and window.URL support for larger+faster saves than dataURLs
// v3 added dataURL and Blob Input, bind-toggle arity, and legacy dataURL fallback was improved with force-download mime and base64 support. 3.1 improved safari handling.
// v4 adds AMD/UMD, commonJS, and plain browser support
// v4.1 adds url download capability via solo URL argument (same domain/CORS only)
// v4.2 adds semantic variable names, long (over 2MB) dataURL support, and hidden by default temp anchors
// https://github.com/rndme/download

(function (root, factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
})(undefined, function () {

	return function download(data, strFileName, strMimeType) {

		var self = window,
		    // this script is only for browsers anyway...
		defaultMime = "application/octet-stream",
		    // this default mime also triggers iframe downloads
		mimeType = strMimeType || defaultMime,
		    payload = data,
		    url = !strFileName && !strMimeType && payload,
		    anchor = document.createElement("a"),
		    toString = function toString(a) {
			return String(a);
		},
		    myBlob = self.Blob || self.MozBlob || self.WebKitBlob || toString,
		    fileName = strFileName || "download",
		    blob,
		    reader;
		myBlob = myBlob.call ? myBlob.bind(self) : Blob;

		if (String(this) === "true") {
			//reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
			payload = [payload, mimeType];
			mimeType = payload[0];
			payload = payload[1];
		}

		if (url && url.length < 2048) {
			// if no filename and no mime, assume a url was passed as the only argument
			fileName = url.split("/").pop().split("?")[0];
			anchor.href = url; // assign href prop to temp anchor
			if (anchor.href.indexOf(url) !== -1) {
				// if the browser determines that it's a potentially valid url path:
				var ajax = new XMLHttpRequest();
				ajax.open("GET", url, true);
				ajax.responseType = 'blob';
				ajax.onload = function (e) {
					download(e.target.response, fileName, defaultMime);
				};
				setTimeout(function () {
					ajax.send();
				}, 0); // allows setting custom ajax headers using the return:
				return ajax;
			} // end if valid url?
		} // end if url?


		//go ahead and download dataURLs right away
		if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)) {

			if (payload.length > 1024 * 1024 * 1.999 && myBlob !== toString) {
				payload = dataUrlToBlob(payload);
				mimeType = payload.type || defaultMime;
			} else {
				return navigator.msSaveBlob ? // IE10 can't do a[download], only Blobs:
				navigator.msSaveBlob(dataUrlToBlob(payload), fileName) : saver(payload); // everyone else can save dataURLs un-processed
			}
		} else {
			//not data url, is it a string with special needs?
			if (/([\x80-\xff])/.test(payload)) {
				var i = 0,
				    tempUiArr = new Uint8Array(payload.length),
				    mx = tempUiArr.length;
				for (i; i < mx; ++i) {
					tempUiArr[i] = payload.charCodeAt(i);
				}payload = new myBlob([tempUiArr], { type: mimeType });
			}
		}
		blob = payload instanceof myBlob ? payload : new myBlob([payload], { type: mimeType });

		function dataUrlToBlob(strUrl) {
			var parts = strUrl.split(/[:;,]/),
			    type = parts[1],
			    decoder = parts[2] == "base64" ? atob : decodeURIComponent,
			    binData = decoder(parts.pop()),
			    mx = binData.length,
			    i = 0,
			    uiArr = new Uint8Array(mx);

			for (i; i < mx; ++i) {
				uiArr[i] = binData.charCodeAt(i);
			}return new myBlob([uiArr], { type: type });
		}

		function saver(url, winMode) {

			if ('download' in anchor) {
				//html5 A[download]
				anchor.href = url;
				anchor.setAttribute("download", fileName);
				anchor.className = "download-js-link";
				anchor.innerHTML = "downloading...";
				anchor.style.display = "none";
				document.body.appendChild(anchor);
				setTimeout(function () {
					anchor.click();
					document.body.removeChild(anchor);
					if (winMode === true) {
						setTimeout(function () {
							self.URL.revokeObjectURL(anchor.href);
						}, 250);
					}
				}, 66);
				return true;
			}

			// handle non-a[download] safari as best we can:
			if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
				if (/^data:/.test(url)) url = "data:" + url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
				if (!window.open(url)) {
					// popup blocked, offer direct download:
					if (confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")) {
						location.href = url;
					}
				}
				return true;
			}

			//do iframe dataURL download (old ch+FF):
			var f = document.createElement("iframe");
			document.body.appendChild(f);

			if (!winMode && /^data:/.test(url)) {
				// force a mime that will download:
				url = "data:" + url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
			}
			f.src = url;
			setTimeout(function () {
				document.body.removeChild(f);
			}, 333);
		} //end saver


		if (navigator.msSaveBlob) {
			// IE10+ : (has Blob, but not a[download] or URL)
			return navigator.msSaveBlob(blob, fileName);
		}

		if (self.URL) {
			// simple fast and modern way using Blob and URL:
			saver(self.URL.createObjectURL(blob), true);
		} else {
			// handle non-Blob()+non-URL browsers:
			if (typeof blob === "string" || blob.constructor === toString) {
				try {
					return saver("data:" + mimeType + ";base64," + self.btoa(blob));
				} catch (y) {
					return saver("data:" + mimeType + "," + encodeURIComponent(blob));
				}
			}

			// Blob but not URL support:
			reader = new FileReader();
			reader.onload = function (e) {
				saver(this.result);
			};
			reader.readAsDataURL(blob);
		}
		return true;
	}; /* end download() */
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var volume = function volume() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;
  var container = void 0,
      slider = void 0,
      bar = void 0,
      selected = void 0,
      icon = void 0;
  function onCanplay() {
    player.volume = _player2.default.sniffer.device === 'mobile' ? 1 : player.config.volume;
    container = player.controls.querySelector('.xgplayer-volume');
    slider = container.querySelector('.xgplayer-slider');
    bar = container.querySelector('.xgplayer-bar');
    selected = container.querySelector('.xgplayer-drag');
    icon = container.querySelector('.xgplayer-icon');
  }
  player.once('canplay', onCanplay);

  function onVolumeBarClick(e) {
    player.video.muted = false;
    slider.focus();
    util.event(e);

    var barRect = bar.getBoundingClientRect();
    var pos = { x: e.clientX, y: e.clientY };
    var height = selected.getBoundingClientRect().height;
    var isMove = false;
    var onMove = function onMove(e) {
      e.preventDefault();
      e.stopPropagation();
      util.event(e);
      isMove = true;
      var w = height - e.clientY + pos.y;
      var now = w / barRect.height;
      selected.style.height = w + 'px';
      player.volume = Math.max(Math.min(now, 1), 0);
    };
    var onUp = function onUp(e) {
      e.preventDefault();
      e.stopPropagation();
      util.event(e);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);

      if (!isMove) {
        var w = barRect.height - (e.clientY - barRect.top);
        var now = w / barRect.height;
        selected.style.height = w + 'px';
        if (now <= 0) {
          if (player.volume > 0) {
            selected.volume = player.video.volume;
          } else {
            now = selected.volume;
          }
        }
        player.volume = Math.max(Math.min(now, 1), 0);
      }
      slider.volume = player.volume;
      isMove = false;
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    return false;
  }
  player.on('volumeBarClick', onVolumeBarClick);

  function onVolumeIconClick() {
    if (_player2.default.sniffer.device === 'mobile') {
      // util.removeClass(root, 'xgplayer-volume-muted')
      // util.removeClass(root, 'xgplayer-volume-large')
      if (player.video.muted) {
        player.video.muted = false;
        player.emit('unmute');
        // util.addClass(root, 'xgplayer-volume-large')
      } else {
        player.video.muted = true;
        player.emit('mute');
        // util.addClass(root, 'xgplayer-volume-muted')
      }
    } else {
      player.video.muted = false;
      if (player.volume < 0.1) {
        if (slider.volume < 0.1) {
          player.volume = 0.6;
        } else {
          player.volume = slider.volume;
        }
        player.emit('unmute');
      } else {
        player.volume = 0;
        player.emit('mute');
      }
    }
    // onVolumeChange ()
  }
  player.on('volumeIconClick', onVolumeIconClick);

  function onVolumeIconEnter() {
    util.addClass(root, 'xgplayer-volume-active');
    if (container) {
      container.focus();
    }
  }
  player.on('volumeIconEnter', onVolumeIconEnter);

  function onVolumeIconLeave() {
    util.removeClass(root, 'xgplayer-volume-active');
  }
  player.on('volumeIconLeave', onVolumeIconLeave);

  var _changeTimer = null;
  function onVolumeChange() {
    if (_changeTimer) {
      clearTimeout(_changeTimer);
    }
    _changeTimer = setTimeout(function () {
      if (_player2.default.sniffer.device === 'mobile') {
        util.removeClass(root, 'xgplayer-volume-muted');
        util.removeClass(root, 'xgplayer-volume-large');
        if (player.video.muted) {
          util.addClass(root, 'xgplayer-volume-muted');
        } else {
          util.addClass(root, 'xgplayer-volume-large');
        }
      } else {
        util.removeClass(root, 'xgplayer-volume-muted');
        util.removeClass(root, 'xgplayer-volume-small');
        util.removeClass(root, 'xgplayer-volume-large');
        if (player.volume === 0) {
          util.addClass(root, 'xgplayer-volume-muted');
        } else if (player.volume < 0.5) {
          util.addClass(root, 'xgplayer-volume-small');
        } else {
          util.addClass(root, 'xgplayer-volume-large');
        }
        if (!bar) return;
        var containerHeight = bar.getBoundingClientRect().height || 76;
        selected.style.height = player.volume * containerHeight + 'px';
      }
    }, 50);
  }
  player.on('volumechange', onVolumeChange);

  function onDestroy() {
    player.off('canplay', onCanplay);
    player.off('volumeBarClick', onVolumeBarClick);
    player.off('volumeIconClick', onVolumeIconClick);
    player.off('volumeIconEnter', onVolumeIconEnter);
    player.off('volumeIconLeave', onVolumeIconLeave);
    player.off('volumechange', onVolumeChange);
    player.off('destroy', onDestroy);
    if (_changeTimer) {
      clearTimeout(_changeTimer);
      _changeTimer = null;
    }
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('volume', volume);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var start = function start() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;

  function onCanplay() {
    util.removeClass(root, 'xgplayer-is-enter');
  }

  function onPlaying() {
    util.removeClass(root, 'xgplayer-is-enter');
  }

  function onStartBtnClick() {
    function firstPlay() {
      util.removeClass(root, 'xgplayer-nostart'); // for ie quick switch
      util.addClass(root, 'xgplayer-is-enter');
      player.on('canplay', onCanplay);
      player.once('playing', onPlaying);
      if (!root.querySelector('video')) {
        player.start();
      }
      var playPromise = player.play();
      if (playPromise !== undefined && playPromise) {
        if (typeof playPromise.catch === 'function') {
          playPromise.catch(function (err) {
            console.error(err);
          });
        }
      }
    }
    if (util.hasClass(root, 'xgplayer-nostart')) {
      // console.info('第一次开始播放。。。')
      var headTails = player.config.headTails;
      if (headTails && headTails.head) {
        // 存在片头片尾
        // console.log(JSON.stringify(headTails))
        util.addClass(root, 'xgplayer-head-active');
        var time = headTails.head.time;
        var timeContainer = util.findDom(root, '.xgplayer-headtail-counter-time');
        timeContainer.innerHTML = '' + time;
        var imgContainer = util.findDom(root, '.xgplayer-headtail-head');
        imgContainer.src = headTails.head.img;
        var poster = util.findDom(root, '.xgplayer-poster');
        if (poster) {
          poster.style.display = 'none';
        }
        var intervalID = window.setInterval(function () {
          timeContainer.innerHTML = '' + --time;
          if (time === 0) {
            firstPlay();
            util.removeClass(root, 'xgplayer-head-active');
            window.clearInterval(intervalID);
          }
        }, 1000);
      } else {
        firstPlay();
      }
    } else {
      if (player.paused) {
        // console.info('暂停播放后，再继续播放。。。')
        util.removeClass(root, 'xgplayer-nostart xgplayer-isloading');
        setTimeout(function () {
          var playPromise = player.play();
          if (playPromise !== undefined && playPromise) {
            if (typeof playPromise.catch === 'function') {
              playPromise.catch(function (err) {
                console.error(err);
              });
            }
          }
        }, 10);
      }
    }
  }
  player.on('startBtnClick', onStartBtnClick);

  function onDestroy() {
    player.off('canplay', onCanplay);
    player.off('playing', onPlaying);
    player.off('startBtnClick', onStartBtnClick);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('start', start);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var screenShot = function screenShot() {
  var player = this;
  var root = player.root;
  var screenShotOptions = player.config.screenShot;
  if (!screenShotOptions) {
    return;
  }

  var encoderOptions = 0.92;
  if (screenShotOptions.quality || screenShotOptions.quality === 0) {
    encoderOptions = screenShotOptions.quality;
  }
  var type = screenShotOptions.type === undefined ? 'image/png' : screenShotOptions.type;
  var format = screenShotOptions.format === undefined ? '.png' : screenShotOptions.format;

  var canvas = document.createElement('canvas');
  var canvasCtx = canvas.getContext('2d');
  var img = new Image();
  canvas.width = this.config.width || 600;
  canvas.height = this.config.height || 337.5;

  var saveScreenShot = function saveScreenShot(data, filename) {
    var saveLink = document.createElement('a');
    saveLink.href = data;
    saveLink.download = filename;
    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    saveLink.dispatchEvent(event);
  };

  function onScreenShotBtnClick() {
    var save = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    canvas.width = player.video.videoWidth || 600;
    canvas.height = player.video.videoHeight || 337.5;
    img.onload = function () {
      canvasCtx.drawImage(player.video, 0, 0, canvas.width, canvas.height);
      img.setAttribute('crossOrigin', 'anonymous');
      img.src = canvas.toDataURL(type, encoderOptions).replace(type, 'image/octet-stream');
      var screenShotImg = img.src.replace(/^data:image\/[^;]+/, 'data:application/octet-stream');
      player.emit('screenShot', screenShotImg);
      save && saveScreenShot(screenShotImg, '截图' + format);
    }();
  }
  player.on('screenShotBtnClick', onScreenShotBtnClick);

  function onDestroy() {
    player.off('screenShotBtnClick', onScreenShotBtnClick);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('screenShot', screenShot);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rotate = function rotate() {
  var player = this;
  var rotateConfig = player.config.rotate;
  if (!rotateConfig) {
    return;
  }

  function onRotateBtnClick() {
    player.rotate(rotateConfig.clockwise, rotateConfig.innerRotate);
  }
  player.on('rotateBtnClick', onRotateBtnClick);

  function onDestroy() {
    player.off('rotateBtnClick', onRotateBtnClick);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('rotate', rotate);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var replay = function replay() {
  var player = this;
  var util = _player2.default.util;
  var root = player.root;

  function replayFunc() {
    util.removeClass(root, 'replay');
    player.replay();
  }

  function onReplayBtnClick() {
    var headTails = player.config.headTails;
    if (headTails && headTails.head) {
      // 存在片头片尾
      // console.log(JSON.stringify(headTails))
      util.removeClass(this.root, 'xgplayer-ended');
      util.addClass(root, 'xgplayer-head-active');
      var time = headTails.head.time;
      var timeContainer = util.findDom(root, '.xgplayer-headtail-counter-time');
      timeContainer.innerHTML = '' + time;
      var imgContainer = util.findDom(root, '.xgplayer-headtail-head');
      imgContainer.src = headTails.head.img;
      var intervalID = window.setInterval(function () {
        timeContainer.innerHTML = '' + --time;
        if (time === 0) {
          util.removeClass(root, 'xgplayer-head-active');
          window.clearInterval(intervalID);
          replayFunc();
        }
      }, 1000);
    } else {
      replayFunc();
    }
  }
  player.on('replayBtnClick', onReplayBtnClick);

  function onEnded() {
    if (!player.config.loop) {
      util.addClass(root, 'replay');
    }
  }
  player.on('ended', onEnded);

  function onDestroy() {
    player.off('replayBtnClick', onReplayBtnClick);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('replay', replay);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reload = function reload() {
  var player = this;
  var reloadConfig = player.config.reload;
  if (!reloadConfig) {
    return;
  }

  function onReloadBtnClick() {
    _player2.default.util.removeClass(player.root, 'xgplayer-is-error');
    player.src = player.config.url;
  }
  player.on('reloadBtnClick', onReloadBtnClick);

  function onDestroy() {
    player.off('reloadBtnClick', onReloadBtnClick);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('reload', reload);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var playNext = function playNext() {
  var player = this;
  var root = player.root;
  var nextBtn = player.config.playNext;
  player.currentVideoIndex = -1;

  function onPlayNextBtnClick() {
    if (player.currentVideoIndex + 1 < nextBtn.urlList.length) {
      player.currentVideoIndex++;
      player.video.autoplay = true;
      player.src = nextBtn.urlList[player.currentVideoIndex];
      player.emit('playerNext', player.currentVideoIndex + 1);
    } else {
      player.emit('urlList last');
    }
  }
  player.on('playNextBtnClick', onPlayNextBtnClick);

  function onDestroy() {
    player.off('playNextBtnClick', onPlayNextBtnClick);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('playNext', playNext);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var play = function play() {
  var player = this;

  function onPlayBtnClick() {
    // if (!player.config.allowPlayAfterEnded && player.ended) {
    //   return
    // }
    if (player.paused) {
      var playPromise = player.play();
      if (playPromise !== undefined && playPromise) {
        playPromise.catch(function (err) {});
      }
    } else {
      player.pause();
    }
  }
  player.on('playBtnClick', onPlayBtnClick);

  function onDestroy() {
    player.off('playBtnClick', onPlayBtnClick);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('play', play);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pip = function pip() {
  var player = this;
  var util = _player2.default.util;
  var root = player.root;
  function onPipBtnClick() {
    if (util.hasClass(root, 'xgplayer-pip-active')) {
      player.exitPIP();
    } else {
      player.getPIP();
    }
  }
  player.on('pipBtnClick', onPipBtnClick);

  function onDestroy() {
    player.off('pipBtnClick', onPipBtnClick);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('pip', pip);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pc = function pc() {
  var player = this;
  var util = _player2.default.util;var controls = player.controls;var root = player.root;
  var clk = 0;var _click_ = void 0;

  player.onElementClick = function (e, element) {
    e.preventDefault();
    if (!this.config.closeVideoStopPropagation) {
      e.stopPropagation();
    }
    var player = this;
    if (!player.config.closeVideoClick) {
      clk++;
      if (_click_) {
        clearTimeout(_click_);
      }
      if (clk === 1) {
        _click_ = setTimeout(function () {
          if (util.hasClass(player.root, 'xgplayer-nostart')) {
            return false;
          } else if (!player.ended) {
            if (player.paused) {
              var playPromise = player.play();
              if (playPromise !== undefined && playPromise && util.typeOf(playPromise.catch) === 'function') {
                playPromise.catch(function (err) {});
              }
            } else {
              player.pause();
            }
          }
          clk = 0;
        }, 200);
      } else {
        clk = 0;
      }
    }
  };

  var _loop = function _loop(i) {
    var videoName = 'video' + (i === 0 ? '' : i);
    var channel = player.config.url.channels[i];
    if (channel.type === 'mp4') {
      player[videoName].addEventListener('click', function (e) {
        player.onElementClick(e, player[videoName]);
      }, false);
    }
  };

  for (var i = 0; i < player.channelNum; i++) {
    _loop(i);
  }

  player.onElementDblclick = function (e, element) {
    e.preventDefault();
    e.stopPropagation();
    var player = this;
    if (!player.config.closeVideoDblclick) {
      var fullscreen = controls.querySelector('.xgplayer-fullscreen');
      if (fullscreen) {
        var _clk = void 0;
        if (document.createEvent) {
          _clk = document.createEvent('Event');
          _clk.initEvent('click', true, true);
        } else {
          _clk = new Event('click');
        }
        fullscreen.dispatchEvent(_clk);
      }
    }
  };
  player.root.addEventListener('dblclick', function (e) {
    player.onElementDblclick(e, player.video);
  }, false);

  function onMouseEnter() {
    clearTimeout(player.leavePlayerTimer);
    player.emit('focus', player);
  }
  root.addEventListener('mouseenter', onMouseEnter);

  function onMouseLeave() {
    if (!player.config.closePlayerBlur) {
      player.leavePlayerTimer = setTimeout(function () {
        player.emit('blur', player);
      }, player.config.leavePlayerTime || 0);
    }
  }
  root.addEventListener('mouseleave', onMouseLeave);

  function onControlMouseEnter(e) {
    if (player.userTimer) {
      clearTimeout(player.userTimer);
    }
  }
  controls.addEventListener('mouseenter', onControlMouseEnter, false);

  function onControlMouseLeave(e) {
    if (!player.config.closeControlsBlur) {
      player.emit('focus', player);
    }
  }
  controls.addEventListener('mouseleave', onControlMouseLeave, false);

  function onReady(e) {
    if (player.config.autoplay) {
      player.start();
    }
  }
  player.once('ready', onReady);

  function onDestroy() {
    root.removeEventListener('mouseenter', onMouseEnter);
    root.removeEventListener('mouseleave', onMouseLeave);
    player.off('ready', onReady);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('pc', pc);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mobile = function mobile() {
  var player = this;
  var util = _player2.default.util;var controls = player.controls;var root = player.root;

  player.onElementTouchend = function (e, element) {
    e.preventDefault();
    e.stopPropagation();
    var player = this;
    if (util.hasClass(root, 'xgplayer-inactive')) {
      player.emit('focus');
    } else {
      player.emit('blur');
    }
    if (!player.config.closeVideoTouch && !player.isTouchMove) {
      if (util.hasClass(player.root, 'xgplayer-nostart')) {
        return false;
      } else if (!player.ended) {
        if (player.paused) {
          var playPromise = player.play();
          if (playPromise !== undefined && playPromise) {
            playPromise.catch(function (err) {});
          }
        } else {
          player.pause();
        }
      }
    }
  };

  function onReady(e) {
    player.video.addEventListener('touchend', function (e) {
      player.onElementTouchend(e, player.video);
    });
    player.video.addEventListener('touchstart', function () {
      player.isTouchMove = false;
    });
    player.video.addEventListener('touchmove', function () {
      player.isTouchMove = true;
    });
    if (player.config.autoplay) {
      player.start();
    }
  }
  player.once('ready', onReady);

  function onDestroy() {
    player.off('ready', onReady);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('mobile', mobile);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var memoryPlay = function memoryPlay() {
  var player = this;
  player.on('memoryPlayStart', function (lastPlayTime) {
    player.currentTime = lastPlayTime;
  });
};

_player2.default.install('memoryPlay', memoryPlay);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _sniffer = __webpack_require__(6);

var _sniffer2 = _interopRequireDefault(_sniffer);

var _collect = __webpack_require__(7);

var _collect2 = _interopRequireDefault(_collect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = function logger() {
  var player = this;
  var util = _player2.default.util;
  if (player.config.noLog !== true) {
    var endedFunc = function endedFunc() {
      var played = player.video.played;
      var watch_dur = computeWatchDur(player.logParams.played);
      var et = new Date().getTime();
      judgePtVt();
      var obj = {
        url: player.logParams.pluginSrc ? player.logParams.pluginSrc : player.logParams.playSrc,
        vid: player.config.vid,
        bc: player.logParams.bc - 1 > 0 ? player.logParams.bc - 1 : 0,
        bb: player.logParams.bc - 1 > 0 ? 1 : 0,
        bu_acu_t: player.logParams.bu_acu_t,
        pt: player.logParams.pt,
        vt: player.logParams.vt,
        vd: player.logParams.vd * 1000,
        watch_dur: parseFloat((watch_dur * 1000).toFixed(3)),
        cur_play_pos: parseFloat((player.currentTime * 1000).toFixed(3)),
        et: et
      };
      window.__xigua_log_sdk__('c', obj);
    };

    var urlchangeFunc = function urlchangeFunc() {
      var played = player.video.played;
      var watch_dur = computeWatchDur(player.logParams.played);
      var lt = new Date().getTime();
      judgePtVt();
      var obj = {
        url: player.logParams.pluginSrc ? player.logParams.pluginSrc : player.logParams.playSrc,
        vid: player.config.vid,
        bc: player.logParams.bc - 1 > 0 ? player.logParams.bc - 1 : 0,
        bb: player.logParams.bc - 1 > 0 ? 1 : 0,
        bu_acu_t: player.logParams.bu_acu_t,
        pt: player.logParams.pt,
        vt: player.logParams.vt,
        vd: player.logParams.vd * 1000,
        watch_dur: parseFloat((watch_dur * 1000).toFixed(3)),
        cur_play_pos: parseFloat((player.currentTime * 1000).toFixed(3)),
        lt: lt
      };
      window.__xigua_log_sdk__('d', obj);
    };

    var errorFunc = function errorFunc(err) {
      var played = player.video.played;
      var watch_dur = computeWatchDur(player.logParams.played);
      judgePtVt();
      var et = new Date().getTime();
      if (player.logParams.lastErrLog && et - player.logParams.lastErrLog <= 1000 * 3) {
        return;
      }
      player.logParams.lastErrLog = et;
      var obj = {
        url: player.logParams.pluginSrc ? player.logParams.pluginSrc : player.logParams.playSrc,
        vid: player.config.vid,
        bc: player.logParams.bc - 1 > 0 ? player.logParams.bc - 1 : 0,
        bb: player.logParams.bc - 1 > 0 ? 1 : 0,
        bu_acu_t: player.logParams.bu_acu_t,
        pt: player.logParams.pt,
        vt: player.logParams.vt,
        vd: player.logParams.vd * 1000,
        watch_dur: parseFloat((watch_dur * 1000).toFixed(3)),
        err_msg: err.errd.msg,
        line: err.errd.line,
        et: et,
        cur_play_pos: parseFloat((player.currentTime * 1000).toFixed(3))
      };
      if (player.logParams.nologFunc && player.logParams.nologFunc(player)) {
        return true;
      } else {
        window.__xigua_log_sdk__('e', obj);
      }
    };

    var destroyFunc = function destroyFunc() {
      if (_sniffer2.default.device === 'pc') {
        window.removeEventListener('beforeunload', userLeave);
      } else if (_sniffer2.default.device === 'mobile') {
        window.removeEventListener('pagehide', userLeave);
      }
      player.off('routechange', userLeave);
      player.off('ended', endedFunc);
      player.off('urlchange', urlchangeFunc);
      player.off('error', errorFunc);
      player.off('destroy', destroyFunc);
    };

    if (!window.__xigua_log_sdk__) {
      window.__xigua_log_sdk__ = new _collect2.default('tracker');
      window.__xigua_log_sdk__.init({
        app_id: 1300,
        channel: 'cn',
        log: false,
        disable_sdk_monitor: true
      });

      window.__xigua_log_sdk__('config', {
        evtParams: {
          log_type: 'logger',
          page_url: document.URL,
          domain: window.location.host,
          pver: player.version,
          ua: navigator.userAgent.toLowerCase()
        },
        disable_auto_pv: true
      });
      window.__xigua_log_sdk__.start();
    }

    if (player.config.uid) {
      window.__xigua_log_sdk__('config', {
        user_unique_id: player.config.uid
      });
    }

    var computeWatchDur = function computeWatchDur() {
      var played = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var minBegin = 0;
      var end = 0;
      var arr = [];
      for (var i = 0; i < played.length; i++) {
        if (!played[i].end || played[i].begin < 0 || played[i].end < 0 || played[i].end < played[i].begin) {
          continue;
        }
        if (arr.length < 1) {
          arr.push({ begin: played[i].begin, end: played[i].end });
        } else {
          for (var j = 0; j < arr.length; j++) {
            var begin = played[i].begin;
            var _end = played[i].end;
            if (_end < arr[j].begin) {
              arr.splice(j, 0, { begin: begin, end: _end });
              break;
            } else if (begin > arr[j].end) {
              if (j > arr.length - 2) {
                arr.push({ begin: begin, end: _end });
                break;
              }
            } else {
              var b = arr[j].begin;
              var e = arr[j].end;
              arr[j].begin = Math.min(begin, b);
              arr[j].end = Math.max(_end, e);
              break;
            }
          }
        }
      }
      var watch_dur = 0;
      for (var _i = 0; _i < arr.length; _i++) {
        watch_dur += arr[_i].end - arr[_i].begin;
      }
      return watch_dur;
    };

    var judgePtVt = function judgePtVt() {
      if (!player.logParams.pt || !player.logParams.vt) {
        player.logParams.pt = new Date().getTime();
        player.logParams.vt = player.logParams.pt;
      }
      if (player.logParams.pt > player.logParams.vt) {
        player.logParams.pt = player.logParams.vt;
      }
    };

    var userLeave = function userLeave(event) {
      if (util.hasClass(player.root, 'xgplayer-is-enter')) {
        var lt = new Date().getTime();
        var obj = {
          url: player.logParams.pluginSrc ? player.logParams.pluginSrc : player.logParams.playSrc,
          vid: player.config.vid,
          pt: player.logParams.pt,
          lt: lt
        };
        window.__xigua_log_sdk__('b', obj);
      } else if (util.hasClass(player.root, 'xgplayer-playing')) {
        var watch_dur = computeWatchDur(player.logParams.played);
        var _lt = new Date().getTime();
        judgePtVt();
        var _obj = {
          url: player.logParams.pluginSrc ? player.logParams.pluginSrc : player.logParams.playSrc,
          vid: player.config.vid,
          bc: player.logParams.bc - 1 > 0 ? player.logParams.bc - 1 : 0,
          bb: player.logParams.bc - 1 > 0 ? 1 : 0,
          bu_acu_t: player.logParams.bu_acu_t,
          pt: player.logParams.pt,
          vt: player.logParams.vt,
          vd: player.logParams.vd * 1000,
          watch_dur: parseFloat((watch_dur * 1000).toFixed(3)),
          cur_play_pos: parseFloat((player.currentTime * 1000).toFixed(3)),
          lt: _lt
        };
        window.__xigua_log_sdk__('d', _obj);
      }
    };
    if (_sniffer2.default.device === 'pc') {
      window.addEventListener('beforeunload', userLeave, false);
    } else if (_sniffer2.default.device === 'mobile') {
      window.addEventListener('pagehide', userLeave, false);
    }
    player.on('routechange', userLeave);

    player.on('ended', endedFunc);

    player.on('urlchange', urlchangeFunc);

    player.on('error', errorFunc);

    player.once('destroy', destroyFunc);
  }
}; /* eslint-disable */


_player2.default.install('logger', logger);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var localPreview = function localPreview() {
  var player = this;
  var root = player.root;
  function onUpload(upload) {
    player.uploadFile = upload.files[0];
    var url = URL.createObjectURL(player.uploadFile);
    if (_player2.default.util.hasClass(root, 'xgplayer-nostart')) {
      player.config.url = url;
      player.start();
    } else {
      player.src = url;
      var playPromise = player.play();
      if (playPromise !== undefined && playPromise) {
        playPromise.catch(function (err) {});
      }
    }
  }
  player.on('upload', onUpload);

  function onDestroy() {
    player.off('upload', onUpload);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('localPreview', localPreview);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var i18n = function i18n() {
  var player = this;var lang = {};var util = player.constructor.util;
  lang.en = {
    HAVE_NOTHING: 'There is no information on whether audio/video is ready',
    HAVE_METADATA: 'Audio/video metadata is ready ',
    HAVE_CURRENT_DATA: 'Data about the current play location is available, but there is not enough data to play the next frame/millisecond',
    HAVE_FUTURE_DATA: 'Current and at least one frame of data is available',
    HAVE_ENOUGH_DATA: 'The available data is sufficient to start playing',
    NETWORK_EMPTY: 'Audio/video has not been initialized',
    NETWORK_IDLE: 'Audio/video is active and has been selected for resources, but no network is used',
    NETWORK_LOADING: 'The browser is downloading the data',
    NETWORK_NO_SOURCE: 'No audio/video source was found',
    MEDIA_ERR_ABORTED: 'The fetch process is aborted by the user',
    MEDIA_ERR_NETWORK: 'An error occurred while downloading',
    MEDIA_ERR_DECODE: 'An error occurred while decoding',
    MEDIA_ERR_SRC_NOT_SUPPORTED: 'Audio/video is not supported',
    REPLAY: 'Replay',
    ERROR: 'Network is offline',
    PLAY_TIPS: 'Play',
    PAUSE_TIPS: 'Pause',
    PLAYNEXT_TIPS: 'Play next',
    DOWNLOAD_TIPS: 'Download',
    ROTATE_TIPS: 'Rotate',
    RELOAD_TIPS: 'Reload',
    FULLSCREEN_TIPS: "Fullscreen",
    EXITFULLSCREEN_TIPS: 'Exit fullscreen',
    CSSFULLSCREEN_TIPS: 'Cssfullscreen',
    EXITCSSFULLSCREEN_TIPS: 'Exit cssfullscreen',
    TEXTTRACK: 'Caption',
    PIP: 'Pip',
    SCREENSHOT: 'Screenshot',
    LIVE: 'LIVE'
  };
  lang['zh-cn'] = {
    HAVE_NOTHING: '没有关于音频/视频是否就绪的信息',
    HAVE_METADATA: '音频/视频的元数据已就绪',
    HAVE_CURRENT_DATA: '关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒',
    HAVE_FUTURE_DATA: '当前及至少下一帧的数据是可用的',
    HAVE_ENOUGH_DATA: '可用数据足以开始播放',
    NETWORK_EMPTY: '音频/视频尚未初始化',
    NETWORK_IDLE: '音频/视频是活动的且已选取资源，但并未使用网络',
    NETWORK_LOADING: '浏览器正在下载数据',
    NETWORK_NO_SOURCE: '未找到音频/视频来源',
    MEDIA_ERR_ABORTED: '取回过程被用户中止',
    MEDIA_ERR_NETWORK: '当下载时发生错误',
    MEDIA_ERR_DECODE: '当解码时发生错误',
    MEDIA_ERR_SRC_NOT_SUPPORTED: '不支持的音频/视频格式',
    REPLAY: '重播',
    ERROR: '网络连接似乎出现了问题',
    PLAY_TIPS: '播放',
    PAUSE_TIPS: '暂停',
    PLAYNEXT_TIPS: '下一集',
    DOWNLOAD_TIPS: '下载',
    ROTATE_TIPS: '旋转',
    RELOAD_TIPS: '重新载入',
    FULLSCREEN_TIPS: "进入全屏",
    EXITFULLSCREEN_TIPS: '退出全屏',
    CSSFULLSCREEN_TIPS: '进入样式全屏',
    EXITCSSFULLSCREEN_TIPS: '退出样式全屏',
    TEXTTRACK: '字幕',
    PIP: '画中画',
    SCREENSHOT: '截图',
    LIVE: '正在直播'
  };
  lang['jp'] = {
    HAVE_NOTHING: 'オーディオ/ビデオが準備できているか情報がありません',
    HAVE_METADATA: 'オーディオ/ビデオのメタデータは準備できています',
    HAVE_CURRENT_DATA: '現在の再生位置に関するデータは利用可能ですが、次のフレーム/ミリ秒を再生するのに十分なデータがありません',
    HAVE_FUTURE_DATA: '現在、少なくとも次のフレームのデータが利用可能です',
    HAVE_ENOUGH_DATA: '利用可能なデータは再生を開始するのに十分です',
    NETWORK_EMPTY: 'オーディオ/ビデオが初期化されていません',
    NETWORK_IDLE: 'オーディオ/ビデオはアクティブでリソースが選択されていますが、ネットワークが使用されていません',
    NETWORK_LOADING: 'ブラウザーはデータをダウンロードしています',
    NETWORK_NO_SOURCE: 'オーディオ/ビデオ のソースが見つかりません',
    MEDIA_ERR_ABORTED: 'ユーザーによってフェッチプロセスが中止されました',
    MEDIA_ERR_NETWORK: 'ダウンロード中にエラーが発生しました',
    MEDIA_ERR_DECODE: 'デコード中にエラーが発生しました',
    MEDIA_ERR_SRC_NOT_SUPPORTED: 'オーディオ/ビデオ の形式がサポートされていません',
    REPLAY: 'リプレイ',
    ERROR: 'ネットワークの接続に問題が発生しました',
    PLAY_TIPS: 'プレイ',
    PAUSE_TIPS: '一時停止',
    PLAYNEXT_TIPS: '次をプレイ',
    DOWNLOAD_TIPS: 'ダウンロード',
    ROTATE_TIPS: '回転',
    RELOAD_TIPS: '再読み込み',
    FULLSCREEN_TIPS: "フルスクリーン",
    EXITFULLSCREEN_TIPS: 'フルスクリーンを終了',
    CSSFULLSCREEN_TIPS: 'シアターモード',
    EXITCSSFULLSCREEN_TIPS: 'シアターモードを終了',
    TEXTTRACK: '字幕',
    PIP: 'ミニプレーヤー',
    SCREENSHOT: 'スクリーンショット',
    LIVE: '生放送'
  };

  Object.defineProperty(player, 'lang', {
    get: function get() {
      if (player.config) {
        return lang[player.config.lang] || lang['en'];
      } else {
        return lang['en'];
      }
    },
    set: function set(value) {
      if (util.typeOf(value) === 'Object') {
        Object.keys(value).forEach(function (key) {
          lang[key] = value[key];
        });
      }
    }
  });
};

_player2.default.install('i18n', i18n);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fullscreen = function fullscreen() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;

  function onFullscreenBtnClick() {
    if (player.config.rotateFullscreen) {
      if (util.hasClass(root, 'xgplayer-rotate-fullscreen')) {
        player.exitRotateFullscreen();
      } else {
        player.getRotateFullscreen();
      }
    } else {
      if (util.hasClass(root, 'xgplayer-is-fullscreen')) {
        player.exitFullscreen(root);
      } else {
        player.getFullscreen(root);
      }
    }
  }
  player.on('fullscreenBtnClick', onFullscreenBtnClick);

  function onFullscreenChange() {
    var fullscreenEl = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    if (fullscreenEl && fullscreenEl === root) {
      util.addClass(root, 'xgplayer-is-fullscreen');
      player.emit('requestFullscreen');
    } else {
      util.removeClass(root, 'xgplayer-is-fullscreen');
      player.emit('exitFullscreen');
    }
  };
  ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'].forEach(function (item) {
    document.addEventListener(item, onFullscreenChange);
  });

  function onDestroy() {
    player.off('fullscreenBtnClick', onFullscreenBtnClick);
    ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'].forEach(function (item) {
      document.removeEventListener(item, onFullscreenChange);
    });
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('fullscreen', fullscreen);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Error retry plugin
 * get config from player.config.errorConfig
 * The Plugin is just deal with the situation that play with video.src,
 * and get the http status of current video.src
 */

var defaultConfig = {
  maxCount: 3, // max number of retries
  backupUrl: '', // the backup url for retry
  isFetch: true, //  is need to check the cdn url statud
  fetchTimeout: 100 // timeout time for get cdn status
};

function errorRetry() {
  var _this = this;

  var player = this;
  // 无设置参数或者是通过扩展播放的不做处理
  if (!player.config.errorConfig || player.src.indexOf('blob:') > -1) {
    return;
  }
  var errorConfig = {};
  var _inConfig = player.config.errorConfig;
  for (var key in defaultConfig) {
    if (_inConfig[key] === undefined) {
      errorConfig[key] = defaultConfig[key];
    } else {
      errorConfig[key] = _inConfig[key];
    }
  }
  player.retryData = {
    count: 0, // 重试次数
    errfTimer: null, // 超时设置定时器
    isFetchReturn: false, // fetch请求是否已经返回
    currentTime: 0 // 出错的时候时间
  };

  function errorfetch(player, url, timeout) {
    var resolveFun = function resolveFun(resolve, data) {
      if (!player.retryData.isFetchReturn) {
        player.retryData.isFetchReturn = true;
        resolve(data);
      }
    };
    return new Promise(function (resolve, reject) {
      try {
        var xhr = new window.XMLHttpRequest();
        xhr.open('get', url);
        xhr.onload = function () {
          resolveFun(resolve, { status: xhr.status, statusText: xhr.statusText, xhr: xhr });
        };
        xhr.onerror = function () {
          resolveFun(resolve, { status: xhr.status, statusText: xhr.statusText || 'The network environment is disconnected or the address is invalid', xhr: xhr });
        };
        xhr.onabort = function () {
          // console.log('task onerror', xhr)
        };
        player.retryData.errfTimer = window.setTimeout(function () {
          var errfTimer = player.retryData.errfTimer;
          window.clearTimeout(errfTimer);
          player.retryData.errfTimer = null;
          resolveFun(resolve, { status: -1, statusText: 'request timeout' });
        }, timeout);
        xhr.send();
      } catch (err) {
        player.retryData.isFetchReturn = true;
        resolveFun(resolve, { status: -2, statusText: 'request error' });
      }
    });
  }

  function retryCanPlay() {
    // console.log(`retryCanPlay this.retryData.currentTime:${this.retryData.currentTime}`)
    this.currentTime = this.retryData.currentTime;
    this.play();
    this.retryData.retryCode = 0;
    this.retryData.isFetchReturn = false;
    this.retryData.currentTime = 0;
  }

  var _originErrorEmit = player._onError;
  player._onError = function (data) {
    var errorCount = _this.retryData.count;
    // console.log(`originErrorEmit:errorCount:${errorCount}`, data)
    if (errorCount > errorConfig.maxCount) {
      if (errorConfig.isFetch) {
        errorfetch(_this, _this.currentSrc, errorConfig.fetchTimeout).then(function (data) {
          _this.emit('error', new _player2.default.Errors({
            type: 'network',
            currentTime: _this.currentTime,
            duration: _this.duration || 0,
            networkState: _this.networkState,
            readyState: _this.readyState,
            currentSrc: _this.currentSrc,
            src: _this.src,
            ended: _this.ended,
            httpCode: data.status,
            httpMsg: data.statusText,
            errd: {
              line: 101,
              msg: _this.error,
              handle: 'plugin errorRetry'
            },
            errorCode: _this.video && _this.video.error.code,
            mediaError: _this.video && _this.video.error
          }));
          _originErrorEmit.call(_this, data);
        });
      } else {
        _originErrorEmit.call(_this, data);
      }
      return;
    }
    if (errorCount === 0) {
      _this.retryData.currentTime = _this.currentTime;
      _this.once('canplay', retryCanPlay.bind(_this));
    }
    var src = '';
    if (errorConfig.count < 2) {
      src = errorConfig.backupUrl ? errorConfig.backupUrl : player.currentSrc;
    } else {
      src = errorConfig.backupUrl && errorCount > 1 ? errorConfig.backupUrl : player.currentSrc;
    }
    _this.retryData.count++;
    _this.src = src;
  };
}

_player2.default.install('errorretry', errorRetry);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var download = function download() {
  var player = this;

  function onDownloadBtnClick() {
    // must pass an absolute url for download
    player.download();
  }
  player.on('downloadBtnClick', onDownloadBtnClick);

  function onDestroy() {
    player.off('downloadBtnClick', onDownloadBtnClick);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('download', download);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = function definition() {
  var player = this;
  var root = player.root;

  function onDestroy() {
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('definition', definition);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var danmu = function danmu() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;

  function onInitDanmu(danmujs) {
    var container = player.root.querySelector('xg-danmu');
    util.addClass(container, 'xgplayer-has-danmu');
    if (!player.config.danmu.closeDefaultBtn) {
      var onTimeupdate = function onTimeupdate() {
        danmujs.start();
      };

      var onPause = function onPause() {
        if (util.hasClass(player.danmuBtn, 'danmu-switch-active')) {
          danmujs.pause();
        }
      };

      var onPlay = function onPlay() {
        if (util.hasClass(player.danmuBtn, 'danmu-switch-active')) {
          danmujs.play();
        }
      };

      var onSeeked = function onSeeked() {
        if (util.hasClass(player.danmuBtn, 'danmu-switch-active')) {
          danmujs.stop();
          danmujs.start();
        }
      };

      var onDestroy = function onDestroy() {
        player.off('timeupdate', onTimeupdate);
        player.off('pause', onPause);
        player.off('play', onPlay);
        player.off('seeked', onSeeked);
        player.off('destroy', onDestroy);
      };

      player.danmuBtn = util.copyDom(danmujs.bulletBtn.createSwitch(true));
      player.controls.appendChild(player.danmuBtn);

      ['click', 'touchend'].forEach(function (item) {
        player.danmuBtn.addEventListener(item, function (e) {
          e.preventDefault();
          e.stopPropagation();
          util.toggleClass(player.danmuBtn, 'danmu-switch-active');
          if (util.hasClass(player.danmuBtn, 'danmu-switch-active')) {
            player.emit('danmuBtnOn');
            util.addClass(container, 'xgplayer-has-danmu');
            player.once('timeupdate', onTimeupdate);
          } else {
            player.emit('danmuBtnOff');
            util.removeClass(container, 'xgplayer-has-danmu');
            danmujs.stop();
          }
        });
      });

      player.onElementClick && container.addEventListener('click', function (e) {
        player.onElementClick(e, container);
      }, false);
      player.onElementDblclick && container.addEventListener('dblclick', function (e) {
        player.onElementDblclick(e, container);
      }, false);

      player.on('pause', onPause);

      player.on('play', onPlay);

      player.on('seeked', onSeeked);

      player.once('destroy', onDestroy);
    }
  }
  player.on('initDefaultDanmu', onInitDanmu);
};

_player2.default.install('danmu', danmu);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cssFullscreen = function cssFullscreen() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;

  function onCssFullscreenBtnClick() {
    if (util.hasClass(root, 'xgplayer-is-cssfullscreen')) {
      player.exitCssFullscreen();
    } else {
      player.getCssFullscreen();
    }
  }
  player.on('cssFullscreenBtnClick', onCssFullscreenBtnClick);
  player.on('exitFullscreen', function () {
    util.removeClass(root, 'xgplayer-is-cssfullscreen');
  });

  function onDestroy() {
    player.off('cssFullscreenBtnClick', onCssFullscreenBtnClick);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('cssFullscreen', cssFullscreen);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(60);

__webpack_require__(65);

__webpack_require__(68);

__webpack_require__(71);

__webpack_require__(72);

__webpack_require__(73);

__webpack_require__(76);

__webpack_require__(79);

__webpack_require__(80);

__webpack_require__(81);

__webpack_require__(83);

__webpack_require__(84);

__webpack_require__(85);

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(61);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(63)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(62)(false);
// imports


// module
exports.push([module.i, ".xgplayer-skin-default{background:#000;width:100%;height:100%;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;-ms-user-select:none}.xgplayer-skin-default *{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.xgplayer-skin-default.xgplayer-rotate-fullscreen{position:absolute;top:0;left:100%;bottom:0;right:0;height:100vw!important;width:100vh!important;-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.xgplayer-skin-default.xgplayer-is-fullscreen{width:100%!important;height:100%!important;padding-top:0!important;z-index:9999}.xgplayer-skin-default.xgplayer-is-fullscreen.xgplayer-inactive{cursor:none}.xgplayer-skin-default object{width:300px;height:200px;outline:none;position:absolute;z-index:1}.xgplayer-skin-default .xgplayer-none{display:none}@-webkit-keyframes loadingRotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingRotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes loadingDashOffset{0%{stroke-dashoffset:236}to{stroke-dashoffset:0}}@keyframes loadingDashOffset{0%{stroke-dashoffset:236}to{stroke-dashoffset:0}}.xgplayer-skin-default .xgplayer-play,.xgplayer-skin-default .xgplayer-play-img{width:45px;position:relative;-webkit-order:0;-moz-box-ordinal-group:1;order:0;display:block;cursor:pointer;margin-left:3px;margin-right:8px}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon,.xgplayer-skin-default .xgplayer-play .xgplayer-icon{margin-top:3px;width:32px}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon div,.xgplayer-skin-default .xgplayer-play .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default .xgplayer-play .xgplayer-icon .xgplayer-icon-play{display:block}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:none}.xgplayer-skin-default .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:block}.xgplayer-skin-default .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:none}.xgplayer-skin-default .xgplayer-play-img:hover,.xgplayer-skin-default .xgplayer-play:hover{opacity:.85}.xgplayer-skin-default .xgplayer-play-img:hover .xgplayer-tips,.xgplayer-skin-default .xgplayer-play:hover .xgplayer-tips{display:block}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-icon .xgplayer-icon-play{display:none}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:block}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:none}.xgplayer-skin-default .xgplayer-start{border-radius:50%;display:inline-block;width:70px;height:70px;background:rgba(0,0,0,.38);overflow:hidden;text-align:center;line-height:70px;vertical-align:middle;position:absolute;left:50%;top:50%;z-index:115;margin:-35px auto auto -35px;cursor:pointer}.xgplayer-skin-default .xgplayer-start div{position:absolute}.xgplayer-skin-default .xgplayer-start div svg{fill:hsla(0,0%,100%,.7);margin:14px}.xgplayer-skin-default .xgplayer-start .xgplayer-icon-play{display:block}.xgplayer-skin-default .xgplayer-start .xgplayer-icon-pause{display:none}.xgplayer-skin-default .xgplayer-start:hover{opacity:.85}.xgplayer-skin-default.xgplayer-playing .xgplayer-start,.xgplayer-skin-default.xgplayer-playing .xgplayer-start .xgplayer-icon-play{display:none}.xgplayer-skin-default.xgplayer-playing .xgplayer-start .xgplayer-icon-pause{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-start{display:inline-block}.xgplayer-skin-default.xgplayer-pause .xgplayer-start .xgplayer-icon-play{display:block}.xgplayer-skin-default.replay .xgplayer-start,.xgplayer-skin-default.xgplayer-pause .xgplayer-start .xgplayer-icon-pause{display:none}.xgplayer-skin-default.replay .xgplayer-start .xgplayer-icon-play{display:block}.xgplayer-skin-default.replay .xgplayer-start .xgplayer-icon-pause,.xgplayer-skin-default.xgplayer-head-active .xgplayer-start,.xgplayer-skin-default.xgplayer-tail-active .xgplayer-start{display:none}.xgplayer-skin-default .xgplayer-enter{display:none;position:absolute;left:0;top:0;width:100%;height:100%;background:#000;z-index:120}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner{display:block;position:absolute;left:50%;top:50%;height:100px;width:100px;position:relative;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div{width:12%;height:26%;background-color:hsla(0,0%,100%,.7);position:absolute;left:44%;top:37%;opacity:0;border-radius:30px;-webkit-animation:fade 1s linear infinite;animation:fade 1s linear infinite}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar1{-webkit-transform:rotate(0deg) translateY(-142%);-ms-transform:rotate(0deg) translateY(-142%);transform:rotate(0deg) translateY(-142%);-webkit-animation-delay:0s;animation-delay:0s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar2{-webkit-transform:rotate(30deg) translateY(-142%);-ms-transform:rotate(30deg) translateY(-142%);transform:rotate(30deg) translateY(-142%);-webkit-animation-delay:-.9163s;animation-delay:-.9163s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar3{-webkit-transform:rotate(60deg) translateY(-142%);-ms-transform:rotate(60deg) translateY(-142%);transform:rotate(60deg) translateY(-142%);-webkit-animation-delay:-.833s;animation-delay:-.833s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar4{-webkit-transform:rotate(90deg) translateY(-142%);-ms-transform:rotate(90deg) translateY(-142%);transform:rotate(90deg) translateY(-142%);-webkit-animation-delay:-.7497s;animation-delay:-.7497s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar5{-webkit-transform:rotate(120deg) translateY(-142%);-ms-transform:rotate(120deg) translateY(-142%);transform:rotate(120deg) translateY(-142%);-webkit-animation-delay:-.6664s;animation-delay:-.6664s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar6{-webkit-transform:rotate(150deg) translateY(-142%);-ms-transform:rotate(150deg) translateY(-142%);transform:rotate(150deg) translateY(-142%);-webkit-animation-delay:-.5831s;animation-delay:-.5831s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar7{-webkit-transform:rotate(180deg) translateY(-142%);-ms-transform:rotate(180deg) translateY(-142%);transform:rotate(180deg) translateY(-142%);-webkit-animation-delay:-.4998s;animation-delay:-.4998s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar8{-webkit-transform:rotate(210deg) translateY(-142%);-ms-transform:rotate(210deg) translateY(-142%);transform:rotate(210deg) translateY(-142%);-webkit-animation-delay:-.4165s;animation-delay:-.4165s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar9{-webkit-transform:rotate(240deg) translateY(-142%);-ms-transform:rotate(240deg) translateY(-142%);transform:rotate(240deg) translateY(-142%);-webkit-animation-delay:-.3332s;animation-delay:-.3332s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar10{-webkit-transform:rotate(270deg) translateY(-142%);-ms-transform:rotate(270deg) translateY(-142%);transform:rotate(270deg) translateY(-142%);-webkit-animation-delay:-.2499s;animation-delay:-.2499s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar11{-webkit-transform:rotate(300deg) translateY(-142%);-ms-transform:rotate(300deg) translateY(-142%);transform:rotate(300deg) translateY(-142%);-webkit-animation-delay:-.1666s;animation-delay:-.1666s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar12{-webkit-transform:rotate(330deg) translateY(-142%);-ms-transform:rotate(330deg) translateY(-142%);transform:rotate(330deg) translateY(-142%);-webkit-animation-delay:-.0833s;animation-delay:-.0833s}@-webkit-keyframes fade{0%{opacity:1}to{opacity:.25}}.xgplayer-skin-default.xgplayer-is-enter .xgplayer-enter{display:block}.xgplayer-skin-default .xgplayer-poster{display:none;position:absolute;left:0;top:0;width:100%;height:100%;z-index:100;background-size:cover;background-position:50%}.xgplayer-skin-default.xgplayer-nostart .xgplayer-poster{display:block}.xgplayer-skin-default .xgplayer-placeholder{-webkit-flex:1;-moz-box-flex:1;flex:1;-webkit-order:3;-moz-box-ordinal-group:4;order:3;display:block}.xgplayer-skin-default .xgplayer-fullscreen,.xgplayer-skin-default .xgplayer-fullscreen-img{position:relative;-webkit-order:13;-moz-box-ordinal-group:14;order:13;display:block;cursor:pointer;margin-left:5px;margin-right:3px;z-index:36}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon{margin-top:3px}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon div,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:block}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:none}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-tips,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-tips{position:absolute;right:0;left:auto}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:block}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:none}.xgplayer-skin-default .xgplayer-fullscreen-img:hover,.xgplayer-skin-default .xgplayer-fullscreen:hover{opacity:.85}.xgplayer-skin-default .xgplayer-fullscreen-img:hover .xgplayer-tips,.xgplayer-skin-default .xgplayer-fullscreen:hover .xgplayer-tips{display:block}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:block}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:block}.xgplayer-skin-default .xgplayer-cssfullscreen,.xgplayer-skin-default .xgplayer-cssfullscreen-img{position:relative;-webkit-order:12;-moz-box-ordinal-group:13;order:12;display:block;cursor:pointer}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-icon,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-icon{width:32px;margin-top:5px}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-icon div,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:block}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:none}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-tips,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-40px}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:block}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:none}.xgplayer-skin-default .xgplayer-cssfullscreen-img:hover,.xgplayer-skin-default .xgplayer-cssfullscreen:hover{opacity:.85}.xgplayer-skin-default .xgplayer-cssfullscreen-img:hover .xgplayer-tips,.xgplayer-skin-default .xgplayer-cssfullscreen:hover .xgplayer-tips{display:block}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:block}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-47px}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:block}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-cssfullscreen,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-cssfullscreen-img{display:none}.xgplayer-skin-default.xgplayer-is-cssfullscreen{position:fixed!important;left:0!important;top:0!important;width:100%!important;height:100%!important;z-index:99999!important}.lang-is-en .xgplayer-cssfullscreen-img .xgplayer-tips,.lang-is-en .xgplayer-cssfullscreen .xgplayer-tips,.lang-is-en.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips,.lang-is-en.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-46px}.lang-is-jp .xgplayer-cssfullscreen-img .xgplayer-tips,.lang-is-jp .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-120px}.lang-is-jp.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips,.lang-is-jp.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-60px}.xgplayer-skin-default .xgplayer-volume{outline:none;-webkit-order:4;-moz-box-ordinal-group:5;order:4;width:40px;height:40px;display:block;position:relative;z-index:18}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon{margin-top:8px;cursor:pointer;position:absolute;bottom:-9px}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon .xgplayer-icon-large{display:block}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted,.xgplayer-skin-default .xgplayer-volume .xgplayer-icon .xgplayer-icon-small{display:none}.xgplayer-skin-default .xgplayer-slider{display:none;position:absolute;width:28px;height:92px;background:rgba(0,0,0,.54);border-radius:1px;bottom:42px;outline:none}.xgplayer-skin-default .xgplayer-slider:after{content:\" \";display:block;height:15px;width:28px;position:absolute;bottom:-15px;left:0;z-index:20}.xgplayer-skin-default .xgplayer-bar,.xgplayer-skin-default .xgplayer-drag{display:block;position:absolute;bottom:6px;left:12px;background:hsla(0,0%,100%,.3);border-radius:100px;width:4px;height:76px;outline:none;cursor:pointer}.xgplayer-skin-default .xgplayer-drag{bottom:0;left:0;background:#ff8000;max-height:76px}.xgplayer-skin-default .xgplayer-drag:after{content:\" \";display:inline-block;width:8px;height:8px;background:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,.26);position:absolute;border-radius:50%;left:-2px;top:-6px}.xgplayer-skin-default.xgplayer-volume-active .xgplayer-slider,.xgplayer-skin-default.xgplayer-volume-large .xgplayer-volume .xgplayer-icon .xgplayer-icon-large{display:block}.xgplayer-skin-default.xgplayer-volume-large .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted,.xgplayer-skin-default.xgplayer-volume-large .xgplayer-volume .xgplayer-icon .xgplayer-icon-small,.xgplayer-skin-default.xgplayer-volume-small .xgplayer-volume .xgplayer-icon .xgplayer-icon-large{display:none}.xgplayer-skin-default.xgplayer-volume-small .xgplayer-volume .xgplayer-icon .xgplayer-icon-small{display:block}.xgplayer-skin-default.xgplayer-volume-muted .xgplayer-volume .xgplayer-icon .xgplayer-icon-large,.xgplayer-skin-default.xgplayer-volume-muted .xgplayer-volume .xgplayer-icon .xgplayer-icon-small,.xgplayer-skin-default.xgplayer-volume-small .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted{display:none}.xgplayer-skin-default.xgplayer-volume-muted .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted{display:block}.xgplayer-skin-default.xgplayer-mobile .xgplayer-volume .xgplayer-slider{display:none}.xgplayer-skin-default .xgplayer-definition{-webkit-order:6;-moz-box-ordinal-group:7;order:6;width:80px;height:42px;z-index:18;position:relative;outline:none;display:none;cursor:default;margin-left:10px;margin-top:-7px}.xgplayer-skin-default .xgplayer-definition ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:42px;left:0;text-align:center;white-space:nowrap;margin-left:-5px;z-index:26;cursor:pointer}.xgplayer-skin-default .xgplayer-definition ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);padding:6px 13px}.xgplayer-skin-default .xgplayer-definition ul li.selected,.xgplayer-skin-default .xgplayer-definition ul li:hover{color:#ff8000;opacity:1}.xgplayer-skin-default .xgplayer-definition .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;cursor:pointer;color:hsla(0,0%,100%,.8);position:absolute;bottom:5px;width:70px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-skin-default.xgplayer-definition-active .xgplayer-definition ul,.xgplayer-skin-default.xgplayer-is-definition .xgplayer-definition{display:block}.xgplayer-skin-default .xgplayer-displaymode{-webkit-order:5;-moz-box-ordinal-group:6;order:5;width:60px;height:42px;z-index:18;position:relative;outline:none;display:none;cursor:default;margin-left:10px;margin-top:-7px}.xgplayer-skin-default .xgplayer-displaymode ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:42px;left:0;text-align:center;white-space:nowrap;margin-left:-10px;z-index:26;cursor:pointer}.xgplayer-skin-default .xgplayer-displaymode ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);padding:3px 13px}.xgplayer-skin-default .xgplayer-displaymode ul li svg path{fill:#fff;fill-opacity:0;stroke-width:2;stroke:#ddd}.xgplayer-skin-default .xgplayer-displaymode ul li svg path.curr,.xgplayer-skin-default .xgplayer-displaymode ul li svg path:hover{stroke:#f80}.xgplayer-skin-default .xgplayer-displaymode .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;cursor:pointer;color:hsla(0,0%,100%,.8);position:absolute;bottom:5px;width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-skin-default.xgplayer-displaymode-active .xgplayer-displaymode ul,.xgplayer-skin-default.xgplayer-is-displaymode .xgplayer-displaymode{display:block}.xgplayer-skin-default .xgplayer-time{-webkit-order:2;-moz-box-ordinal-group:3;order:2;font-family:ArialMT;font-size:13px;color:#fff;line-height:40px;height:40px;text-align:center;display:inline-block}.xgplayer-skin-default .xgplayer-time span{color:hsla(0,0%,100%,.5)}.xgplayer-skin-default .xgplayer-time .xgplayer-time-current{color:#fff}.xgplayer-skin-default .xgplayer-time .xgplayer-time-current:after{content:\"/\";display:inline-block;padding:0 3px}.xgplayer-skin-default .xgplayer-controls{display:-webkit-flex;display:-moz-box;display:flex;position:absolute;bottom:0;left:0;right:0;height:40px;background-image:linear-gradient(180deg,transparent,rgba(0,0,0,.37),rgba(0,0,0,.75),rgba(0,0,0,.75));z-index:10}.xgplayer-skin-default.no-controls .xgplayer-controls,.xgplayer-skin-default.xgplayer-inactive .xgplayer-controls,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls>*,.xgplayer-skin-default.xgplayer-nostart .xgplayer-controls{display:none}.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .danmu-switch,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-cssfullscreen,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-definition,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-displaymode,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-fullscreen,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-live,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-placeholder,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-play,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-play-img,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-reload,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-volume{display:block}.xgplayer-skin-default .xgplayer-live{display:block;font-size:12px;color:#fff;line-height:40px;-webkit-order:1;-moz-box-ordinal-group:2;order:1}.xgplayer-skin-default .xgplayer-loading{display:none;width:100px;height:100px;overflow:hidden;-webkit-transform:scale(.7);-ms-transform:scale(.7);transform:scale(.7);position:absolute;left:50%;top:50%;margin:-50px auto auto -50px}.xgplayer-skin-default .xgplayer-loading svg{border-radius:50%;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:loadingRotate 1s linear infinite;animation:loadingRotate 1s linear infinite}.xgplayer-skin-default .xgplayer-loading svg path{stroke:#ddd;stroke-dasharray:236;-webkit-animation:loadingDashOffset 2s linear infinite;animation:loadingDashOffset 2s linear infinite;animation-direction:alternate-reverse;fill:none;stroke-width:12px}.xgplayer-skin-default.xgplayer-nostart .xgplayer-loading{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-loading{display:none!important}.xgplayer-skin-default.xgplayer-isloading .xgplayer-loading{display:block}.xgplayer-skin-default .xgplayer-progress{display:block;position:absolute;height:20px;line-height:20px;left:12px;right:12px;outline:none;top:-15px;z-index:36}.xgplayer-skin-default .xgplayer-progress-outer{background:hsla(0,0%,100%,.3);display:block;height:3px;line-height:3px;margin-top:8.5px;width:100%;position:relative;cursor:pointer}.xgplayer-skin-default .xgplayer-progress-cache,.xgplayer-skin-default .xgplayer-progress-played{display:block;height:100%;line-height:1;position:absolute;left:0;top:0}.xgplayer-skin-default .xgplayer-progress-cache{width:0;background:hsla(0,0%,100%,.5)}.xgplayer-skin-default .xgplayer-progress-played{display:block;width:0;background-image:linear-gradient(-90deg,#3896e2,#3896e2);border-radius:0 1.5px 1.5px 0}.xgplayer-skin-default .xgplayer-progress-btn{display:none;position:absolute;left:0;top:-5px;width:13px;height:13px;border-radius:30px;background:#fff;box-shadow:0 0 2px 0 rgba(0,0,0,.26);left:100%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%)}.xgplayer-skin-default .xgplayer-progress-point{position:absolute}.xgplayer-skin-default .xgplayer-progress-point.xgplayer-tips{margin-left:0;top:-25px;display:none;z-index:100}.xgplayer-skin-default .xgplayer-progress-dot{display:inline-block;position:absolute;height:3px;width:5px;top:0;background:#fff;border-radius:6px;z-index:16}.xgplayer-skin-default .xgplayer-progress-dot .xgplayer-progress-tip{position:absolute;left:0;top:-40px;height:auto;line-height:30px;width:auto;-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8);background:rgba(0,0,0,.54);border-radius:6px;border:1px solid rgba(0,0,0,.8);cursor:default;white-space:nowrap;display:none;color:#fff;padding:2px 5px}.xgplayer-skin-default .xgplayer-progress-dot-show .xgplayer-progress-tip{display:block}.xgplayer-skin-default .xgplayer-progress-thumbnail{position:absolute;-moz-box-sizing:border-box;box-sizing:border-box}.xgplayer-skin-default .xgplayer-progress-thumbnail.xgplayer-tips{margin-left:0;display:none;z-index:99}.xgplayer-skin-default .xgplayer-progress:focus .xgplayer-progress-outer,.xgplayer-skin-default .xgplayer-progress:hover .xgplayer-progress-outer{height:6px;margin-top:7px}.xgplayer-skin-default .xgplayer-progress:focus .xgplayer-progress-dot,.xgplayer-skin-default .xgplayer-progress:hover .xgplayer-progress-dot{height:6px}.xgplayer-skin-default .xgplayer-progress:focus .xgplayer-progress-btn,.xgplayer-skin-default .xgplayer-progress:hover .xgplayer-progress-btn{display:block;top:-3px}.xgplayer-skin-default.xgplayer-definition-active .xgplayer-progress,.xgplayer-skin-default.xgplayer-displaymode-active .xgplayer-progress,.xgplayer-skin-default.xgplayer-playbackrate-active .xgplayer-progress,.xgplayer-skin-default.xgplayer-texttrack-active .xgplayer-progress,.xgplayer-skin-default.xgplayer-volume-active .xgplayer-progress{z-index:15}.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress-btn{display:block!important}.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:focus .xgplayer-progress-outer,.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:hover .xgplayer-progress-outer{height:3px!important;margin-top:8.5px!important}.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:focus .xgplayer-progress-btn,.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:hover .xgplayer-progress-btn{display:block!important;top:-5px!important}.xgplayer-skin-default .xgplayer-replay{position:absolute;left:0;top:0;width:100%;height:100%;z-index:105;display:none;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;background:rgba(0,0,0,.54);-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column}.xgplayer-skin-default .xgplayer-replay svg{background:rgba(0,0,0,.58);border-radius:100%;cursor:pointer}.xgplayer-skin-default .xgplayer-replay svg path{-webkit-transform:translate(20px,21px);-ms-transform:translate(20px,21px);transform:translate(20px,21px);fill:#ddd}.xgplayer-skin-default .xgplayer-replay svg:hover{background:rgba(0,0,0,.38)}.xgplayer-skin-default .xgplayer-replay svg:hover path{fill:#fff}.xgplayer-skin-default .xgplayer-replay .xgplayer-replay-txt{display:inline-block;font-family:PingFangSC-Regular;font-size:14px;color:#fff;line-height:34px}.xgplayer-skin-default.xgplayer.xgplayer-ended .xgplayer-controls{display:none}.xgplayer-skin-default.xgplayer.xgplayer-ended .xgplayer-replay{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer-skin-default .xgplayer-playbackrate{-webkit-order:8;-moz-box-ordinal-group:9;order:8;width:60px;height:20px;z-index:18;position:relative;display:inline-block;cursor:default}.xgplayer-skin-default .xgplayer-playbackrate ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:20px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);text-align:left;white-space:nowrap;z-index:26;cursor:pointer}.xgplayer-skin-default .xgplayer-playbackrate ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);position:relative;padding:4px 0;text-align:center}.xgplayer-skin-default .xgplayer-playbackrate ul li.selected,.xgplayer-skin-default .xgplayer-playbackrate ul li:hover{color:#ff8000;opacity:1}.xgplayer-skin-default .xgplayer-playbackrate ul li:first-child{position:relative;margin-top:12px}.xgplayer-skin-default .xgplayer-playbackrate ul li:last-child{position:relative;margin-bottom:12px}.xgplayer-skin-default .xgplayer-playbackrate .name{height:20px;position:relative;top:11px;text-align:center;background:rgba(0,0,0,.38);color:hsla(0,0%,100%,.8);border-radius:10px;line-height:20px}.xgplayer-skin-default .xgplayer-playbackrate span{position:relative;top:19px;font-weight:700;text-shadow:0 0 4px rgba(0,0,0,.6)}.xgplayer-skin-default .xgplayer-playbackrate:hover{opacity:1}.xgplayer-skin-default.xgplayer-playbackrate-active .xgplayer-playbackrate ul{display:block}.xgplayer-skin-default .xgplayer-download{position:relative;-webkit-order:9;-moz-box-ordinal-group:10;order:9;display:block;cursor:pointer}.xgplayer-skin-default .xgplayer-download .xgplayer-icon{margin-top:3px}.xgplayer-skin-default .xgplayer-download .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-download .xgplayer-icon svg{position:relative;top:5px;left:5px}.xgplayer-skin-default .xgplayer-download .xgplayer-tips{margin-left:-20px}.xgplayer-skin-default .xgplayer-download .xgplayer-tips .xgplayer-tip-download{display:block}.xgplayer-skin-default .xgplayer-download:hover{opacity:.85}.xgplayer-skin-default .xgplayer-download:hover .xgplayer-tips{display:block}.lang-is-en .xgplayer-download .xgplayer-tips{margin-left:-32px}.lang-is-jp .xgplayer-download .xgplayer-tips{margin-left:-40px}.xgplayer-skin-default .danmu-switch{-webkit-order:6;-moz-box-ordinal-group:7;order:6;z-index:26}.xgplayer-skin-default .xgplayer-danmu{display:none;position:absolute;top:0;left:0;right:0;height:100%;overflow:hidden;z-index:9;outline:none}.xgplayer-skin-default .xgplayer-danmu>*{position:absolute;white-space:nowrap;z-index:9}.xgplayer-skin-default .xgplayer-danmu.xgplayer-has-danmu{display:block}.xgplayer-skin-default .xgplayer-panel{outline:none;-webkit-order:7;-moz-box-ordinal-group:8;order:7;width:40px;height:40px;display:inline-block;position:relative;font-family:PingFangSC-Regular;font-size:13px;color:hsla(0,0%,100%,.8);z-index:36}.xgplayer-skin-default .xgplayer-panel .xgplayer-panel-icon{cursor:pointer;position:absolute;margin-left:5px;top:10px}.xgplayer-skin-default .xgplayer-panel-active{display:block!important;bottom:30px}.xgplayer-skin-default .xgplayer-panel-slider{z-index:36;display:none;position:absolute;width:230px;height:230px;background:rgba(0,0,0,.54);border-radius:1px;padding:10px 20px;outline:none;left:-115px;bottom:40px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode{padding-bottom:10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode-radio li{display:inline;list-style:none;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode ul{display:-webkit-flex;display:-moz-box;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode li{margin:0 12px;font-size:11px;color:#aaa}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode-font{margin-bottom:10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency{display:block;margin-top:10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-line{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;outline:none;width:150px;height:4px;background:#aaa;border-radius:4px;border-style:none;margin-left:10px;margin-top:-2px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-line::-moz-focus-outer{border:0!important}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-color::-webkit-slider-runnable-track{outline:none;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-color::-moz-range-track{outline:none;background-color:#aaa;border-color:transparent;cursor:pointer;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-color::-ms-track{outline:none;background-color:#aaa;color:transparent;border-color:transparent;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-bar::-webkit-slider-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;margin-top:-4px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-bar::-moz-range-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:0;width:0;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-bar::-ms-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-bar::-moz-range-progress{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;height:4px;border-radius:4px;background:linear-gradient(90deg,#f85959,#f85959 100%,#aaa)}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea{display:block;margin-top:8px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-name{display:inline-block;position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-control{display:inline-block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-control-up{width:150px;margin-left:10px;display:-moz-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;color:#aaa}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-control-down{position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-control-down-dots{display:-webkit-flex;display:-moz-box;display:flex;width:150px;margin-left:10px;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-threequarters,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-twoquarters{margin-left:-6px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-full{margin-right:3px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-line{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;outline:none;width:150px;height:4px;background:#aaa;border-radius:4px;border-style:none;margin-left:10px;margin-top:-2px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-line::-moz-focus-outer{border:0!important}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-color::-webkit-slider-runnable-track{outline:none;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-color::-moz-range-track{outline:none;background-color:#aaa;border-color:transparent;cursor:pointer;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-color::-ms-track{outline:none;background-color:#aaa;color:transparent;border-color:transparent;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-bar::-webkit-slider-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;margin-top:-4px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-bar::-moz-range-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:0;width:0;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-bar::-ms-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-full-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-onequarters-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-threequarters-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-twoquarters-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-zero-dot{width:3px;height:3px;border:3px solid #aaa;border-radius:50%;background-color:#aaa;position:relative;top:16px;z-index:-1}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed{display:block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-name{display:inline-block;position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-control{display:inline-block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-control-up{width:150px;margin-left:10px;display:-moz-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;color:#aaa}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-control-down{position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-control-down-dots{display:-webkit-flex;display:-moz-box;display:flex;width:150px;margin-left:10px;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-line{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;outline:none;width:150px;height:4px;background:#aaa;border-radius:4px;border-style:none;margin-left:10px;margin-top:-2px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-line::-moz-focus-outer{border:0!important}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-color::-webkit-slider-runnable-track{outline:none;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-color::-moz-range-track{outline:none;background-color:#aaa;border-color:transparent;cursor:pointer;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-color::-ms-track{outline:none;background-color:#aaa;color:transparent;border-color:transparent;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-bar::-webkit-slider-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;margin-top:-4px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-bar::-moz-range-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:0;width:0;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-bar::-ms-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-large-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-middle-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-small-dot{width:3px;height:3px;border:3px solid #aaa;border-radius:50%;background-color:#aaa;position:relative;top:16px;z-index:-1}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont{display:block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-name{display:inline-block;position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-control{display:inline-block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-control-up{width:150px;margin-left:10px;display:-moz-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;color:#aaa}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-control-down{position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-control-down-dots{display:-webkit-flex;display:-moz-box;display:flex;width:150px;margin-left:10px;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-line{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;outline:none;width:150px;height:4px;background:#aaa;border-radius:4px;border-style:none;margin-left:10px;margin-top:-2px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-line::-moz-focus-outer{border:0!important}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-color::-webkit-slider-runnable-track{outline:none;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-color::-moz-range-track{outline:none;background-color:#aaa;border-color:transparent;cursor:pointer;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-color::-ms-track{outline:none;background-color:#aaa;color:transparent;border-color:transparent;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-bar::-webkit-slider-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;margin-top:-4px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-bar::-moz-range-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:0;width:0;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-bar::-ms-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-large-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-middle-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-small-dot{width:3px;height:3px;border:3px solid #aaa;border-radius:50%;background-color:#aaa;position:relative;top:16px;z-index:-1}.xgplayer-skin-default .xgplayer-playnext{position:relative;-webkit-order:1;-moz-box-ordinal-group:2;order:1;display:block;cursor:pointer;top:-2px}.xgplayer-skin-default .xgplayer-playnext .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-playnext .xgplayer-tips .xgplayer-tip-playnext{display:block}.xgplayer-skin-default .xgplayer-playnext:hover{opacity:.85}.xgplayer-skin-default .xgplayer-playnext:hover .xgplayer-tips{display:block}.lang-is-en .xgplayer-playnext .xgplayer-tips{margin-left:-25px}.lang-is-jp .xgplayer-playnext .xgplayer-tips{margin-left:-38px}.xgplayer-skin-default .xgplayer-pip{-webkit-order:9;-moz-box-ordinal-group:10;order:9;position:relative;outline:none;display:block;cursor:pointer;height:20px;top:8px}.xgplayer-skin-default .xgplayer-pip .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-skin-default .xgplayer-pip .name span{width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-skin-default .xgplayer-pip-lay{position:absolute;top:26px;left:0;width:100%;height:100%;z-index:130;cursor:pointer;background-color:transparent;display:none}.xgplayer-skin-default .xgplayer-pip-lay div{width:100%;height:100%}.xgplayer-skin-default .xgplayer-pip-drag{cursor:move;position:absolute;top:0;left:0;width:100%;height:26px;line-height:26px;background-image:linear-gradient(rgba(0,0,0,.3),transparent);z-index:130;display:none}.xgplayer-skin-default.xgplayer-pip-active{position:fixed;right:0;bottom:200px;width:320px!important;height:180px!important;z-index:110!important}.xgplayer-skin-default.xgplayer-pip-active .xgplayer-controls,.xgplayer-skin-default.xgplayer-pip-active .xgplayer-danmu{display:none}.xgplayer-skin-default.xgplayer-pip-active .xgplayer-pip-lay{display:block}.xgplayer-skin-default.xgplayer-pip-active .xgplayer-pip-drag{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer-skin-default.xgplayer-inactive .xgplayer-pip-drag{display:none}.lang-is-jp .xgplayer-pip .name span{width:70px;height:20px}.xgplayer-skin-default .xgplayer-rotate{position:relative;-webkit-order:10;-moz-box-ordinal-group:11;order:10;display:block;cursor:pointer}.xgplayer-skin-default .xgplayer-rotate .xgplayer-icon{margin-top:7px;width:26px}.xgplayer-skin-default .xgplayer-rotate .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-rotate .xgplayer-tips{margin-left:-22px}.xgplayer-skin-default .xgplayer-rotate .xgplayer-tips .xgplayer-tip-rotate{display:block}.xgplayer-skin-default .xgplayer-rotate:hover{opacity:.85}.xgplayer-skin-default .xgplayer-rotate:hover .xgplayer-tips{display:block}.lang-is-en .xgplayer-rotate .xgplayer-tips{margin-left:-26px}.lang-is-jp .xgplayer-rotate .xgplayer-tips{margin-left:-38px}.xgplayer-skin-default .xgplayer-reload{position:relative;-webkit-order:1;-moz-box-ordinal-group:2;order:1;display:block;width:40px;height:40px;cursor:pointer}.xgplayer-skin-default .xgplayer-reload .xgplayer-icon{margin-top:7px;width:26px}.xgplayer-skin-default .xgplayer-reload .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-reload .xgplayer-tips{margin-left:-22px}.xgplayer-skin-default .xgplayer-reload .xgplayer-tips .xgplayer-tip-reload{display:block}.xgplayer-skin-default .xgplayer-reload:hover{opacity:.85}.xgplayer-skin-default .xgplayer-reload:hover .xgplayer-tips{display:block}.lang-is-en .xgplayer-reload .xgplayer-tips{margin-left:-26px}.lang-is-jp .xgplayer-reload .xgplayer-tips{margin-left:-38px}.xgplayer-skin-default .xgplayer-screenshot{-webkit-order:11;-moz-box-ordinal-group:12;order:11;position:relative;outline:none;display:block;cursor:pointer;height:20px;top:8px}.xgplayer-skin-default .xgplayer-screenshot .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-skin-default .xgplayer-screenshot .name span{width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.lang-is-en .xgplayer-screenshot .name span,.lang-is-jp .xgplayer-screenshot .name span{width:75px;height:20px}.xgplayer-skin-default .xgplayer-texttrack{-webkit-order:7;-moz-box-ordinal-group:8;order:7;width:60px;height:150px;z-index:18;position:relative;outline:none;display:none;cursor:default;margin-top:-119px}.xgplayer-skin-default .xgplayer-texttrack ul{display:none;list-style:none;min-width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:30px;text-align:center;white-space:nowrap;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;z-index:26;cursor:pointer}.xgplayer-skin-default .xgplayer-texttrack ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:auto;padding:6px 13px}.xgplayer-skin-default .xgplayer-texttrack ul li.selected,.xgplayer-skin-default .xgplayer-texttrack ul li:hover{color:#ff8000;opacity:1}.xgplayer-skin-default .xgplayer-texttrack .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;cursor:pointer;color:hsla(0,0%,100%,.8);position:absolute;bottom:0;width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-skin-default.xgplayer-is-texttrack .xgplayer-texttrack,.xgplayer-skin-default.xgplayer-texttrack-active .xgplayer-texttrack ul{display:block}.xgplayer-skin-default .xgplayer-icon{display:block;width:40px;height:40px;overflow:hidden;fill:#fff}.xgplayer-skin-default .xgplayer-icon svg{position:absolute}.xgplayer-skin-default .xgplayer-tips{background:rgba(0,0,0,.54);border-radius:1px;display:none;position:absolute;font-family:PingFangSC-Regular;font-size:11px;color:#fff;padding:2px 4px;text-align:center;top:-30px;left:50%;margin-left:-16px;width:auto;white-space:nowrap}.xgplayer-skin-default.xgplayer-mobile .xgplayer-tips{display:none!important}.xgplayer-skin-default .xgplayer-error{background:#000;display:none;position:absolute;left:0;top:0;width:100%;height:100%;z-index:125;font-family:PingFangSC-Regular;font-size:14px;color:#fff;text-align:center;line-height:100%;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center}.xgplayer-skin-default .xgplayer-error .xgplayer-error-refresh{color:red;padding:0 3px;cursor:pointer}.xgplayer-skin-default .xgplayer-error .xgplayer-error-text{line-height:18px;margin:auto 6px}.xgplayer-skin-default.xgplayer-is-error .xgplayer-error{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer-skin-default .xgplayer-memoryplay-spot{position:absolute;height:32px;left:10px;bottom:46px;background:rgba(0,0,0,.5);border-radius:32px;line-height:32px;color:#ddd;z-index:15;padding:0 32px 0 16px}.xgplayer-skin-default .xgplayer-memoryplay-spot .xgplayer-lasttime{color:red;font-weight:700}.xgplayer-skin-default .xgplayer-memoryplay-spot .btn-close{position:absolute;width:16px;height:16px;right:10px;top:2px;cursor:pointer;color:#fff;font-size:16px}.xgplayer-skin-default .xgplayer-headtail{z-index:10}.xgplayer-skin-default .xgplayer-headtail,.xgplayer-skin-default .xgplayer-headtail .xgplayer-headtail-head,.xgplayer-skin-default .xgplayer-headtail .xgplayer-headtail-tail{width:100%;height:100%;display:none;position:absolute;top:0;left:0}.xgplayer-skin-default .xgplayer-headtail .xgplayer-headtail-counter{position:absolute;top:10px;right:20px;width:100px;height:30px;background:rgba(0,0,0,.45);padding:5px 15px;border-radius:15px}.xgplayer-skin-default .xgplayer-headtail .xgplayer-headtail-counter .xgplayer-headtail-counter-title{display:inline-block;color:#fff;font-size:14px;line-height:30px}.xgplayer-skin-default .xgplayer-headtail .xgplayer-headtail-counter .xgplayer-headtail-counter-time{display:inline-block;line-height:30px;color:#ff8000;font-size:14px}.xgplayer-skin-default.xgplayer-head-active .xgplayer-headtail,.xgplayer-skin-default.xgplayer-head-active .xgplayer-headtail .xgplayer-headtail-head,.xgplayer-skin-default.xgplayer-tail-active .xgplayer-headtail,.xgplayer-skin-default.xgplayer-tail-active .xgplayer-headtail .xgplayer-headtail-tail{display:block}.xgplayer-skin-default .xgplayer-imageindex{display:block;position:absolute;height:60px;left:12px;right:12px;outline:none;top:-75px;z-index:35;overflow:hidden}.xgplayer-skin-default .xgplayer-imageindex ul{width:100%;height:80px;background:rgba(0,0,0,.37);overflow-x:scroll;display:-webkit-flex;display:-moz-box;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-justify-content:flex-start;-moz-box-pack:start;justify-content:flex-start}.xgplayer-skin-default .xgplayer-imageindex ul li{margin-left:5px;margin-top:8px}.xgplayer-skin-default .xgplayer-imageindex ul li div{width:80px;height:45px;background-size:contain;cursor:pointer}.xgplayer-skin-default .xgplayer-imageindex ul li.selected{margin-top:4px}.xgplayer-skin-default .xgplayer-imageindex ul li.selected div{border:3px solid #fff;border-radius:5px}.xgplayer-skin-default.xgplayer-definition-active .xgplayer-imageindex,.xgplayer-skin-default.xgplayer-displaymode-active .xgplayer-imageindex,.xgplayer-skin-default.xgplayer-playbackrate-active .xgplayer-imageindex,.xgplayer-skin-default.xgplayer-texttrack-active .xgplayer-imageindex,.xgplayer-skin-default.xgplayer-volume-active .xgplayer-imageindex{z-index:15}", ""]);

// exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(64);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _play = __webpack_require__(66);

var _play2 = _interopRequireDefault(_play);

var _pause = __webpack_require__(67);

var _pause2 = _interopRequireDefault(_pause);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_play = function s_play() {
  var player = this;
  var util = _player2.default.util;
  var playBtn = player.config.playBtn ? player.config.playBtn : {};
  var btn = void 0,
      iconPlay = void 0,
      iconPause = void 0;
  if (playBtn.type === 'img') {
    btn = util.createImgBtn('play', playBtn.url.play, playBtn.width, playBtn.height);
  } else {
    btn = util.createDom('xg-play', '<xg-icon class="xgplayer-icon">\n                                      <div class="xgplayer-icon-play">' + _play2.default + '</div>\n                                      <div class="xgplayer-icon-pause">' + _pause2.default + '</div>\n                                     </xg-icon>', {}, 'xgplayer-play');
  }

  var tipsText = {};
  tipsText.play = player.lang.PLAY_TIPS;
  tipsText.pause = player.lang.PAUSE_TIPS;
  var tips = util.createDom('xg-tips', '<span class="xgplayer-tip-play">' + tipsText.play + '</span>\n                                        <span class="xgplayer-tip-pause">' + tipsText.pause + '</span>', {}, 'xgplayer-tips');
  // btn.appendChild(tips)
  player.once('ready', function () {
    player.controls.appendChild(btn);
  });

  ['click', 'touchend'].forEach(function (item) {
    btn.addEventListener(item, function (e) {
      e.preventDefault();
      e.stopPropagation();
      player.emit('playBtnClick');
    });
  });
};

_player2.default.install('s_play', s_play);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\">\r\n  <path transform=\"scale(0.0320625 0.0320625)\" d=\"M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z\"></path>\r\n</svg>\r\n");

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\">\r\n  <path transform=\"scale(0.0320625 0.0320625)\" d=\"M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z\"></path>\r\n</svg>\r\n");

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _startPlay = __webpack_require__(69);

var _startPlay2 = _interopRequireDefault(_startPlay);

var _startPause = __webpack_require__(70);

var _startPause2 = _interopRequireDefault(_startPause);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_start = function s_start() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;
  var btn = util.createDom('xg-start', '<div class="xgplayer-icon-play">' + _startPlay2.default + '</div>\n                                      <div class="xgplayer-icon-pause">' + _startPause2.default + '</div>', {}, 'xgplayer-start');
  function onPlayerReady(player) {
    util.addClass(player.root, 'xgplayer-skin-default');
    if (player.config) {
      player.config.autoplay && !util.isWeiXin() && util.addClass(player.root, 'xgplayer-is-enter');
      if (player.config.lang && player.config.lang === 'en') {
        util.addClass(player.root, 'lang-is-en');
      } else if (player.config.lang === 'jp') {
        util.addClass(player.root, 'lang-is-jp');
      }
      if (!player.config.enableContextmenu) {
        player.video.addEventListener('contextmenu', function (e) {
          e.preventDefault();
          e.stopPropagation();
        });
      }
    }
  }

  if (player.isReady) {
    root.appendChild(btn);
    onPlayerReady(player);
  } else {
    player.once('ready', function () {
      root.appendChild(btn);
      onPlayerReady(player);
    });
  }

  player.once('autoplay was prevented', function () {
    util.removeClass(player.root, 'xgplayer-is-enter');
    util.addClass(player.root, 'xgplayer-nostart');
  });

  player.once('canplay', function () {
    util.removeClass(player.root, 'xgplayer-is-enter');
  });

  btn.onclick = function (e) {
    e.preventDefault();
    e.stopPropagation();
    player.emit('startBtnClick');
  };
};

_player2.default.install('s_start', s_start);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"70\" height=\"70\" viewBox=\"0 0 70 70\">\r\n  <path transform=\"scale(0.04,0.04)\" d=\"M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z\"></path>\r\n</svg>\r\n");

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"70\" height=\"70\" viewBox=\"0 0 70 70\">\r\n  <path transform=\"scale(0.04 0.04)\" d=\"M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z\"></path>\r\n</svg>\r\n");

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_poster = function s_poster() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;
  if (!player.config.poster) {
    return;
  }
  var poster = util.createDom('xg-poster', '', {}, 'xgplayer-poster');
  poster.style.backgroundImage = 'url(' + player.config.poster + ')';
  root.appendChild(poster);
};

_player2.default.install('s_poster', s_poster);

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_flex = function s_flex() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;
  var playceholder = util.createDom('xg-placeholder', '', {}, 'xgplayer-placeholder');
  player.controls.appendChild(playceholder);
};

_player2.default.install('s_flex', s_flex);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _requestFull = __webpack_require__(74);

var _requestFull2 = _interopRequireDefault(_requestFull);

var _exitFull = __webpack_require__(75);

var _exitFull2 = _interopRequireDefault(_exitFull);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_fullscreen = function s_fullscreen() {
  var player = this;
  var util = _player2.default.util;
  var fullscreenBtn = player.config.fullscreenBtn ? player.config.fullscreenBtn : {};
  var btn = void 0,
      iconRequestFull = void 0,
      iconExitFull = void 0;
  if (fullscreenBtn.type === 'img') {
    btn = util.createImgBtn('fullscreen', fullscreenBtn.url.request, fullscreenBtn.width, fullscreenBtn.height);
  } else {
    btn = util.createDom('xg-fullscreen', '<xg-icon class="xgplayer-icon">\n                                             <div class="xgplayer-icon-requestfull">' + _requestFull2.default + '</div>\n                                             <div class="xgplayer-icon-exitfull">' + _exitFull2.default + '</div>\n                                           </xg-icon>', {}, 'xgplayer-fullscreen');
  }

  var tipsText = {};
  tipsText.requestfull = player.lang.FULLSCREEN_TIPS;
  tipsText.exitfull = player.lang.EXITFULLSCREEN_TIPS;
  var tips = util.createDom('xg-tips', '<span class="xgplayer-tip-requestfull">' + tipsText.requestfull + '</span>\n                                        <span class="xgplayer-tip-exitfull">' + tipsText.exitfull + '</span>', {}, 'xgplayer-tips');
  // btn.appendChild(tips)
  player.once('ready', function () {
    player.controls.appendChild(btn);
  });

  ['click', 'touchend'].forEach(function (item) {
    btn.addEventListener(item, function (e) {
      e.preventDefault();
      e.stopPropagation();
      player.emit('fullscreenBtnClick');
    });
  });
};

_player2.default.install('s_fullscreen', s_fullscreen);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\">\r\n  <path transform=\"scale(0.0320625 0.0320625)\" d=\"M598 214h212v212h-84v-128h-128v-84zM726 726v-128h84v212h-212v-84h128zM214 426v-212h212v84h-128v128h-84zM298 598v128h128v84h-212v-212h84z\"></path>\r\n</svg>\r\n");

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\">\r\n  <path transform=\"scale(0.0320625 0.0320625)\" d=\"M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z\"></path>\r\n</svg>\r\n");

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _requestCssFull = __webpack_require__(77);

var _requestCssFull2 = _interopRequireDefault(_requestCssFull);

var _exitCssFull = __webpack_require__(78);

var _exitCssFull2 = _interopRequireDefault(_exitCssFull);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_cssFullscreen = function s_cssFullscreen() {
  var player = this;
  var util = _player2.default.util;
  if (!player.config.cssFullscreen) {
    return;
  }
  var btn = util.createDom('xg-cssfullscreen', '<xg-icon class="xgplayer-icon">\n                                             <div class="xgplayer-icon-requestfull">' + _requestCssFull2.default + '</div>\n                                             <div class="xgplayer-icon-exitfull">' + _exitCssFull2.default + '</div>\n                                           </xg-icon>', {}, 'xgplayer-cssfullscreen');

  var tipsText = {};
  tipsText.requestfull = player.lang.CSSFULLSCREEN_TIPS;
  tipsText.exitfull = player.lang.EXITCSSFULLSCREEN_TIPS;
  var tips = util.createDom('xg-tips', '<span class="xgplayer-tip-requestfull">' + tipsText.requestfull + '</span>\n                                        <span class="xgplayer-tip-exitfull">' + tipsText.exitfull + '</span>', {}, 'xgplayer-tips');
  btn.appendChild(tips);
  player.once('ready', function () {
    player.controls.appendChild(btn);
  });

  ['click', 'touchend'].forEach(function (item) {
    btn.addEventListener(item, function (e) {
      e.preventDefault();
      e.stopPropagation();
      player.emit('cssFullscreenBtnClick');
    });
  });
};

_player2.default.install('s_cssFullscreen', s_cssFullscreen);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\">\r\n  <path transform=\"scale(0.028 0.028)\" d=\"M843.617212 67.898413 175.411567 67.898413c-61.502749 0-111.367437 49.856501-111.367437 111.367437l0 668.205645c0 61.510936 49.864688 111.367437 111.367437 111.367437L843.617212 958.838931c61.510936 0 111.367437-49.856501 111.367437-111.367437L954.984648 179.26585C954.984648 117.754914 905.12917 67.898413 843.617212 67.898413zM398.146441 736.104057c15.380292 0 27.842115 12.461823 27.842115 27.842115 0 15.379269-12.461823 27.841092-27.842115 27.841092L259.725858 791.787264c-7.785314 0-14.781658-3.217275-19.838837-8.365528-5.383614-4.577249-8.791224-11.228739-8.791224-19.475564L231.095797 624.736621c0-15.371082 12.471033-27.842115 27.842115-27.842115 15.380292 0 27.842115 12.471033 27.842115 27.842115l-0.61603 71.426773 133.036969-133.037992 39.378869 39.378869L324.962651 736.113267 398.146441 736.104057zM419.199942 463.611943 286.162974 330.565764l0.61603 71.435982c0 15.380292-12.461823 27.842115-27.842115 27.842115-15.371082 0-27.842115-12.461823-27.842115-27.842115L231.094774 262.791172c0-8.256034 3.40761-14.908548 8.791224-19.476587 5.057179-5.148253 12.053524-8.374738 19.838837-8.374738l138.420583 0.00921c15.380292 0 27.842115 12.461823 27.842115 27.842115s-12.461823 27.842115-27.842115 27.842115l-73.175603-0.00921 133.607974 133.607974L419.199942 463.611943zM787.932981 763.946172c0 8.247848-3.40761 14.899338-8.791224 19.475564-5.057179 5.148253-12.053524 8.365528-19.839861 8.365528L620.881314 791.787264c-15.379269 0-27.841092-12.461823-27.841092-27.841092 0-15.380292 12.461823-27.842115 27.841092-27.842115l73.185836 0.00921L560.449967 602.50427l39.378869-39.378869L732.875015 696.163393l-0.62524-71.426773c0-15.371082 12.462846-27.842115 27.842115-27.842115 15.380292 0 27.842115 12.471033 27.842115 27.842115L787.934005 763.946172zM787.932981 402.000724c0 15.380292-12.461823 27.842115-27.842115 27.842115-15.379269 0-27.842115-12.461823-27.842115-27.842115l0.62524-71.435982L599.828836 463.611943l-39.378869-39.378869 133.617184-133.607974-73.185836 0.00921c-15.379269 0-27.841092-12.461823-27.841092-27.842115s12.461823-27.842115 27.841092-27.842115l138.421606-0.00921c7.785314 0 14.781658 3.226484 19.839861 8.374738 5.383614 4.568039 8.791224 11.219529 8.791224 19.476587L787.934005 402.000724z\"></path>\r\n</svg>\r\n");

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\">\r\n  <path transform=\"scale(0.028 0.028)\" d=\"M834.56 81.92H189.44c-59.392 0-107.52 48.128-107.52 107.52v645.12c0 59.392 48.128 107.52 107.52 107.52h645.12c59.392 0 107.52-48.128 107.52-107.52V189.44c0-59.392-48.128-107.52-107.52-107.52zM458.24 727.04c0 14.848-12.288 26.624-26.624 26.624S404.48 741.888 404.48 727.04v-69.632L289.28 773.12c-10.752 10.24-27.648 10.24-37.888 0-10.24-10.752-10.24-27.648 0-37.888L366.592 619.52H296.96c-14.848 0-26.624-12.288-26.624-26.624s12.288-26.624 26.624-26.624h134.144c14.848 0 26.624 12.288 26.624 26.624V727.04z m0-295.936c0 14.848-12.288 26.624-26.624 26.624H296.96c-14.848 0-26.624-12.288-26.624-26.624S282.112 404.48 296.96 404.48h69.632L251.392 289.28c-10.24-10.752-10.24-27.648 0-37.888 5.12-5.12 12.288-7.68 18.944-7.68 6.656 0 13.824 2.56 18.944 7.68L404.48 366.592V296.96c0-14.848 12.288-26.624 26.624-26.624s26.624 12.288 26.624 26.624v134.144zM773.12 773.12c-10.752 10.24-27.648 10.24-37.888 0L619.52 657.408V727.04c0 14.848-12.288 26.624-26.624 26.624s-26.624-11.776-26.624-26.624v-134.144c0-14.848 12.288-26.624 26.624-26.624H727.04c14.848 0 26.624 12.288 26.624 26.624s-12.288 26.624-26.624 26.624h-69.632l115.2 115.2c10.752 10.752 10.752 27.648 0.512 38.4z m0-483.84L657.408 404.48H727.04c14.848 0 26.624 12.288 26.624 26.624 0 14.848-12.288 26.624-26.624 26.624h-134.144c-14.848 0-26.624-12.288-26.624-26.624V296.96c0-14.848 12.288-26.624 26.624-26.624s26.624 12.288 26.624 26.624v69.632L734.72 250.88c5.12-5.12 12.288-7.68 18.944-7.68s13.824 2.56 18.944 7.68c10.752 10.752 10.752 27.648 0.512 38.4z\"></path>\r\n</svg>\r\n");

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_definition = function s_definition() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;
  var sniffer = _player2.default.sniffer;
  var paused = void 0;
  var hasInit = false;
  var container = util.createDom('xg-definition', '', { tabindex: 3 }, 'xgplayer-definition');
  if (sniffer.device === 'mobile') {
    player.config.definitionActive = 'click';
  }

  function onCanplayResourceReady() {
    if (hasInit) {
      return false;
    } else {
      hasInit = true;
    }
    var list = player.definitionList;
    var tmp = ['<ul>'],
        src = JSON.stringify(player.config.url),
        tmpSrc = void 0;
    if (player.switchURL) {
      ['mp4'].every(function (item) {
        if (player[item]) {
          if (player[item].url) {
            src = JSON.stringify(player[item].url);
          }
          return false;
        } else {
          return true;
        }
      });
    }
    list.forEach(function (item) {
      tmpSrc = JSON.stringify(item);
      tmp.push('<li url=\'' + tmpSrc + '\' cname=\'' + item.name + '\' class=\'' + (tmpSrc === src ? 'selected' : '') + '\'>' + item.name + '</li>');
    });
    var cursrc = list.filter(function (item) {
      return JSON.stringify(item) === src;
    });
    tmp.push('</ul><p class=\'name\'>' + (cursrc[0] || { name: '' }).name + '</p>');
    var urlInRoot = root.querySelector('.xgplayer-definition');
    if (urlInRoot) {
      urlInRoot.innerHTML = tmp.join('');
      var cur = urlInRoot.querySelector('.name');
      if (!player.config.definitionActive || player.config.definitionActive === 'hover') {
        cur.addEventListener('mouseenter', function (e) {
          e.preventDefault();
          e.stopPropagation();
          util.addClass(player.root, 'xgplayer-definition-active');
          urlInRoot.focus();
        });
      }
    } else {
      container.innerHTML = tmp.join('');
      var _cur = container.querySelector('.name');
      if (!player.config.definitionActive || player.config.definitionActive === 'hover') {
        _cur.addEventListener('mouseenter', function (e) {
          e.preventDefault();
          e.stopPropagation();
          util.addClass(player.root, 'xgplayer-definition-active');
          container.focus();
        });
      }
      player.controls.appendChild(container);
    }
  }
  function onResourceReady(list) {
    player.definitionList = list;
    if (list && list instanceof Array && list.length > 1) {
      util.addClass(root, 'xgplayer-is-definition');
      player.on('canplay', onCanplayResourceReady);
    }
  }
  player.on('resourceReady', onResourceReady);

  function onCanplayChangeDefinition() {
    player.currentTime = player.curTime;
    if (!paused) {
      var playPromise = player.play();
      if (playPromise !== undefined && playPromise) {
        if (util.typeOf(playPromise) === 'function') {
          playPromise.catch(function (err) {
            console.error(err);
          });
        }
      }
    }
  };
  ['touchend', 'click'].forEach(function (item) {
    container.addEventListener(item, function (e) {
      e.preventDefault();
      e.stopPropagation();
      var li = e.target || e.srcElement,
          tmpSrc = void 0;
      if (li && li.tagName.toLocaleLowerCase() === 'li') {
        player.emit('beforeDefinitionChange', tmpSrc);
        var from = void 0,
            to = void 0;
        Array.prototype.forEach.call(li.parentNode.childNodes, function (item) {
          if (util.hasClass(item, 'selected')) {
            from = item.getAttribute('cname');
            util.removeClass(item, 'selected');
          }
        });
        util.addClass(li, 'selected');
        to = li.getAttribute('cname');
        li.parentNode.nextSibling.innerHTML = '' + li.getAttribute('cname');
        tmpSrc = li.getAttribute('url');
        if (player.switchURL) {
          var curRUL = void 0;
          ['mp4'].every(function (item) {
            if (player[item]) {
              if (player[item].url) {
                curRUL = player[item].url;
              }
              return false;
            } else {
              return true;
            }
          });
          if (curRUL !== tmpSrc && !player.ended) {
            player.switchURL(tmpSrc);
          }
        } else {
          if (tmpSrc !== player.currentSrc.toString()) {
            player.curTime = player.currentTime;
            paused = player.paused;
            if (!player.ended) {
              var newUrl = JSON.parse(tmpSrc);
              player.currFileNum = 0; // 从第一个分片开始播放，然后通过player.curTime再跳转
              player.config.url = newUrl;
              player.channelNum = player.config.url.channels.length;

              var totalDuration = 0;
              var mainFiles = player.config.url.channels[0].files;
              for (var i = 0; i < mainFiles.length; i++) {
                totalDuration += parseFloat(mainFiles[i].totaltime);
              }
              player.totalDuration = totalDuration;

              player.src = newUrl;
              player.emit('displayModeChange');
              player.once('canplay', onCanplayChangeDefinition);
            }
          }
        }
        player.emit('definitionChange', { from: from, to: to });
        if (sniffer.device === 'mobile') {
          util.removeClass(player.root, 'xgplayer-definition-active');
        }
      } else if (player.config.definitionActive === 'click' && li && (li.tagName.toLocaleLowerCase() === 'p' || li.tagName.toLocaleLowerCase() === 'em')) {
        if (sniffer.device === 'mobile') {
          util.toggleClass(player.root, 'xgplayer-definition-active');
        } else {
          util.addClass(player.root, 'xgplayer-definition-active');
        }
        container.focus();
      }
      player.emit('focus');
    }, false);
  });

  container.addEventListener('mouseleave', function (e) {
    e.preventDefault();
    e.stopPropagation();
    util.removeClass(root, 'xgplayer-definition-active');
  });

  function onBlur() {
    util.removeClass(root, 'xgplayer-definition-active');
  }
  player.on('blur', onBlur);

  function onDestroy() {
    player.off('resourceReady', onResourceReady);
    player.off('canplay', onCanplayResourceReady);
    player.off('canplay', onCanplayChangeDefinition);
    player.off('blur', onBlur);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('s_definition', s_definition);

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_displayMode = function s_displayMode() {
  var player = this;
  var _video = void 0,
      _video1 = void 0,
      _video2 = void 0;
  function modeChangeFunc() {
    var winWidth = player.root.clientWidth;
    var winHeight = player.root.clientHeight;
    switch (player.channelNum) {
      case 1:
        _video = player['video'];
        _video.style.top = '30px';
        _video.style.left = '20px';
        _video.style.width = winWidth - 60 + 'px';
        _video.style.height = winHeight - 105 + 'px';
        break;
      case 2:
        _video = player['video'];
        _video1 = player['video1'];

        _video.style.top = '30px';
        _video.style.left = '20px';
        _video.style.width = (winWidth - 60) / 2 + 'px';
        _video.style.height = winHeight - 105 + 'px';

        _video1.style.top = '30px';
        _video1.style.left = (winWidth - 60) / 2 + 20 + 'px';
        _video1.style.width = (winWidth - 60) / 2 + 'px';
        _video1.style.height = winHeight - 105 + 'px';
        break;
      case 3:
        _video = player['video'];
        _video1 = player['video1'];
        _video2 = player['video2'];

        _video.style.top = '30px';
        _video.style.left = '20px';
        _video.style.width = (winWidth - 60) / 3 + 'px';
        _video.style.height = (winHeight - 105) / 2 + 'px';

        _video1.style.top = (winHeight - 105) / 2 + 30 + 'px';
        _video1.style.left = '20px';
        _video1.style.width = (winWidth - 60) / 3 + 'px';
        _video1.style.height = (winHeight - 105) / 2 + 'px';

        _video2.style.top = '30px';
        _video2.style.left = (winWidth - 60) / 3 + 20 + 'px';
        _video2.style.width = (winWidth - 60) * 2 / 3 + 'px';
        _video2.style.height = winHeight - 105 + 'px';
        break;
      default:
    }
  }

  function destroyFunc() {
    player.off('requestFullscreen', modeChangeFunc);
    player.off('exitFullscreen', modeChangeFunc);
    player.off('playStarted', modeChangeFunc);
    player.off('destroy', destroyFunc);
  }

  player.on('requestFullscreen', modeChangeFunc);
  player.on('exitFullscreen', modeChangeFunc);
  player.on('playStarted', modeChangeFunc);
  player.once('destroy', destroyFunc);
};

_player2.default.install('s_displayMode', s_displayMode);

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _loading = __webpack_require__(82);

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_loading = function s_loading() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;
  var container = util.createDom('xg-loading', '' + _loading2.default, {}, 'xgplayer-loading');
  player.once('ready', function () {
    root.appendChild(container);
  });
};

_player2.default.install('s_loading', s_loading);

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewbox=\"0 0 100 100\">\r\n  <path d=\"M100,50A50,50,0,1,1,50,0\"></path>\r\n</svg>\r\n");

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isRotateFullscreen = function isRotateFullscreen(player) {
  return _player2.default.util.hasClass(player.root, 'xgplayer-rotate-fullscreen');
};

var s_progress = function s_progress() {
  var player = this;
  var util = _player2.default.util;
  var container = util.createDom('xg-progress', '<xg-outer class="xgplayer-progress-outer">\n                                                   <xg-cache class="xgplayer-progress-cache"></xg-cache>\n                                                   <xg-played class="xgplayer-progress-played">\n                                                     <xg-progress-btn class="xgplayer-progress-btn"></xg-progress-btn>\n                                                     <xg-point class="xgplayer-progress-point xgplayer-tips"></xg-point>\n                                                     <xg-thumbnail class="xgplayer-progress-thumbnail xgplayer-tips"></xg-thumbnail>\n                                                   </xgplayer-played>\n                                                 </xg-outer>', { tabindex: 1 }, 'xgplayer-progress');
  var containerWidth = void 0;
  player.controls.appendChild(container);
  var progress = container.querySelector('.xgplayer-progress-played');
  var btn = container.querySelector('.xgplayer-progress-btn');
  var outer = container.querySelector('.xgplayer-progress-outer');
  var cache = container.querySelector('.xgplayer-progress-cache');
  var point = container.querySelector('.xgplayer-progress-point');
  var thumbnail = container.querySelector('.xgplayer-progress-thumbnail');
  player.dotArr = {};
  function dotEvent(dotItem, text) {
    dotItem.addEventListener('mouseenter', function (e) {
      if (text) {
        util.addClass(dotItem, 'xgplayer-progress-dot-show');
        util.addClass(container, 'xgplayer-progress-dot-active');
      }
    });
    dotItem.addEventListener('mouseleave', function (e) {
      if (text) {
        util.removeClass(dotItem, 'xgplayer-progress-dot-show');
        util.removeClass(container, 'xgplayer-progress-dot-active');
      }
    });
    dotItem.addEventListener('touchend', function (e) {
      // e.preventDefault()
      e.stopPropagation();
      if (text) {
        if (!util.hasClass(dotItem, 'xgplayer-progress-dot-show')) {
          Object.keys(player.dotArr).forEach(function (key) {
            if (player.dotArr[key]) {
              util.removeClass(player.dotArr[key], 'xgplayer-progress-dot-show');
            }
          });
        }
        util.toggleClass(dotItem, 'xgplayer-progress-dot-show');
        util.toggleClass(container, 'xgplayer-progress-dot-active');
      }
    });
  }
  function onCanplay() {
    if (player.config.progressDot && util.typeOf(player.config.progressDot) === 'Array') {
      player.config.progressDot.forEach(function (item) {
        if (item.time >= 0 && item.time <= player.duration) {
          var dot = util.createDom('xg-progress-dot', item.text ? '<span class="xgplayer-progress-tip">' + item.text + '</span>' : '', {}, 'xgplayer-progress-dot');
          dot.style.left = item.time / player.duration * 100 + '%';
          if (item.duration >= 0) {
            dot.style.width = Math.min(item.duration, player.duration - item.time) / player.duration * 100 + '%';
          }
          outer.appendChild(dot);
          player.dotArr[item.time] = dot;
          dotEvent(dot, item.text);
        }
      });
    }
  }
  player.once('canplay', onCanplay);
  player.addProgressDot = function (time, text, duration) {
    if (player.dotArr[time]) {
      return;
    }
    if (time >= 0 && time <= player.duration) {
      var dot = util.createDom('xg-progress-dot', '', {}, 'xgplayer-progress-dot');
      dot.style.left = time / player.duration * 100 + '%';
      if (duration >= 0) {
        dot.style.width = Math.min(duration, player.duration - time) / player.duration * 100 + '%';
      }
      outer.appendChild(dot);
      player.dotArr[time] = dot;
      dotEvent(dot, text);
    }
  };
  player.removeProgressDot = function (time) {
    if (time >= 0 && time <= player.duration && player.dotArr[time]) {
      var dot = player.dotArr[time];
      dot.parentNode.removeChild(dot);
      dot = null;
      player.dotArr[time] = null;
    }
  };
  player.removeAllProgressDot = function () {
    Object.keys(player.dotArr).forEach(function (key) {
      if (player.dotArr[key]) {
        var dot = player.dotArr[key];
        dot.parentNode.removeChild(dot);
        dot = null;
        player.dotArr[key] = null;
      }
    });
  };
  var tnailPicNum = 0;
  var tnailWidth = 0;
  var tnailHeight = 0;
  var tnailCol = 0;
  var tnailRow = 0;
  var interval = 0;
  var tnailUrls = [];
  if (player.config.thumbnail) {
    tnailPicNum = player.config.thumbnail.pic_num;
    tnailWidth = player.config.thumbnail.width;
    tnailHeight = player.config.thumbnail.height;
    tnailCol = player.config.thumbnail.col;
    tnailRow = player.config.thumbnail.row;
    tnailUrls = player.config.thumbnail.urls;
    thumbnail.style.width = tnailWidth + 'px';
    thumbnail.style.height = tnailHeight + 'px';
  };
  ['touchstart', 'mousedown'].forEach(function (item) {
    if (player.config.disableProgress) return;
    container.addEventListener(item, function (e) {
      // e.preventDefault()
      e.stopPropagation();
      util.event(e);
      // if (e._target === point || (!player.config.allowSeekAfterEnded && player.ended)) {
      //   return true
      // }
      container.focus();

      var _progress$getBounding = progress.getBoundingClientRect(),
          left = _progress$getBounding.left;

      var isRotate = isRotateFullscreen(player);
      if (isRotate) {
        left = progress.getBoundingClientRect().top;
        containerWidth = container.getBoundingClientRect().height;
      } else {
        containerWidth = container.getBoundingClientRect().width;
        left = progress.getBoundingClientRect().left;
      }

      var move = function move(e) {
        // e.preventDefault()
        e.stopPropagation();
        util.event(e);
        player.isProgressMoving = true;
        var w = (isRotate ? e.clientY : e.clientX) - left;
        if (w > containerWidth) {
          w = containerWidth;
        }
        var now = w / containerWidth * player.duration;
        progress.style.width = w * 100 / containerWidth + '%';
        player.currentTime = Number(now).toFixed(1);
        player.emit('focus');
      };
      var up = function up(e) {
        // e.preventDefault()
        e.stopPropagation();
        util.event(e);
        window.removeEventListener('mousemove', move);
        window.removeEventListener('touchmove', move, { passive: false });
        window.removeEventListener('mouseup', up);
        window.removeEventListener('touchend', up);
        container.blur();
        if (!player.isProgressMoving || player.videoConfig.mediaType === 'audio' || player.dash || player.config.closeMoveSeek) {
          var w = (isRotate ? e.clientY : e.clientX) - left;
          if (w > containerWidth) {
            w = containerWidth;
          }
          var now = w / containerWidth * player.duration;
          progress.style.width = w * 100 / containerWidth + '%';
          player.currentTime = Number(now).toFixed(1);
        }
        player.emit('focus');
        player.isProgressMoving = false;
      };
      window.addEventListener('mousemove', move);
      window.addEventListener('touchmove', move, { passive: false });
      window.addEventListener('mouseup', up);
      window.addEventListener('touchend', up);
      return true;
    });
  });

  container.addEventListener('mouseenter', function (e) {
    if (!player.config.allowSeekAfterEnded && player.ended) {
      return true;
    }
    var isRotate = isRotateFullscreen(player);
    var containerLeft = isRotate ? container.getBoundingClientRect().top : container.getBoundingClientRect().left;
    var containerWidth = isRotate ? container.getBoundingClientRect().height : container.getBoundingClientRect().width;

    var compute = function compute(e) {
      var now = ((isRotate ? e.clientY : e.clientX) - containerLeft) / containerWidth * player.duration;
      now = now < 0 ? 0 : now;
      point.textContent = util.format(now);
      var pointWidth = point.getBoundingClientRect().width;
      if (player.config.thumbnail) {
        interval = player.duration / tnailPicNum;
        var index = Math.floor(now / interval);
        thumbnail.style.backgroundImage = 'url(' + tnailUrls[Math.ceil((index + 1) / (tnailCol * tnailRow)) - 1] + ')';
        var indexInPage = index + 1 - tnailCol * tnailRow * (Math.ceil((index + 1) / (tnailCol * tnailRow)) - 1);
        var tnaiRowIndex = Math.ceil(indexInPage / tnailRow) - 1;
        var tnaiColIndex = indexInPage - tnaiRowIndex * tnailRow - 1;
        thumbnail.style['background-position'] = '-' + tnaiColIndex * tnailWidth + 'px -' + tnaiRowIndex * tnailHeight + 'px';
        var left = (isRotate ? e.clientY : e.clientX) - containerLeft - tnailWidth / 2;
        left = left > 0 ? left : 0;
        left = left < containerWidth - tnailWidth ? left : containerWidth - tnailWidth;
        thumbnail.style.left = left + 'px';
        thumbnail.style.top = -10 - tnailHeight + 'px';
        thumbnail.style.display = 'block';
        point.style.left = left + tnailWidth / 2 - pointWidth / 2 + 'px';
      } else {
        var _left = e.clientX - containerLeft - pointWidth / 2;
        _left = _left > 0 ? _left : 0;
        _left = _left > containerWidth - pointWidth ? containerWidth - pointWidth : _left;
        point.style.left = _left + 'px';
      }
      if (util.hasClass(container, 'xgplayer-progress-dot-active')) {
        point.style.display = 'none';
      } else {
        point.style.display = 'block';
      }
    };
    var move = function move(e) {
      compute(e);
    };
    var leave = function leave(e) {
      container.removeEventListener('mousemove', move, false);
      container.removeEventListener('mouseleave', leave, false);
      compute(e);
      point.style.display = 'none';
      thumbnail.style.display = 'none';
    };
    container.addEventListener('mousemove', move, false);
    container.addEventListener('mouseleave', leave, false);
    compute(e);
  }, false);

  // let lastBtnLeft = false
  var onTimeupdate = function onTimeupdate() {
    if (player.isSrcChanging || !player.currentTime) {
      return true;
    }
    if (!containerWidth && container) {
      containerWidth = container.getBoundingClientRect().width;
    }
    if (!player.isProgressMoving) {
      var precent = player.currentTime / player.duration;
      var prevPrecent = parseFloat(progress.style.width || '0') / parseFloat(container.style.width || '100');
      if (Math.abs(precent - prevPrecent) <= 1) {
        progress.style.width = player.currentTime * 100 / player.duration + '%';
      }
    }
  };
  player.on('timeupdate', onTimeupdate);

  var onCurrentTimeChange = function onCurrentTimeChange() {
    progress.style.width = player.currentTime * 100 / player.duration + '%';
  };
  player.on('currentTimeChange', onCurrentTimeChange);

  var onSrcChange = function onSrcChange() {
    progress.style.width = '0%';
  };
  player.on('srcChange', onSrcChange);

  var onCacheUpdate = function onCacheUpdate() {
    var buffered = player.buffered;
    if (buffered && buffered.length > 0) {
      var end = buffered.end(buffered.length - 1);
      for (var i = 0, len = buffered.length; i < len; i++) {
        if (player.currentTime >= buffered.start(i) && player.currentTime <= buffered.end(i)) {
          end = buffered.end(i);
          for (var j = i + 1; j < buffered.length; j++) {
            if (buffered.start(j) - buffered.end(j - 1) >= 2) {
              end = buffered.end(j - 1);
              break;
            }
          }
          break;
        }
      }
      var tmpTime = 0;
      var mainFiles = player.config.url.channels[0].files;
      for (var _i = 0; _i < player.currFileNum; _i++) {
        tmpTime += parseFloat(mainFiles[_i].totaltime);
      }
      cache.style.width = (end + tmpTime) / player.duration * 100 + '%';
    }
  };
  var cacheUpdateEvents = ['bufferedChange', 'cacheupdate', 'ended', 'timeupdate'];
  cacheUpdateEvents.forEach(function (item) {
    player.on(item, onCacheUpdate);
  });

  function onEnded() {
    progress.style.width = '0%';
  }
  player.on('ended', onEnded);
  function destroyFunc() {
    player.removeAllProgressDot();
    player.off('canplay', onCanplay);
    player.off('timeupdate', onTimeupdate);
    player.off('currentTimeChange', onCurrentTimeChange);
    player.off('srcChange', onSrcChange);
    cacheUpdateEvents.forEach(function (item) {
      player.off(item, onCacheUpdate);
    });
    player.off('ended', onEnded);
    player.off('destroy', destroyFunc);
  }
  player.once('destroy', destroyFunc);
};

_player2.default.install('s_progress', s_progress);

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_time = function s_time() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;
  var container = util.createDom('xg-time', '<span class="xgplayer-time-current">' + (util.format(player.currentTime) || util.format(0)) + '</span>\n                                           <span>' + (util.format(player.duration) || util.format(0)) + '</span>', {}, 'xgplayer-time');
  player.once('ready', function () {
    player.controls.appendChild(container);
  });
  var onTimeChange = function onTimeChange() {
    // let liveText = player.lang.LIVE
    // if(player.duration === Infinity) {
    //   util.addClass(player.root, 'xgplayer-is-live')
    //   if(!util.findDom(player.root, '.xgplayer-live')) {
    //     const live = util.createDom('xg-live', liveText, {}, 'xgplayer-live')
    //     player.controls.appendChild(live)
    //   }
    // }
    if (player.isSrcChanging || !player.currentTime) {
      return true;
    }
    if (player.videoConfig.mediaType !== 'audio' || !player.isProgressMoving || !player.dash) {
      container.innerHTML = '<span class="xgplayer-time-current">' + util.format(player.currentTime || 0) + '</span>' + ('<span>' + util.format(player.duration) + '</span>');
      // 三路视频同步
      // let currTime = player['video'].currentTime
      // for (let i = 1; i < player.channelNum; i++) {
      //   let _video = player[`video${i}`]
      //   let channel = player.config.url.channels[i]
      //   if (channel.type === 'mp4') {
      //     if (Math.abs(currTime - _video.currentTime) > 1) {
      //       _video.currentTime = currTime
      //     }
      //   } else if (channel.type === 'jpg') {
      //     const currentAllTime = player.currentTime
      //     let files = channel.files
      //     for (let j = (files.length - 1); j >= 0; j--) {
      //       let file = files[j]
      //       if (currentAllTime > file.starttime) {
      //         _video.poster = file.imageUrl
      //         break
      //       }
      //     }
      //   }
      // }
    }
  };

  function onEnded() {
    container.innerHTML = '<span class="xgplayer-time-current">' + util.format(0) + '</span>' + ('<span>' + util.format(player.duration) + '</span>');
  }
  player.on('durationchange', onTimeChange);
  player.on('timeupdate', onTimeChange);
  player.on('ended', onEnded);

  function onDestroy() {
    player.off('durationchange', onTimeChange);
    player.off('timeupdate', onTimeChange);
    player.off('ended', onEnded);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('s_time', s_time);

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _replay = __webpack_require__(86);

var _replay2 = _interopRequireDefault(_replay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_replay = function s_replay() {
  var player = this;
  var util = _player2.default.util;
  var root = player.root;

  var replayText = player.lang.REPLAY;
  var btn = util.createDom('xg-replay', _replay2.default + '\n                                         <xg-replay-txt class="xgplayer-replay-txt">' + replayText + '</xg-replay-txt>\n                                        ', {}, 'xgplayer-replay');
  player.once('ready', function () {
    root.appendChild(btn);
  });

  function onEnded() {
    var path = btn.querySelector('path');
    if (path) {
      var transform = window.getComputedStyle(path).getPropertyValue('transform');
      if (typeof transform === 'string' && transform.indexOf('none') > -1) {
        return;
      } else {
        path.setAttribute('transform', transform);
      }
    }
  }
  player.on('ended', onEnded);

  var svg = btn.querySelector('svg');

  ['click', 'touchend'].forEach(function (item) {
    svg.addEventListener(item, function (e) {
      e.preventDefault();
      e.stopPropagation();
      player.emit('replayBtnClick');
    });
  });

  function destroyFunc() {
    player.off('ended', onEnded);
    player.off('destroy', destroyFunc);
  }
  player.once('destroy', destroyFunc);
};

_player2.default.install('s_replay', s_replay);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg class=\"xgplayer-replay-svg\" xmlns=\"http://www.w3.org/2000/svg\" width=\"78\" height=\"78\" viewbox=\"0 0 78 78\">\r\n  <path d=\"M8.22708362,13.8757234 L11.2677371,12.6472196 C11.7798067,12.4403301 12.3626381,12.6877273 12.5695276,13.1997969 L12.9441342,14.1269807 C13.1510237,14.6390502 12.9036264,15.2218816 12.3915569,15.4287712 L6.8284538,17.6764107 L5.90126995,18.0510173 C5.38920044,18.2579068 4.80636901,18.0105096 4.5994795,17.49844 L1.97723335,11.0081531 C1.77034384,10.4960836 2.0177411,9.91325213 2.52981061,9.70636262 L3.45699446,9.33175602 C3.96906396,9.12486652 4.5518954,9.37226378 4.75878491,9.88433329 L5.67885163,12.1615783 C7.99551726,6.6766934 13.3983951,3 19.5,3 C27.7842712,3 34.5,9.71572875 34.5,18 C34.5,26.2842712 27.7842712,33 19.5,33 C15.4573596,33 11.6658607,31.3912946 8.87004692,28.5831991 C8.28554571,27.9961303 8.28762719,27.0463851 8.87469603,26.4618839 C9.46176488,25.8773827 10.4115101,25.8794641 10.9960113,26.466533 C13.2344327,28.7147875 16.263503,30 19.5,30 C26.127417,30 31.5,24.627417 31.5,18 C31.5,11.372583 26.127417,6 19.5,6 C14.4183772,6 9.94214483,9.18783811 8.22708362,13.8757234 Z\"></path>\r\n</svg>\r\n");

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map