var Renderer = {
    clearContent: function (target) {
        while (target.firstElementChild) {
            target.removeChild(target.firstElementChild)
        }
    },
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
