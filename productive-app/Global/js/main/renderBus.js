
var EventBus = {
    topics: {},
    subscribe: function (topic, listener) {
        // create the topic if not yet created
        if (!this.topics[topic]) this.topics[topic] = [];

        // add the listener
        this.topics[topic].push(listener);
    },

    publish: function (topic, data) {
        // return if the topic doesn't exist, or there are no listeners
        if (!this.topics[topic] || this.topics[topic].length < 1) return;

        // send the event to all listeners
        this.topics[topic].forEach(function (listener) {
            listener(data || {});
        });
    }
};

//---------------------------------
//var EventBus = new EventBusClass();

EventBus.subscribe('login', function () {
    Router.clearContent(document.body)
    Router.renderLog()
});

//----------------------------------
EventBus.subscribe('settings', function () {
    Router.clearContent(document.body);
    Router.renderHeader();
    Router.renderTitle_settings_1();
    Router.renderSettingsMain()
});
EventBus.subscribe('settings', function () {
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
    Router.renderButtons(list)
});

//----------------------------------
EventBus.subscribe('settings-2', function () {
    Router.clearContent(document.body);
    Router.renderHeader();
    Router.renderTitle_settings_1();
    Router.renderSettingsCategories();
});
EventBus.subscribe('settings-2', function () {
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
    Router.renderButtons(list);
});
//----------------------------------
EventBus.subscribe('reports', function () {
    Router.clearContent(document.body);
    Router.renderHeader();
    Router.renderReports();
});
//----------------------------------
EventBus.subscribe('taskList', function () {
    Router.clearContent(document.body);
    Router.renderHeaderDetailed();
    Router.renderTitleTaskList();
    Router.renderReportsDaily();
    Router.renderTitleTaskListGlobal();
    Router.renderReportsGlobal();
});
//----------------------------------
EventBus.subscribe('goToTimer', function () {
    Router.clearContent(document.body);
    Router.renderHeader();
    Router.renderTimer(data);
});
EventBus.subscribe('goToTimer', function () {
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
    Router.renderButtons(list);
});
//----------------------------------
EventBus.subscribe('no-user', function () {
    EventBus.publish('login')
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