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

	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(8);
	__webpack_require__(10);
	__webpack_require__(16);
	module.exports = __webpack_require__(18);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _template = __webpack_require__(2);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Router.renderLog = function () {
	    var el = document.createElement('div');
	    el.innerHTML = (0, _template2.default)();
	    document.body.appendChild(el);
	    document.getElementsByClassName('center-inputs')[0].addEventListener('submit', function (e) {
	        e.preventDefault();
	        EventBus.publish('auth');
	    });
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(3);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<style>body {\n    background: url(\"./img/bg.png\");\n    background-size: cover;\n    background-position: 50%;\n}\n\nbody, html {\n    height: 100%;\n}\n\n.login-wrapper {\n    margin: 0 auto;\n    max-width: 320px;\n    text-align: center;\n}\n\n.center-logo {\n    width: 246px;\n    padding: 48px 0;\n    text-align: center;\n}\n\n.center-inputs {\n    margin: 0 auto;\n    font-family: icomoon;\n    color: #8da5b8;\n    width: 360px;\n}\n\n.center-inputs:nth-child(2) .input-row {\n    margin-bottom: 29px;\n}\n\n.input-row {\n    position: relative;\n    margin-left: 5px;\n}\n\n.log-input, .pw-input {\n    border: none;\n    background-color: transparent;\n    font: 16px Roboto, sans-serif;\n    padding-left: 30px;\n    color: #8da5b8;\n    border-bottom: 1px solid #425869;\n    padding-bottom: 10px;\n    width: 91%;\n}\n\n.center-inputs input:focus {\n    border-color: white;\n    color: white;\n}\n\n.center-inputs input:focus + label {\n    color: white;\n}\n\n.center-inputs label {\n    font-size: 14px;\n    position: absolute;\n    bottom: 13px;\n    left: 0;\n}\n\n.submit {\n    display: block;\n    margin: 51px auto;\n    width: 125px;\n    background-color: #1abc9c;\n    color: white;\n    border: none;\n    outline: none;\n    font: 18px \"PTSans\", sans-serif;\n    height: 42px;\n}\n\n.submit:active {\n    background-color: #62D3BD;\n}\n\n.submit:focus, .submit:hover {\n    background-color: #16A085;\n}\n\n.invalid_msg {\n    font: 12px \"Roboto\", sans-serif;\n    color: red;\n    position: absolute;\n    display: none;\n    left: 0;\n    bottom: -20px;\n}\n\n\n</style><div class=\"login-wrapper\"><img src=\"./img/Logo_1.svg\" alt=\"logo goes here\" class=\"center-logo\"><form class=\"center-inputs\"><div class=\"input-row\"><input id=\"name_input\" type=\"text\" placeholder=\"Username\" required=\"\" class=\"log-input\"><label for=\"name_input\"></label><span class=\"invalid_msg\">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></div><div class=\"input-row\"><input id=\"pw_input\" type=\"password\" placeholder=\"Password\" required=\"\" class=\"pw-input\"><label for=\"pw_input\"></label></div><button type=\"submit\" class=\"submit\">Log in</button></form></div>");;return buf.join("");
	}

/***/ },
/* 3 */
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
	    str = str || __webpack_require__(4).readFileSync(filename, 'utf8')
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
/* 4 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _markup = __webpack_require__(6);

	var _markup2 = _interopRequireDefault(_markup);

	var _controller = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Router.renderHeader = function () {
	    var el = document.createElement('div');
	    el.innerHTML = (0, _markup2.default)();
	    document.body.appendChild(el);
	    /*document.getElementById('log_out').addEventListener('click', function (e) {
	        firebase.auth().signOut();
	    });*/
	    _controller.Controller.initCntrl();
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(3);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<style>.logo {\n    visibility: hidden;\n    margin-top: 28px;\n    margin-bottom: 27px;\n    min-width: 249px;\n    width: 21%;\n    display: none;\n}\n\n.main-head {\n    overflow: hidden;\n    position: fixed;\n    width: 100%;\n    background-color: #2a3f50;\n}\n\n.main-head-shadow-on {\n    box-shadow: 0 5px 8px 1px rgba(22, 26, 29, 0.3);\n}\n\n.inner-head {\n    max-width: 1366px;\n    margin: 0 auto;\n    box-sizing: border-box;\n}\n\n.inner-2-head {\n    width: 100%;\n    padding: 0 6.8%;\n    box-sizing: border-box;\n    padding-top: 56px;\n}\n\n.visible-logo {\n    visibility: visible;\n}\n\n.interface-container {\n    margin-bottom: 17px;\n    float: right;\n    width: 46%;\n    text-align: right;\n    font-size: 18px;\n}\n\n.interface-container .ico-text-button {\n    font-family: icomoon;\n    cursor: pointer;\n    margin-left: 5.7%;\n}\n\n.visible-logo {\n    visibility: visible;\n}\n</style><header class=\"main-head\"><div class=\"inner-head\"><div class=\"inner-2-head\"><a href=\"#\"><img src=\"./img/Logo.svg\" alt=\"logo goes here\" class=\"logo\"></a><div class=\"interface-container\"><button id=\"reports\" class=\"ico-text-button\">&#xe90c;</button><button id=\"settings\" class=\"ico-text-button\"> &#xe90b;</button><button id=\"log_out\" class=\"ico-text-button\"> &#xe908;</button></div></div></div></header>");;return buf.join("");
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Controller = exports.Controller = {
	    initCntrl: function initCntrl() {
	        document.getElementById('log_out').addEventListener('click', function (e) {
	            firebase.auth().signOut();
	        });
	        document.getElementById('settings').addEventListener('click', function (e) {
	            EventBus.publish('settings');
	        });
	        document.getElementById('reports').addEventListener('click', function (e) {
	            EventBus.publish('reports');
	        });
	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _settings = __webpack_require__(9);

	var _settings2 = _interopRequireDefault(_settings);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Router.renderTitle_settings_1 = function () {
	    var el = document.createElement('div');
	    el.innerHTML = (0, _settings2.default)();
	    document.body.appendChild(el);
	    document.getElementById('pomodoros-settings').addEventListener('click', function (e) {
	        EventBus.publish('settings');
	    });
	    document.getElementById('categories-settings').addEventListener('click', function (e) {
	        EventBus.publish('settings-2');
	    });
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(3);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<style>.wrapper {\n    max-width: 1366px;\n    padding-top: 131px;\n    margin: 0 auto;\n}\n\n.main-head-title {\n    clear: both;\n    font: 28px \"Roboto\", sans-serif;\n    font-weight: bold;\n    text-align: center;\n    width: 100%;\n    color: white;\n    margin-bottom: 22px;\n}\n\n.sub-title {\n    font: 20px \"Roboto\", sans-serif;\n    text-align: center;\n    width: 100%;\n    color: #8198ab;\n    margin-bottom: 81px;\n    position: relative;\n}\n\n.interface-container-2 {\n    position: absolute;\n    right: 6.7%;\n    top: 0;\n    font-size: 15px;\n}\n\n.interface-container-2 .ico-text-button {\n    cursor: pointer;\n    font: 15px \"Roboto\", sans-serif;\n}\n</style><div class=\"wrapper\"><h2 class=\"main-head-title\">Settings</h2><div class=\"sub-title\">Pomodoros settings<div class=\"interface-container-2\"><button id=\"pomodoros-settings\" class=\"ico-text-button\">Pomodoros</button>" + (jade.escape((jade_interp = '') == null ? '' : jade_interp)) + " | " + (jade.escape((jade_interp = '') == null ? '' : jade_interp)) + "<button id=\"categories-settings\" class=\"ico-text-button\">Categories</button></div></div></div>");;return buf.join("");
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _main = __webpack_require__(11);

	var _main2 = _interopRequireDefault(_main);

	var _component = __webpack_require__(12);

	var _view = __webpack_require__(13);

	var _view2 = _interopRequireDefault(_view);

	var _model = __webpack_require__(14);

	var _model2 = _interopRequireDefault(_model);

	var _controller = __webpack_require__(15);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Router.renderSettingsMain = function () {

	    var el = document.createElement('div');
	    el.innerHTML = (0, _main2.default)();
	    document.body.appendChild(el);
	    var view = new _view2.default(document.getElementsByClassName('timeline-container')[0]);
	    var model = new _model2.default();
	    var controller = new _controller2.default(model, view);
	    (0, _component.initComponent1)();
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(3);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<style>.main-content {\n    color: white;\n    box-sizing: border-box;\n    overflow: hidden;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    width: 61%;\n    padding-left: 62px;\n    min-width: 952px;\n}\n\n.main-content i {\n    margin-right: 19px;\n    font-size: 20px;\n}\n\n.select-field {\n    background: transparent;\n    color: white;\n    border: none;\n    outline: none;\n    border-bottom: 1px solid #8da5b8;\n    text-align: center;\n    padding-bottom: 4px;\n    width: 41%;\n    font-size: 16px;\n}\n\n.option {\n    width: 38.8%;\n    margin-right: 10.7%;\n    display: inline-block;\n    margin-bottom: 62px;;\n    box-sizing: border-box;\n    font: 13px Roboto, sans-serif;\n}\n\n.option label {\n    position: relative;\n}\n\n.minus-count {\n    position: absolute;\n    left: 3%;\n    color: #8da5b8;\n    font-size: 11px;\n    top: 0;\n    font-family: icomoon;\n    cursor: pointer;\n}\n\n.plus-count {\n    position: absolute;\n    right: 1%;\n    color: #8da5b8;\n    font-family: icomoon;\n    font-size: 11px;\n    top: 0;\n    cursor: pointer;\n}\n\n.plus-count:hover {\n    color: white;\n}\n\n.minus-count:hover {\n    color: white;\n}\n\n.minus-count:hover + input, .plus-count:hover ~ input {\n    border-color: white;\n}\n\n.opt-details {\n    color: #8198ab;\n    margin-top: 12px;\n    margin-left: 9.6%;\n}\n\n.opt-title {\n    display: inline-block;\n    width: 40%;\n}\n\n.timeline-container {\n    width: 100%;\n    margin-top: 13px;\n    margin-bottom: 55px;\n    display: block;\n\n}\n\n.graph-head {\n    font: 20px Ptsans, sans-serif;\n    color: white;\n    text-align: center;\n    width: 100%;\n\n}\n\n.timeline {\n    width: 86.7%;\n    background-color: #59abe3;\n    height: 11px;\n    margin: 0 auto;\n    line-height: 11px;\n    position: relative;\n}\n\n.timelabels {\n    width: 86.7%;\n    background-color: transparent;\n    height: 30px;\n    display: block;\n    margin: 0 auto;\n    overflow: hidden;\n}\n\n.timelabel {\n    display: inline-block;\n    height: 100%;\n    line-height: 30px;\n\n}\n\n.timelabel div {\n    float: right;\n    text-align: center;\n    background: #2a3f50;\n    color: #62788a;\n    font: 12px Roboto, sans-serif;\n    height: 100%;\n    line-height: 30px;\n    display: block;\n    width: 100%;\n    margin-right: -50%;\n}\n\n.timelabel span {\n    background-color: #02cdd3;\n    width: 4px;\n    height: 4px;\n    border-radius: 50%;\n    margin: 0 auto;\n    margin-top: 6px;\n    display: block;\n}\n\n.work {\n    background-color: #ffb200;\n    height: 100%;\n    display: inline-block;\n}\n\n.breakk, .longbreakk {\n    background-color: #59abe3;\n    height: 100%;\n    display: inline-block;\n}\n\n.button-holder {\n    width: 282px;\n    display: flex;\n    margin: 0 auto;\n    justify-content: space-around;\n}\n\n#pomodoros-settings,#settings{\n    color: white;\n}\n\n\n\n\n</style><main class=\"main-content\"><form class=\"option\"><i style=\"color: #ffb200\" aria-hidden=\"true\" class=\"fa fa-circle\"></i><label for=\"workTime\" class=\"opt-title\">WORK TIME</label><label><span class=\"plus-count\"></span><span class=\"minus-count\"></span><input id=\"workTime\" type=\"text\" value=\"1\" disabled=\"\" class=\"select-field\"></label><p class=\"opt-details\">Lorem ipsum dolor sit amet consectetur adipiscing</p></form><form class=\"option\"><i style=\"color: #00d4d9\" aria-hidden=\"true\" class=\"fa fa-circle\"></i><label for=\"workIteration\" class=\"opt-title\">WORK ITERATION</label><label><span class=\"plus-count\"></span><span class=\"minus-count\"></span><input id=\"workIteration\" type=\"text\" value=\"2\" disabled=\"\" class=\"select-field\"></label><p class=\"opt-details\">Lorem ipsum dolor sit amet consectetur adipiscing</p></form><form class=\"option\"><i style=\"color: #59abe3\" aria-hidden=\"true\" class=\"fa fa-circle\"></i><label for=\"shortBreak\" class=\"opt-title\">SHORT BREAK</label><label><span class=\"plus-count\"></span><span class=\"minus-count\"></span><input id=\"shortBreak\" type=\"text\" value=\"3\" disabled=\"\" class=\"select-field\"></label><p class=\"opt-details\">Lorem ipsum dolor sit amet consectetur adipiscing</p></form><form class=\"option\"><i style=\"color: #59abe3\" aria-hidden=\"true\" class=\"fa fa-circle\"></i><label for=\"longBreak\" class=\"opt-title\">LONG BREAK</label><label><span class=\"plus-count\"></span><span class=\"minus-count\"></span><input id=\"longBreak\" type=\"text\" value=\"4\" disabled=\"\" class=\"select-field\"></label><p class=\"opt-details\">Lorem ipsum dolor sit amet consectetur adipiscing</p></form></main><div class=\"timeline-container\"></div>");;return buf.join("");
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.initComponent1 = initComponent1;
	exports.transformTime = transformTime;
	function initComponent1() {
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

	function transformTime(time) {
	    var hours = '';
	    var minutes = '';
	    if (time / 60 >= 1) hours = parseInt(time / 60) + 'h ';
	    if (parseInt(time % 60) != 0) minutes = parseInt(time % 60) + 'm';
	    return hours + minutes;
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = View;

	var _component = __webpack_require__(12);

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
	    var labelsTotal = parseInt(data.general / (data['WORK TIME'] + data['SHORT BREAK']));
	    var labelWidth = (data['WORK TIME'] + data['SHORT BREAK']) / data.general * 100 + '%';
	    var timeLabel = document.createElement('div');
	    timeLabel.classList.add('timelabel');
	    timeLabel.style.width = labelWidth;
	    for (var i = 0; i < labelsTotal; i++) {
	        //timePointer += data['WORK TIME'] + data['SHORT BREAK'];
	        timePointer += 30;
	        timeLabel.innerHTML = '<div><span></span>' + (0, _component.transformTime)(timePointer) + '</div>';
	        timelabelsFragment.appendChild(timeLabel.cloneNode(true));
	    }
	    this.representation.bottomLabel.appendChild(timelabelsFragment);
	    var fullCycle = timeLabel.cloneNode(true);
	    timePointer = data['WORK TIME'] * data['WORK ITERATION'] + data['SHORT BREAK'] * (data['WORK ITERATION'] - 1) + data['LONG BREAK'];
	    fullCycle.innerHTML = '<div>Full cycle: ' + (0, _component.transformTime)(timePointer) + '<span></span></div>';
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
/* 14 */
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
/* 15 */
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
	        //observes over model
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _categories = __webpack_require__(17);

	var _categories2 = _interopRequireDefault(_categories);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Router.renderSettingsCategories = function () {
	    var el = document.createElement('div');
	    el.innerHTML = (0, _categories2.default)();
	    document.body.appendChild(el);
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(3);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<style>.button-holder {\n    width: 282px;\n    display: flex;\n    margin: 0 auto;\n    justify-content: space-around;\n}\n\n#categories-settings, #settings {\n    color: white;\n}\n\n.categories-choose-wrap {\n    width: 19.8%;\n    color: #5b7284;\n    margin: 0 auto 7% auto;\n    font: 16px \"Roboto\", sans-serif;\n    max-width: 267px;\n}\n\n.categories-choose-list {\n    padding-left: 14%;\n}\n\n.categories-choose-list li {\n    margin-bottom: 15%;\n    position: relative;\n}\n\n.categories-choose-list input {\n    display: none;\n}\n\n.label1, .label2, .label3, .label4, .label5 {\n    width: 19px;\n    height: 19px;\n    position: absolute;\n    left: -17%;\n    top: 0;\n    cursor: pointer;\n}\n\n.label1 {\n    background: url(./img/ico-sprite.png) no-repeat 0 -19px;\n}\n\n.label2 {\n    background: url(./img/ico-sprite.png) no-repeat -18px -19px;\n}\n\n.label3 {\n    background: url(./img/ico-sprite.png) no-repeat -36px -19px;\n}\n\n.label4 {\n    background: url(./img/ico-sprite.png) no-repeat -54px -19px;\n}\n\n.label5 {\n    background: url(./img/ico-sprite.png) no-repeat -72px -19px;\n}\n\n.text-label {\n    border-bottom: 1px solid #5b7284;\n    width: 100%;\n    display: inline-block;\n    padding-bottom: 7px;\n    cursor: pointer;\n}\n\ninput:checked ~ .text-label {\n    border-color: white;\n    color: white;\n}\n\ninput:hover ~ .text-label {\n    border-color: white;\n    color: white;\n}\n\ninput:checked ~ .label1 {\n    background-position: 0 0;\n}\n\ninput:checked ~ .label2 {\n    background-position: -18px 0;\n}\n\ninput:checked ~ .label3 {\n    background-position: -36px 0;\n}\n\ninput:checked ~ .label4 {\n    background-position: -54px 0;\n}\n\ninput:checked ~ .label5 {\n    background-position: -72px 0;\n}\n\n.categories-choose-list li:hover {\n    border-color: white;\n    color: white;\n}\n\n</style><main class=\"categories-choose-wrap\"><ul class=\"categories-choose-list\"><li><input id=\"work\" type=\"radio\" value=\"Work\" name=\"ctg1\"><label for=\"work\" class=\"text-label\">Work</label><label for=\"work\" class=\"label1\"></label></li><li><input id=\"education\" type=\"radio\" value=\"Education\" name=\"ctg1\"><label for=\"education\" class=\"text-label\">Education</label><label for=\"education\" class=\"label2\"></label></li><li><input id=\"hobby\" type=\"radio\" value=\"Hobby\" name=\"ctg1\"><label for=\"hobby\" class=\"text-label\">Hobby</label><label for=\"hobby\" class=\"label3\"></label></li><li><input id=\"sport\" type=\"radio\" value=\"Sport\" name=\"ctg1\"><label for=\"sport\" class=\"text-label\">Sport</label><label for=\"sport\" class=\"label4\"></label></li><li><input id=\"other\" type=\"radio\" value=\"Other\" name=\"ctg1\"><label for=\"other\" class=\"text-label\">Other</label><label for=\"other\" class=\"label5\"></label></li></ul></main>");;return buf.join("");
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _template = __webpack_require__(19);

	var _template2 = _interopRequireDefault(_template);

	var _Controller = __webpack_require__(20);

	var _View = __webpack_require__(23);

	var _Model = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Router.renderReports = function () {
	    var el = document.createElement('div');
	    el.innerHTML = (0, _template2.default)();
	    document.body.appendChild(el);
	    var controller = new _Controller.Controller(_Model.Model, _View.View);
	    controller.initController();
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(3);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<style>.wrapper {\n    max-width: 1366px;\n    padding-top: 90px;\n    margin: 0 auto;\n    padding-bottom: 2.2%;\n}\n\n.logo {\n    display: none;\n}\n\n.main-head-title {\n    clear: both;\n    font: 28px \"Roboto\", sans-serif;\n    font-weight: bold;\n    text-align: center;\n    width: 100%;\n    color: white;\n}\n\n.button-holder {\n    width: 21.2%;\n    display: flex;\n    margin: 0 auto;\n    justify-content: space-around;\n}\n\n.interface-container-2, .interface-container-3 {\n    margin: 0 auto;\n    width: 100%;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    margin-bottom: 104px;\n    color: #8da5b8;\n}\n\n.interface-container-2 .ico-text-button, .interface-container-3 .ico-text-button {\n    cursor: pointer;\n    font: 15px \"Roboto\", sans-serif;\n    margin: 0 6px;\n}\n\n.interface-container-3 {\n    margin-bottom: 0;\n}\n\n.main-head-title {\n    clear: both;\n    font: 28px \"Roboto\", sans-serif;\n    font-weight: bold;\n    text-align: center;\n    width: 100%;\n    color: white;\n    margin-bottom: 28px;\n}\n\n.graph-container {\n    margin: 0 auto;\n    width: 100%;\n    max-width: 650px;\n    height: 290px;\n    margin-bottom: 77px;\n    font-family: Roboto;\n}\n\n.active-tab {\n    color: white;\n}\n\n #reports {\n    color: white;\n}\n</style><div class=\"wrapper\"><h2 class=\"main-head-title\">Report</h2><main class=\"main-wrapper\"><div class=\"interface-container-2\"><button id=\"day_tab\" class=\"ico-text-button active-tab\">Day</button>            |<button id=\"week_tab\" class=\"ico-text-button\">Week</button>            |<button id=\"month_tab\" class=\"ico-text-button\">Month</button></div><div id=\"report-graph\" class=\"graph-container\"></div><div class=\"interface-container-3\"><button class=\"ico-text-button\">Pomodoros</button>            |<button class=\"ico-text-button active-tab\">Tasks</button></div></main></div>");;return buf.join("");
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Controller = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _options = __webpack_require__(21);

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
	            var obj = {};
	            obj.activateTab = function (e) {
	                for (var i = 0; i < e.currentTarget.children.length; i++) {
	                    if (e.currentTarget.children[i].classList.contains('active-tab')) {
	                        e.currentTarget.children[i].classList.remove('active-tab');
	                    }
	                }
	                e.target.classList.add('active-tab');
	                return obj;
	            };
	            obj.initInterface = function (e) {
	                document.getElementsByClassName('interface-container-2')[0].addEventListener('click', function (e) {
	                    globalMethods.activateTab(e);
	                    if (e.target.id == 'day_tab') {
	                        this.view.renderChart(_options.options.pieView);
	                    }
	                    /*if (e.target.id == 'week_tab') chartInit(options.columnView);
	                    if (e.target.id == 'month_tab') chartInit(options.columnViewMonthly);*/
	                });
	            };
	            context.model.patchData(function () {
	                _options.options.pieView.series[0].data = context.model.data.pieView;
	                console.log(_options.options.pieView);
	                context.view.renderChart(_options.options.pieView);
	            });
	            /*User.getData(User.currentLogin,'reports/pieView', function (callbackValue) {
	                console.log(callbackValue)
	                context.view.renderChart(options.pieView)
	            })*/
	        }
	    }]);

	    return Controller;
	}();

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.options = undefined;
	exports.createRandom30xArray = createRandom30xArray;
	exports.totalValueCount = totalValueCount;

	var _Model = __webpack_require__(22);

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
	        series: _Model.Model.data.columnView
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
	        series: _Model.Model.data.columnViewMonthly
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
/* 22 */
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
	                User.getData(User.currentLogin, 'reports/columnViewMonthly', function (value) {
	                    Model.data.columnViewMonthly = value;
	                    callback();
	                });
	            });
	        });
	    }

	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.View = undefined;

	var _Model = __webpack_require__(22);

	var View = exports.View = {
	    renderChart: function renderChart(options) {
	        var chart = new Highcharts.Chart(options);
	    }
	};

/***/ }
/******/ ]);