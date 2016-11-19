

var Router = {
    clearContent: function (target) {
        console.log(target);
        while (target.firstElementChild) {
            target.removeChild(target.firstElementChild)
        }
        var styleList = document.getElementsByTagName('style');
        console.log(styleList)
        /*for(var i = 0;i<styleList.length;i++){
            document.head.removeChild(styleList[i]);
        }*/
    }
};
