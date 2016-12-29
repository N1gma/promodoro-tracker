import template from './template.jade';
import Controller from './controller';
import {view} from  './view';

/**
 * Method which show timer on page
 *
 * @memberOf app.Renderer
 * @instance
 */
app.Renderer.renderTimer = function (data) {
    var el = document.createElement('div');
    var controller = new Controller(data,view);
    controller.init(template,el);
};