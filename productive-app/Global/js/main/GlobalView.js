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
         * @param {boolean} [selfDestruction]
         * @instance
         */
        clearContent: function (target,selfDestruction) {
            if(selfDestruction){
                target.parentNode.removeChild(target);
            }else{
                while (target.firstElementChild) {
                    target.removeChild(target.firstElementChild);
                }
            }
            if(app.EventBusLocalTimer.timer){
                clearInterval(app.EventBusLocalTimer.timer.timeout)
            }
        },
        /**
         * Renders a buttons
         *
         * @memberOf app.Renderer
         * @param {Array} list
         * @param {String} [holderClass]
         * @instance
         */
        renderButtons: function (list,holderClass) {
            var fragment = document.createDocumentFragment();
            var container = document.createElement('div');
            if(holderClass){
                container.classList.add(holderClass);
            }else{
                container.classList.add('button-holder');
            }
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
