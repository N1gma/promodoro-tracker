import Controller from './controller';
import View from  './view';
import {StartModel} from './model';
import template from './template.jade';

/**
 * Method which show timer on page
 *
 * @memberOf app.Renderer
 * @instance
 * @namespace Timer
 */
app.Renderer.renderTimer = function (elem) {
    var model = new StartModel(elem,template);
    var view = new View(model);
    var controller = new Controller(view, model);
    controller.init();
};