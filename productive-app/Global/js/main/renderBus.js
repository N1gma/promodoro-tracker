var EventBus = {
    topics: {},
    subscribe: function (topic, listener) {
        if (!this.topics[topic]) this.topics[topic] = [];
        this.topics[topic].push(listener);
    },

    publish: function (topic, data) {
        if (!this.topics[topic] || this.topics[topic].length < 1) return;
        this.topics[topic].forEach(function (listener) {
            listener(data || {});
        });
    }
};

//---------------------------------

EventBus.subscribe('login', function () {
    Renderer.clearContent(document.getElementById('app-body'))
    Renderer.renderLog()
});

//----------------------------------
EventBus.subscribe('settings', function () {
    Renderer.clearContent(document.getElementById('app-body'));
    Renderer.renderHeader();
    Renderer.renderTitle_settings_1();
    Renderer.renderSettingsMain();
    var list = [document.createElement('button'), document.createElement('button')];
    list = [
       {
            node: document.createElement('button'),
            class: ['button-row-2', 'button-green'],
            innerHtml: 'Save',
            listener: function () {
                User.saveSettings();
            }
        },
        {
            node: document.createElement('button'),
            class: ['button-row-2', 'button-blue'],
            innerHtml: 'Next',
            listener: function () {
                router.moveTo('tasklist')
            }
        }
    ];
    Renderer.renderButtons(list)
});

//----------------------------------
EventBus.subscribe('settings-2', function () {
    Renderer.clearContent(document.getElementById('app-body'));
    Renderer.renderHeader();
    Renderer.renderTitle_settings_1();
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
    Renderer.clearContent(document.getElementById('app-body'));
    Renderer.renderHeader();
    Renderer.renderReports();
});
//----------------------------------
EventBus.subscribe('taskList', function () {
    Renderer.clearContent(document.getElementById('app-body'));
    Renderer.renderHeaderDetailed();
    Renderer.renderTitleTaskList();
    Renderer.renderReportsDaily();
    Renderer.renderTitleTaskListGlobal();
    Renderer.renderReportsGlobal();
});
//----------------------------------
EventBus.subscribe('goToTimer', function (data) {
    Renderer.clearContent(document.getElementById('app-body'));
    Renderer.renderHeader();
    Renderer.renderTimer(data);
    var list = [document.createElement('button'), document.createElement('button')];
    list = [
        {
            node: document.createElement('button'),
            class: ['button-row-2', 'button-red'],
            innerHtml: 'Fail Pomodora',
            listener:function () {
                EventBusLocal.publish('time-stopped')
            }

        }, {
            node: document.createElement('button'),
            class: ['button-row-2', 'button-green'],
            innerHtml: 'Finish Pomodora',
            listener: function () {
                EventBusLocal.publish('time-resumed')
            }
        }
    ];
    Renderer.renderButtons(list);
});
//----------------------------------
EventBus.subscribe('no-user', function () {
    EventBus.publish('login')
});
//----------------------------------

EventBus.subscribe('notify', function (opts) {
    Renderer.addNotification(opts);
});

//----------------------------------
EventBus.subscribe('initData',function(){
    User.getData(User.currentLogin, 'tasks', function (value) {
        console.log(value);
        if(!value){
            User.dataSnapShot = JSON.parse(localStorage.getItem('prodApp')).dataSnapShot;
        }
    });
    User.getSettings(User.currentLogin, function (value) {
        console.log(value);
        if(!value){
            User.dataSnapShot = JSON.parse(localStorage.getItem('prodApp')).settings;
        }
    })
});