function Model(el) {
    this.el = el;
}

function SingletonModel(el, name) {
    Model.call(this, el);
    this.name = name;
}

SingletonModel.names = [];
SingletonModel.isSingle = function (name) {
    if (SingletonModel.names.indexOf(name) === -1) {
        SingletonModel.names.push(name);
        return true;
    } else {
        return false;
    }
};

SingletonModel.prototype = Object.create(Model.prototype);
SingletonModel.prototype.constructor = SingletonModel;
SingletonModel.prototype.clearSelf = function () {
    var name = this.name;
    var Model = this.constructor;
    Model.names.splice(Model.names.indexOf(name), 1);
};

export {Model, SingletonModel};