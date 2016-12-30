import template from './template.jade';
import Controller from './controller';
import View from  './view';
import Model from './model';

/**
 * Method which show timer on page
 *
 * @memberOf app.Renderer
 * @instance
 * @namespace Timer
 */
app.Renderer.renderTimer = function (elem) {
    var el = document.createElement('div');
    var model = new Model(elem);
    var view = new View(model);
    var controller = new Controller(view, model);
    controller.init(template,el);
};