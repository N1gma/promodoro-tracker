import template from './template.jade';
import Controller from './controller';
import {Model} from './model';
import {SingletonModel} from './model'
/**
 * @namespace Notifications
 * @memberOf app.Renderer
 */
/**
 * Method which append notification to bottom notify list
 *
 * @memberOf app.Renderer
 * @instance
 */
app.Renderer.addNotification = function (opts) {
    var el = document.createElement('li');
    el.classList.add(`${opts.type}-pomodora-type`);
    el.innerHTML = template(opts);
    var controller = new Controller(new Model(el));
    controller.init();
    document.getElementById('notification-body').insertBefore(el, document.getElementById('notification-body').firstElementChild);
};

app.Renderer.addSingletonNotification = function (opts) {
    var name = opts.msg[0];
    if (SingletonModel.isSingle(name)) {
        var el = document.createElement('li');
        el.classList.add(`${opts.type}-pomodora-type`);
        el.innerHTML = template(opts);
        var controller = new Controller(new SingletonModel(el, name));
        controller.init();
        document.getElementById('notification-body').insertBefore(el, document.getElementById('notification-body').firstElementChild);
    }
};