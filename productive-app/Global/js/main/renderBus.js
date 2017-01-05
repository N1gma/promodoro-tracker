/**
 * @class
 */
class CEventBus {
    constructor() {
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
            if (!this.topics[topic] || this.topics[topic].length < 1){
                return;
            }
            this.topics[topic].forEach(function (listener) {
                listener(data || {});
            });
        };
    }
}

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
        list = [
            {
                node: document.createElement('button'),
                class: ['button-row-2', 'button-green'],
                innerHtml: 'Save',
                listener: function () {
                    app.User.saveSettings();
                }
            },
            {
                node: document.createElement('button'),
                class: ['button-row-2', 'button-blue'],
                innerHtml: 'Next',
                listener: function () {
                    app.router.moveTo('tasklist');
                }
            }
        ];
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
        list = [
            {
                node: document.createElement('button'),
                class: ['button-row-2', 'button-blue'],
                innerHtml: 'Back'

            }, {
                node: document.createElement('button'),
                class: ['button-row-2', 'button-green'],
                innerHtml: 'Save',
                listener: function () {
                    User.saveSettings();
                }
            }
        ];
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
        app.EventBusLocal.topics = {};
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

}());

