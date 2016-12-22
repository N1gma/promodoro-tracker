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
            router.replaceState('login')
        }
        if (user) {
            User.currentLogin = user.email.slice(0, user.email.search('@'));
            var locate = location.pathname.slice(1);
            //var lcoateUrl
            for(var key in router.routes){
                if(locate == router.routes[key].url){
                    locate = key;
                }
            }
            if (!router.routes[locate] || locate == 'login' || locate == 'timer') {
                history.replaceState(locate, locate, '/' + locate);
                router.replaceState('pomodoras');
            } else {
                router.replaceState(locate);
            }
            EventBus.publish('initData');
        }
    })
});

