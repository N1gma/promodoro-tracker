describe('router', function () {
    it("'s constructor", function () {
        var router = new Routes();
        assert.equal(JSON.stringify(router.routes), JSON.stringify({
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
        }));
        assert.equal(router.defaultState, 'tasklist');
    });

    describe('its proto', function () {
        var router;
        sinon.spy(EventBus, "publish");
        beforeEach(function () {
            router = new Routes();
        });
        it("'s moveTo", function () {
            sinon.stub(history, "pushState");
            sinon.stub(Renderer,router.module);
            router.moveTo('timer');
            assert(history.pushState.calledWith({
                path:'timer'
            }, 'Timer','timer'));
            assert(EventBus.publish.calledWith('goToTimer'));
            assert(Renderer.renderTimer.called);
        });
        it("'s replaceState ", function () {
            sinon.stub(history, "replaceState");
            sinon.spy(router, "replaceState");
            router.replaceState('timer');
            assert(history.replaceState.calledWith({
                path:'timer'
            }, 'Timer','timer'));
            assert(EventBus.publish.calledWith('goToTimer'));
            assert(Renderer.renderTimer.called);
            assert(router.replaceState.returned(router));
        });
        it("'s resetState ", function () {
            sinon.spy(router, "resetState");
            router.resetState();
            assert(history.replaceState.calledWith('random string', 'random string'
                ,'/' + 'random string'));
            assert(router.resetState.returned(router));
        });
    })
});

