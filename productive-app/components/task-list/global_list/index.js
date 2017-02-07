import template from './template.jade';
import Controller from './Controller';
import Model from '../Model';
import {view} from './View';

/**
 * Method which add daily global-list to page
 *
 * @memberOf app.Renderer
 * @instance
 * @namespace GlobalList
 */
app.Renderer.renderReportsGlobal = function () {
    var el = document.createElement('div');
    let controller = new Controller(new Model(), view, template);
    console.log(controller);
    controller.initController(function () {
        if(controller.model.data){
            el.innerHTML = template({
                data: controller.model.data,
                structure: controller.model.getStruct(controller.model.data)
            });
        }
        //controller.model.
        controller.removeEventListeners(el);
        controller.setEventListeners(el);
        $('.urgency').tips('Go to Timer',true);
        $('.edit-task').tips('Edit task');
        $('.drag-task').tips('Move to Daily');
        $('.drop-switch').tips('Go to Global List');
        $('.sorted-lists-wrapper').accordeon();
        app.EventBusLocal.publish('actionResolved');
    });
    document.getElementById('app-body').appendChild(el);
    $('.urgency').tips('Go to Timer',true);
    $('.edit-task').tips('Edit task');
    $('.drag-task').tips('Move to Daily');
    $('.drop-switch').tips('Go to Global List');
    $('.sorted-lists-wrapper').accordeon();
};