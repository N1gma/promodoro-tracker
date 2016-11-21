export default class Controller {
    constructor(view, el) {
        this.view = view;
        this.el = el;
    }

    init() {
        var context = this;
        document.getElementById('modal-close').addEventListener('click', function (e) {
            e.preventDefault();
            document.body.removeChild(context.el);
        });
        document.getElementById('modal-confirm-add').addEventListener('click', function (e) {
            e.preventDefault();
            context.view.dropData();
        });
        document.getElementsByClassName('estimation-range')[0].addEventListener('click', function (e) {
            if (e.target.tagName.toUpperCase() == 'LI') {
                var parent = e.currentTarget;
                for (var i = 0; i<parent.children.length; i++) {
                    parent.children[i].classList.remove('estimated');
                }
                for (var i=0,j = 0; parent.children[i]!= e.target; i++,j++) {
                    parent.children[i].classList.add('estimated');
                }
                e.target.classList.add('estimated');
                e.currentTarget.estimation = j;
            }
        })
    }
}