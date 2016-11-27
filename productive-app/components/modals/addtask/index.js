import template from './modalAdd.jade'
import Controller from './controller'
import {view} from  './view'

Router.showModalAdd = function () {
    var el = document.createElement('div');
    el.innerHTML = template();
    document.body.appendChild(el);
    var controller = new Controller(view,el);
    controller.init();
    $( ".datepicker" ).datepicker({
        dateFormat: "MM dd, yy"
    });
    
};