import LoginView from './loginView';
/**
 *
 * @param {LoginView} view
 * @constructor
 */
function LoginController(view) {
    this.view = view;
}

LoginController.prototype = {
    /**
     * @memberOf LoginController
     * @instance
     */
    init:function () {
        var EventBus = app.EventBus;
        var router = app.router;
        var User = app.User;
        EventBus.subscribe('auth', this.view.auth);
        EventBus.subscribe('logOut', this.view.logOut);
        //EventBus.publish('login');
        firebase.auth().onAuthStateChanged(function (user) {
            if (!user) {
                //router.replaceState('login');
                //EventBus.publish('login');
                router.resetState().replaceState('login');
            }
            if (user) {
                EventBus.publish('waitOverlay');
                User.currentLogin = user.email.slice(0, user.email.search('@'));
                var locate = location.pathname.slice(1);
                for(var key in router.routes){
                    if(router.routes.hasOwnProperty(key)){
                        if(locate === router.routes[key].url){
                            locate = key;
                        }
                    }
                }
                if (!router.routes[locate] || locate === 'login' || locate === 'timer') {
                    router.resetState().replaceState(router.defaultState);
                } else {
                    router.replaceState(router.currentState).moveTo(locate);
                }
                //EventBus.publish('initData');
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', function () {
    /**
     * @memberOf app
     * @type {LoginController}
     */
    app.loginCtrl = new LoginController(new LoginView());
    app.loginCtrl.init();
});

