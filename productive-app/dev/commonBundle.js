webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	module.exports = __webpack_require__(15);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	'use strict';

	(function () {
	    /**
	     * @namespace app
	     * @type {{}}
	     */
	    window.app = {};
	    /**
	     * Global page render mechanism
	     *
	     * @memberOf app
	     * @namespace Renderer
	     */
	    window.app.Renderer = {
	        /**
	         * Clears a content of chosen container
	         *
	         * @memberOf app.Renderer
	         * @param {HTMLElement} target
	         * @param {boolean} [selfDestruction]
	         * @instance
	         */
	        clearContent: function clearContent(target, selfDestruction) {
	            if (selfDestruction) {
	                target.parentNode.removeChild(target);
	            } else {
	                while (target.firstElementChild) {
	                    target.removeChild(target.firstElementChild);
	                }
	            }
	            if (app.EventBusLocalTimer.timer) {
	                clearInterval(app.EventBusLocalTimer.timer.timeout);
	            }
	        },
	        /**
	         * Renders a buttons
	         *
	         * @memberOf app.Renderer
	         * @param {Array} list
	         * @param {String} [holderClass]
	         * @instance
	         */
	        renderButtons: function renderButtons(list, holderClass) {
	            var fragment = document.createDocumentFragment();
	            var container = document.createElement('div');
	            if (holderClass) {
	                container.classList.add(holderClass);
	            } else {
	                container.classList.add('button-holder');
	            }
	            fragment.appendChild(container);
	            for (var i = 0; i < list.length; i++) {
	                for (var j = 0; j < list[i].class.length; j++) {
	                    list[i].node.classList.add(list[i].class[j]);
	                }
	                list[i].node.innerHTML = list[i].innerHtml;
	                container.appendChild(list[i].node);
	                if (list[i].listener) {
	                    list[i].node.addEventListener('click', list[i].listener);
	                }
	            }
	            document.getElementById('app-body').appendChild(fragment);
	        }
	    };
	})();

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * memberOf app.Renderer
	 * @namespace
	 */
	app.Renderer.helpers = {
	    /**
	     * Transforms Minutes in Minutes/Hours+'h' + Minutes%Hours+'m' (130 -> 2h 10m)
	     *
	     * memberOf app.Renderer.helpers
	     * @instance
	     * returns {String}
	     * @param {Number} time
	     */
	    transformTime: function transformTime(time) {
	        var hours = '';
	        var minutes = '';
	        if (time / 60 >= 1) {
	            hours = parseInt(time / 60) + 'h ';
	        }
	        if (parseInt(time % 60) !== 0) {
	            minutes = parseInt(time % 60) + 'm';
	        }
	        return hours + minutes;
	    },
	    arrayToObject: function arrayToObject(array) {
	        var obj = {};
	        for (var i = 0; i < array.length; i++) {
	            obj[i] = array[i];
	        }
	        return obj;
	    },
	    objectToArray: function objectToArray(obj) {
	        var arr = [];
	        for (var key in obj) {
	            if (obj.hasOwnProperty(key)) {
	                arr.push(obj[key]);
	            }
	        }
	        return arr;
	    },

	    /**
	     * extract CSS text from '!!css-loader!less-loader!./style.less' loader processing result object,
	     * returns style node with this css
	     *
	     * memberOf app.Renderer.helpers
	     * @instance
	     * returns {HTMLElement}
	     * @param {String} css
	     */
	    getCss: function getCss(css) {
	        var elCss = document.createElement('style');
	        elCss.innerHTML = css['0'][1];
	        return elCss;
	    }
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @class
	 */
	var CEventBus = function CEventBus() {
	    _classCallCheck(this, CEventBus);

	    /**
	     * @memberOf CEventBus
	     */
	    this.topics = {};
	    /**
	     * @memberOf CEventBus
	     * @param {String} topic
	     * @param {function} listener
	     * @instance
	     */
	    this.subscribe = function (topic, listener) {
	        if (!this.topics[topic]) {
	            this.topics[topic] = [];
	        }
	        this.topics[topic].push(listener);
	    };
	    /**
	     * @memberOf CEventBus
	     * @param {String} topic
	     * @param [data]
	     * @instance
	     */
	    this.publish = function (topic, data) {
	        if (!this.topics[topic] || this.topics[topic].length < 1) {
	            return;
	        }
	        this.topics[topic].forEach(function (listener) {
	            listener(data || {});
	        });
	    };
	};

	//---------------------------------


	(function () {
	    /**
	     * @memberOf app
	     * @type {CEventBus}
	     */
	    app.EventBus = new CEventBus();
	    var EventBus = window.app.EventBus;
	    /*var Renderer = window.app.Renderer;
	     var User = window.app.User;
	     var app.EventBusLocal = window.app.app.EventBusLocal;*/

	    EventBus.subscribe('login', function () {
	        var Renderer = window.app.Renderer;
	        Renderer.clearContent(document.getElementById('app-body'));
	        Renderer.renderLog();
	    });

	    //----------------------------------
	    EventBus.subscribe('settings', function () {
	        var Renderer = window.app.Renderer;
	        Renderer.clearContent(document.getElementById('app-body'));
	        Renderer.renderHeader();
	        Renderer.renderTitleSettings();
	        Renderer.renderSettingsMain();
	        var list = [document.createElement('button'), document.createElement('button')];
	        list = [{
	            node: document.createElement('button'),
	            class: ['button-row-2', 'button-green'],
	            innerHtml: 'Save',
	            listener: function listener() {
	                app.User.saveSettings();
	            }
	        }, {
	            node: document.createElement('button'),
	            class: ['button-row-2', 'button-blue'],
	            innerHtml: 'Next',
	            listener: function listener() {
	                app.router.moveTo('tasklist');
	            }
	        }];
	        Renderer.renderButtons(list);
	    });

	    //----------------------------------
	    EventBus.subscribe('settings-2', function () {
	        var Renderer = window.app.Renderer;
	        Renderer.clearContent(document.getElementById('app-body'));
	        Renderer.renderHeader();
	        Renderer.renderTitleSettings();
	        Renderer.renderSettingsCategories();
	        var list = [document.createElement('button'), document.createElement('button')];
	        list = [{
	            node: document.createElement('button'),
	            class: ['button-row-2', 'button-blue'],
	            innerHtml: 'Back'

	        }, {
	            node: document.createElement('button'),
	            class: ['button-row-2', 'button-green'],
	            innerHtml: 'Save',
	            listener: function listener() {
	                User.saveSettings();
	            }
	        }];
	        Renderer.renderButtons(list);
	    });
	    //----------------------------------
	    EventBus.subscribe('reports', function () {
	        var Renderer = window.app.Renderer;
	        Renderer.clearContent(document.getElementById('app-body'));
	        Renderer.renderHeader();
	        Renderer.renderReports();
	    });
	    //----------------------------------
	    EventBus.subscribe('taskList', function () {
	        var Renderer = window.app.Renderer;
	        Renderer.clearContent(document.getElementById('app-body'));
	        Renderer.renderHeaderDetailed();
	        Renderer.renderTitleTaskList();
	        Renderer.renderReportsDaily();
	        Renderer.renderTitleTaskListGlobal();
	        Renderer.renderReportsGlobal();
	    });
	    //----------------------------------
	    EventBus.subscribe('goToTimer', function (data) {
	        var Renderer = window.app.Renderer;
	        app.EventBusLocalTimer.topics = {};
	        Renderer.clearContent(document.getElementById('app-body'));
	        Renderer.renderHeader();
	        Renderer.renderTimer(data);
	    });
	    //----------------------------------
	    EventBus.subscribe('no-user', function () {
	        app.EventBus.publish('login');
	    });
	    //----------------------------------

	    EventBus.subscribe('notify', function (opts) {
	        app.Renderer.addNotification(opts);
	    });

	    //----------------------------------
	    EventBus.subscribe('initData', function () {
	        var User = window.app.User;
	        User.getData(User.currentLogin, 'tasks', function (value) {
	            console.log(value);
	            if (!value) {
	                User.dataSnapShot = JSON.parse(localStorage.getItem('prodApp')).dataSnapShot;
	            }
	        });
	        User.getSettings(User.currentLogin, function (value) {
	            console.log(value);
	            if (!value) {
	                User.dataSnapShot = JSON.parse(localStorage.getItem('prodApp')).settings;
	            }
	        });
	    });
	})();

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @class
	 */
	var UserClass = function () {
	    function UserClass() {
	        _classCallCheck(this, UserClass);

	        this.currentLogin = '';
	        this.settings = {};
	        this.trashData = [];
	        this.reportsData = {};
	        this.dataSnapShot = {};
	    }

	    /**
	     * Get settings from firebase User profile
	     *
	     * @memberOf UserClass
	     * @param {String} account
	     * @param {function} callback callback to execute after success GET req
	     */


	    _createClass(UserClass, [{
	        key: 'getSettings',
	        value: function getSettings(account, callback) {
	            var data = database.ref('users/' + account + '/user_settings');
	            data.on('value', function (snapshot) {
	                this.settings = snapshot.val();
	                callback(this.settings);
	            }.bind(this));
	        }

	        /**
	         * Save settings in firebase User profile
	         *
	         * @memberOf UserClass
	         */

	    }, {
	        key: 'saveSettings',
	        value: function saveSettings() {
	            var context = this;
	            database.ref('users/' + this.currentLogin + '/user_settings').set(this.settings).then(function () {
	                app.EventBus.publish('notify', {
	                    msg: 'Settings saved',
	                    type: 'info'
	                });
	            });
	            localStorage.setItem('prodApp', JSON.stringify({
	                dataSnapShot: context.dataSnapShot,
	                settings: context.settings
	            }));
	        }

	        /**
	         * Get requested data from firebase User profile
	         *
	         * @memberOf UserClass
	         * @param {String} account
	         * @param {String} data
	         * @param {function} callback callback to execute after success GET req
	         */

	    }, {
	        key: 'getData',
	        value: function getData(account, data, callback) {
	            var info = database.ref('users/' + account + '/' + data);
	            info.on('value', function (snapshot) {
	                this.dataSnapShot = snapshot.val();
	                callback(this.dataSnapShot);
	            }.bind(this));
	        }

	        /**
	         * Set task data in firebase tasks User profile after moving to daily
	         *
	         * @memberOf UserClass
	         * @param {String} account
	         * @param {String} path
	         * @param {String} data
	         */

	    }, {
	        key: 'setData',
	        value: function setData(account, path, data) {
	            database.ref('users/' + account + path).set(data).then(function () {
	                app.EventBus.publish('notify', {
	                    msg: 'Moved to daily list',
	                    type: 'info'
	                });
	            });
	        }
	    }, {
	        key: 'saveData',
	        value: function saveData(account, path, data) {
	            database.ref('users/' + account + path).update(data);
	        }

	        /**
	         * Set task data in firebase tasks User profile after edit
	         *
	         * @memberOf UserClass
	         * @param {String} account
	         * @param {String} path
	         * @param {HTMLElement} [node]
	         */

	    }, {
	        key: 'setTaskData',
	        value: function setTaskData(account, path, node) {
	            database.ref('users/' + account + path).set(function () {
	                return {
	                    title: document.getElementById('title-input').value,
	                    description: document.getElementById('description-input').value,
	                    category: function () {
	                        var tag = document.getElementsByClassName('categories-choose-list')[0];
	                        for (var i = 0; i < tag.children.length; i++) {
	                            if (tag.children[i].firstElementChild.checked) {
	                                console.log(tag.children[i].firstElementChild);
	                                return tag.children[i].firstElementChild.value.toLowerCase();
	                            }
	                        }
	                    }(),
	                    deadline: function () {
	                        var date = document.getElementById('deadline-input').value;
	                        var obj = {
	                            fullDate: date,
	                            month: date.slice(0, date.indexOf(' ')),
	                            day: date.slice(date.indexOf(' ') + 1, date.indexOf(',')),
	                            year: date.slice(date.indexOf(',') + 2)
	                        };
	                        return obj;
	                    }(),
	                    estimation: function () {
	                        var parent = document.getElementsByClassName('estimation-range')[0];
	                        for (var i = 0, j = 0; parent.children[i]; i++) {
	                            if (parent.children[i].classList.contains('estimated')) {
	                                j++;
	                            }
	                        }
	                        return 'estimate-' + j;
	                    }(),
	                    priority: function () {
	                        var tag = document.getElementsByClassName('categories-choose-list')[1];
	                        for (var i = 0; i < tag.children.length; i++) {
	                            if (tag.children[i].firstElementChild.checked) {
	                                console.log(tag.children[i].firstElementChild);
	                                return tag.children[i].firstElementChild.value.toLowerCase();
	                            }
	                        }
	                    }()
	                };
	            }()).then(function () {
	                app.EventBus.publish('notify', {
	                    msg: 'Task edited',
	                    type: 'info'
	                });
	            });
	        }

	        /**
	         * Delete task  in firebase tasks User profile
	         *
	         * @memberOf UserClass
	         * @param {String} account
	         * @param {String} path
	         */

	    }, {
	        key: 'deleteTaskData',
	        value: function deleteTaskData(account, path) {
	            database.ref('users/' + account + path).remove().then(function () {
	                app.EventBus.publish('notify', {
	                    msg: 'Task deleted',
	                    type: 'warning'
	                });
	            });
	        }

	        /**
	         * Add task  in firebase tasks User profile after task add from modal
	         *
	         * @memberOf UserClass
	         */

	    }, {
	        key: 'updateTasksData',
	        value: function updateTasksData() {
	            var context = this;
	            var path = 'users/' + this.currentLogin + '/tasks';
	            var newKey = database.ref().child(path).push().key;
	            path += '/' + newKey;
	            var newData = {
	                title: document.getElementById('title-input').value,
	                description: document.getElementById('description-input').value,
	                category: function () {
	                    var tag = document.getElementsByClassName('categories-choose-list')[0];
	                    for (var i = 0; i < tag.children.length; i++) {
	                        if (tag.children[i].firstElementChild.checked) {
	                            console.log(tag.children[i].firstElementChild);
	                            return tag.children[i].firstElementChild.value.toLowerCase();
	                        }
	                    }
	                }(),
	                deadline: function () {
	                    var date = document.getElementById('deadline-input').value;
	                    var obj = {
	                        fullDate: date,
	                        month: date.slice(0, date.indexOf(' ')),
	                        day: date.slice(date.indexOf(' ') + 1, date.indexOf(',')),
	                        year: date.slice(date.indexOf(',') + 2)
	                    };
	                    return obj;
	                }(),
	                estimation: 'estimate-' + document.getElementsByClassName('estimation-range')[0].estimation,
	                priority: function () {
	                    var tag = document.getElementsByClassName('categories-choose-list')[1];
	                    for (var i = 0; i < tag.children.length; i++) {
	                        if (tag.children[i].firstElementChild.checked) {
	                            console.log(tag.children[i].firstElementChild);
	                            return tag.children[i].firstElementChild.value.toLowerCase();
	                        }
	                    }
	                }()
	            };
	            database.ref(path).update(newData).then(function () {
	                app.EventBus.publish('notify', {
	                    msg: 'Task added',
	                    type: 'success'
	                });
	            });
	            localStorage.setItem('prodApp', JSON.stringify({
	                dataSnapShot: context.dataSnapShot,
	                settings: context.settings
	            }));
	        }
	    }]);

	    return UserClass;
	}();

	(function () {
	    /**
	     * @memberOf app
	     * @type {UserClass}
	     */
	    app.User = new UserClass();
	})();

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @class
	 */
	var CEventBusLocal = function () {
	    function CEventBusLocal() {
	        _classCallCheck(this, CEventBusLocal);

	        this.topics = {};
	    }

	    /**
	     * @memberOf CEventBusLocal
	     * @param {String} topic
	     * @param {function} listener
	     */


	    _createClass(CEventBusLocal, [{
	        key: 'subscribe',
	        value: function subscribe(topic, listener) {
	            if (!this.topics[topic]) {
	                this.topics[topic] = [];
	            }
	            this.topics[topic].push(listener);
	        }

	        /**
	         * @memberOf CEventBusLocal
	         * @param {String} topic
	         * @param  [data]
	         */

	    }, {
	        key: 'publish',
	        value: function publish(topic, data) {
	            if (!this.topics[topic] || this.topics[topic].length < 1) {
	                return;
	            }
	            this.topics[topic].forEach(function (listener) {
	                listener(data || {});
	            });
	        }

	        /**
	         * @memberOf CEventBusLocal
	         * @param {String} topic
	         */

	    }, {
	        key: 'unsubscribe',
	        value: function unsubscribe(topic) {
	            delete this.topics[topic];
	        }
	    }]);

	    return CEventBusLocal;
	}();

	(function () {
	    /**
	     * @memberOf app
	     * @type {CEventBusLocal}
	     */
	    app.EventBusLocal = new CEventBusLocal();
	    var EventBusLocal = window.app.EventBusLocal;
	    var User = window.app.User;
	    EventBusLocal.subscribe('trash-drop', function (data) {
	        var e = data.e;
	        var context = data.context;
	        if (e.target.classList.contains('category') && !e.target.classList.contains('toogled') && e.target.parentNode.classList.contains('trash')) {
	            e.target.innerHTML = '&#xe910;';
	            e.target.classList.add('toogled');
	            if (context.model.checkTrashBuffer(e.target.parentNode.getAttribute('key'))) {
	                User.trashData.push(e.target.parentNode.getAttribute('key'));
	                if (User.trashData.length > 0) {
	                    document.getElementsByClassName('trash-counter')[0].style.display = 'inline-block';
	                    document.getElementsByClassName('trash-counter')[0].innerHTML = User.trashData.length;
	                } else {
	                    document.getElementsByClassName('trash-counter')[0].style.display = 'none';
	                }
	                console.log(User.trashData);
	            }
	        } else if (e.target.classList.contains('toogled') && e.target.parentNode.classList.contains('trash')) {
	            e.target.innerHTML = '&#xe912;';
	            e.target.classList.remove('toogled');
	            User.trashData.splice(User.trashData.indexOf(e.target.parentNode.getAttribute('key')), 1);
	            if (User.trashData.length > 0) {
	                document.getElementsByClassName('trash-counter')[0].style.display = 'inline-block';
	                document.getElementsByClassName('trash-counter')[0].innerHTML = User.trashData.length;
	            } else {
	                document.getElementsByClassName('trash-counter')[0].style.display = 'none';
	            }
	            console.log(User.trashData);
	        }
	    });

	    EventBusLocal.subscribe('trash-check-all', function (dependency) {
	        var elems = document.getElementsByClassName('task');
	        for (var i = 0; i < elems.length; i++) {
	            if (elems[i].parentNode.classList.contains(dependency)) {
	                elems[i].firstElementChild.innerHTML = '&#xe910;';
	                elems[i].firstElementChild.classList.add('toogled');
	                var key = elems[i].getAttribute('key');
	                if (User.trashData.indexOf(key) === -1) {
	                    User.trashData.push(key);
	                    if (User.trashData.length > 0) {
	                        document.getElementsByClassName('trash-counter')[0].style.display = 'inline-block';
	                        document.getElementsByClassName('trash-counter')[0].innerHTML = User.trashData.length;
	                    } else {
	                        document.getElementsByClassName('trash-counter')[0].style.display = 'none';
	                    }
	                    console.log(User.trashData);
	                }
	            }
	        }
	    });

	    EventBusLocal.subscribe('trash-uncheck-all', function (dependency) {
	        var elems = document.getElementsByClassName('task');
	        for (var i = 0; i < elems.length; i++) {
	            if (elems[i].parentNode.classList.contains(dependency)) {
	                elems[i].firstElementChild.innerHTML = '&#xe912;';
	                elems[i].firstElementChild.classList.remove('toogled');
	                var key = elems[i].getAttribute('key');
	                console.log(key);
	                if (User.trashData.indexOf(key) !== -1) {
	                    User.trashData.splice(User.trashData.indexOf(key), 1);
	                    if (User.trashData.length > 0) {
	                        document.getElementsByClassName('trash-counter')[0].style.display = 'inline-block';
	                        document.getElementsByClassName('trash-counter')[0].innerHTML = User.trashData.length;
	                    } else {
	                        document.getElementsByClassName('trash-counter')[0].style.display = 'none';
	                    }
	                    console.log(User.trashData);
	                }
	            }
	        }
	    });

	    EventBusLocal.subscribe('trash-refresh', function (e) {
	        document.getElementsByClassName('trash-counter')[0].innerHTML = User.trashData.length;
	        document.getElementsByClassName('trash-counter')[0].style.display = 'none';
	        User.trashData = [];
	    });

	    EventBusLocal.subscribe('trash-on', function (target) {
	        var tasks = document.getElementsByClassName('task');
	        target.classList.add('active');

	        for (var i = 0; i < tasks.length; i++) {
	            tasks[i].classList.add('trash');
	        }

	        var labels = document.getElementsByClassName('left-side');
	        for (i = 0; i < labels.length; i++) {
	            labels[i].classList.remove('hidden');
	        }
	    });

	    EventBusLocal.subscribe('trash-off', function (target) {
	        var tasks = document.getElementsByClassName('task');
	        target.classList.remove('active');

	        for (var i = 0; i < tasks.length; i++) {
	            tasks[i].classList.remove('trash');
	        }
	        var labels = document.getElementsByClassName('left-side');
	        for (i = 0; i < labels.length; i++) {
	            labels[i].classList.add('hidden');
	        }
	    });
	})();

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @class
	 */
	var CEventBusLocalTimer = function () {
	    function CEventBusLocalTimer() {
	        _classCallCheck(this, CEventBusLocalTimer);

	        this.topics = {};
	    }

	    /**
	     * @memberOf CEventBusLocal
	     * @param {String} topic
	     * @param {function} listener
	     */


	    _createClass(CEventBusLocalTimer, [{
	        key: "subscribe",
	        value: function subscribe(topic, listener) {
	            if (!this.topics[topic]) {
	                this.topics[topic] = [];
	            }
	            this.topics[topic].push(listener);
	        }

	        /**
	         * @memberOf CEventBusLocal
	         * @param {String} topic
	         * @param  [data]
	         */

	    }, {
	        key: "publish",
	        value: function publish(topic, data) {
	            if (!this.topics[topic] || this.topics[topic].length < 1) {
	                return;
	            }
	            this.topics[topic].forEach(function (listener) {
	                listener(data || {});
	            });
	        }

	        /**
	         * @memberOf CEventBusLocal
	         * @param {String} topic
	         */

	    }, {
	        key: "unsubscribe",
	        value: function unsubscribe(topic) {
	            delete this.topics[topic];
	        }
	    }]);

	    return CEventBusLocalTimer;
	}();

	(function () {
	    /**
	     * @memberOf app
	     * @type {CEventBusLocal}
	     */
	    app.EventBusLocalTimer = new CEventBusLocalTimer();
	})();

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Router class
	 *
	 * @class
	 */
	var Routes = function () {
	    function Routes() {
	        _classCallCheck(this, Routes);

	        this.routes = {
	            login: {
	                module: 'no-user',
	                name: 'Login',
	                url: 'login'
	            },
	            pomodoras: {
	                module: 'settings',
	                name: 'Pomodoras',
	                url: 'settings-pomodoras'
	            },
	            categories: {
	                module: 'settings-2',
	                name: 'Categories',
	                url: 'settings-categories'
	            },
	            tasklist: {
	                module: 'taskList',
	                name: 'Task List',
	                url: 'task-list'
	            },
	            reports: {
	                module: 'reports',
	                name: 'Reports',
	                url: 'report'
	            },
	            timer: {
	                module: 'goToTimer',
	                name: 'Timer',
	                url: 'timer'
	            }
	        };
	        this.defaultState = 'tasklist';
	        this.currentState = 'tasklist';
	    }

	    /**
	     * Push history state and render another page state
	     *
	     * @memberOf Routes
	     * @param {String} page
	     * @param {Object} [data]
	     */


	    _createClass(Routes, [{
	        key: 'moveTo',
	        value: function moveTo(page, data) {
	            var route = this.routes[page];
	            history.pushState({
	                path: page
	            }, route.name, route.url);
	            app.EventBus.publish(route.module, data);
	            this.currentState = page;
	        }
	        /**
	         * Replace history state and render another page state
	         *
	         * @memberOf Routes
	         * @param {String} page
	         * @returns {Routes}
	         */

	    }, {
	        key: 'replaceState',
	        value: function replaceState(page) {
	            var route = this.routes[page];
	            history.replaceState({
	                path: page
	            }, route.name, route.url);
	            app.EventBus.publish(route.module);
	            console.log(history);
	            return this;
	        }
	        /**
	         * Replace null history state with approvable  state (so button back or forward wont trigger
	         * page reload)
	         *
	         * @memberOf Routes
	         * @returns {Routes}
	         */

	    }, {
	        key: 'resetState',
	        value: function resetState() {
	            history.replaceState('random string', 'random string', '/' + 'random string');
	            return this;
	        }
	        /**
	         * Add popstate event listener
	         *
	         * @memberOf Routes
	         */

	    }, {
	        key: 'bind',
	        value: function bind() {
	            var context = this;
	            window.addEventListener("popstate", function (e) {
	                console.log(e.state);
	                app.EventBus.publish(context.routes[e.state.path].module);
	            });
	        }
	    }]);

	    return Routes;
	}();

	(function () {
	    /**
	     * @memberOf app
	     * @type {Routes}
	     */
	    app.router = new Routes();
	    app.router.bind();
	})();

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	(function ($) {
	    $.fn.tips = function (tip, offset) {
	        var $target = $(this);
	        var offsetTriangle, $tooltip, $triangle;
	        if (offset) {
	            offsetTriangle = 85;
	            offset = 90;
	        } else {
	            offsetTriangle = 0;
	            offset = 0;
	        }
	        if (!$('.tipp').length) {
	            $tooltip = $('<div class="tipp"><span class="triangle"></span><p class="tip-text"></p></div>');
	            $triangle = $tooltip.find('.triangle');
	            $('body').append($tooltip);
	            $tooltip.css({
	                position: 'absolute',
	                width: '113px',
	                padding: '8px 3px',
	                backgroundColor: '#cedeea',
	                zIndex: 9999999999,
	                color: '#3c5162',
	                borderRadius: '3px',
	                boxSizing: 'border-box',
	                textAlign: 'center',
	                display: 'none',
	                font: '13px HelveticaBold, sans-serif',
	                fontWeight: 'bold'
	            });
	            $triangle.css({
	                content: '',
	                display: 'block',
	                width: '0',
	                height: '0',
	                position: 'absolute',
	                borderLeft: '5px solid ',
	                borderRight: '5px solid ',
	                borderBottom: '5px solid ',
	                borderColor: 'transparent',
	                borderBottomColor: '#cedeea',
	                left: '8px',
	                top: '-5px'
	            });
	        } else {
	            $tooltip = $('.tipp');
	        }
	        $triangle = $tooltip.find('.triangle');
	        var $tipText = $tooltip.find('.tip-text');
	        var listeners = {
	            mouseEnterListener: function mouseEnterListener(e) {
	                if (e.target !== $tooltip && e.target !== $triangle) {
	                    $tooltip.css({
	                        top: e.pageY + 12 + 'px',
	                        left: e.pageX - 10 - offset + 'px',
	                        display: 'block'
	                    });
	                    $triangle.css({
	                        left: 8 + offsetTriangle + 'px'
	                    });
	                    $tipText.html(tip);
	                }
	                $target.mousemove(function (e) {
	                    if (e.target !== $tooltip && e.target !== $triangle) {
	                        $tooltip.css({
	                            top: e.pageY + 30 + 'px',
	                            left: e.pageX - 10 - offset + 'px'
	                        });
	                        $triangle.css({
	                            left: '8px' + offsetTriangle
	                        });
	                    }
	                });
	            },
	            offVision: function offVision(e) {
	                $target.off('mousemove');
	                $tooltip.css({
	                    display: 'none'
	                });
	            }
	        };
	        $target.mouseenter(listeners.mouseEnterListener);
	        $target.mouseleave(listeners.offVision);
	        $target.click(listeners.offVision);
	        return this;
	    };
	    $.fn.accordeon = function () {
	        var $target = $(this);
	        var heads = $target.find('.accordeon-head');
	        var listener = function listener(e) {
	            var $link = $('#' + $(e.target).attr('linked_block'));
	            if ($link.is(':visible')) {
	                $link.slideUp("slow");
	            } else {
	                $link.slideDown("slow");
	            }
	        };
	        $target.off('click', listener);
	        $target.on('click', heads, listener);
	        return this;
	    };
	})(window.$);

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	(function () {
	    window.Notifications = {
	        spawnNotification: function spawnNotification(opt) {
	            if (!("Notification" in window)) {
	                alert("This browser does not support system notifications");
	            } else if (Notification.permission === "granted") {
	                var options = {
	                    body: opt.body,
	                    icon: opt.icon
	                };
	                var n = new Notification(opt.title, options);
	                setTimeout(n.close.bind(n), 5000);
	            } else if (Notification.permission !== 'denied') {
	                Notification.requestPermission(function (permission) {
	                    if (permission === "granted") {
	                        var options = {
	                            body: opt.body,
	                            icon: opt.icon
	                        };
	                        var n = new Notification(opt.title, options);
	                        setTimeout(n.close.bind(n), 5000);
	                    }
	                });
	            }
	        }
	    };
	})();

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	window.addEventListener("offline", function (e) {
	    Notifications.spawnNotification({
	        body: 'gone offline',
	        title: 'msg',
	        icon: 'Global/img/question-mark.png'
	    });
	    app.EventBus.publish('notify', {
	        msg: 'Gone offline',
	        type: 'fail'
	    });
	});

	window.addEventListener("online", function (e) {
	    Notifications.spawnNotification({
	        body: 'gone online',
	        title: 'msg',
	        icon: 'Global/img/question-mark.png'
	    });
	    app.EventBus.publish('notify', {
	        msg: 'Gone online',
	        type: 'success'
	    });
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _loginView = __webpack_require__(14);

	var _loginView2 = _interopRequireDefault(_loginView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 *
	 * @param {loginView} view
	 * @param {CEventBus} eBus
	 * @constructor
	 */
	function LoginController(view, eBus) {
	    this.view = view;
	    this.eBus = eBus;
	}

	LoginController.prototype = {
	    /**
	     * @memberOf LoginController
	     * @instance
	     */
	    init: function init() {
	        this.eBus.subscribe('auth', this.view.auth);
	        this.eBus.subscribe('logOut', this.view.logOut);
	        this.eBus.publish('login');
	        firebase.auth().onAuthStateChanged(function (user) {
	            var EventBus = window.app.EventBus;
	            var router = window.app.router;
	            var User = window.app.User;
	            if (!user) {
	                router.replaceState('login');
	            }
	            if (user) {
	                User.currentLogin = user.email.slice(0, user.email.search('@'));
	                var locate = location.pathname.slice(1);
	                for (var key in router.routes) {
	                    if (router.routes.hasOwnProperty(key)) {
	                        if (locate === router.routes[key].url) {
	                            locate = key;
	                        }
	                    }
	                }
	                if (!router.routes[locate] || locate === 'login' || locate === 'timer') {
	                    router.resetState().replaceState(router.defaultState);
	                } else {
	                    router.replaceState(router.currentState).moveTo(locate);
	                }
	                EventBus.publish('initData');
	            }
	        });
	    }
	};

	document.addEventListener('DOMContentLoaded', function () {
	    /**
	     * @memberOf app
	     * @type {LoginController}
	     */
	    app.loginCtrl = new LoginController(new _loginView2.default(app.EventBus), app.EventBus);
	    app.loginCtrl.init();
	});

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * @param {CEventBus} eBus
	 * @constructor
	 */
	function loginView(eBus) {
	    this.eBus = eBus;
	}
	/**
	 * memberOf loginView
	 * @param {Event} e
	 */
	loginView.prototype.auth = function (e) {
	    var context = this;
	    var val1 = document.getElementById('name_input').value;
	    var val2 = document.getElementById('pw_input').value;
	    firebase.auth().signInWithEmailAndPassword(val1, val2).catch(function (error) {
	        var msgs = document.getElementsByClassName('invalid_msg');
	        for (var i = 0; i < msgs.length; i++) {
	            msgs[i].style.display = 'block';
	        }
	        app.EventBus.publish('notify', {
	            msg: 'Invalid login/password',
	            type: 'fail'
	        });
	    });
	};
	/**
	 * memberOf loginView
	 */
	loginView.prototype.logOut = function () {
	    firebase.auth().signOut();
	};

	exports.default = loginView;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Validator = function () {
	    function Validator() {
	        var _this = this;

	        _classCallCheck(this, Validator);

	        this.results = [];
	        this.iteration = 0;
	        this.valid = true;
	        this.defaultFns = {
	            success: function success(node) {
	                if (node.removeClass) {
	                    node.removeClass('error-field');
	                } else {
	                    node.classList.remove('error-field');
	                }
	            },
	            error: function error(node) {
	                if (node.addClass) {
	                    node.addClass('error-field');
	                } else {
	                    node.classList.add('error-field');
	                }
	            }
	        };
	        this.methods = {
	            empty: function empty(target) {
	                if (target.val.trim().length === 0) {
	                    _this.results[_this.iteration].push(target.title + " can't be empty");
	                    _this.valid = false;
	                }
	            },
	            maxLength: function maxLength(target, params) {
	                if (target.val.length > params.len) {
	                    _this.results[_this.iteration].push(target.title + " maximum of " + params.len + ' characters');
	                    _this.valid = false;
	                }
	            },

	            checked: function checked(target) {
	                var switcher = false;
	                if (Array.isArray(target.node)) {
	                    for (var i = 0; i < target.node.length; i++) {
	                        if (target.node[i].checked) {
	                            switcher = true;
	                        }
	                    }
	                } else {
	                    if (target.node.checked) {
	                        switcher = true;
	                    }
	                }
	                if (!switcher) {
	                    _this.results[_this.iteration].push(target.title + " checkbox must be checked");
	                    _this.valid = false;
	                }
	            },
	            containClass: function containClass(target, params) {
	                var switcher = false;
	                if (Array.isArray(target.node)) {
	                    for (var i = 0; i < target.node.length; i++) {
	                        if (target.node[i].classList.contains(params.askingClass)) {
	                            switcher = true;
	                        }
	                    }
	                } else {
	                    if (target.node.classList.contains(params.askingClass)) {
	                        switcher = true;
	                    }
	                }
	                if (!switcher) {
	                    _this.results[_this.iteration].push("checkbox must be checked");
	                    _this.valid = false;
	                }
	            }
	        };
	    }

	    _createClass(Validator, [{
	        key: 'validate',
	        value: function validate(targets) {
	            for (var i = 0; i < targets.length; i++) {
	                this.results.push([]);
	                this.createConfig(targets[i]);
	                this.valid = true;
	                var options = this.conf.options;
	                var target = this.conf.target;
	                for (var _i = 0; _i < options.length; _i++) {
	                    if (_typeof(this.conf.options[_i]) === 'object') {
	                        this.methods[options[_i].name](target, options[_i].params);
	                    } else {
	                        this.methods[options[_i]](target);
	                    }
	                }
	                if (!this.conf.preventAction) {
	                    if (this.valid) {
	                        this.conf.success(target.origin);
	                    } else {
	                        this.conf.error(target.origin);
	                    }
	                }
	                this.iteration++;
	            }
	            return this.results;
	        }
	    }, {
	        key: 'createConfig',
	        value: function createConfig(target) {
	            var context = this;
	            this.conf = {
	                target: {
	                    val: target.target.value,
	                    node: target.target
	                },
	                options: target.options,
	                success: target.success || context.defaultFns.success,
	                error: target.error || context.defaultFns.error,
	                preventAction: target.preventAction || false
	            };
	            this.conf.target.origin = target.origin || this.conf.target.node;
	            if (this.conf.target.origin.previousElementSibling) {
	                this.conf.target.title = this.conf.target.origin.previousElementSibling.innerText;
	            }
	        }
	    }]);

	    return Validator;
	}();

	exports.default = Validator;

/***/ }
]);