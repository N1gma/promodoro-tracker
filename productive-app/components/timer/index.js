import template from './template.jade'
import Controller from './controller'
import {view} from  './view'


Router.renderTimer = function (data) {
    var el = document.createElement('div');
    var controller = new Controller(data,view);
    controller.init(template,el);
    
};