export default class Controller {
    constructor(el,view) {
        this.el = el;
        this.view = view;
    }

    init(target) {
        var context = this;
        document.getElementById('modal-close').addEventListener('click', function listener (e) {
            e.preventDefault();
            document.body.removeChild(context.el);
        });
        document.getElementById('modal-confirm-edit').addEventListener('click', function listener (e) {
            e.preventDefault();
            while (target.parentNode.classList.contains('task') == false) {
                target = target.parentNode;
            }
            var keyy = target.parentNode.getAttribute('key');
            User.setTaskData(User.currentLogin, '/tasks/' + keyy);
            //EventBusLocalTasks.publish('task-added')
            document.body.removeChild(context.el);
        });
        document.getElementById('modal-remove').addEventListener('click', function (e) {
            e.preventDefault();
            while (target.parentNode.classList.contains('task') == false) {
                target = target.parentNode;
            }
            var keyy = target.parentNode.getAttribute('key');
            User.deleteTaskData(User.currentLogin, '/tasks/' + keyy);
            document.body.removeChild(context.el);
        });
        document.getElementsByClassName('estimation-range')[0].addEventListener('click', function (e) {
            if (e.target.tagName.toUpperCase() == 'LI') {
                var parent = e.currentTarget;
                for (var i = 0; i < parent.children.length; i++) {
                    parent.children[i].classList.remove('estimated');
                }
                for (var i = 0, j = 0; parent.children[i] != e.target; i++, j++) {
                    parent.children[i].classList.add('estimated');
                }
                e.target.classList.add('estimated');
                e.currentTarget.estimation = j+1;
            }
        });
        console.log(this.el)
    }
}