/**
 * Router class
 *
 * @class
 */
class Routes {
    constructor() {
        this.routes = {
            login: {
                module: 'no-user',
                name: 'Login',
                url: 'login'
            },
            pomodoras: {
                module: 'settings',
                name: 'Pomodoras',
                url: 'settings-pomodoras'
            },
            categories: {
                module: 'settings-2',
                name: 'Categories',
                url: 'settings-categories'
            },
            tasklist: {
                module: 'taskList',
                name: 'Task List',
                url: 'task-list'
            },
            reports: {
                module: 'reports',
                name: 'Reports',
                url: 'report'
            },
            timer: {
                module: 'goToTimer',
                name: 'Timer',
                url: 'timer'
            }
        };
        this.defaultState = 'tasklist';
        this.currentState = 'tasklist';

    }

    /**
     * Push history state and render another page state
     *
     * @memberOf Routes
     * @param {String} page
     * @param {Object} [data]
     */
    moveTo(page, data) {
        let route = this.routes[page];
        history.pushState({
            path: page
        }, route.name, route.url);
        app.EventBus.publish(route.module, data);
        this.currentState = page;
        console.log(history);
    }
    /**
     * Replace history state and render another page state
     *
     * @memberOf Routes
     * @param {String} page
     * @returns {Routes}
     */
    replaceState(page) {
        let route = this.routes[page];
        history.replaceState({
            path: page
        }, route.name, route.url);
        app.EventBus.publish(route.module);
        console.log(history);
        return this;
    }
    /**
     * Replace null history state with approvable  state (so button back or forward wont trigger
     * page reload)
     *
     * @memberOf Routes
     * @returns {Routes}
     */
    resetState(){
        history.replaceState('random string', 'random string', '/' + 'random string');
        return this;
    }
    /**
     * Add popstate event listener
     *
     * @memberOf Routes
     */
    bind() {
        var context = this;
        window.addEventListener("popstate", function (e) {
            console.log(e.state);
            app.EventBus.publish(context.routes[e.state.path].module);
        });
    }

}

(function(){
    /**
     * @memberOf app
     * @type {Routes}
     */
    app.router = new Routes();
    app.router.bind();
}());
