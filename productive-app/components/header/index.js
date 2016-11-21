import template1 from  './markup.jade'
import {Controller} from './controller'



Router.renderHeader = function(){
    var el = document.createElement('div');
    el.innerHTML = template1();
    document.body.appendChild(el);
    /*document.getElementById('log_out').addEventListener('click', function (e) {
        firebase.auth().signOut();
    });*/
    Controller.initCntrl();
};

