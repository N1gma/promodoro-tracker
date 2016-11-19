import './header.css'
import template1 from  './markup.jade'



Router.renderHeader = function(){
    var el = document.createElement('div');
    el.innerHTML = template1();
    console.log(el);
    document.body.appendChild(el.firstElementChild);
    document.getElementById('log_out').addEventListener('click', function (e) {
        firebase.auth().signOut();
    });
}