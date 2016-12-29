import template from './template.jade';
import {Controller} from './Controller';
import {View} from './View';
import {Model} from './Model.js';

/**
 * Method which render report page graph
 *
 * @memberOf app.Renderer
 * @instance
 */
app.Renderer.renderReports = function () {
    var el = document.createElement('div');
    el.innerHTML = template();
    document.getElementById('app-body').appendChild(el);
    var controller = new Controller(Model, View);
    controller.initController();
};