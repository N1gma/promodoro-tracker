/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46);
	__webpack_require__(47);
	__webpack_require__(51);
	__webpack_require__(54);
	__webpack_require__(56);
	__webpack_require__(62);
	__webpack_require__(64);
	__webpack_require__(70);
	__webpack_require__(73);
	__webpack_require__(76);
	__webpack_require__(80);
	__webpack_require__(84);
	__webpack_require__(88);
	__webpack_require__(91);
	__webpack_require__(95);
	module.exports = __webpack_require__(99);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ function(module, exports) {

	'use strict';

	Renderer.helpers = {
	    transformTime: function transformTime(time) {
	        var hours = '';
	        var minutes = '';
	        if (time / 60 >= 1) hours = parseInt(time / 60) + 'h ';
	        if (parseInt(time % 60) != 0) minutes = parseInt(time % 60) + 'm';
	        return hours + minutes;
	    }
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _template = __webpack_require__(48);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Renderer.renderLog = function () {
	    var el = document.createElement('div');
	    el.innerHTML = (0, _template2.default)();
	    document.getElementById('app-body').appendChild(el);
	    document.getElementsByClassName('center-inputs')[0].addEventListener('submit', function (e) {
	        e.preventDefault();
	        EventBus.publish('auth');
	    });
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(49);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<style>body {\n    background: url(\"./Global/img/bg.png\");\n    background-size: cover;\n    background-position: 50%;\n}\n\nbody, html {\n    height: 100%;\n}\n\n.login-wrapper {\n    margin: 0 auto;\n    max-width: 320px;\n    text-align: center;\n}\n\n.center-logo {\n    width: 246px;\n    padding: 48px 0;\n    text-align: center;\n}\n\n.center-inputs {\n    margin: 0 auto;\n    font-family: icomoon;\n    color: #8da5b8;\n    width: 360px;\n}\n\n.center-inputs:nth-child(2) .input-row {\n    margin-bottom: 29px;\n}\n\n.input-row {\n    position: relative;\n    margin-left: 5px;\n}\n\n.log-input, .pw-input {\n    border: none;\n    background-color: transparent;\n    font: 16px Roboto, sans-serif;\n    padding-left: 30px;\n    color: #8da5b8;\n    border-bottom: 1px solid #425869;\n    padding-bottom: 10px;\n    width: 91%;\n}\n\n.center-inputs input:focus {\n    border-color: white;\n    color: white;\n}\n\n.center-inputs input:focus + label {\n    color: white;\n}\n\n.center-inputs label {\n    font-size: 14px;\n    position: absolute;\n    bottom: 13px;\n    left: 0;\n}\n\n.submit {\n    display: block;\n    margin: 51px auto;\n    width: 125px;\n    background-color: #1abc9c;\n    color: white;\n    border: none;\n    outline: none;\n    font: 18px \"PTSans\", sans-serif;\n    height: 42px;\n}\n\n.submit:active {\n    background-color: #62D3BD;\n}\n\n.submit:focus, .submit:hover {\n    background-color: #16A085;\n}\n\n.invalid_msg {\n    font: 12px \"Roboto\", sans-serif;\n    color: red;\n    position: absolute;\n    display: none;\n    left: 0;\n    bottom: -20px;\n}\n\n\n\n</style><div class=\"login-wrapper\"><img src=\"./Global/img/Logo_1.svg\" alt=\"logo goes here\" class=\"center-logo\"><form class=\"center-inputs\"><div class=\"input-row\"><input id=\"name_input\" type=\"text\" placeholder=\"Username\" required=\"\" class=\"log-input\"><label for=\"name_input\"></label><span class=\"invalid_msg\">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></div><div class=\"input-row\"><input id=\"pw_input\" type=\"password\" placeholder=\"Password\" required=\"\" class=\"pw-input\"><label for=\"pw_input\"></label></div><button type=\"submit\" class=\"submit\">Log in</button></form></div>");;return buf.join("");
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */

	exports.merge = function merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = merge(attrs, a[i]);
	    }
	    return attrs;
	  }
	  var ac = a['class'];
	  var bc = b['class'];

	  if (ac || bc) {
	    ac = ac || [];
	    bc = bc || [];
	    if (!Array.isArray(ac)) ac = [ac];
	    if (!Array.isArray(bc)) bc = [bc];
	    a['class'] = ac.concat(bc).filter(nulls);
	  }

	  for (var key in b) {
	    if (key != 'class') {
	      a[key] = b[key];
	    }
	  }

	  return a;
	};

	/**
	 * Filter null `val`s.
	 *
	 * @param {*} val
	 * @return {Boolean}
	 * @api private
	 */

	function nulls(val) {
	  return val != null && val !== '';
	}

	/**
	 * join array as classes.
	 *
	 * @param {*} val
	 * @return {String}
	 */
	exports.joinClasses = joinClasses;
	function joinClasses(val) {
	  return (Array.isArray(val) ? val.map(joinClasses) :
	    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
	    [val]).filter(nulls).join(' ');
	}

	/**
	 * Render the given classes.
	 *
	 * @param {Array} classes
	 * @param {Array.<Boolean>} escaped
	 * @return {String}
	 */
	exports.cls = function cls(classes, escaped) {
	  var buf = [];
	  for (var i = 0; i < classes.length; i++) {
	    if (escaped && escaped[i]) {
	      buf.push(exports.escape(joinClasses([classes[i]])));
	    } else {
	      buf.push(joinClasses(classes[i]));
	    }
	  }
	  var text = joinClasses(buf);
	  if (text.length) {
	    return ' class="' + text + '"';
	  } else {
	    return '';
	  }
	};


	exports.style = function (val) {
	  if (val && typeof val === 'object') {
	    return Object.keys(val).map(function (style) {
	      return style + ':' + val[style];
	    }).join(';');
	  } else {
	    return val;
	  }
	};
	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = function attr(key, val, escaped, terse) {
	  if (key === 'style') {
	    val = exports.style(val);
	  }
	  if ('boolean' == typeof val || null == val) {
	    if (val) {
	      return ' ' + (terse ? key : key + '="' + key + '"');
	    } else {
	      return '';
	    }
	  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
	    if (JSON.stringify(val).indexOf('&') !== -1) {
	      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
	                   'will be escaped to `&amp;`');
	    };
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will eliminate the double quotes around dates in ' +
	                   'ISO form after 2.0.0');
	    }
	    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
	  } else if (escaped) {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + exports.escape(val) + '"';
	  } else {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + val + '"';
	  }
	};

	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} escaped
	 * @return {String}
	 */
	exports.attrs = function attrs(obj, terse){
	  var buf = [];

	  var keys = Object.keys(obj);

	  if (keys.length) {
	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i]
	        , val = obj[key];

	      if ('class' == key) {
	        if (val = joinClasses(val)) {
	          buf.push(' ' + key + '="' + val + '"');
	        }
	      } else {
	        buf.push(exports.attr(key, val, false, terse));
	      }
	    }
	  }

	  return buf.join('');
	};

	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */

	var jade_encode_html_rules = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;'
	};
	var jade_match_html = /[&<>"]/g;

	function jade_encode_char(c) {
	  return jade_encode_html_rules[c] || c;
	}

	exports.escape = jade_escape;
	function jade_escape(html){
	  var result = String(html).replace(jade_match_html, jade_encode_char);
	  if (result === '' + html) return html;
	  else return result;
	};

	/**
	 * Re-throw the given `err` in context to the
	 * the jade in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @api private
	 */

	exports.rethrow = function rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(50).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);

	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Jade') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};

	exports.DebugItem = function DebugItem(lineno, filename) {
	  this.lineno = lineno;
	  this.filename = filename;
	}


/***/ },
/* 50 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _template = __webpack_require__(52);

	var _template2 = _interopRequireDefault(_template);

	var _controller = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Renderer.renderHeader = function () {
	    var el = document.createElement('div');
	    el.innerHTML = (0, _template2.default)();
	    document.getElementById('app-body').appendChild(el);
	    _controller.Controller.initCntrl(el);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(49);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<style>.logo {\n    visibility: hidden;\n    min-width: 241px;\n    width: 17%;\n    position: absolute;\n    top: 15px;\n    left: 6.8%;\n}\n\n.main-head {\n    overflow: hidden;\n    position: fixed;\n    width: 100%;\n    background-color: #2a3f50;\n}\n\n.main-head-shadow-on {\n    box-shadow: 0 5px 8px 1px rgba(22, 26, 29, 0.3);\n}\n\n.inner-head {\n    max-width: 1366px;\n    margin: 0 auto;\n    box-sizing: border-box;\n}\n\n.inner-2-head {\n    width: 100%;\n    padding: 0 6.8%;\n    box-sizing: border-box;\n    padding-top: 56px;\n    overflow: hidden;\n    position: relative;\n}\n\n.visible-logo {\n    visibility: visible;\n}\n\n.interface-container {\n    margin-bottom: 17px;\n    float: right;\n    width: 46%;\n    text-align: right;\n    font-size: 18px;\n}\n\n.interface-container .ico-text-button {\n    font-family: icomoon;\n    cursor: pointer;\n    margin-left: 5.7%;\n}\n\n.visible-logo {\n    visibility: visible;\n}\n</style><header class=\"main-head\"><div class=\"inner-head\"><div class=\"inner-2-head\"><a href=\"#\"><img src=\"./Global/img/Logo.svg\" alt=\"logo goes here\" class=\"logo\"></a><div class=\"interface-container\"><button id=\"reports\" class=\"ico-text-button\">&#xe90c;</button><button id=\"settings\" class=\"ico-text-button\"> &#xe90b;</button><button id=\"log_out\" class=\"ico-text-button\"> &#xe908;</button></div></div></div></header>");;return buf.join("");
	}

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Controller = exports.Controller = {
	    initCntrl: function initCntrl(el) {
	        var listeners = { // обьект проектирования поведения
	            'log_out': function log_out(e) {
	                firebase.auth().signOut();
	            },
	            'settings': function settings(e) {
	                //EventBus.publish('settings')
	                router.moveTo('pomodoras');
	            },
	            'reports': function reports() {
	                //EventBus.publish('reports');
	                router.moveTo('reports');
	            }

	        };
	        $('#reports').tips('Go to Reports');
	        $('#settings').tips('Go to Settings');
	        $('#log_out').tips('Sign out', true);
	        el.addEventListener('click', function (e) {
	            if (listeners[e.target.id]) listeners[e.target.id](e);
	        });
	    }
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _template = __webpack_require__(55);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Renderer.renderTitle_settings_1 = function () {
	    var el = document.createElement('div');
	    el.innerHTML = (0, _template2.default)();
	    document.getElementById('app-body').appendChild(el);
	    document.getElementById('pomodoros-settings').addEventListener('click', function (e) {
	        router.moveTo('pomodoras');
	    });
	    document.getElementById('categories-settings').addEventListener('click', function (e) {
	        router.moveTo('categories');
	    });
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(49);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<style>.wrapper {\n    max-width: 1366px;\n    padding-top: 131px;\n    margin: 0 auto;\n}\n\n.main-head-title {\n    clear: both;\n    font: 28px \"Roboto\", sans-serif;\n    font-weight: bold;\n    text-align: center;\n    width: 100%;\n    color: white;\n    margin-bottom: 22px;\n}\n\n.sub-title {\n    font: 20px \"Roboto\", sans-serif;\n    text-align: center;\n    width: 100%;\n    color: #8198ab;\n    margin-bottom: 81px;\n    position: relative;\n}\n\n.interface-container-2 {\n    position: absolute;\n    right: 6.7%;\n    top: 0;\n    font-size: 15px;\n}\n\n.interface-container-2 .ico-text-button {\n    cursor: pointer;\n    font: 15px \"Roboto\", sans-serif;\n}\n</style><div class=\"wrapper\"><h2 class=\"main-head-title\">Settings</h2><div class=\"sub-title\">Pomodoros settings<div class=\"interface-container-2\"><button id=\"pomodoros-settings\" class=\"ico-text-button\">Pomodoros</button>" + (jade.escape((jade_interp = '') == null ? '' : jade_interp)) + " | " + (jade.escape((jade_interp = '') == null ? '' : jade_interp)) + "<button id=\"categories-settings\" class=\"ico-text-button\">Categories</button></div></div></div>");;return buf.join("");
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _template = __webpack_require__(57);

	var _template2 = _interopRequireDefault(_template);

	var _dataModule = __webpack_require__(58);

	var _view = __webpack_require__(59);

	var _view2 = _interopRequireDefault(_view);

	var _model = __webpack_require__(60);

	var _model2 = _interopRequireDefault(_model);

	var _controller = __webpack_require__(61);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Renderer.renderSettingsMain = function () {
	    var el = document.createElement('div');
	    el.innerHTML = (0, _template2.default)();
	    document.getElementById('app-body').appendChild(el);
	    var view = new _view2.default(document.getElementsByClassName('timeline-container')[0]);
	    var model = new _model2.default();
	    var controller = new _controller2.default(model, view);
	    (0, _dataModule.dataModule)();
	    controller.start();
	    function CustomEvent(event, params) {
	        params = params || { bubbles: false, cancelable: false, detail: undefined };
	        var evt = document.createEvent('CustomEvent');
	        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	        return evt;
	    }

	    CustomEvent.prototype = window.Event.prototype;

	    window.CustomEvent = CustomEvent;
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(49);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<style>.main-content {\n    color: white;\n    box-sizing: border-box;\n    overflow: hidden;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    width: 61%;\n    padding-left: 62px;\n    min-width: 952px;\n}\n\n.main-content i {\n    margin-right: 19px;\n    font-size: 20px;\n}\n\n.select-field {\n    background: transparent;\n    color: white;\n    border: none;\n    outline: none;\n    border-bottom: 1px solid #8da5b8;\n    text-align: center;\n    padding-bottom: 4px;\n    width: 41%;\n    font-size: 16px;\n}\n\n.option {\n    width: 38.8%;\n    margin-right: 10.7%;\n    display: inline-block;\n    margin-bottom: 62px;;\n    box-sizing: border-box;\n    font: 13px Roboto, sans-serif;\n}\n\n.option label {\n    position: relative;\n}\n\n.minus-count {\n    position: absolute;\n    left: 3%;\n    color: #8da5b8;\n    font-size: 11px;\n    top: 0;\n    font-family: icomoon;\n    cursor: pointer;\n}\n\n.plus-count {\n    position: absolute;\n    right: 1%;\n    color: #8da5b8;\n    font-family: icomoon;\n    font-size: 11px;\n    top: 0;\n    cursor: pointer;\n}\n\n.plus-count:hover {\n    color: white;\n}\n\n.minus-count:hover {\n    color: white;\n}\n\n.minus-count:hover + input, .plus-count:hover ~ input {\n    border-color: white;\n}\n\n.opt-details {\n    color: #8198ab;\n    margin-top: 12px;\n    margin-left: 9.6%;\n}\n\n.opt-title {\n    display: inline-block;\n    width: 40%;\n}\n\n.timeline-container {\n    width: 100%;\n    margin-top: 13px;\n    margin-bottom: 55px;\n    display: block;\n\n}\n\n.graph-head {\n    font: 20px Ptsans, sans-serif;\n    color: white;\n    text-align: center;\n    width: 100%;\n\n}\n\n.timeline {\n    width: 86.7%;\n    background-color: #59abe3;\n    height: 11px;\n    margin: 0 auto;\n    line-height: 11px;\n    position: relative;\n}\n\n.timelabels {\n    width: 86.7%;\n    background-color: transparent;\n    height: 30px;\n    display: block;\n    margin: 0 auto;\n    overflow: hidden;\n}\n\n.timelabel {\n    display: inline-block;\n    height: 100%;\n    line-height: 30px;\n\n}\n\n.timelabel div {\n    float: right;\n    text-align: center;\n    background: #2a3f50;\n    color: #62788a;\n    font: 12px Roboto, sans-serif;\n    height: 100%;\n    line-height: 30px;\n    display: block;\n    width: 100%;\n    margin-right: -50%;\n}\n\n.timelabel span {\n    background-color: #02cdd3;\n    width: 4px;\n    height: 4px;\n    border-radius: 50%;\n    margin: 0 auto;\n    margin-top: 6px;\n    display: block;\n}\n\n.work {\n    background-color: #ffb200;\n    height: 100%;\n    display: inline-block;\n}\n\n.breakk, .longbreakk {\n    background-color: #59abe3;\n    height: 100%;\n    display: inline-block;\n}\n\n.button-holder {\n    width: 282px;\n    display: flex;\n    margin: 0 auto;\n    justify-content: space-around;\n}\n\n#pomodoros-settings,#settings{\n    color: white;\n}\n\n\n\n\n</style><main class=\"main-content\"><form class=\"option\"><i style=\"color: #ffb200\" aria-hidden=\"true\" class=\"fa fa-circle\"></i><label for=\"workTime\" class=\"opt-title\">WORK TIME</label><label><span class=\"plus-count\"></span><span class=\"minus-count\"></span><input id=\"workTime\" type=\"text\" value=\"\" disabled=\"\" class=\"select-field\"></label><p class=\"opt-details\">Lorem ipsum dolor sit amet consectetur adipiscing</p></form><form class=\"option\"><i style=\"color: #00d4d9\" aria-hidden=\"true\" class=\"fa fa-circle\"></i><label for=\"workIteration\" class=\"opt-title\">WORK ITERATION</label><label><span class=\"plus-count\"></span><span class=\"minus-count\"></span><input id=\"workIteration\" type=\"text\" value=\"\" disabled=\"\" class=\"select-field\"></label><p class=\"opt-details\">Lorem ipsum dolor sit amet consectetur adipiscing</p></form><form class=\"option\"><i style=\"color: #59abe3\" aria-hidden=\"true\" class=\"fa fa-circle\"></i><label for=\"shortBreak\" class=\"opt-title\">SHORT BREAK</label><label><span class=\"plus-count\"></span><span class=\"minus-count\"></span><input id=\"shortBreak\" type=\"text\" value=\"\" disabled=\"\" class=\"select-field\"></label><p class=\"opt-details\">Lorem ipsum dolor sit amet consectetur adipiscing</p></form><form class=\"option\"><i style=\"color: #59abe3\" aria-hidden=\"true\" class=\"fa fa-circle\"></i><label for=\"longBreak\" class=\"opt-title\">LONG BREAK</label><label><span class=\"plus-count\"></span><span class=\"minus-count\"></span><input id=\"longBreak\" type=\"text\" value=\"\" disabled=\"\" class=\"select-field\"></label><p class=\"opt-details\">Lorem ipsum dolor sit amet consectetur adipiscing</p></form></main><div class=\"timeline-container\"></div>");;return buf.join("");
	}

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.dataModule = dataModule;
	function dataModule() {
	    //data component - inputs
	    var component = {
	        data: {},
	        container: document.getElementsByClassName('main-content')[0],
	        representData: function representData() {
	            var data = {};
	            var inputValues = document.getElementsByClassName('select-field');
	            var dataTitles = document.getElementsByClassName('opt-title');
	            for (var i = 0; i < inputValues.length; i++) {
	                data[dataTitles[i].innerHTML] = parseInt(inputValues[i].value);
	            }
	            data.general = (data['WORK TIME'] * data['WORK ITERATION'] + data['SHORT BREAK'] * (data['WORK ITERATION'] - 1)) * 2 + data['LONG BREAK'];
	            User.settings = data;
	            return data;
	        },
	        eventFires: new CustomEvent('input-changed', {
	            bubbles: true,
	            cancelable: true,
	            details: undefined
	        })
	    };

	    component.container.addEventListener('click', function (e) {
	        var targetInput = e.target.parentNode.children[2];
	        if (e.target.classList.contains('plus-count') && parseInt(targetInput.value) < targetInput.descriptor.maximum) {
	            targetInput.value = parseInt(targetInput.value) + targetInput.descriptor.iteration + targetInput.descriptor.metrics;
	            component.eventFires.data = component.representData();
	            document.dispatchEvent(component.eventFires);
	            console.log('event fires');
	        }
	        if (e.target.classList.contains('minus-count') && targetInput.descriptor.minimum < parseInt(targetInput.value)) {
	            targetInput.value = parseInt(targetInput.value) - targetInput.descriptor.iteration + targetInput.descriptor.metrics;
	            component.eventFires.data = component.representData();
	            document.dispatchEvent(component.eventFires);
	            console.log('event fires');
	        }
	    });

	    document.getElementById('workTime').descriptor = {
	        metrics: ' min',
	        iteration: 5,
	        minimum: 15,
	        maximum: 40
	    };

	    document.getElementById('shortBreak').descriptor = {
	        metrics: ' min',
	        iteration: 1,
	        minimum: 1,
	        maximum: 15
	    };
	    document.getElementById('workIteration').descriptor = {
	        metrics: '',
	        iteration: 1,
	        minimum: 1,
	        maximum: 5
	    };
	    document.getElementById('longBreak').descriptor = {
	        metrics: ' min',
	        iteration: 5,
	        minimum: 30,
	        maximum: 60
	    };

	    (function syncInputs() {
	        User.getSettings(User.currentLogin, function (values) {
	            var inputs = document.getElementsByClassName('select-field');
	            var titles = document.getElementsByClassName('opt-title');
	            for (var i = 0; i < inputs.length; i++) {
	                inputs[i].value = values[titles[i].innerHTML] + inputs[i].descriptor.metrics;
	            }
	        });
	    })();
	}

/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = View;
	function View(renderZone) {
	    this.renderZone = renderZone;
	    this.representation = {};
	}

	View.prototype.initComponent = function () {
	    var fragment = document.createDocumentFragment();
	    this.representation = {
	        head: fragment.appendChild(document.createElement('h3')),
	        topLabel: fragment.appendChild(document.createElement('div')),
	        body: fragment.appendChild(document.createElement('div')),
	        bottomLabel: fragment.appendChild(document.createElement('div'))
	    };
	    this.representation.head.classList.add('graph-head');
	    this.representation.head.innerHTML = 'Your cycle';
	    this.representation.topLabel.classList.add('timelabels');
	    this.representation.body.classList.add('timeline');
	    this.representation.bottomLabel.classList.add('timelabels');
	    this.renderZone.appendChild(fragment);
	    return this;
	};

	View.prototype.clearComponent = function () {
	    for (var i = 1; i < this.renderZone.children.length; i++) {
	        while (this.renderZone.children[i].firstChild) {
	            this.renderZone.children[i].removeChild(this.renderZone.children[i].firstChild);
	        }
	    }

	    return this;
	};

	View.prototype.renderComponent = function (data) {
	    var mainFragment = document.createDocumentFragment();
	    var timelabelsFragment = document.createDocumentFragment();

	    //labels render
	    var timePointer = 0;
	    var labelsTotal = parseInt(data.general / 30, 10);
	    var labelWidth = 30 / data.general * 100 + '%';
	    var timeLabel = document.createElement('div');
	    timeLabel.classList.add('timelabel');
	    timeLabel.style.width = labelWidth;
	    for (var i = 0; i < labelsTotal; i++) {
	        //timePointer += data['WORK TIME'] + data['SHORT BREAK'];
	        timePointer += 30;
	        timeLabel.innerHTML = '<div><span></span>' + Renderer.helpers.transformTime(timePointer) + '</div>';
	        timelabelsFragment.appendChild(timeLabel.cloneNode(true));
	    }
	    this.representation.bottomLabel.appendChild(timelabelsFragment);
	    var fullCycle = timeLabel.cloneNode(true);
	    timePointer = data['WORK TIME'] * data['WORK ITERATION'] + data['SHORT BREAK'] * (data['WORK ITERATION'] - 1) + data['LONG BREAK'];
	    fullCycle.innerHTML = '<div>Full cycle: ' + Renderer.helpers.transformTime(timePointer) + '<span></span></div>';
	    fullCycle.style.width = timePointer / data.general * 100 + '%';
	    this.representation.topLabel.style.height = '45px';
	    this.representation.topLabel.appendChild(fullCycle);

	    //body render
	    for (var j = 0; j < 2; j++) {
	        for (var i = 0; i < data['WORK ITERATION']; i++) {
	            var work = document.createElement('div');
	            work.classList.add('work');
	            work.style.width = data['WORK TIME'] / data.general * 100 + '%';
	            mainFragment.appendChild(work);
	            if (i != data['WORK ITERATION'] - 1) {
	                var breakk = document.createElement('div');
	                breakk.classList.add('breakk');
	                breakk.style.width = data['SHORT BREAK'] / data.general * 100 + '%';
	                mainFragment.appendChild(breakk);
	            }
	        }
	        if (j != 1) {
	            var longbreakk = document.createElement('div');
	            longbreakk.classList.add('longbreakk');
	            longbreakk.style.width = data['LONG BREAK'] / data.general * 100 + '%';
	            mainFragment.appendChild(longbreakk);
	        }
	    }
	    this.representation.body.appendChild(mainFragment);
	    return this;
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = Model;
	function Model() {
	    this.data = {};
	    this.eventFires = new CustomEvent('data-changed', {
	        bubbles: true,
	        cancelable: true,
	        details: undefined
	    });
	}

	Model.prototype.setDefaultData = function () {
	    var context = this;
	    User.getSettings(User.currentLogin, function (value) {
	        context.data = value;
	        User.settings = value;
	        document.dispatchEvent(context.eventFires);
	        return context;
	    });
	};

	Model.prototype.getValuesFromDataComponent = function (data) {
	    this.data = data;
	    document.dispatchEvent(this.eventFires);
	    return this;
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = Controller;
	function Controller(model, view) {
	    this.model = model;
	    this.view = view;
	}

	Controller.prototype.start = function () {
	    var viewContext = this.view;
	    var modelContext = this.model;
	    var selfContext = this;
	    this.view.initComponent();
	    document.addEventListener(modelContext.eventFires.type, function (e) {
	        //observes over module
	        viewContext.clearComponent();
	        viewContext.renderComponent(modelContext.data);
	    });
	    this.listenTo('input-changed'); //observes over event
	    this.model.setDefaultData();
	};

	Controller.prototype.listenTo = function (eventType) {
	    var modelContext = this.model;
	    var selfContext = this;
	    document.addEventListener(eventType, function (e) {
	        modelContext.getValuesFromDataComponent(e.data);
	    });
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _template = __webpack_require__(63);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Renderer.renderSettingsCategories = function () {
	    var el = document.createElement('div');
	    el.innerHTML = (0, _template2.default)();
	    document.getElementById('app-body').appendChild(el);
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(49);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<style>.button-holder {\n  width: 282px;\n  display: flex;\n  margin: 0 auto;\n  justify-content: space-around;\n}\n#categories-settings,\n#settings {\n  color: white;\n}\n.categories-choose-wrap {\n  width: 19.8%;\n  color: #5b7284;\n  margin: 0 auto 7% auto;\n  font: 16px \"Roboto\", sans-serif;\n  max-width: 267px;\n}\n.categories-choose-list {\n  padding-left: 14%;\n}\n.categories-choose-list li {\n  margin-bottom: 15%;\n  position: relative;\n}\n.categories-choose-list input {\n  display: none;\n}\n.label1,\n.label2,\n.label3,\n.label4,\n.label5 {\n  width: 19px;\n  height: 19px;\n  position: absolute;\n  left: -17%;\n  top: 0;\n  cursor: pointer;\n}\n.label1 {\n  background: url(Global/img/ico-sprite.png) no-repeat 0 -19px;\n}\n.label2 {\n  background: url(Global/img/ico-sprite.png) no-repeat -18px -19px;\n}\n.label3 {\n  background: url(Global/img/ico-sprite.png) no-repeat -36px -19px;\n}\n.label4 {\n  background: url(Global/img/ico-sprite.png) no-repeat -54px -19px;\n}\n.label5 {\n  background: url(Global/img/ico-sprite.png) no-repeat -72px -19px;\n}\n.text-label {\n  border-bottom: 1px solid #5b7284;\n  width: 100%;\n  display: inline-block;\n  padding-bottom: 7px;\n  cursor: pointer;\n}\ninput:checked ~ .text-label {\n  border-color: white;\n  color: white;\n}\ninput:hover ~ .text-label {\n  border-color: white;\n  color: white;\n}\ninput:checked ~ .label1 {\n  background-position: 0 0;\n}\ninput:checked ~ .label2 {\n  background-position: -18px 0;\n}\ninput:checked ~ .label3 {\n  background-position: -36px 0;\n}\ninput:checked ~ .label4 {\n  background-position: -54px 0;\n}\ninput:checked ~ .label5 {\n  background-position: -72px 0;\n}\n.categories-choose-list li:hover {\n  border-color: white;\n  color: white;\n}\n</style><main class=\"categories-choose-wrap\"><ul class=\"categories-choose-list\"><li><input id=\"work\" type=\"radio\" value=\"Work\" name=\"ctg1\"><label for=\"work\" class=\"text-label\">Work</label><label for=\"work\" class=\"label1\"></label></li><li><input id=\"education\" type=\"radio\" value=\"Education\" name=\"ctg1\"><label for=\"education\" class=\"text-label\">Education</label><label for=\"education\" class=\"label2\"></label></li><li><input id=\"hobby\" type=\"radio\" value=\"Hobby\" name=\"ctg1\"><label for=\"hobby\" class=\"text-label\">Hobby</label><label for=\"hobby\" class=\"label3\"></label></li><li><input id=\"sport\" type=\"radio\" value=\"Sport\" name=\"ctg1\"><label for=\"sport\" class=\"text-label\">Sport</label><label for=\"sport\" class=\"label4\"></label></li><li><input id=\"other\" type=\"radio\" value=\"Other\" name=\"ctg1\"><label for=\"other\" class=\"text-label\">Other</label><label for=\"other\" class=\"label5\"></label></li></ul></main>");;return buf.join("");
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _template = __webpack_require__(65);

	var _template2 = _interopRequireDefault(_template);

	var _Controller = __webpack_require__(66);

	var _View = __webpack_require__(69);

	var _Model = __webpack_require__(68);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Renderer.renderReports = function () {
	    var el = document.createElement('div');
	    el.innerHTML = (0, _template2.default)();
	    document.getElementById('app-body').appendChild(el);
	    var controller = new _Controller.Controller(_Model.Model, _View.View);
	    controller.initController();
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(49);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<style>.wrapper {\n    max-width: 1366px;\n    padding-top: 90px;\n    margin: 0 auto;\n    padding-bottom: 2.2%;\n}\n\n.logo {\n    display: none;\n}\n\n.main-head-title {\n    clear: both;\n    font: 28px \"Roboto\", sans-serif;\n    font-weight: bold;\n    text-align: center;\n    width: 100%;\n    color: white;\n}\n\n.button-holder {\n    width: 21.2%;\n    display: flex;\n    margin: 0 auto;\n    justify-content: space-around;\n}\n\n.interface-container-2, .interface-container-3 {\n    margin: 0 auto;\n    width: 100%;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    margin-bottom: 104px;\n    color: #8da5b8;\n}\n\n.interface-container-2 .ico-text-button, .interface-container-3 .ico-text-button {\n    cursor: pointer;\n    font: 15px \"Roboto\", sans-serif;\n    margin: 0 6px;\n}\n\n.interface-container-3 {\n    margin-bottom: 0;\n}\n\n.main-head-title {\n    clear: both;\n    font: 28px \"Roboto\", sans-serif;\n    font-weight: bold;\n    text-align: center;\n    width: 100%;\n    color: white;\n    margin-bottom: 28px;\n}\n\n.graph-container {\n    margin: 0 auto;\n    width: 100%;\n    max-width: 650px;\n    height: 290px;\n    margin-bottom: 77px;\n    font-family: Roboto;\n}\n\n.active-tab {\n    color: white;\n}\n\n #reports {\n    color: white;\n}\n</style><div class=\"wrapper\"><h2 class=\"main-head-title\">Report</h2><main class=\"main-wrapper\"><div class=\"interface-container-2\"><button id=\"day_tab\" class=\"ico-text-button active-tab\">Day</button>            |<button id=\"week_tab\" class=\"ico-text-button\">Week</button>            |<button id=\"month_tab\" class=\"ico-text-button\">Month</button></div><div id=\"report-graph\" class=\"graph-container\"></div><div class=\"interface-container-3\"><button class=\"ico-text-button\">Pomodoros</button>            |<button class=\"ico-text-button active-tab\">Tasks</button></div></main></div>");;return buf.join("");
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Controller = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _options = __webpack_require__(67);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = exports.Controller = function () {
	    function Controller(model, view) {
	        _classCallCheck(this, Controller);

	        this.model = model;
	        this.view = view;
	    }

	    _createClass(Controller, [{
	        key: 'initController',
	        value: function initController() {
	            var context = this;
	            document.getElementsByClassName('interface-container-2')[0].addEventListener('click', function (e) {
	                context.view.activateTab(e);
	                if (e.target.id == 'day_tab') {
	                    context.view.renderChart(_options.options.pieView);
	                }
	                if (e.target.id == 'week_tab') {
	                    context.view.renderChart(_options.options.columnView);
	                }
	                if (e.target.id == 'month_tab') {
	                    context.view.renderChart(_options.options.columnViewMonthly);
	                }
	            });

	            context.model.patchData(function () {
	                _options.options.pieView.series[0].data = context.model.data.pieView;
	                _options.options.columnView.series = context.model.data.columnView;
	                _options.options.columnViewMonthly.series = (0, _options.columnMonthly)();
	                console.log(_options.options);
	                context.view.renderChart(_options.options.pieView);
	            });
	        }
	    }]);

	    return Controller;
	}();

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.options = undefined;
	exports.columnMonthly = columnMonthly;
	exports.createRandom30xArray = createRandom30xArray;
	exports.totalValueCount = totalValueCount;

	var _Model = __webpack_require__(68);

	var options = exports.options = {
	    pieView: {
	        chart: {
	            plotBackgroundColor: '#2a3f50',
	            plotBorderWidth: 0,
	            plotShadow: false,
	            type: 'pie',
	            spacing: [0, 0, 0, 0],
	            renderTo: 'report-graph'
	        },

	        credits: {
	            enabled: false
	        },

	        title: {
	            text: totalValueCount(),
	            align: 'center',
	            verticalAlign: 'middle',
	            y: 15,
	            style: {
	                "color": "white",
	                "fontSize": "70px",
	                "fontFamily": "Roboto"
	            }

	        },

	        subtitle: {
	            text: 'total',
	            align: 'center',
	            verticalAlign: 'middle',
	            y: 40,
	            style: {
	                "color": "white",
	                "fontSize": "18px"
	            }

	        },

	        tooltip: {
	            pointFormatter: function pointFormatter() {
	                return '<b>' + this.name.toUpperCase() + '</b><br><b>Tasks: ' + this.y + '</b>';
	            },
	            headerFormat: ''
	        },

	        plotOptions: {
	            pie: {
	                dataLabels: {
	                    enabled: true,
	                    distance: -30,
	                    style: {
	                        color: 'white',
	                        cursor: 'pointer',
	                        textShadow: false,
	                        fontSize: '14px'
	                    }
	                },
	                innerSize: '50%',
	                startAngle: 0,
	                endAngle: 360,
	                center: ['50%', '50%'],
	                allowPointSelect: true,
	                colors: ['#e05446', '#fba640', '#fcdb43', '#1ab99a', '#8da5b8'],
	                cursor: 'pointer',
	                highlight: {
	                    opacity: '0'
	                },
	                borderColor: null
	            },
	            series: {
	                states: {
	                    hover: {
	                        halo: {
	                            attributes: {
	                                fill: '#fff'
	                            },
	                            opacity: '0.75'
	                        }
	                    }
	                }
	            }

	        },

	        series: [{
	            name: 'Tasks',
	            keys: ['name', 'y'],
	            data: ''
	        }]
	    },
	    columnView: {
	        chart: {
	            backgroundColor: '#2a3f50',
	            type: 'column',
	            renderTo: 'report-graph',
	            borderWidth: 0,
	            style: {
	                fontColor: 'white'
	            }
	        },
	        title: null,
	        subtitle: null,
	        colors: ['#e05446', '#fba640', '#fcdb43', '#1ab99a', '#8da5b8'],
	        legend: {
	            symbolRadius: 0,
	            style: {
	                color: 'white'
	            },
	            itemStyle: {
	                color: '#8198ab'
	            },
	            itemHoverStyle: {
	                color: 'white'
	            }
	        },
	        credits: {
	            enabled: false
	        },
	        xAxis: {
	            categories: ['MON', 'TUE', 'WED', 'THU', 'FRI'],
	            allowDecimals: false,
	            title: {
	                text: null
	            },
	            gridLineColor: '#345168',
	            tickWidth: 0,
	            labels: {
	                style: {
	                    color: 'white'
	                }
	            }
	        },
	        yAxis: {
	            allowDecimals: false,
	            min: 0,
	            title: {
	                text: null
	            },
	            lineColor: 'white',
	            lineWidth: 1,
	            gridLineColor: '#345168',
	            tickColor: "white",
	            minorTickColor: "white",
	            labels: {
	                style: {
	                    color: 'white'
	                }
	            },
	            tickInterval: 2
	        },

	        plotOptions: {
	            column: {
	                stacking: 'normal',
	                borderWidth: 0,
	                cursor: 'pointer'
	            },
	            series: {
	                pointWidth: 28
	            }
	        },
	        tooltip: {
	            pointFormatter: function pointFormatter() {
	                return '<b>' + this.series.name.toUpperCase() + '</b><br><b>Tasks: ' + this.y + '</b>';
	            },
	            headerFormat: ''
	        },
	        series: ''
	    },
	    columnViewMonthly: {
	        chart: {
	            backgroundColor: '#2a3f50',
	            type: 'column',
	            renderTo: 'report-graph',
	            borderWidth: 0,
	            style: {
	                fontColor: 'white'
	            }
	        },
	        title: null,
	        subtitle: null,
	        colors: ['#e05446', '#fba640', '#fcdb43', '#1ab99a', '#8da5b8'],
	        legend: {
	            symbolRadius: 0,
	            style: {
	                color: 'white'
	            },
	            itemStyle: {
	                color: '#8198ab'
	            },
	            itemHoverStyle: {
	                color: 'white'
	            }
	        },
	        credits: {
	            enabled: false
	        },
	        xAxis: {
	            //categories: ['MON', 'TUE', 'WED', 'THU', 'FRI'],
	            allowDecimals: false,
	            title: {
	                text: null
	            },
	            tickInterval: 1,
	            min: 1,
	            max: 30,
	            gridLineColor: '#345168',
	            tickWidth: 0,
	            labels: {
	                style: {
	                    color: 'white'
	                }
	            }
	        },
	        yAxis: {
	            allowDecimals: false,
	            min: 0,
	            title: {
	                text: null
	            },
	            lineColor: 'white',
	            lineWidth: 1,
	            gridLineColor: '#345168',
	            tickColor: "white",
	            minorTickColor: "white",
	            labels: {
	                style: {
	                    color: 'white'
	                }
	            },
	            tickInterval: 2
	        },

	        plotOptions: {
	            column: {
	                stacking: 'normal',
	                borderWidth: 0,
	                cursor: 'pointer'
	            },
	            series: {
	                //pointWidth: 28
	            }
	        },
	        tooltip: {
	            pointFormatter: function pointFormatter() {
	                return '<b>' + this.series.name.toUpperCase() + '</b><br><b>Tasks: ' + this.y + '</b>';
	            },
	            headerFormat: ''
	        },
	        series: ''
	    }
	};
	//mocks
	function pieDaily() {
	    //get data from any source
	    return [{
	        name: 'Urgent',
	        y: 2
	    }, {
	        name: 'High',
	        y: 3
	    }, {
	        name: 'Medium',
	        y: 1
	    }, {
	        name: 'Low',
	        y: 6
	    }, {
	        name: 'Failed',
	        y: 3
	    }];
	}
	function columnWeekly() {
	    return [{
	        name: 'Urgent',
	        data: [5, 3, 4, 7, 2],
	        stack: 'finished'
	    }, {
	        name: 'High',
	        data: [3, 4, 4, 2, 5],
	        stack: 'finished'
	    }, {
	        name: 'Middle',
	        data: [2, 5, 6, 2, 1],
	        stack: 'finished'
	    }, {
	        name: 'Low',
	        data: [3, 0, 4, 4, 3],
	        stack: 'finished'

	    }, {
	        name: 'Failed',
	        data: [3, 6, 4, 4, 3],
	        stack: 'failed'
	    }];
	}
	function columnMonthly() {
	    return [{
	        name: 'Urgent',
	        data: createRandom30xArray()
	    }, {
	        name: 'High',
	        data: createRandom30xArray()
	    }, {
	        name: 'Middle',
	        data: createRandom30xArray()
	    }, {
	        name: 'Low',
	        data: createRandom30xArray()

	    }, {
	        name: 'Failed',
	        data: createRandom30xArray()
	    }];
	}

	function createRandom30xArray() {
	    var data = [];
	    var min = 1;
	    var max = 6;
	    for (var i = 1; i <= 31; i++) {
	        data.push(parseInt(Math.random() * (max - min) + min));
	    }
	    return data;
	}

	function totalValueCount() {
	    var data = pieDaily();
	    var tasksInTotal = 0;
	    for (var i = 0; i < data.length; i++) {
	        tasksInTotal += data[i].y;
	    }
	    return tasksInTotal;
	}

/***/ },
/* 68 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Model = exports.Model = {
	    data: {
	        pieView: '',
	        columnView: '',
	        columnViewMonthly: ''
	    },
	    patchData: function patchData(callback) {
	        User.getData(User.currentLogin, 'reports/pieView', function (value) {
	            Model.data.pieView = value;
	            console.log(Model.data.pieView);
	            User.getData(User.currentLogin, 'reports/columnView', function (value) {
	                Model.data.columnView = value;
	                console.log(Model.data.columnView);
	                User.getData(User.currentLogin, 'reports/columnViewMonthly', function (value) {
	                    Model.data.columnViewMonthly = value;
	                    console.log(Model.data.columnViewMonthly);
	                    callback();
	                });
	            });
	        });
	    }

	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.View = undefined;

	var _Model = __webpack_require__(68);

	var View = exports.View = {
	    renderChart: function renderChart(options) {
	        var chart = new Highcharts.Chart(options);
	    },
	    activateTab: function activateTab(e) {
	        for (var i = 0; i < e.currentTarget.children.length; i++) {
	            if (e.currentTarget.children[i].classList.contains('active-tab')) {
	                e.currentTarget.children[i].classList.remove('active-tab');
	            }
	        }
	        e.target.classList.add('active-tab');
	    }
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _template = __webpack_require__(71);

	var _template2 = _interopRequireDefault(_template);

	var _controller = __webpack_require__(72);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Renderer.renderHeaderDetailed = function () {
	    var el = document.createElement('div');
	    el.innerHTML = (0, _template2.default)();
	    document.getElementById('app-body').appendChild(el);
	    _controller.Controller.initCntrl(el);
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(49);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<style>.logo {\n    min-width: 241px;\n    width: 17%;\n    position: absolute;\n    top: 15px;\n    left: 6.8%;\n}\n\n.main-head {\n    position: fixed;\n    width: 100%;\n    background-color: #2a3f50;\n    z-index: 9999;\n}\n\n.main-head-shadow-on {\n    box-shadow: 0 5px 8px 1px rgba(22, 26, 29, 0.3);\n}\n\n.inner-head {\n    max-width: 1366px;\n    margin: 0 auto;\n    box-sizing: border-box;\n}\n\n.inner-2-head {\n    width: 100%;\n    padding: 0 6.8%;\n    box-sizing: border-box;\n    padding-top: 56px;\n    overflow: hidden;\n    position: relative;\n}\n\n.visible-logo {\n    visibility: visible;\n}\n\n.interface-container {\n    margin-bottom: 17px;\n    float: right;\n    width: 46%;\n    text-align: right;\n    font-size: 18px;\n}\n\n.interface-container .ico-text-button {\n    font-family: icomoon;\n    cursor: pointer;\n    margin-left: 5.7%;\n}\n.active{\n    color: white;\n}\n.trash-counter {\n    position: absolute;\n    bottom: -10px;\n    right: -10px;\n    background-color: red;\n    border-radius: 50%;\n    width: 20px;\n    height: 20px;\n    font-size: 14px;\n    display: none;\n}\n\n</style><header class=\"main-head main-head-shadow-on task-list-header\"><div class=\"inner-head\"><div class=\"inner-2-head\"><a href=\"#\"><img src=\"./Global/img/Logo.svg\" alt=\"logo goes here\" class=\"logo\"></a><div class=\"interface-container\"><button id=\"addTask\" class=\"ico-text-button\"></button><button id=\"trashOn\" class=\"ico-text-button\"><span class=\"trash-counter\"></span></button><button id=\"reports\" class=\"ico-text-button\">&#xe90c;</button><button id=\"settings\" class=\"ico-text-button\"> &#xe90b;</button><button id=\"log_out\" class=\"ico-text-button\"> &#xe908;</button></div></div></div></header>");;return buf.join("");
	}

/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Controller = exports.Controller = {
	    initCntrl: function initCntrl(el) {
	        var listeners = { // обьект проектирования поведения
	            'log_out': function log_out(e) {
	                firebase.auth().signOut();
	            },
	            'settings': function settings(e) {
	                router.moveTo('pomodoras');
	            },
	            'reports': function reports() {
	                router.moveTo('reports');
	            },
	            'addTask': function addTask() {
	                Renderer.showModalAdd();
	            },
	            'trashOn': function trashOn(e) {
	                if (e.target.classList.contains('active')) {
	                    EventBusLocal.publish('trash-off', e.target);
	                } else {
	                    EventBusLocal.publish('trash-on', e.target);
	                }
	            }
	        };
	        $('#addTask').tips('Add new task');
	        $('#trashOn').tips('Activate delete mode');
	        $('#reports').tips('Go to Reports');
	        $('#settings').tips('Go to Settings');
	        $('#log_out').tips('Sign out', true);
	        el.addEventListener('click', function (e) {
	            if (listeners[e.target.id]) listeners[e.target.id](e);
	        });
	    }
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _template = __webpack_require__(74);

	var _template2 = _interopRequireDefault(_template);

	var _controller = __webpack_require__(75);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Renderer.renderTitleTaskList = function () {
	    var el = document.createElement('div');
	    el.innerHTML = (0, _template2.default)();
	    document.getElementById('app-body').appendChild(el);
	    _controller.controller.init(el, 'today-list');
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(49);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<style>.wrapper {\n    max-width: 1366px;\n    padding-top: 140px;\n    margin: 0 auto;\n}\n\n.main-head-title {\n    clear: both;\n    font: 28px \"Roboto\", sans-serif;\n    font-weight: bold;\n    text-align: center;\n    width: 100%;\n    color: white;\n    padding: 0 6.8%;\n    box-sizing: border-box;\n}\n\n.sub-title {\n    padding: 0 6.8%;\n    font: 20px \"Roboto\", sans-serif;\n    text-align: center;\n    width: 100%;\n    color: #8198ab;\n    margin-top: 17px;\n    margin-bottom: 76px;\n    position: relative;\n    box-sizing: border-box;\n    overflow: hidden;\n}\n\n.interface-container-2 {\n    color: #8da5b8;\n    float: right;\n}\n.left-side{\n    float: left;\n}\n.hidden{\n    display: none;\n}\n\n.interface-container-2 .ico-text-button {\n    cursor: pointer;\n    font: 15px \"Roboto\", sans-serif;\n}\n\n.ico-text-button-nocontainer {\n    font-family: icomoon;\n    cursor: pointer;\n    margin-left: 10px;\n    font-size: 18px;\n}\n</style><div class=\"wrapper\"><h2 class=\"main-head-title\">Daily Task List<button id=\"addTask-title\" class=\"ico-text-button ico-text-button-nocontainer\"></button></h2><div class=\"sub-title\"><div class=\"interface-container-2\"><button id=\"to_do\" class=\"ico-text-button\">To Do</button>" + (jade.escape((jade_interp = '') == null ? '' : jade_interp)) + " | " + (jade.escape((jade_interp = '') == null ? '' : jade_interp)) + "<button id=\"done\" class=\"ico-text-button\">Done</button></div><div class=\"interface-container-2 left-side hidden\"><button id=\"select-all\" class=\"ico-text-button\">Select All</button>" + (jade.escape((jade_interp = '') == null ? '' : jade_interp)) + " | " + (jade.escape((jade_interp = '') == null ? '' : jade_interp)) + "<button id=\"deselect-all\" class=\"ico-text-button\">Deselect All</button>" + (jade.escape((jade_interp = '') == null ? '' : jade_interp)) + " | " + (jade.escape((jade_interp = '') == null ? '' : jade_interp)) + "<button id=\"delete-all\" class=\"ico-text-button\">Delete Checked</button></div></div></div>");;return buf.join("");
	}

/***/ },
/* 75 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var controller = exports.controller = {
	    listeners: {
	        'delete-all': function deleteAll() {
	            var trash = document.getElementById('trashOn');
	            for (var i = 0; i < User.trashData.length; i++) {
	                User.deleteTaskData(User.currentLogin, '/tasks/' + User.trashData[i]);
	            }
	            EventBusLocal.publish('trash-off', trash);
	            EventBusLocal.publish('trash-refresh', trash);
	        },
	        'select-all': function selectAll(dependency) {
	            EventBusLocal.publish('trash-check-all', dependency);
	        },
	        'deselect-all': function deselectAll(dependency) {
	            EventBusLocal.publish('trash-uncheck-all', dependency);
	        },
	        'addTask-title': function addTaskTitle() {
	            Renderer.showModalAdd();
	        }

	    },
	    init: function init(el, dependency) {
	        el.addEventListener('click', function (e) {
	            if (controller.listeners[e.target.id]) controller.listeners[e.target.id](dependency);
	        });
	    }

	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _template = __webpack_require__(77);

	var _template2 = _interopRequireDefault(_template);

	var _Controller = __webpack_require__(78);

	var _Controller2 = _interopRequireDefault(_Controller);

	var _Model = __webpack_require__(79);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Renderer.renderReportsDaily = function () {
	    var el = document.createElement('div');
	    var controller = new _Controller2.default(_Model.tasks, EventBusLocal);
	    controller.initController(function () {
	        if (controller.model.data) {
	            el.innerHTML = (0, _template2.default)({
	                data: controller.model.data,
	                tools: controller.model
	            });
	        }
	        controller.removeEventListeners(el);
	        controller.setEventListeners(el);
	    });
	    document.getElementById('app-body').appendChild(el);
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(49);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (console, data, tools) {
	buf.push("<style>.today-list {\n    padding: 0 6.8%;\n    width: 100%;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n}\n\n.top-block-message {\n    font-size: 42px;\n    color: #8da5b8;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 0 6.8%;\n    text-align: center;\n    line-height: 114%;\n}\n\n.task {\n    height: 87px;\n    width: 100%;\n    background-color: white;\n    line-height: 87px;\n    display: flex;\n    display: -webkit-flex;\n    justify-content: flex-start;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n    margin-bottom: 0.6%;\n    position: relative;\n    box-shadow: 6px 8px 8px 1px rgba(22, 26, 29, 0.3);\n}\n\n.task-buttons-container {\n    position: absolute;\n    right: 34px;\n    display: flex;\n    display: -webkit-flex;\n    flex-wrap: wrap;\n    -webkit-flex-wrap: wrap;\n    height: 100%;\n    top: 0;\n    font-size: 19px;\n    padding: 11px 0;\n    box-sizing: border-box;\n}\n\n.edit-task {\n    color: #cacaca;\n    font-family: icomoon;\n    cursor: pointer;\n    width: 100%;\n}\n\n.drag-task {\n    color: #cacaca;\n    font-family: icomoon;\n    cursor: pointer;\n    width: 100%;\n    display: none;\n}\n\n.sorted-list .drag-task {\n    display: inline-block;\n}\n\n.edit-task:hover {\n    color: #88a3b5;\n}\n\n.drag-task:hover {\n    color: #88a3b5;\n}\n\n.drop-switch span {\n    display: inline-block;\n    vertical-align: text-bottom;\n    font-size: 20px;\n    margin-right: 8px;\n    font-weight: bold;\n}\n\n#to_do {\n    color: white;\n}\n\n.wrapper-list {\n    max-width: 1366px;\n    margin: 0 auto;\n}\n\n</style><div class=\"wrapper-list\">");
	var switcher = true;
	console.log(switcher);
	buf.push("<ul class=\"today-list\">");
	for(var keys in data)
	{
	if(tools.compareDates(data[keys].deadline))
	{
	switcher=false
	buf.push("<li" + (jade.attr("key", keys, true, true)) + (jade.cls(['task',[data[keys].category,data[keys].estimation, data[keys].priority]], [null,true])) + "><div class=\"category\"></div><div class=\"border-category\"></div><div class=\"date\">TODAY</div><section class=\"task-info\"><h2 class=\"task-info-title\">" + (jade.escape((jade_interp = data[keys].title) == null ? '' : jade_interp)) + "</h2><p>" + (jade.escape((jade_interp = data[keys].description) == null ? '' : jade_interp)) + "</p><div class=\"task-buttons-container\"><button class=\"drag-task\"></button><button class=\"edit-task\"></button></div></section><div class=\"urgency\"><p class=\"estimation-counter\"></p></div></li>");
	}
	}
	buf.push("</ul>");
	if(switcher)
	{
	buf.push("<div class=\"top-block-message\"><p>Excellent,<br>all daily tasks done! :)</p></div>");
	}
	buf.push("</div>");}.call(this,"console" in locals_for_with?locals_for_with.console:typeof console!=="undefined"?console:undefined,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"tools" in locals_for_with?locals_for_with.tools:typeof tools!=="undefined"?tools:undefined));;return buf.join("");
	}

/***/ },
/* 78 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	    function Controller(model, eBusLocal) {
	        _classCallCheck(this, Controller);

	        //this.view = view;
	        this.model = model;
	        this.eBusLocal = eBusLocal;
	        this.listeners = {
	            editTask: function editTask(e) {
	                if (e.target.classList.contains('edit-task')) {
	                    Router.showModalEdit(e.target);
	                }
	            },
	            trashDrop: function (e) {
	                this.eBusLocal.publish('trash-drop', {
	                    e: e,
	                    context: this
	                });
	            }.bind(this),
	            goToTimer: function goToTimer(e) {
	                if (e.target.classList.contains('urgency')) {
	                    router.moveTo('timer', e.target.parentNode.getAttribute('key'));
	                    //EventBus.publish('goToTimer', e.target.parentNode.getAttribute('key'))
	                }
	            }
	        };
	    }

	    _createClass(Controller, [{
	        key: 'initController',
	        value: function initController(callback) {
	            EventBusLocal.publish('trash-refresh', document.getElementById('trashOn'));
	            this.model.patchList(callback);
	            //this.view.showList
	        }
	    }, {
	        key: 'setEventListeners',
	        value: function setEventListeners(el) {
	            var context = this;
	            el.addEventListener('click', this.listeners.editTask);
	            el.addEventListener('click', this.listeners.trashDrop);
	            el.addEventListener('click', this.listeners.goToTimer);
	        }
	    }, {
	        key: 'removeEventListeners',
	        value: function removeEventListeners(el) {
	            var context = this;
	            for (var key in this.listeners) {
	                el.removeEventListener('click', this.listeners[key]);
	            }
	        }
	    }]);

	    return Controller;
	}();

	exports.default = Controller;

/***/ },
/* 79 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var tasks = exports.tasks = {
	    data: {},
	    patchList: function patchList(callback) {
	        User.getData(User.currentLogin, 'tasks', function (value) {
	            if (!value || value == []) {
	                console.log('empty list');
	            } else {
	                tasks.data = value;
	            }
	            callback();
	        });
	    },
	    checkTrashBuffer: function checkTrashBuffer(key) {
	        for (var i = 0; i < User.trashData.length; i++) {
	            if (User.trashData[i] == key) {
	                return false;
	            }
	        }
	        return true;
	    },
	    getStruct: function getStruct(data) {
	        var structure = {};
	        for (var key in data) {
	            if (!this.compareDates(data[key].deadline)) {
	                if (structure[data[key].category]) {
	                    structure[data[key].category].push(key);
	                } else if (!structure[data[key].category]) {
	                    structure[data[key].category] = [];
	                    structure[data[key].category].push(key);
	                }
	            }
	        }
	        return structure;
	    },
	    getFilterStruct: function getFilterStruct(data, type) {
	        var structure = [];
	        for (var key in data) {
	            if (!this.compareDates(data[key].deadline)) {
	                if (data[key].priority == type) {
	                    structure.push(key);
	                }
	            }
	        }
	        return {
	            type: type,
	            list: structure
	        };
	    },
	    compareDates: function compareDates(date) {
	        var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	        var currentDate = new Date();
	        return monthArray[parseInt(currentDate.getMonth(), 10)] == date.month && parseInt(currentDate.getDate(), 10) == date.day && parseInt(currentDate.getFullYear(), 10) == date.year;
	    }
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _template = __webpack_require__(81);

	var _template2 = _interopRequireDefault(_template);

	var _controller = __webpack_require__(82);

	var _controller2 = _interopRequireDefault(_controller);

	var _view = __webpack_require__(83);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Renderer.showModalAdd = function () {
	    var el = document.createElement('div');
	    el.innerHTML = (0, _template2.default)();
	    document.getElementById('app-body').appendChild(el);
	    var controller = new _controller2.default(_view.view, el);
	    controller.init();
	    $(".datepicker").datepicker({
	        dateFormat: "MM dd, yy"
	    });
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(49);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<style>/*horisontal category select*/\n.categories-choose-list {\n  border-bottom: 1px solid #5b7284;\n  display: flex;\n  display: -webkit-flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 32px;\n}\n.categories-choose-list li {\n  position: relative;\n  padding-left: 5%;\n  display: inline-block;\n  box-sizing: border-box;\n  margin-right: 3%;\n}\n.categories-choose-list input {\n  display: none;\n}\n.label1,\n.label2,\n.label3,\n.label4,\n.label5 {\n  width: 19px;\n  height: 19px;\n  position: absolute;\n  left: 0;\n  background: url(Global/img/ico-sprite.png) no-repeat 0 -37px;\n  bottom: 8px;\n  line-height: 19px;\n}\n.label1:hover,\n.text-label:hover ~ .label1 {\n  background: url(Global/img/ico-sprite.png) no-repeat 0 -19px;\n}\n.label2:hover,\n.text-label:hover ~ .label2 {\n  background: url(Global/img/ico-sprite.png) no-repeat -18px -19px;\n}\n.label3:hover,\n.text-label:hover ~ .label3 {\n  background: url(Global/img/ico-sprite.png) no-repeat -36px -19px;\n}\n.label4:hover,\n.text-label:hover ~ .label4 {\n  background: url(Global/img/ico-sprite.png) no-repeat -54px -19px;\n}\n.label5:hover,\n.text-label:hover ~ .label5 {\n  background: url(Global/img/ico-sprite.png) no-repeat -72px -19px;\n}\n.text-label {\n  color: #748b9e;\n  display: inline-block;\n  padding-bottom: 9px;\n  font: 16px Roboto, sans-serif;\n  line-height: 16px;\n}\n.categories-choose-list label {\n  cursor: pointer;\n}\ninput:checked ~ .text-label {\n  color: white;\n}\n.categories-choose-list li:hover .text-label {\n  color: white;\n}\ninput:checked ~ .label1 {\n  background-position: 0 0;\n}\ninput:checked ~ .label2 {\n  background-position: -18px 0;\n}\ninput:checked ~ .label3 {\n  background-position: -36px 0;\n}\ninput:checked ~ .label4 {\n  background-position: -54px 0;\n}\ninput:checked ~ .label5 {\n  background-position: -72px 0;\n}\n.categories-choose-list li:hover {\n  border-color: white;\n  color: white;\n}\n/*horisontal urgency select*/\n.label11,\n.label22,\n.label33,\n.label44 {\n  width: 19px;\n  height: 19px;\n  position: absolute;\n  left: 0;\n  background: url(Global/img/urgency-sprite.png) no-repeat -1px -38px;\n  bottom: 8px;\n  line-height: 19px;\n}\n.label11:hover,\n.text-label:hover ~ .label11 {\n  background: url(Global/img/urgency-sprite.png) no-repeat -1px -20px;\n}\n.label22:hover,\n.text-label:hover ~ .label22 {\n  background: url(Global/img/urgency-sprite.png) no-repeat -19px -20px;\n}\n.label33:hover,\n.text-label:hover ~ .label33 {\n  background: url(Global/img/urgency-sprite.png) no-repeat -37px -20px;\n}\n.label44:hover,\n.text-label:hover ~ .label44 {\n  background: url(Global/img/urgency-sprite.png) no-repeat -55px -20px;\n}\ninput:checked ~ .label11 {\n  background-position: -1px -1px;\n}\ninput:checked ~ .label22 {\n  background-position: -19px -1px;\n}\ninput:checked ~ .label33 {\n  background-position: -37px -1px;\n}\ninput:checked ~ .label44 {\n  background-position: -55px -1px;\n}\n.modal-interface {\n  position: absolute;\n  top: 15px;\n  left: 0;\n  width: 100%;\n  padding: 0 2.8%;\n  box-sizing: border-box;\n  font-family: icomoon;\n}\n.modal-interface-confirm,\n.modal-interface-cancel {\n  float: right;\n  font-family: icomoon;\n  font-size: 20px;\n  color: #88a0b3;\n}\n.modal-interface-cancel {\n  margin-right: 3%;\n}\n.modal-interface button:hover {\n  color: white;\n  cursor: pointer;\n}\n.modal-wrap {\n  position: fixed;\n  z-index: 9999999;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.modal-window {\n  font: 14px 'Roboto', sans-serif;\n  background-color: #2a3f50;\n  margin: 6.4% auto;\n  width: 500px;\n  padding: 41px 3%;\n  color: white;\n  box-sizing: border-box;\n  position: relative;\n}\n.modal-window-head {\n  font-size: 28px;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.modal-input-title {\n  display: block;\n  font: 14px 'Roboto', sans-serif;\n  margin-bottom: 8px;\n  margin-top: 9px;\n}\n.modal-input-field {\n  color: #748b9e;\n  border-bottom: 1px solid #425869;\n  font: 16px 'Roboto', sans-serif;\n  padding-bottom: 4px;\n  width: 100%;\n  margin-bottom: 25px;\n}\n.modal-input-field:focus {\n  color: white;\n}\n.estimation-range {\n  width: 50%;\n  display: block;\n  margin-bottom: 34px;\n}\n.estimation-range li {\n  width: 28px;\n  height: 23px;\n  display: inline-block;\n  background: url(Global/img/tomato.svg) no-repeat;\n}\n.estimation-range li:hover {\n  background: url(Global/img/tomato_fill.svg) no-repeat;\n}\n.estimated {\n  background: url(Global/img/tomato_fill.svg) no-repeat !important;\n}\n.modal-remove-inner-wrapper {\n  height: 480px;\n  display: flex;\n  display: -webkit-flex;\n  flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  align-content: flex-start;\n  padding-top: 30%;\n  box-sizing: border-box;\n  position: relative;\n}\n.remove-submit-msg {\n  font: 36px Roboto, sans-serif;\n  color: #8da5b8;\n  width: 90%;\n  margin: 0 auto;\n  text-align: center;\n  margin-bottom: 44%;\n}\n.button-default {\n  color: white;\n  width: 38%;\n  padding: 12px 0;\n}\n.button-holder-default {\n  width: 73%;\n  display: flex;\n  display: -webkit-flex;\n  margin: 0 auto;\n  justify-content: space-around;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-around;\n}\n.modal-interface-trash {\n  float: left;\n  font-family: icomoon;\n  font-size: 20px;\n  color: #88a0b3;\n}\n</style><div class=\"modal-wrap\"><form class=\"modal-window\"><div class=\"modal-interface\"><button id=\"modal-confirm-add\" class=\"modal-interface-confirm\">&#xe90f</button><button id=\"modal-close\" class=\"modal-interface-cancel\">&#xe910</button></div><h2 class=\"modal-window-head\">Add task</h2><label for=\"title-input\" class=\"modal-input-title\">TITLE</label><input id=\"title-input\" type=\"text\" placeholder=\"Add title here\" class=\"modal-input-field\"><label for=\"description-input\" class=\"modal-input-title\">DESCRIPTION</label><input id=\"description-input\" type=\"text\" placeholder=\"Add description here\" class=\"modal-input-field\"><h3 class=\"modal-input-title\">CATEGORY</h3><ul class=\"categories-choose-list\"><li><input id=\"work\" type=\"radio\" value=\"Work\" name=\"ctg1\"><label for=\"work\" class=\"text-label\">Work</label><label for=\"work\" class=\"label1\"></label></li><li><input id=\"education\" type=\"radio\" value=\"Education\" name=\"ctg1\"><label for=\"education\" class=\"text-label\">Education</label><label for=\"education\" class=\"label2\"></label></li><li><input id=\"hobby\" type=\"radio\" value=\"Hobby\" name=\"ctg1\"><label for=\"hobby\" class=\"text-label\">Hobby</label><label for=\"hobby\" class=\"label3\"></label></li><li><input id=\"sport\" type=\"radio\" value=\"Sport\" name=\"ctg1\"><label for=\"sport\" class=\"text-label\">Sport</label><label for=\"sport\" class=\"label4\"></label></li><li><input id=\"other\" type=\"radio\" value=\"Other\" name=\"ctg1\"><label for=\"other\" class=\"text-label\">Other</label><label for=\"other\" class=\"label5\"></label></li></ul><label for=\"deadline-input\" class=\"modal-input-title\">DEADLINE</label><input id=\"deadline-input\" type=\"text\" placeholder=\"Set date\" class=\"datepicker modal-input-field\"><h3 class=\"modal-input-title\">ESTIMATION</h3><ul class=\"estimation-range\"><li></li><li></li><li></li><li></li><li></li></ul><h3 class=\"modal-input-title\">PRIORITY</h3><ul class=\"categories-choose-list\"><li><input id=\"urgent\" type=\"radio\" value=\"Urgent\" name=\"ctg11\"><label for=\"urgent\" class=\"text-label\">Urgent</label><label for=\"urgent\" class=\"label11\"></label></li><li><input id=\"high\" type=\"radio\" value=\"High\" name=\"ctg11\"><label for=\"high\" class=\"text-label\">High</label><label for=\"high\" class=\"label22\"></label></li><li><input id=\"middle\" type=\"radio\" value=\"Middle\" name=\"ctg11\"><label for=\"middle\" class=\"text-label\">Middle</label><label for=\"middle\" class=\"label33\"></label></li><li><input id=\"low\" type=\"radio\" value=\"Low\" name=\"ctg11\"><label for=\"low\" class=\"text-label\">Low</label><label for=\"low\" class=\"label44\"></label></li></ul></form></div>");;return buf.join("");
	}

/***/ },
/* 82 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	    function Controller(view, el) {
	        _classCallCheck(this, Controller);

	        this.view = view;
	        this.el = el;
	    }

	    _createClass(Controller, [{
	        key: 'init',
	        value: function init() {
	            var context = this;

	            var listeners = {
	                'modal-close': function modalClose(e) {
	                    context.view.modalClose(e, context.el);
	                },
	                'modal-confirm-add': function modalConfirmAdd(e) {
	                    e.preventDefault();
	                    context.view.dropData(function () {
	                        document.getElementById('app-body').removeChild(context.el);
	                    });
	                }

	            };
	            this.el.addEventListener('click', function (e) {
	                if (listeners[e.target.id]) listeners[e.target.id](e);
	            });

	            document.getElementsByClassName('estimation-range')[0].addEventListener('click', function (e) {
	                this.view.estimationRangeReview(e);
	            }.bind(context));
	            console.log(this.el);
	        }
	    }]);

	    return Controller;
	}();

	exports.default = Controller;

/***/ },
/* 83 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var view = exports.view = {
	    dropData: function dropData(callback) {
	        User.updateTasksData();
	        callback();
	    },
	    modalClose: function modalClose(e, el) {
	        e.preventDefault();
	        document.getElementById('app-body').removeChild(el);
	    },
	    estimationRangeReview: function estimationRangeReview(e) {
	        if (e.target.tagName.toUpperCase() == 'LI') {
	            var parent = e.currentTarget;
	            for (var i = 0; i < parent.children.length; i++) {
	                parent.children[i].classList.remove('estimated');
	            }
	            for (var i = 0, j = 0; parent.children[i] != e.target; i++, j++) {
	                parent.children[i].classList.add('estimated');
	            }
	            e.target.classList.add('estimated');
	            e.currentTarget.estimation = j + 1;
	        }
	    }
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _template = __webpack_require__(85);

	var _template2 = _interopRequireDefault(_template);

	var _controller = __webpack_require__(86);

	var _controller2 = _interopRequireDefault(_controller);

	var _view = __webpack_require__(87);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Renderer.showModalEdit = function (target) {
	    var el = document.createElement('div');
	    var controller = new _controller2.default(el, _view.view);
	    controller.view.syncChanges(target, function (key) {
	        el.innerHTML = (0, _template2.default)({
	            data: User.dataSnapShot[key]
	        });
	        document.getElementById('app-body').appendChild(el);
	    });
	    controller.init(target);
	    $(".datepicker").datepicker({
	        dateFormat: "MM dd, yy"
	    });
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(49);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (data) {
	buf.push("<style>/*horisontal category select*/\n.categories-choose-list {\n  border-bottom: 1px solid #5b7284;\n  display: flex;\n  display: -webkit-flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 32px;\n}\n.categories-choose-list li {\n  position: relative;\n  padding-left: 5%;\n  display: inline-block;\n  box-sizing: border-box;\n  margin-right: 3%;\n}\n.categories-choose-list input {\n  display: none;\n}\n.label1,\n.label2,\n.label3,\n.label4,\n.label5 {\n  width: 19px;\n  height: 19px;\n  position: absolute;\n  left: 0;\n  background: url(Global/img/ico-sprite.png) no-repeat 0 -37px;\n  bottom: 8px;\n  line-height: 19px;\n}\n.label1:hover,\n.text-label:hover ~ .label1 {\n  background: url(Global/img/ico-sprite.png) no-repeat 0 -19px;\n}\n.label2:hover,\n.text-label:hover ~ .label2 {\n  background: url(Global/img/ico-sprite.png) no-repeat -18px -19px;\n}\n.label3:hover,\n.text-label:hover ~ .label3 {\n  background: url(Global/img/ico-sprite.png) no-repeat -36px -19px;\n}\n.label4:hover,\n.text-label:hover ~ .label4 {\n  background: url(Global/img/ico-sprite.png) no-repeat -54px -19px;\n}\n.label5:hover,\n.text-label:hover ~ .label5 {\n  background: url(Global/img/ico-sprite.png) no-repeat -72px -19px;\n}\n.text-label {\n  color: #748b9e;\n  display: inline-block;\n  padding-bottom: 9px;\n  font: 16px Roboto, sans-serif;\n  line-height: 16px;\n}\n.categories-choose-list label {\n  cursor: pointer;\n}\ninput:checked ~ .text-label {\n  color: white;\n}\n.categories-choose-list li:hover .text-label {\n  color: white;\n}\ninput:checked ~ .label1 {\n  background-position: 0 0;\n}\ninput:checked ~ .label2 {\n  background-position: -18px 0;\n}\ninput:checked ~ .label3 {\n  background-position: -36px 0;\n}\ninput:checked ~ .label4 {\n  background-position: -54px 0;\n}\ninput:checked ~ .label5 {\n  background-position: -72px 0;\n}\n.categories-choose-list li:hover {\n  border-color: white;\n  color: white;\n}\n/*horisontal urgency select*/\n.label11,\n.label22,\n.label33,\n.label44 {\n  width: 19px;\n  height: 19px;\n  position: absolute;\n  left: 0;\n  background: url(Global/img/urgency-sprite.png) no-repeat -1px -38px;\n  bottom: 8px;\n  line-height: 19px;\n}\n.label11:hover,\n.text-label:hover ~ .label11 {\n  background: url(Global/img/urgency-sprite.png) no-repeat -1px -20px;\n}\n.label22:hover,\n.text-label:hover ~ .label22 {\n  background: url(Global/img/urgency-sprite.png) no-repeat -19px -20px;\n}\n.label33:hover,\n.text-label:hover ~ .label33 {\n  background: url(Global/img/urgency-sprite.png) no-repeat -37px -20px;\n}\n.label44:hover,\n.text-label:hover ~ .label44 {\n  background: url(Global/img/urgency-sprite.png) no-repeat -55px -20px;\n}\ninput:checked ~ .label11 {\n  background-position: -1px -1px;\n}\ninput:checked ~ .label22 {\n  background-position: -19px -1px;\n}\ninput:checked ~ .label33 {\n  background-position: -37px -1px;\n}\ninput:checked ~ .label44 {\n  background-position: -55px -1px;\n}\n.modal-interface {\n  position: absolute;\n  top: 15px;\n  left: 0;\n  width: 100%;\n  padding: 0 2.8%;\n  box-sizing: border-box;\n  font-family: icomoon;\n}\n.modal-interface-confirm,\n.modal-interface-cancel {\n  float: right;\n  font-family: icomoon;\n  font-size: 20px;\n  color: #88a0b3;\n}\n.modal-interface-cancel {\n  margin-right: 3%;\n}\n.modal-interface button:hover {\n  color: white;\n  cursor: pointer;\n}\n.modal-wrap {\n  position: fixed;\n  z-index: 9999999;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.modal-window {\n  font: 14px 'Roboto', sans-serif;\n  background-color: #2a3f50;\n  margin: 6.4% auto;\n  width: 500px;\n  padding: 41px 3%;\n  color: white;\n  box-sizing: border-box;\n  position: relative;\n}\n.modal-window-head {\n  font-size: 28px;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.modal-input-title {\n  display: block;\n  font: 14px 'Roboto', sans-serif;\n  margin-bottom: 8px;\n  margin-top: 9px;\n}\n.modal-input-field {\n  color: #748b9e;\n  border-bottom: 1px solid #425869;\n  font: 16px 'Roboto', sans-serif;\n  padding-bottom: 4px;\n  width: 100%;\n  margin-bottom: 25px;\n}\n.modal-input-field:focus {\n  color: white;\n}\n.estimation-range {\n  width: 50%;\n  display: block;\n  margin-bottom: 34px;\n}\n.estimation-range li {\n  width: 28px;\n  height: 23px;\n  display: inline-block;\n  background: url(Global/img/tomato.svg) no-repeat;\n}\n.estimation-range li:hover {\n  background: url(Global/img/tomato_fill.svg) no-repeat;\n}\n.estimated {\n  background: url(Global/img/tomato_fill.svg) no-repeat !important;\n}\n.modal-remove-inner-wrapper {\n  height: 480px;\n  display: flex;\n  display: -webkit-flex;\n  flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  align-content: flex-start;\n  padding-top: 30%;\n  box-sizing: border-box;\n  position: relative;\n}\n.remove-submit-msg {\n  font: 36px Roboto, sans-serif;\n  color: #8da5b8;\n  width: 90%;\n  margin: 0 auto;\n  text-align: center;\n  margin-bottom: 44%;\n}\n.button-default {\n  color: white;\n  width: 38%;\n  padding: 12px 0;\n}\n.button-holder-default {\n  width: 73%;\n  display: flex;\n  display: -webkit-flex;\n  margin: 0 auto;\n  justify-content: space-around;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-around;\n}\n.modal-interface-trash {\n  float: left;\n  font-family: icomoon;\n  font-size: 20px;\n  color: #88a0b3;\n}\n</style><div class=\"modal-wrap\"><form class=\"modal-window\"><div class=\"modal-interface\"><button id=\"modal-remove\" class=\"modal-interface-trash\">&#xe912</button><button id=\"modal-confirm-edit\" class=\"modal-interface-confirm\">&#xe90f</button><button id=\"modal-close\" class=\"modal-interface-cancel\">&#xe910</button></div><h2 class=\"modal-window-head\">Edit Task</h2><label for=\"title-input\" class=\"modal-input-title\">TITLE</label><input id=\"title-input\" type=\"text\" placeholder=\"Add title here\"" + (jade.attr("value", data.title, true, true)) + " class=\"modal-input-field\"><label for=\"description-input\" class=\"modal-input-title\">DESCRIPTION</label><input id=\"description-input\" type=\"text\" placeholder=\"Add description here\"" + (jade.attr("value", data.description, true, true)) + " class=\"modal-input-field\"><h3 class=\"modal-input-title\">CATEGORY</h3><ul class=\"categories-choose-list\"><li><input id=\"work\" type=\"radio\" value=\"Work\" name=\"ctg1\"><label for=\"work\" class=\"text-label\">Work</label><label for=\"work\" class=\"label1\"></label></li><li><input id=\"education\" type=\"radio\" value=\"Education\" name=\"ctg1\"><label for=\"education\" class=\"text-label\">Education</label><label for=\"education\" class=\"label2\"></label></li><li><input id=\"hobby\" type=\"radio\" value=\"Hobby\" name=\"ctg1\"><label for=\"hobby\" class=\"text-label\">Hobby</label><label for=\"hobby\" class=\"label3\"></label></li><li><input id=\"sport\" type=\"radio\" value=\"Sport\" name=\"ctg1\"><label for=\"sport\" class=\"text-label\">Sport</label><label for=\"sport\" class=\"label4\"></label></li><li><input id=\"other\" type=\"radio\" value=\"Other\" name=\"ctg1\"><label for=\"other\" class=\"text-label\">Other</label><label for=\"other\" class=\"label5\"></label></li></ul><label for=\"deadline-input\" class=\"modal-input-title\">DEADLINE</label><input id=\"deadline-input\" type=\"text\" placeholder=\"Set date\"" + (jade.attr("value", data.deadline.fullDate, true, true)) + " class=\"datepicker modal-input-field\"><h3 class=\"modal-input-title\">ESTIMATION</h3><ul class=\"estimation-range\"><li></li><li></li><li></li><li></li><li></li></ul><h3 class=\"modal-input-title\">PRIORITY</h3><ul class=\"categories-choose-list\"><li><input id=\"urgent\" type=\"radio\" value=\"Urgent\" name=\"ctg11\"><label for=\"urgent\" class=\"text-label\">Urgent</label><label for=\"urgent\" class=\"label11\"></label></li><li><input id=\"high\" type=\"radio\" value=\"High\" name=\"ctg11\"><label for=\"high\" class=\"text-label\">High</label><label for=\"high\" class=\"label22\"></label></li><li><input id=\"middle\" type=\"radio\" value=\"Middle\" name=\"ctg11\"><label for=\"middle\" class=\"text-label\">Middle</label><label for=\"middle\" class=\"label33\"></label></li><li><input id=\"low\" type=\"radio\" value=\"Low\" name=\"ctg11\"><label for=\"low\" class=\"text-label\">Low</label><label for=\"low\" class=\"label44\"></label></li></ul></form></div>");}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return buf.join("");
	}

/***/ },
/* 86 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	    function Controller(el, view) {
	        _classCallCheck(this, Controller);

	        this.el = el;
	        this.view = view;
	    }

	    _createClass(Controller, [{
	        key: 'init',
	        value: function init(target) {
	            var context = this;

	            var listeners = {
	                'modal-close': function modalClose(e) {
	                    context.view.modalClose(e, context.el);
	                },
	                'modal-confirm-edit': function modalConfirmEdit(e) {
	                    context.view.modalConfirmEdit(e, context.el, target);
	                },
	                'modal-remove': function modalRemove(e) {
	                    context.view.modalRemove(e, context.el, target);
	                }
	            };
	            this.el.addEventListener('click', function (e) {
	                if (listeners[e.target.id]) listeners[e.target.id](e);
	            });

	            document.getElementsByClassName('estimation-range')[0].addEventListener('click', function (e) {
	                this.view.estimationRangeReview(e);
	            }.bind(context));
	            console.log(this.el);
	        }
	    }]);

	    return Controller;
	}();

	exports.default = Controller;

/***/ },
/* 87 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var view = exports.view = {
	    syncChanges: function syncChanges(target, callback) {
	        while (target.parentNode.classList.contains('task') == false) {
	            target = target.parentNode;
	        }
	        var key = target.parentNode.getAttribute('key');
	        callback(key);
	        document.getElementById(User.dataSnapShot[key].priority).checked = true;
	        document.getElementById(User.dataSnapShot[key].category).checked = true;
	        var estimationRecount = User.dataSnapShot[key].estimation.slice(-1);
	        for (var i = 0; i < estimationRecount; i++) {
	            document.getElementsByClassName('estimation-range')[0].children[i].classList.add('estimated');
	        }
	    },
	    modalClose: function modalClose(e, el) {
	        e.preventDefault();
	        document.getElementById('app-body').removeChild(el);
	    },
	    modalConfirmEdit: function modalConfirmEdit(e, el, target) {
	        e.preventDefault();
	        while (target.parentNode.classList.contains('task') == false) {
	            target = target.parentNode;
	        }
	        var keyy = target.parentNode.getAttribute('key');
	        User.setTaskData(User.currentLogin, '/tasks/' + keyy, target.parentNode);
	        document.getElementById('app-body').removeChild(el);
	    },
	    modalRemove: function modalRemove(e, el, target) {
	        e.preventDefault();
	        while (target.parentNode.classList.contains('task') == false) {
	            target = target.parentNode;
	        }
	        var keyy = target.parentNode.getAttribute('key');
	        User.deleteTaskData(User.currentLogin, '/tasks/' + keyy);
	        document.getElementById('app-body').removeChild(el);
	    },
	    estimationRangeReview: function estimationRangeReview(e) {
	        if (e.target.tagName.toUpperCase() == 'LI') {
	            var parent = e.currentTarget;
	            for (var i = 0; i < parent.children.length; i++) {
	                parent.children[i].classList.remove('estimated');
	            }
	            for (var i = 0, j = 0; parent.children[i] != e.target; i++, j++) {
	                parent.children[i].classList.add('estimated');
	            }
	            e.target.classList.add('estimated');
	            e.currentTarget.estimation = j + 1;
	        }
	    }
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _template = __webpack_require__(89);

	var _template2 = _interopRequireDefault(_template);

	var _controller = __webpack_require__(75);

	var _filterController = __webpack_require__(90);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Renderer.renderTitleTaskListGlobal = function () {
	    var el = document.createElement('div');
	    el.innerHTML = (0, _template2.default)();
	    document.getElementById('app-body').appendChild(el);
	    _controller.controller.init(el, 'sorted-list');
	    _filterController.controllerFilter.init(el);
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(49);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<style>.wrapper-2 {\n    max-width: 1366px;\n    padding-top: 40px;\n    margin: 0 auto;\n}\n\n.sub-title-2 {\n    padding: 0 6.8%;\n    font: 20px \"Roboto\", sans-serif;\n    text-align: center;\n    width: 100%;\n    color: #8198ab;\n    margin-top: 17px;\n    position: relative;\n    box-sizing: border-box;\n    overflow: hidden;\n    margin-bottom: 30px;\n}\n\n.interface-container-2 {\n    color: #8da5b8;\n    float: right;\n}\n.left-side{\n    float: left;\n}\n.hidden{\n    display: none;\n}\n\n.interface-container-2 .ico-text-button {\n    cursor: pointer;\n    font: 15px \"Roboto\", sans-serif;\n}\n.active-tab{\n    color:white\n}\n\n</style><div class=\"wrapper-2\"><div class=\"sub-title-2\"><div class=\"interface-container-2\"><button id=\"all1\" class=\"ico-text-button active-tab\">All</button>" + (jade.escape((jade_interp = '') == null ? '' : jade_interp)) + " | " + (jade.escape((jade_interp = '') == null ? '' : jade_interp)) + "<button id=\"urgent1\" class=\"ico-text-button\">Urgent</button>" + (jade.escape((jade_interp = '') == null ? '' : jade_interp)) + " | " + (jade.escape((jade_interp = '') == null ? '' : jade_interp)) + "<button id=\"high1\" class=\"ico-text-button\">High</button>" + (jade.escape((jade_interp = '') == null ? '' : jade_interp)) + " | " + (jade.escape((jade_interp = '') == null ? '' : jade_interp)) + "<button id=\"middle1\" class=\"ico-text-button\">Middle</button>" + (jade.escape((jade_interp = '') == null ? '' : jade_interp)) + " | " + (jade.escape((jade_interp = '') == null ? '' : jade_interp)) + "<button id=\"low1\" class=\"ico-text-button\">Low</button></div><div class=\"interface-container-2 left-side hidden\"><button id=\"select-all\" class=\"ico-text-button\">Select All</button>" + (jade.escape((jade_interp = '') == null ? '' : jade_interp)) + " | " + (jade.escape((jade_interp = '') == null ? '' : jade_interp)) + "<button id=\"deselect-all\" class=\"ico-text-button\">Deselect All</button>" + (jade.escape((jade_interp = '') == null ? '' : jade_interp)) + " | " + (jade.escape((jade_interp = '') == null ? '' : jade_interp)) + "<button id=\"delete-all\" class=\"ico-text-button\">Delete Checked</button></div></div></div>");;return buf.join("");
	}

/***/ },
/* 90 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var controllerFilter = exports.controllerFilter = {
	    listeners: {
	        'all': function all(type, target) {
	            controllerFilter.activateTab(target);
	            EventBusLocal.publish('filter-tasks', type);
	        },
	        'urgent': function urgent(type, target) {
	            controllerFilter.activateTab(target);
	            EventBusLocal.publish('filter-tasks', type);
	        },
	        'high': function high(type, target) {
	            controllerFilter.activateTab(target);
	            EventBusLocal.publish('filter-tasks', type);
	        },
	        'middle': function middle(type, target) {
	            controllerFilter.activateTab(target);
	            EventBusLocal.publish('filter-tasks', type);
	        },
	        'low': function low(type, target) {
	            controllerFilter.activateTab(target);
	            EventBusLocal.publish('filter-tasks', type);
	        }

	    },
	    init: function init(el) {
	        var context = this;
	        //this.listeners['filter-all']();
	        el.addEventListener('click', function (e) {
	            var identifier = e.target.id.slice(0, -1);
	            if (context.listeners[identifier]) {
	                context.listeners[identifier](identifier, e.target);
	                EventBusLocal.publish('trash-off', document.getElementById('trashOn'));
	                EventBusLocal.publish('trash-refresh');
	            }
	        });
	    },
	    activateTab: function activateTab(target) {
	        for (var i = 0; i < target.parentNode.children.length; i++) {
	            if (target.parentNode.children[i].classList.contains('active-tab')) {
	                target.parentNode.children[i].classList.remove('active-tab');
	            }
	        }
	        target.classList.add('active-tab');
	    }
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _template = __webpack_require__(92);

	var _template2 = _interopRequireDefault(_template);

	var _Controller = __webpack_require__(93);

	var _Controller2 = _interopRequireDefault(_Controller);

	var _Model = __webpack_require__(79);

	var _View = __webpack_require__(94);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Renderer.renderReportsGlobal = function () {
	    var el = document.createElement('div');
	    var controller = new _Controller2.default(_Model.tasks, _View.view, EventBusLocal, _template2.default);
	    controller.initController(function () {
	        if (controller.model.data) {
	            el.innerHTML = (0, _template2.default)({
	                data: controller.model.data,
	                structure: controller.model.getStruct(controller.model.data)
	            });
	        }
	        controller.removeEventListeners(el);
	        controller.setEventListeners(el);
	        $('.urgency').tips('Go to Timer', true);
	        $('.edit-task').tips('Edit task');
	        $('.drag-task').tips('Move to Daily');
	        $('.drop-switch').tips('Go to Global List');
	        $('.sorted-lists-wrapper').accordeon();
	    });
	    document.getElementById('app-body').appendChild(el);
	    $('.urgency').tips('Go to Timer', true);
	    $('.edit-task').tips('Edit task');
	    $('.drag-task').tips('Move to Daily');
	    $('.drop-switch').tips('Go to Global List');
	    $('.sorted-lists-wrapper').accordeon();
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(49);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (console, data, filterStruct, structure) {
	buf.push("<style>.task {\n    height: 87px;\n    width: 100%;\n    background-color: white;\n    line-height: 87px;\n    display: flex;\n    display: -webkit-flex;\n    justify-content: flex-start;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n    margin-bottom: 0.6%;\n    position: relative;\n    box-shadow: 6px 8px 8px 1px rgba(22, 26, 29, 0.3);\n}\n\n.task-buttons-container {\n    position: absolute;\n    right: 34px;\n    display: flex;\n    display: -webkit-flex;\n    flex-wrap: wrap;\n    -webkit-flex-wrap: wrap;\n    height: 100%;\n    top: 0;\n    font-size: 19px;\n    padding: 11px 0;\n    box-sizing: border-box;\n}\n\n.edit-task {\n    color: #cacaca;\n    font-family: icomoon;\n    cursor: pointer;\n    width: 100%;\n}\n\n.drag-task {\n    color: #cacaca;\n    font-family: icomoon;\n    cursor: pointer;\n    width: 100%;\n    display: none;\n}\n\n.sorted-list .drag-task {\n    display: inline-block;\n}\n\n.edit-task:hover {\n    color: #88a3b5;\n}\n\n.drag-task:hover {\n    color: #88a3b5;\n}\n\n.drop-switch span {\n    display: inline-block;\n    vertical-align: text-bottom;\n    font-size: 20px;\n    margin-right: 8px;\n    font-weight: bold;\n}\n\n.sorted-list {\n    width: 100%;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n}\n\n.sorted-lists-wrapper {\n    max-width: 1366px;\n    margin: 0 auto;\n    width: 100%;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n}\n\n.global-list {\n    font-family: icomoon;\n    position: relative;\n    font-size: 20px;\n    color: #8da5b8;\n    clear: both;\n    padding: 0 6.8%;\n}\n\n.drop-switch {\n    color: #8da5b8;\n    display: inline-block;\n    font-family: icomoon;\n    font-size: 11px;\n    padding-left: 6.8%;\n    cursor: pointer\n}\n\n.drop-switch span {\n    display: inline-block;\n    vertical-align: text-bottom;\n    font-size: 20px;\n    margin-right: 8px;\n    font-weight: bold;\n}\n.drop-switch span:hover,.drop-switch:hover{\n    color: white;\n}\n\n.list-header {\n    padding-left: 2%;\n    font-size: 18px;\n    margin-bottom: 1%;\n    margin-top: 2%;\n    position: relative;\n    font-family: 'Roboto', sans-serif;\n}\n\n.list-header-category-mark {\n    width: 19px;\n    height: 19px;\n    position: absolute;\n    left: -4px;\n    background: url(./Global/img/ico-sprite.png);\n    z-index: 9999;\n}\n.date-day {\n    height: 50%;\n    line-height: 70px;\n    font-size: 25px;\n}\n.date-month {\n    line-height: 34px;\n    height: 50%;\n}\n\n\n\n\n\n</style><div class=\"sorted-lists-wrapper\"><button linked_block=\"accord1\" class=\"drop-switch accordeon-head\"><span>Global list</span></button><ul id=\"accord1\" class=\"global-list\">");
	console.log(structure)
	console.log(data)
	console.log(filterStruct)
	for(var type in structure)
	{
	buf.push("<li><ul" + (jade.cls(['sorted-list',type], [null,true])) + "><li class=\"list-header\"><span class=\"list-header-category-mark\"></span>" + (jade.escape((jade_interp = type.toUpperCase()) == null ? '' : jade_interp)) + "</li>");
	for(var i = 0;i<structure[type].length;i++)
	{
	if(!filterStruct ||filterStruct.type == 'all' || filterStruct.list.indexOf(structure[type][i])!=-1)
	{
	buf.push("<li" + (jade.attr("key", structure[type][i], true, true)) + (jade.cls(['task',[data[structure[type][i]].priority, data[structure[type][i]].estimation]], [null,true])) + "><div class=\"category\"></div><div class=\"border-category\"></div><div class=\"date\"><p class=\"date-day\">" + (jade.escape((jade_interp = data[structure[type][i]].deadline.day) == null ? '' : jade_interp)) + "</p><p class=\"date-month\">" + (jade.escape((jade_interp = data[structure[type][i]].deadline.month) == null ? '' : jade_interp)) + "</p></div><section class=\"task-info\"><h2 class=\"task-info-title\">" + (jade.escape((jade_interp = data[structure[type][i]].title) == null ? '' : jade_interp)) + "</h2><p>" + (jade.escape((jade_interp = data[structure[type][i]].description) == null ? '' : jade_interp)) + "</p><div class=\"task-buttons-container\"><button class=\"drag-task\"></button><button class=\"edit-task\"></button></div></section><div class=\"urgency\"><p class=\"estimation-counter\"></p></div></li>");
	}
	}
	buf.push("</ul></li>");
	}
	buf.push("</ul></div>");}.call(this,"console" in locals_for_with?locals_for_with.console:typeof console!=="undefined"?console:undefined,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"filterStruct" in locals_for_with?locals_for_with.filterStruct:typeof filterStruct!=="undefined"?filterStruct:undefined,"structure" in locals_for_with?locals_for_with.structure:typeof structure!=="undefined"?structure:undefined));;return buf.join("");
	}

/***/ },
/* 93 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	    function Controller(model, view, eBusLocal, template) {
	        _classCallCheck(this, Controller);

	        //this.view = view;
	        this.template = template;
	        this.model = model;
	        this.view = view;
	        this.eBusLocal = eBusLocal;
	        this.listeners = {
	            editTask: function editTask(e) {
	                if (e.target.classList.contains('edit-task')) {
	                    Router.showModalEdit(e.target);
	                }
	            },
	            trashDrop: function (e) {
	                this.eBusLocal.publish('trash-drop', {
	                    e: e,
	                    context: this
	                });
	            }.bind(this),
	            showGlobalList: this.view.showGlobalList,
	            moveToDaily: this.view.moveToDaily

	        };
	    }

	    _createClass(Controller, [{
	        key: 'initController',
	        value: function initController(callback) {
	            this.model.patchList(callback);
	        }
	    }, {
	        key: 'setEventListeners',
	        value: function setEventListeners(el) {
	            var context = this;
	            el.addEventListener('click', this.listeners.editTask);
	            el.addEventListener('click', this.listeners.trashDrop);
	            el.addEventListener('click', this.listeners.moveToDaily);
	            EventBusLocal.subscribe('filter-tasks', function (type) {
	                console.log('filter ' + type);
	                console.log(this);
	                this.initController(function () {
	                    if (context.model.data) {
	                        el.innerHTML = context.template({
	                            data: context.model.data,
	                            structure: context.model.getStruct(context.model.data),
	                            filterStruct: context.model.getFilterStruct(context.model.data, type)
	                        });
	                    }
	                    context.removeEventListeners(el);
	                    context.setEventListeners(el);
	                });
	            }.bind(this));
	        }
	    }, {
	        key: 'removeEventListeners',
	        value: function removeEventListeners(el) {
	            var context = this;
	            for (var key in this.listeners) {
	                el.removeEventListener('click', this.listeners[key]);
	            }
	            EventBusLocal.unsubscribe('filter-tasks');
	            console.log(EventBusLocal);
	        }
	    }]);

	    return Controller;
	}();

	exports.default = Controller;

/***/ },
/* 94 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var view = exports.view = {
	    moveToDaily: function moveToDaily(e) {
	        if (e.target.classList.contains('drag-task')) {
	            var context = this;
	            var target = e.target;
	            while (!target.parentNode.classList.contains('task')) {
	                target = target.parentNode;
	            }
	            var key = target.parentNode.getAttribute('key');
	            var currentDate = new Date();
	            var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	            User.setData(User.currentLogin, '/tasks/' + key + '/deadline', {
	                day: currentDate.getDate(),
	                month: monthArray[parseInt(currentDate.getMonth(), 10)],
	                year: currentDate.getFullYear(),
	                fullDate: function () {
	                    return monthArray[parseInt(currentDate.getMonth(), 10)] + ' ' + currentDate.getDate() + ', ' + currentDate.getFullYear();
	                }()
	            });
	        }
	    }
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _template = __webpack_require__(96);

	var _template2 = _interopRequireDefault(_template);

	var _controller = __webpack_require__(97);

	var _controller2 = _interopRequireDefault(_controller);

	var _view = __webpack_require__(98);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Renderer.renderTimer = function (data) {
	    var el = document.createElement('div');
	    var controller = new _controller2.default(data, _view.view);
	    controller.init(_template2.default, el);
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(49);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (data) {
	buf.push("<style>.wrapper {\n    max-width: 1366px;\n    margin: 0 auto;\n    padding-bottom: 2.2%;\n    padding-top: 91px;\n}\n\n.main-head-title {\n    clear: both;\n    font: 28px \"Roboto\", sans-serif;\n    font-weight: bold;\n    text-align: center;\n    width: 100%;\n    color: white;\n    letter-spacing: 1px;\n}\n\n.sub-title {\n    font: 18px \"Roboto\", sans-serif;\n    text-align: center;\n    width: 100%;\n    color: #8198ab;\n    margin-top: 21px;\n    position: relative;\n}\n\n/*timer*/\n\n.main-wrapper {\n    max-width: 1366px;\n    margin: 0 auto;\n}\n\n.phases {\n    width: 10%;\n    /* padding: 0 6.8%; */\n    box-sizing: border-box;\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n    position: relative;\n}\n\n.phase {\n    width: 28px;\n    height: 23px;\n    display: inline-block;\n    background: url(./Global/img/tomato.svg) no-repeat;\n    margin: 0 5px;\n}\n\n.phase-done {\n    background: url(\"./Global/img/tomato_fill.svg\") no-repeat;\n}\n\n.phase-failed {\n    background: url(\"./Global/img/tomato-failed.svg\") no-repeat;\n}\n\n.phase-add-active .phase-add {\n    display: inline-block;\n}\n\n.phase-add {\n    font-family: icomoon;\n    position: absolute;\n    right: -10px;\n    color: #8ca4b7;\n    line-height: 25px;\n    cursor: pointer;\n    display: none;\n}\n\n.phase-add:hover {\n    color: white;\n}\n\n.graph-container {\n    padding-top: 32px;\n}\n\n.back {\n    font-family: icomoon;\n    position: absolute;\n    left: 27px;\n    top: 50%;\n    bottom: 50%;\n    font-size: 41px;\n    cursor: pointer;\n    display: none;\n}\n\n.forward {\n    font-family: icomoon;\n    position: absolute;\n    right: 27px;\n    top: 50%;\n    bottom: 50%;\n    font-size: 41px;\n    cursor: pointer;\n    display: none;\n}\n\n.move-on .back, .move-on .forward {\n    display: inline-block;\n}\n\n/*graph*/\n.timer-outer-circle {\n    height: 300px;\n    width: 300px;\n    margin: 0 auto;\n    background-color: #2a3f50;\n    border: 8px solid #2a3f50;\n    border-radius: 50%;\n    display: flex;\n    position: relative;\n    animation: init 1.5s linear;\n    margin-bottom: 39px;\n}\n\n.timer-inner-circle {\n    height: 150px;\n    width: 150px;\n    margin: auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-color: #2a3f50;\n    border-radius: 50%;\n    color: white;\n    z-index: 99999;\n}\n\n.timer-time {\n    font-size: 100px;\n    display: inline-block;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n    position: absolute;\n    text-align: center;\n    line-height: 102px;\n}\n\n.timer-estimate-points {\n    position: absolute;\n    bottom: 10px;\n    line-height: 24px;\n    font-size: 24px;\n    width: 100%;\n}\n\n.time-wrapper {\n    width: 250px;\n    height: 250px;\n    position: relative;\n    background-color: #2a3f50;\n    border-radius: 50%;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n}\n\n.circle {\n    width: 50%;\n    height: 100%;\n    position: absolute;\n    background: #8da5b8;\n    transform-origin: 100% 50%;\n}\n\n.rotator {\n    border-radius: 100% 0 0 100% / 50% 0 0 50%;\n    z-index: 200;\n    border-right: none;\n    animation: rota 10s linear;\n    animation-play-state: paused;\n}\n\n.filler {\n    border-radius: 0 100% 100% 0 / 0 50% 50% 0;\n    z-index: 100;\n    border-left: none;\n    animation: fill 10s steps(1, end);\n    animation-play-state: paused;\n    left: 50%;\n    opacity: 0;\n}\n\n.mask {\n    width: 50%;\n    height: 100%;\n    position: absolute;\n    z-index: 300;\n    opacity: 1;\n    background: inherit;\n    animation: mask 10s steps(1, end);\n    animation-play-state: paused;\n    border-radius: 50% 0 0 50%;\n}\n\n.category {\n    background-color: transparent !important;\n}\n\n.button-holder {\n    width: 27%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n    min-width: 375px;\n}\n\n@keyframes rota {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes fill {\n    0% {\n        opacity: 0;\n    }\n    50%, 100% {\n        opacity: 1;\n    }\n}\n\n@keyframes mask {\n    0% {\n        opacity: 1;\n    }\n    50%, 100% {\n        opacity: 0;\n    }\n}\n\n@keyframes init {\n    0% {\n        transform: scale(0, 0);\n    }\n    50% {\n        transform: scale(0, 0);\n    }\n    100% {\n        transform: scale(1, 1);\n    }\n}\n\n\n\n\n</style><div class=\"wrapper\"><h2 class=\"main-head-title timer-title\">1.Creating a New Design</h2><div class=\"sub-title\">" + (jade.escape((jade_interp = data.title) == null ? '' : jade_interp)) + "</div></div><main class=\"main-wrapper\"><ul class=\"phases phase-add-active\">");
	for(var i =0;i<data.estimation;i++)
	{
	buf.push("<li class=\"phase\"></li>");
	}
	buf.push("</ul><div" + (jade.cls(['graph-container',data.category], [null,true])) + "><div class=\"timer-outer-circle category\"><div class=\"time-wrapper\"><div class=\"rotator circle set-able\"></div><div class=\"filler circle set-able\"></div><div class=\"mask set-able\"></div></div><div class=\"timer-inner-circle\"><div class=\"timer-time\">" + (jade.escape((jade_interp = data.cycleTime) == null ? '' : jade_interp)) + "<p class=\"timer-estimate-points\">min</p></div></div></div></div></main>");}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return buf.join("");
	}

/***/ },
/* 97 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	    function Controller(source, view) {
	        _classCallCheck(this, Controller);

	        this.view = view;
	        this.sourceKey = source;
	        this.cycle = {};
	        this.listeners = {
	            'pause': function pause(type, target) {
	                controllerFilter.activateTab(target);
	                EventBusLocal.publish('filter-tasks', type);
	            },
	            'resume': function resume(type, target) {
	                controllerFilter.activateTab(target);
	                EventBusLocal.publish('filter-tasks', type);
	            }
	        };
	    }

	    _createClass(Controller, [{
	        key: 'init',
	        value: function init(template, el) {
	            var context = this;
	            this.timer = {
	                container: document.getElementsByClassName('graph-container')[0],
	                timerControlElements: document.getElementsByClassName('set-able'),
	                timeout: {},
	                count: 0
	            };
	            EventBusLocal.subscribe('time-stopped', function () {
	                context.view.pauseAnimation(context.timer);
	            });
	            EventBusLocal.subscribe('time-resumed', function () {
	                context.view.resumeAnimation(context.timer);
	            });
	            this.cycle = {
	                estimation: parseInt(User.dataSnapShot[this.sourceKey].estimation.slice(-1), 10),
	                category: User.dataSnapShot[this.sourceKey].category,
	                cycleTime: User.settings['WORK TIME'],
	                break: false,
	                title: User.dataSnapShot[this.sourceKey].title
	            };
	            console.log(this.cycle);
	            el.innerHTML = template({
	                data: this.cycle
	            });
	            document.getElementById('app-body').appendChild(el);
	            this.view.animateTimer(this.timer, this.cycle);
	            //this.view.resumeAnimation(this.timer);
	        }
	    }]);

	    return Controller;
	}();

	exports.default = Controller;

/***/ },
/* 98 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var view = exports.view = {
	    animateTimer: function animateTimer(timer, cycle) {
	        for (var i = 0; i < timer.timerControlElements.length; i++) {
	            timer.timerControlElements[i].style.animationDuration = cycle.cycleTime * 60 + 's';
	            timer.timerControlElements[i].style.animationPlayState = 'running';
	        }
	        timer.timeout = setInterval(function () {
	            timer.count++;
	            console.log(timer.count);
	        }, 1000);
	    },
	    pauseAnimation: function pauseAnimation(timer) {
	        for (var i = 0; i < timer.timerControlElements.length; i++) {
	            timer.timerControlElements[i].style.animationPlayState = 'paused';
	        }
	        clearInterval(timer.timeout);
	        console.log('paused');
	    },
	    resumeAnimation: function resumeAnimation(timer) {
	        for (var i = 0; i < timer.timerControlElements.length; i++) {
	            timer.timerControlElements[i].style.animationPlayState = 'running';
	        }
	        timer.timeout = setInterval(function () {
	            timer.count++;
	            console.log(timer.count);
	        }, 1000);
	        console.log('resumed');
	    }
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _template = __webpack_require__(100);

	var _template2 = _interopRequireDefault(_template);

	var _controller = __webpack_require__(101);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Renderer.addNotification = function (opts) {
	    var el = document.createElement('li');
	    el.classList.add(opts.type + '-pomodora-type');
	    el.innerHTML = (0, _template2.default)(opts);
	    var controller = new _controller2.default(el);
	    controller.init();
	    document.getElementById('notification-body').insertBefore(el, document.getElementById('notification-body').firstElementChild);
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(49);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (msg) {
	buf.push("<div class=\"notify-ico\"></div><p class=\"notify-msg\">" + (jade.escape((jade_interp = msg) == null ? '' : jade_interp)) + "</p><button class=\"notify-dismiss\"></button>");}.call(this,"msg" in locals_for_with?locals_for_with.msg:typeof msg!=="undefined"?msg:undefined));;return buf.join("");
	}

/***/ },
/* 101 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	    function Controller(el) {
	        _classCallCheck(this, Controller);

	        this.el = el;
	    }

	    _createClass(Controller, [{
	        key: 'init',
	        value: function init() {
	            var _this = this;

	            setTimeout(function () {
	                if (_this.el && _this.el.parentNode) _this.el.parentNode.removeChild(_this.el);
	            }, 5000);
	            this.el.addEventListener('click', function (e) {
	                if (e.target.classList.contains('notify-dismiss')) {
	                    _this.el.parentNode.removeChild(_this.el);
	                }
	            });
	        }
	    }]);

	    return Controller;
	}();

	exports.default = Controller;

/***/ }
/******/ ]);