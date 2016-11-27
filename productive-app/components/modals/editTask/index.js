import template from './modal.jade'
import Controller from './controller'
import {view} from './view'

Router.showModalEdit = function (target) {
    var el = document.createElement('div');
    var controller = new Controller(el,view);
    controller.view.syncChanges(target,function (key) {
        el.innerHTML = template({
            data: User.dataSnapShot[key]
        });
        document.body.appendChild(el);
    });
    controller.init(target);
    $( ".datepicker" ).datepicker({
        dateFormat: "MM dd, yy"
    });

};