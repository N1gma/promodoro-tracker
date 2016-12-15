import template from './main.jade'
import {dataModule} from './dataModule'
import View from './view.js'
import Model from './model.js'
import Controller from './controller.js'


Router.renderSettingsMain = function () {
    var el = document.createElement('div');
    el.innerHTML = template();
    document.getElementById('app-body').appendChild(el);
    var view = new View(document.getElementsByClassName('timeline-container')[0]);
    var model = new Model();
    var controller = new Controller(model, view);
    dataModule();
    controller.start();
    function CustomEvent(event, params) {
        params = params || {bubbles: false, cancelable: false, detail: undefined};
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;

};


