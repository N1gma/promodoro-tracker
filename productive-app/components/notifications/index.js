import template from './template.jade'
import Controller from './controller'


Renderer.addNotification = function (opts) {
    var el = document.createElement('li');
    el.classList.add(`${opts.type}-pomodora-type`);
    el.innerHTML = template(opts);
    var controller = new Controller(el);
    controller.init();
    document.getElementById('notification-body').insertBefore(el, document.getElementById('notification-body').firstElementChild);
};