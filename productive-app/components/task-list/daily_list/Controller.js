/**
 * @class
 * @memberOf DailyList
 */
class Controller {
    constructor(model) {
        //this.view = view;
        this.model = model;
        this.listeners = {
            editTask: function (e) {
                if (e.target.classList.contains('edit-task')) {
                    app.Renderer.showModalEdit(e.target);
                }
            },
            trashDrop: function (e) {
                app.EventBusLocal.publish('trash-drop', {
                    e: e,
                    context: this
                });
            }.bind(this),
            goToTimer:function (e) {
                if (e.target.classList.contains('urgency')) {
                    app.router.moveTo('timer', e.target.parentNode);
                }
            }
        };
    }

    /**
     * @param {function} callback
     */
    initController(callback) {
        app.EventBusLocal.publish('trash-refresh', document.getElementById('trashOn'));
        this.model.patchList(callback);
        //this.view.showList
    }
    /**
     * @param {HTMLElement} el
     */
    setEventListeners(el) {
        var context = this;
        el.addEventListener('click', this.listeners.editTask);
        el.addEventListener('click', this.listeners.trashDrop);
        el.addEventListener('click', this.listeners.goToTimer);
    }
    /**
     * @param {HTMLElement} el
     */
    removeEventListeners(el) {
        var context = this;
        for (var key in this.listeners) {
            el.removeEventListener('click', this.listeners[key]);
        }
    }
}

export default Controller;

