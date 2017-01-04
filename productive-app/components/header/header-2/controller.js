/**
 * @class
 * @memberOf app.Renderer.HeaderDetailed
 * @instance
 */
class Controller  {
    constructor(el,view){
        this.el = el;
        this.view = view;
    }
    init () {
        var context = this;
        var listeners = {
            'log_out': function (e) {
                firebase.auth().signOut();
            },
            'settings': function (e) {
                app.router.moveTo('pomodoras');
            },
            'reports': function () {
                app.router.moveTo('reports');

            },
            'addTask':function () {
                app.Renderer.showModalAdd();

            },
            'trashOn':function (e) {
                if(e.target.classList.contains('active')){
                    app.EventBusLocal.publish('trash-off', e.target);
                }else{
                    app.EventBusLocal.publish('trash-on', e.target);
                }
            }
        };
        $('#addTask').tips('Add new task');
        $('#trashOn').tips('Activate delete mode');
        $('#reports').tips('Go to Reports');
        $('#settings').tips('Go to Settings');
        $('#log_out').tips('Sign out',true);
        this.el.addEventListener('click',function (e) {
            if (listeners[e.target.id]){
                listeners[e.target.id](e);
            }
        });
        $(window).on("scroll", function(e) {
            if ($(this).scrollTop() > 94) {
                context.view.fixHeader();
            } else {
                context.view.unfixHeader();
            }
        });
    }
}

export default Controller;