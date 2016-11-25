import template from './template1.jade'
import Controller from './Controller'
import {tasks} from '../module/Model'


Router.renderReportsGlobal = function () {
    var el = document.createElement('div');
    let controller = new Controller(tasks, EventBusLocal);
    controller.initController(function () {
        if(controller.model.data){
            el.innerHTML = template({
                data: controller.model.data,
                structure: controller.model.getStruct(controller.model.data)
            });
        }
        controller.removeEventListeners(el);
        controller.setEventListeners(el);
    });
    document.body.appendChild(el);
};