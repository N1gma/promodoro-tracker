import template from './template.jade';
import Controller from './controller';
import {view} from  './view';
import css from '!!css-loader!less-loader!./style/style.less';
/**
 * @namespace ModalAddTask
 * @memberOf app.Renderer
 */
/**
 * Method which show add-task modal on page
 *
 * @memberOf app.Renderer
 * @instance
 */
app.Renderer.showModalAdd = function () {
    var el = document.createElement('div');
    var elCss = document.createElement('style');
    elCss.innerHTML = css['0'][1];
    el.innerHTML = template();
    document.getElementById('app-body').appendChild(el);
    el.appendChild(elCss);
    var controller = new Controller(view, el);
    controller.init();
    $(".datepicker").datepicker({
        dateFormat: "MM dd, yy"
    });
};
