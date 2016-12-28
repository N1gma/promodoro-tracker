import template from './template.jade'
import Controller from './controller'
import {view} from './view'
import css from '!!css-loader!less-loader!./../addtask/style/style.less';


Renderer.showModalEdit = function (target) {
    var el = document.createElement('div');
    var elCss = document.createElement('style');
    elCss.innerHTML = css['0'][1];
    var controller = new Controller(el, view);
    controller.view.syncChanges(target, function (key) {
        el.innerHTML = template({
            data: User.dataSnapShot[key]
        });
        document.getElementById('app-body').appendChild(el);
        el.appendChild(elCss);
    });
    controller.init(target);
    $(".datepicker").datepicker({
        dateFormat: "MM dd, yy"
    });

};