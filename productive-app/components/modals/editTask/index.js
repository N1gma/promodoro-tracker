import template from './template.jade';
import Controller from './controller';
import {view} from './view';
import css from '!!css-loader!less-loader!./../addtask/style/style.less';
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
    var elCss = document.createElement('style');
    elCss.innerHTML = css['0'][1];
    var controller = new Controller(el, view/*, new Model(el)*/);
    controller.view.syncChanges(target, function (key) {
        el.innerHTML = template({
            data: User.dataSnapShot[key]
        });
        document.getElementById('app-body').appendChild(el);
        el.appendChild(elCss);
        controller.model = new Model(el);
    });
    controller.init(target);
    $(".datepicker").datepicker({
        dateFormat: "MM dd, yy"
    });

};