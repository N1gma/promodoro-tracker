/**
 * @class
 * @memberOf @memberOf app.Renderer.ModalAddTask
 * @namespace
 */
class View  {
    constructor(model){
        this.model = model;
    }
    /**Updates task data after edit
     *
     * @memberOf app.Renderer.ModalAddTask.view
     * @param {function} callback
     */
    dropData(callback){
        app.User.updateTasksData();
        callback();
    }
    /**
     * Close modal window
     *
     * @memberOf app.Renderer.ModalAddTask.view
     * @param {Event} e
     */
    modalClose (e) {
        e.preventDefault();
        document.getElementById('app-body').removeChild(this.model.$el[0]);
    }
    /**
     * Calculate and represent estimation pomodoras visual
     *
     * @memberOf app.Renderer.ModalAddTask.view
     * @param {Event} e
     */
    static estimationRangeReview (e) {
        if (e.target.tagName.toUpperCase() === 'LI') {
            var i,j;
            var parent = e.currentTarget;
            for (i = 0; i < parent.children.length; i++) {
                parent.children[i].classList.remove('estimated');
            }
            for (i = 0, j = 0; parent.children[i] !== e.target; i++, j++) {
                parent.children[i].classList.add('estimated');
            }
            e.target.classList.add('estimated');
            e.currentTarget.estimation = j+1;
        }
    }
}

export default View;
