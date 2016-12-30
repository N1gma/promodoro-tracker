export var view;
/**
 * @memberOf @memberOf app.Renderer.ModalAddTask
 * @namespace
 */
view = {
    /**Updates task data after edit
     *
     * @memberOf app.Renderer.ModalAddTask.view
     * @param {function} callback
     */
    dropData:function(callback){
        app.User.updateTasksData();
        callback();
    },
    /**
     * Close modal window
     *
     * @memberOf app.Renderer.ModalAddTask.view
     * @param {Event} e
     * @param {HTMLElement} el
     */
    modalClose:function (e,el) {
        e.preventDefault();
        document.getElementById('app-body').removeChild(el);
    },
    /**
     * Calculate and represent estimation pomodoras visual
     *
     * @memberOf app.Renderer.ModalAddTask.view
     * @param {Event} e
     */
    estimationRangeReview:function (e) {
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
};
