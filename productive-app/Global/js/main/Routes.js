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

    moveTo(page, data) {
        let route = this.routes[page];
        history.pushState({
            path: page
        }, route.name, route.url);
        EventBus.publish(route.module, data);
        router.currentState = page;
    };

    replaceState(page) {
        let route = this.routes[page];
        history.replaceState({
            path: page
        }, route.name, route.url);
        EventBus.publish(route.module);
        return this;
    }

    resetState(){
        history.replaceState('random string', 'random string', '/' + 'random string');
        return this;
    }

    bind() {
        var context = this;
        window.addEventListener("popstate", function (e) {
            console.log(e.state);
            EventBus.publish(context.routes[e.state.path].module);
        });
    }

}

var router = new Routes();
router.bind();