function LoginController(view, eBus) {
    this.view = view;
    this.eBus = eBus;
}

LoginController.prototype = {
    init:function () {
        this.eBus.subscribe('auth', this.view.auth);
        this.eBus.subscribe('logOut', this.view.logOut);
        this.eBus.publish('login');
        firebase.auth().onAuthStateChanged(function (user) {
            if (!user) {
                router.replaceState('login')
            }
            if (user) {
                User.currentLogin = user.email.slice(0, user.email.search('@'));
                var locate = location.pathname.slice(1);
                for(var key in router.routes){
                    if(locate == router.routes[key].url){
                        locate = key;
                    }
                }
                if (!router.routes[locate] || locate == 'login' || locate == 'timer') {
                    router.resetState().replaceState(router.defaultState);
                } else {
                    router.replaceState(router.currentState).moveTo(locate);
                }
                EventBus.publish('initData');
            }
        })
    }
};

document.addEventListener('DOMContentLoaded', function () {
    var loginCtrl = new LoginController(new View(EventBus), EventBus);
    loginCtrl.init()
});

