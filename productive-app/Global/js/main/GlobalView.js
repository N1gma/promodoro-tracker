(function(){
    /**
     * @namespace app
     * @type {{}}
     */
    window.app = {};
    /**
     * Global page render mechanism
     *
     * @memberOf app
     * @namespace Renderer
     */
    window.app.Renderer = {
        /**
         * Clears a content of chosen container
         *
         * @memberOf app.Renderer
         * @param {HTMLElement} target
         * @instance
         */
        clearContent: function (target) {
            while (target.firstElementChild) {
                target.removeChild(target.firstElementChild);
            }
        },
        /**
         * Renders a buttons
         *
         * @memberOf app.Renderer
         * @param {Array} list
         * @instance
         */
        renderButtons: function (list) {
            var fragment = document.createDocumentFragment();
            var container = document.createElement('div');
            container.classList.add('button-holder');
            fragment.appendChild(container);
            for (var i = 0; i < list.length; i++) {
                for (var j = 0; j < list[i].class.length; j++) {
                    list[i].node.classList.add(list[i].class[j]);
                }
                list[i].node.innerHTML = list[i].innerHtml;
                container.appendChild(list[i].node);
                if (list[i].listener) {
                    list[i].node.addEventListener('click', list[i].listener);
                }
            }
            document.getElementById('app-body').appendChild(fragment);
        }
    };
}());
