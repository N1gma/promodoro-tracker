import template from './template.jade'
import Controller from './Controller'
import {tasks} from './Model'


Renderer.renderReportsDaily = function () {
    var el = document.createElement('div');
    let controller = new Controller(tasks, EventBusLocal);
    controller.initController(function () {
        if(controller.model.data){
            el.innerHTML = template({
                data: controller.model.data,
                tools: controller.model
            });
        }
        controller.removeEventListeners(el);
        controller.setEventListeners(el);
    });
    document.getElementById('app-body').appendChild(el);
};