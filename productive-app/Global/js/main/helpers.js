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
    ifSolvedThen(requiredActions, callback){
        app.EventBusLocal.resolvedCount = 0;
        var interval = setInterval(function(){
            var currentActions = app.EventBusLocal.resolvedCount;
            if(requiredActions <= currentActions || !navigator.onLine){
                console.log(requiredActions);
                console.log(currentActions);
                app.EventBusLocal.resolvedCount = 0;
                callback();
                clearInterval(interval);
            }
        },100);
        //var result = true;
        /*var selfCall = app.Renderer.helpers.ifSolvedThen;
        for (var i = 0; i < fns.length; i++) {
            if(arguments[i].solved = false){
                setTimeout(function(){
                    selfCall(fns);
                },250)
            }
        }
        action();*/
    },
    isEmptyObj(obj){
            // null and undefined are "empty"
            if (obj == null) return true;

            // Assume if it has a length property with a non-zero value
            // that that property is correct.
            if (obj.length > 0)    return false;
            if (obj.length === 0)  return true;

            // If it isn't an object at this point
            // it is empty, but it can't be anything *but* empty
            // Is it empty?  Depends on your application.
            if (typeof obj !== "object") return true;

            // Otherwise, does it have any properties of its own?
            // Note that this doesn't handle
            // toString and valueOf enumeration bugs in IE < 9
            for (var key in obj) {
                if (hasOwnProperty.call(obj, key)) return false;
            }
            return true;
    }
};

