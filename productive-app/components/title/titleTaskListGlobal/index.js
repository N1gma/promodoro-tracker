import template from './template.jade';
import {controller} from '../titleTaskList/controller';
import {controllerFilter} from  './filter-controller';

/**
 * Method which add global-list title-header
 *
 * @memberOf app.Renderer
 * @instance
 * @namespace globalListTitle
 */
app.Renderer.renderTitleTaskListGlobal = function () {
    var el = document.createElement('div');
    el.innerHTML = template();
    document.getElementById('app-body').appendChild(el);
    controller.init(el,'sorted-list');
    controllerFilter.init(el);
};

