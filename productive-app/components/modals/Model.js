import Validator from './../../services/validator';

class Model {
    constructor(el) {
        this.$el = $(el);
        this.inputs = {
            title : this.$el.find('#title-input')[0],
            desc : this.$el.find('#description-input')[0]
        };
        this.datepicker = this.$el.find('#deadline-input')[0];
        this.radios = {
            categories: this.$el.find('.categories-choose-list')[0],
            priority : this.$el.find('.categories-choose-list')[1]
        };
        this.radios.categories.radios = $(this.radios.categories).find('input[name="ctg1"]');
        this.radios.priority.radios = $(this.radios.priority).find('input[name="ctg11"]');
        this.estimation = this.$el.find('.estimation-range')[0];
        this.Validator = Validator;
    }

    validateInit() {
        $(this.inputs.title).on('change', (e) => {
            this.validate(e.target,['empty', {
                name: 'maxLength',
                params: {
                    len : 8
                }
            }]);
        });
        $(this.inputs.desc).on('change', (e) => {
            this.validate(e.target,['empty', {
                name: 'maxLength',
                params: {
                    len : 14
                }
            }]);
        });
    }

    validate(target, options) {
        let validator = new this.Validator();
        let fieldName = $("label[for='" + target.id + "']").text();
        let results = validator.validate([{
            target: target,
            options: options
        }]);
        for (let i = 0; i < results[0].length; i++) {
            app.EventBus.publish('notify', {
                msg: results[i],
                type: 'fail'
            });
        }
    }
    checkResults(res) {
        let switcher = true;
        for (let i = 0; i < res.length; i++) {
            if (res[i].length > 0) {
                switcher = false;
            }
        }
        return switcher;
    }
    getModalConfirmData(){
        let self = this;
        return [
            {
                target: self.inputs.title,
                options: ['empty', {
                    name: 'maxLength',
                    params: {
                        len: 8
                    }
                }]
            },
            {
                target: self.inputs.desc,
                options: ['empty', {
                    name: 'maxLength',
                    params: {
                        len: 14
                    }
                }]
            },
            {
                target: Array.from(self.radios.categories.radios),
                origin: self.radios.categories,
                options: ['checked'],
                success: function (target) {
                    if (target.removeClass) {
                        target.removeClass('error-field');
                    } else {
                        target.classList.remove('error-field');
                    }
                },
                error: function (target) {
                    if (target.addClass) {
                        target.addClass('error-field');
                    } else {
                        target.classList.add('error-field');
                    }
                }
            },
            {
                target: self.datepicker,
                options: ['empty']
            },
            {
                target: Array.from(self.estimation.children),
                preventAction: true,
                options: [{
                    name: 'containClass',
                    params: {
                        askingClass: 'estimated'
                    }
                }]
            },
            {
                target: Array.from(self.radios.priority.radios),
                origin: self.radios.priority,
                options: ['checked'],
                success: function (target) {
                    if (target.removeClass) {
                        target.removeClass('error-field');
                    } else {
                        target.classList.remove('error-field');
                    }
                },
                error: function (target) {
                    if (target.addClass) {
                        target.addClass('error-field');
                    } else {
                        target.classList.add('error-field');
                    }
                }
            }
        ];
    }

}

export default Model;