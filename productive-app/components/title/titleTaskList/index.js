import template from './template.jade'

Router.renderTitleTaskList = function () {
    var el = document.createElement('div');
    el.innerHTML = template();
    document.body.appendChild(el);
    /*document.getElementsByClassName('sub-title')[0].addEventListener('click', function (e) {
        if(e.target.id == 'done'){
            //EventBus.publish('');
        }
        if(e.target.id == 'to_do'){
            //EventBus.publish('');
        }
        if(e.target.id == 'select-all'){

        }
        if(e.target.id == 'deselect-all'){
            //EventBus.publish('');
        }
    });*/
};

