import Controller from './controller';
import View from  './view';
import {StartModel} from './model';
import template from './template.jade';
import css from '!!css-loader!less-loader!./style.less';


/**
 * Method which show timer on page
 *
 * @memberOf app.Renderer
 * @instance
 * @namespace Timer
 */
app.Renderer.renderTimer = function (target) {
    var timer = document.createElement('div');
    timer.key = target.getAttribute('key');
    var cycle = app.User.dataSnapShot[timer.key].cycle || undefined;
    var model = new StartModel(timer);
    var view = new View(model,template,app.Renderer.helpers.getCss(css));
    var controller = new Controller(view, model);
    controller.init(cycle);
};