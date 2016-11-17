function LoginController(view,eBus){
    this.view = view;
    this.eBus = eBus;
}

document.addEventListener('DOMContentLoaded', function(e){
    var loginCtrl = new LoginController(new View(EventBus),EventBus);
    loginCtrl.init(e);
});

LoginController.prototype.init = function(){
    firebase.auth().signOut();
    this.eBus.subscribe('auth',this.view.auth);
    var context = this;
    document.getElementsByClassName('center-inputs')[0].addEventListener('submit',function(e){
        e.preventDefault();
        context.eBus.publish('auth');
    })
};

firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
        console.log('login success');
        window.location = '../../components/settings/settings.html';
    }
    if(!user) {
        console.log('logged out')
    }
});