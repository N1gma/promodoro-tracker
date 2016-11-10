function Controller(model, view) {
    this.model = model;
    this.view = view;
    this.dataComponent = {}
}

Controller.prototype.start = function () {
    var viewContext = this.view;
    var modelContext = this.model;
    var selfContext = this;
    document.addEventListener('dispatch', function (e) {
        viewContext.clearComponent();
        viewContext.renderComponent(modelContext.data);
    });
    this.view.initComponent();
    this.dataComponent = this.setDataComponent(initComponent1);
    this.model.getValuesFromDataComponent(this.dataComponent.representData());
};

Controller.prototype.setDataComponent = function(func){
    var modelContext = this.model;
    var selfContext = this;
    document.addEventListener('dispatchinput', function (e) {
        modelContext.getValuesFromDataComponent(selfContext.dataComponent.representData());
    });
    return func();
};



