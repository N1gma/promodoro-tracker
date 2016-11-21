import template from './settings-1.jade'

Router.renderTitle_settings_1 = function () {
    var el = document.createElement('div');
    el.innerHTML = template();
    document.body.appendChild(el);
    document.getElementById('pomodoros-settings').addEventListener('click', function (e) {
        EventBus.publish('settings');
    });
    document.getElementById('categories-settings').addEventListener('click', function (e) {
        EventBus.publish('settings-2');
    });
};

