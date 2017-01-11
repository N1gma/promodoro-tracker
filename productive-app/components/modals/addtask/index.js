import template from './template.jade';
import Controller from './controller';
import View from  './view';
import css from '!!css-loader!less-loader!./style/style.less';
import Model from './../Model';

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
    el.innerHTML = template();
    document.getElementById('app-body').appendChild(el);
    el.appendChild(app.Renderer.helpers.getCss(css));
    var model = new Model(el);
    var controller = new Controller(new View(model), model);
    controller.init();
    $(".datepicker").datepicker({
        dateFormat: "MM dd, yy"
    });
};
