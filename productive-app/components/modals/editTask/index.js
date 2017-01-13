import template from './template.jade';
import Controller from './controller';
import View from './view';
import css from '!!css-loader!less-loader!../style/style.less';
import Model from './../Model';
/**
 * @namespace ModalEditTask
 * @memberOf app.Renderer
 */
/**
 * Method which show edit-task modal on page
 *
 * @memberOf app.Renderer
 * @instance
 */
app.Renderer.showModalEdit = function (target) {
    var User = window.app.User;
    var el = document.createElement('div');
    var controller = new Controller(new View());
    controller.view.syncChanges(target, function (key) {
        el.innerHTML = template({
            data: User.dataSnapShot[key]
        });
        document.getElementById('app-body').appendChild(el);
        el.appendChild(app.Renderer.helpers.getCss(css));
        controller.model = new Model(el);
        controller.view.model = controller.model;
    });
    controller.init(target);
    $(".datepicker").datepicker({
        dateFormat: "MM dd, yy"
    });
};