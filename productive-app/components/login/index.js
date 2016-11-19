import './login.css'
import template2 from  './template.jade'


Router.renderLog = function(){
    var el = document.createElement('div');
    el.innerHTML = template2();
    console.log(el);
    document.body.appendChild(el.firstElementChild);
    document.getElementsByClassName('center-inputs')[0].addEventListener('submit', function (e) {
        e.preventDefault();
        EventBus.publish('auth');
    });
}
