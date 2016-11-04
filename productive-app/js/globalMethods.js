var globalMethods = (function () {
    var obj = {};
    obj.activateTab = function (e) {
        for (var i = 0; i < e.currentTarget.children.length; i++) {
            if (e.currentTarget.children[i].classList.contains('active-tab')) {
                e.currentTarget.children[i].classList.remove('active-tab');
            }
        }
        e.target.classList.add('active-tab');
        return obj;
    };
    return obj;
})();
