/**
 * memberOf app.Renderer
 * @namespace
 */
app.Renderer.helpers = {
    /**
     * Transforms Minutes in Minutes/Hours+'h' + Minutes%Hours+'m' (130 -> 2h 10m)
     *
     * memberOf app.Renderer
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
    /*validator(targets){
        let results = [];
        let iteration = 0;
        let valid = true;

        let defaultFns = {
            success: function (node) {
                if (node.removeClass) {
                    node.removeClass('error-field')
                } else {
                    node.classList.remove('error-field');
                }
            },
            error: function (node) {
                if (node.addClass) {
                    node.addClass('error-field')
                } else {
                    node.classList.add('error-field');
                }
            }
        };
        let validate = {
            empty: function (target) {
                if (target.val.trim().length === 0) {
                    results[iteration].push(" can't be empty");
                    valid = false;
                }
            },
            maxLength: function (target, params) {
                if (target.val.length > params.len) {
                    results[iteration].push(" maximum of " + params.len + ' characters');
                    valid = false;
                }
            },

            checked: function (target) {
                let switcher = false;
                if (Array.isArray(target.node)) {
                    for (let i = 0; i < target.node.length; i++) {
                        if (target.node[i].checked) {
                            switcher = true;
                        }
                    }
                } else {
                    if (target.node.checked) {
                        switcher = true;
                    }
                }
                if (!switcher){
                    results[iteration].push("checkboxes must be checked");
                    valid = false;
                }
            },
            containClass: function (target, params) {
                let switcher = false;
                if (Array.isArray(target.node)) {
                    for (let i = 0; i < target.node.length; i++) {
                        if(target.node[i].classList.contains(params.askingClass)) switcher=true;
                    }
                }else{
                    if(target.node.classList.contains(params.askingClass)) switcher=true;
                }
                if (!switcher){
                    results[iteration].push("checkboxes must be checked");
                    valid = false;
                }
            }
        };

        for (let i = 0; i < targets.length; i++) {
            results.push([]);
            let target = {};
            valid = true;
            target.val = targets[i].target.value;
            target.node = targets[i].target;
            let options = targets[i].options;
            let origin = targets[i].origin || target.node;
            let success = targets[i].success || defaultFns.success;
            let error = targets[i].error || defaultFns.error;
            for (let i = 0; i < options.length; i++) {
                if (typeof options[i] === 'object') {
                    validate[options[i].name](target, options[i].params);
                } else {
                    validate[options[i]](target);
                }
            }
            console.log(results);
            if(!targets[i].preventAction){
                if (valid) {
                    success(origin);
                } else {
                    error(origin);
                }
            }
            iteration++;
        }
        return results;
    }*/
};

