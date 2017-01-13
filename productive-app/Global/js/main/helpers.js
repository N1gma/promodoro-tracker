/**
 * memberOf app.Renderer
 * @namespace
 */
app.Renderer.helpers = {
    /**
     * Transforms Minutes in Minutes/Hours+'h' + Minutes%Hours+'m' (130 -> 2h 10m)
     *
     * memberOf app.Renderer.helpers
     * @instance
     * returns {String}
     * @param {Number} time
     */
    transformTime(time){
        var hours = '';
        var minutes = '';
        if (time / 60 >= 1) {
            hours = parseInt(time / 60) + 'h ';
        }
        if (parseInt(time % 60) !== 0) {
            minutes = parseInt(time % 60) + 'm';
        }
        return hours + minutes;
    },
    arrayToObject(array){
        var obj = {};
        for (var i = 0; i < array.length; i++) {
            obj[i] = array[i];
        }
        return obj;
    },
    objectToArray(obj){
        let arr = [];
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                arr.push(obj[key]);
            }
        }
        return arr;
    },
    /**
     * extract CSS text from '!!css-loader!less-loader!./style.less' loader processing result object,
     * returns style node with this css
     *
     * memberOf app.Renderer.helpers
     * @instance
     * returns {HTMLElement}
     * @param {String} css
     */
    getCss(css){
        var elCss = document.createElement('style');
        elCss.innerHTML = css['0'][1];
        return elCss;
    },
    throttle(fn, threshhold, scope){
        threshhold || (threshhold = 250);
        var last, deferTimer;
        return function () {
            var context = scope || this;
            var now = +new Date,
                args = arguments;
            if (last && now < last + threshhold) {
                clearTimeout(deferTimer);
                deferTimer = setTimeout(function () {
                    last = now;
                    fn.apply(context, args);
                }, threshhold);
            } else {
                last = now;
                fn.apply(context, args);
            }
        };
    },
    isSolved(){
        for (var i = 0; i < arguments.length; i++) {
            arguments[i].solved = false;
        }
    }
};

