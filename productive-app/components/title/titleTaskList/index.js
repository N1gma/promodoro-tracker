import template from './template.jade'
import {controller} from './controller'

Renderer.renderTitleTaskList = function () {
    var el = document.createElement('div');
    el.innerHTML = template();
    document.getElementById('app-body').appendChild(el);
    controller.init(el,'today-list');
};

