import template from './modal.jade'
import Controller from './controller'

Router.showModalEdit = function (target) {
    var el = document.createElement('div');
    while (target.parentNode.classList.contains('task') == false) {
        target = target.parentNode;
    }
    var keyy = target.parentNode.getAttribute('key');
    console.log(User.dataSnapShot);
    el.innerHTML = template({
        data: User.dataSnapShot[keyy]
    });
    document.body.appendChild(el);
    var controller = new Controller(el);
    controller.init(target);
    console.log(target);
};