import template from './template1.jade'
//import templateNotasks from './notasks.jade'
import Controller from './Controller'
import {tasks} from './Model'
//import {EventBusLocal} from '../../../Globals/eBusLocalTasks'


Router.renderReportsDaily = function () {
    var el = document.createElement('div');
    let controller = new Controller(tasks, EventBusLocal);
    controller.initController(function () {
        if(controller.model.data){
            el.innerHTML = template({
                data: controller.model.data
            });
        }
        controller.removeEventListeners(el);
        controller.setEventListeners(el);
    });
    document.body.appendChild(el);
};