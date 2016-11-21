import template from './template.jade'

Router.renderTitleTaskList = function () {
    var el = document.createElement('div');
    el.innerHTML = template();
    document.body.appendChild(el);
    document.getElementById('done').addEventListener('click', function (e) {
        //EventBus.publish('');
    });
    document.getElementById('to_do').addEventListener('click', function (e) {
        //EventBus.publish('');
    });
};

