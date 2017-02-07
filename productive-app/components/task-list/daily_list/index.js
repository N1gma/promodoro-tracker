import template from './template.jade';
import Controller from './Controller';
import Model from './../Model';

/**
 * @namespace
 * @memberOf app.Renderer
 */
/**
 * Method which add daily task-list to page
 *
 * @memberOf app.Renderer
 * @instance
 */
app.Renderer.renderReportsDaily = function () {
    var el = document.createElement('div');
    let controller = new Controller(new Model(), app.EventBusLocal);
    controller.initController(function () {
        if(controller.model.data){
            el.innerHTML = template({
                data: controller.model.data,
                tools: controller.model
            });
        }
        controller.removeEventListeners(el);
        controller.setEventListeners(el);
        app.EventBusLocal.publish('actionResolved');
    });
    document.getElementById('app-body').appendChild(el);
};