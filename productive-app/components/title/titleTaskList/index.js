import template from './template.jade';
import {controller} from './controller';

/**
 * Method which add daily task-list title-header
 *
 * @memberOf app.Renderer
 * @instance
 * @namespace taskListTitle
 */
app.Renderer.renderTitleTaskList = function () {
    var el = document.createElement('div');
    el.innerHTML = template();
    document.getElementById('app-body').appendChild(el);
    controller.init(el,'today-list');
};

