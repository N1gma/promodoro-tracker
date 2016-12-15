import template from './template1.jade'
import Controller from './Controller'
import {tasks} from '../daily_list/Model'
import {view} from './View'



Router.renderReportsGlobal = function () {
    var el = document.createElement('div');
    let controller = new Controller(tasks, view, EventBusLocal, template);
    controller.initController(function () {
        if(controller.model.data){
            el.innerHTML = template({
                data: controller.model.data,
                structure: controller.model.getStruct(controller.model.data)
            });
        }
        controller.removeEventListeners(el);
        controller.setEventListeners(el);
        $('.urgency').tips('Go to Timer',true);
        $('.edit-task').tips('Edit task');
        $('.drag-task').tips('Move to Daily');
        $('.drop-switch').tips('Go to Global List');
        $('.sorted-lists-wrapper').accordeon()
    });
    document.getElementById('app-body').appendChild(el);
    $('.urgency').tips('Go to Timer',true);
    $('.edit-task').tips('Edit task');
    $('.drag-task').tips('Move to Daily');
    $('.drop-switch').tips('Go to Global List');
    $('.sorted-lists-wrapper').accordeon()

};