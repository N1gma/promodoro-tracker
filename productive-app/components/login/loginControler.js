function LoginController(view, eBus) {
    this.view = view;
    this.eBus = eBus;
}





    document.addEventListener('DOMContentLoaded', function(){
        var loginCtrl = new LoginController(new View(EventBus), EventBus);

        loginCtrl.eBus.subscribe('auth', loginCtrl.view.auth);
        loginCtrl.eBus.subscribe('logOut', loginCtrl.view.logOut);


        /*document.getElementsByClassName('center-inputs')[0].addEventListener('submit', function (e) {
         e.preventDefault();
         context.eBus.publish('auth');
         });*/
        loginCtrl.eBus.publish('login');
    })


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

