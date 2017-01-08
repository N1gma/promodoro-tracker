export default class Validator{
    constructor() {
        this.results = [];
        this.iteration = 0;
        this.valid = true;
        this.defaultFns = {
            success: function (node) {
                if (node.removeClass) {
                    node.removeClass('error-field');
                } else {
                    node.classList.remove('error-field');
                }
            },
            error: function (node) {
                if (node.addClass) {
                    node.addClass('error-field');
                } else {
                    node.classList.add('error-field');
                }
            }
        };
        this.methods = {
            empty:  (target) => {
                if (target.val.trim().length === 0)  {
                    this.results[this.iteration].push(target.title +" can't be empty");
                    this.valid = false;
                }
            },
            maxLength: (target, params) => {
                if (target.val.length > params.len) {
                    this.results[this.iteration].push(target.title +" maximum of " + params.len + ' characters');
                    this.valid = false;
                }
            },

            checked: (target) => {
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
                    this.results[this.iteration].push(target.title +" checkbox must be checked");
                    this.valid = false;
                }
            },
            containClass: (target, params) =>{
                let switcher = false;
                if (Array.isArray(target.node)) {
                    for (let i = 0; i < target.node.length; i++) {
                        if(target.node[i].classList.contains(params.askingClass)){
                            switcher=true;
                        }
                    }
                }else{
                    if(target.node.classList.contains(params.askingClass)) {
                        switcher=true;
                    }
                }
                if (!switcher){
                    this.results[this.iteration].push("checkbox must be checked");
                    this.valid = false;
                }
            }
        };
    }
    validate(targets){
        for (let i = 0; i < targets.length; i++) {
            this.results.push([]);
            this.createConfig(targets[i]);
            this.valid = true;
            let options = this.conf.options;
            let target = this.conf.target;
            for (let i = 0; i < options.length; i++) {
                if (typeof this.conf.options[i] === 'object') {
                    this.methods[options[i].name](target, options[i].params);
                } else {
                    this.methods[options[i]](target);
                }
            }
            if(!this.conf.preventAction){
                if (this.valid) {
                    this.conf.success(target.origin);
                } else {
                    this.conf.error(target.origin);
                }
            }
            this.iteration++;
        }
        return this.results;
    }

    createConfig(target){
        let context = this;
        this.conf = {
            target:{
                val: target.target.value,
                node: target.target,
            },
            options: target.options,
            success : target.success || context.defaultFns.success,
            error : target.error || context.defaultFns.error,
            preventAction: target.preventAction || false
        };
        this.conf.target.origin = target.origin || this.conf.target.node;
        if(this.conf.target.origin.previousElementSibling){
            this.conf.target.title = this.conf.target.origin.previousElementSibling.innerText;
        }
    }
}


