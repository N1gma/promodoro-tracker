import template from './template1.jade'
import Controller from './Controller'
import {tasks} from './Model'


Router.renderReportsDaily = function () {
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