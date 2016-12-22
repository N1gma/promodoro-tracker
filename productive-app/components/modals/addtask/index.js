import template from './template.jade'
import Controller from './controller'
import {view} from  './view'


Renderer.showModalAdd = function () {
    var el = document.createElement('div');
    el.innerHTML = template();
    document.getElementById('app-body').appendChild(el);
    var controller = new Controller(view,el);
    controller.init();
    $( ".datepicker" ).datepicker({
        dateFormat: "MM dd, yy"
    });
    
};