

var Router = {
    clearContent: function (target) {
        console.log(target)
        while (target.firstElementChild) {
            target.removeChild(target.firstElementChild)
        }
    }
};
