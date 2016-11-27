class Routes {

    constructor() {

        this.root = '/';
        this.routes = {
            login: {
                module: 'login',
                name: 'Login',
                url: this.root
            },
            pomodoras: {
                module: 'settings',
                name: 'Pomodoras',
                url: '/settings-pomodoras/'
            },
            categories: {
                module: 'settings-2',
                name: 'Categories',
                url: '/settings-categories/'
            },
            tasklist: {
                module: 'taskList',
                name: 'Task List',
                url: '/task-list/'
            },
            reports: {
                module: 'reports',
                name: 'Reports',
                url: '/reports/'
            }
        };
        this.prev = '';
        /*EventBus.subscribe( "auth/true",  () => {
         this.moveTo('pomodoras')
         });*/

    }

    moveTo(page) {

        let route = this.routes[page];

        history.replaceState({
            path: page
        }, route.name, route.url);
        this.prev = page;
        EventBus.publish(route.module)

    };


    bind() {
        this.moveTo('login');

        window.addEventListener("popstate", (e) => {
            e.preventDefault();

            console.log(location.hash);

            let path;
            if (location.hash) {
                path = location.hash.slice(1);
                console.log(path);
            } else {
                path = location.pathname.slice(1)
            }

            path = path || 'login';

            if (this.prev === path) {
                history.back();
            } else {
                if (this.routes.hasOwnProperty(path)) {
                    this.moveTo(path);
                }
            }
        });
    }

}

var router = new Routes();