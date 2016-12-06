
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
});
EventBus.subscribe('login', function () {
    Router.renderLog()
});

//----------------------------------
EventBus.subscribe('settings', function () {
    Router.clearContent(document.body)
});
EventBus.subscribe('settings', function () {
    Router.renderHeader()
});
EventBus.subscribe('settings', function () {
    Router.renderTitle_settings_1()
});
EventBus.subscribe('settings', function () {
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
});
EventBus.subscribe('settings-2', function () {
    Router.renderHeader()
});
EventBus.subscribe('settings-2', function () {
    Router.renderTitle_settings_1()
});
EventBus.subscribe('settings-2', function () {
    Router.renderSettingsCategories()
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
    /*list[0].classList.add('button-row-2', 'button-blue');
     list[0].innerHTML = 'Back';
     list[1].classList.add('button-row-2', 'button-green');
     list[1].innerHTML = 'Save';*/

    Router.renderButtons(list);
});
//----------------------------------
EventBus.subscribe('reports', function () {
    Router.clearContent(document.body);
});
EventBus.subscribe('reports', function () {
    Router.renderHeader()
});
EventBus.subscribe('reports', function () {
    Router.renderReports()
});
//----------------------------------
EventBus.subscribe('taskList', function () {
    Router.clearContent(document.body);

    Router.renderHeaderDetailed()

    Router.renderTitleTaskList()

    Router.renderReportsDaily()

    Router.renderTitleTaskListGlobal()

    Router.renderReportsGlobal()
});
//----------------------------------
EventBus.subscribe('goToTimer', function () {
    Router.clearContent(document.body);
});
EventBus.subscribe('goToTimer', function () {
    Router.renderHeader()
});
EventBus.subscribe('goToTimer', function (data) {
    Router.renderTimer(data)
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