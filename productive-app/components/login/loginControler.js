function LoginController(view, eBus) {
    this.view = view;
    this.eBus = eBus;
}


document.addEventListener('DOMContentLoaded', function () {
    var loginCtrl = new LoginController(new View(EventBus), EventBus);

    loginCtrl.eBus.subscribe('auth', loginCtrl.view.auth);
    loginCtrl.eBus.subscribe('logOut', loginCtrl.view.logOut);
    loginCtrl.eBus.publish('login');
    firebase.auth().onAuthStateChanged(function (user) {
        if (!user) {
            EventBus.publish('no-user')
        }
        if (user) {
           //loginCtrl.eBus
            EventBus.publish('settings');
        }
    })
});


/*var loginCtrl = new LoginController(new View(EventBus), EventBus);
 loginCtrl.init();*/

/*firebase.auth().onAuthStateChanged(function (user) {
 if (!user) {
 window.location = '/components/login/login.html';
 }
 if (user) {
 window.location = 'index.html';
 }
 });*/

