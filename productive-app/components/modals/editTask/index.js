import template from './modal.jade'
import Controller from './controller'

Router.showModalEdit = function (target) {
    var el = document.createElement('div');
    el.innerHTML = template();
    document.body.appendChild(el);
    var controller = new Controller(el);
    controller.init(target)
};