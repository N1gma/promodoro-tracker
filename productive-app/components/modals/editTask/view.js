/**
 * @class
 * @namespace
 * @memberOf ModalEditTask
 */
class View {
    constructor(model){
        this.model = model;
    }
    /**
     * sync estimation
     *
     * @memberOf ModalEditTask.view
     * @param {HTMLElement|Node} target
     * @param {function} callback
     */
    syncChanges (target, callback) {
        var User = app.User;
        while (target.parentNode.classList.contains('task') === false) {
            target = target.parentNode;
        }
        var key = target.parentNode.getAttribute('key');
        callback(key);
        document.getElementById(User.dataSnapShot[key].priority).checked = true;
        document.getElementById(User.dataSnapShot[key].category).checked = true;
        var estimationRecount = User.dataSnapShot[key].estimation.slice(-1);
        for (var i = 0; i < estimationRecount; i++) {
            document.getElementsByClassName('estimation-range')[0].children[i].classList.add('estimated');
        }
    }
    /**
     * Close modal window
     *
     * @memberOf ModalEditTask.view
     * @param {Event} e
     */
    modalClose (e) {
        e.preventDefault();
        document.getElementById('app-body').removeChild(this.model.$el[0]);
    }
    /**
     * Edit task confirmation
     *
     * @memberOf ModalEditTask.view
     * @param {Event} e
     * @param {HTMLElement|Node} target
     */
    modalConfirmEdit (e,target) {
        var User = app.User;
        while (target.parentNode.classList.contains('task') === false) {
            target = target.parentNode;
        }
        var keyy = target.parentNode.getAttribute('key');
        User.setTaskData(User.currentLogin, '/tasks/' + keyy, target.parentNode);
        document.getElementById('app-body').removeChild(this.model.$el[0]);
    }
    /**
     * Deleting task in edit process
     *
     * @memberOf ModalEditTask.view
     * @param {Event} e
     * @param {HTMLElement|Node} target
     */
    modalRemove (e,target) {
        e.preventDefault();
        var User = app.User;
        while (target.parentNode.classList.contains('task') === false) {
            target = target.parentNode;
        }
        var keyy = target.parentNode.getAttribute('key');
        User.deleteTaskData(User.currentLogin, '/tasks/' + keyy);
        document.getElementById('app-body').removeChild(this.model.$el[0]);
    }
    /**
     * @memberOf ModalEditTask.view
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
