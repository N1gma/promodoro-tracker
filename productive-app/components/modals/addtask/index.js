import template from './template.jade'
import Controller from './controller'
import {view} from  './view'
import css from '!!style-loader!css-loader!less-loader!./style/style.less';

Renderer.showModalAdd = function () {
    console.log(css)
    var el = document.createElement('div');
    el.innerHTML = template();
    document.getElementById('app-body').appendChild(el);
    var controller = new Controller(view,el);
    controller.init();
    $( ".datepicker" ).datepicker({
        dateFormat: "MM dd, yy"
    });
    
};