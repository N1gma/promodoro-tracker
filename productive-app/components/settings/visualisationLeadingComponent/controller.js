function Controller(model, view) {
    this.model = model;
    this.view = view;
    this.dataComponent = {}
}

Controller.prototype.start = function () {
    var viewContext = this.view;
    var modelContext = this.model;
    var selfContext = this;
    document.addEventListener(modelContext.eventFires.type, function (e) { //observes over model
        viewContext.clearComponent();
        viewContext.renderComponent(modelContext.data);
    });
    this.view.initComponent();
    this.dataComponent = this.setDataComponent(inputsComponent1);
    this.listenTo(this.dataComponent); //observes over connected component
    this.model.getValuesFromDataComponent(this.dataComponent.representData());
};

Controller.prototype.setDataComponent = function(func){ //connect dependent data component to main visualisation component
    return func();
};

Controller.prototype.listenTo = function (component) {
    var modelContext = this.model;
    var selfContext = this;
    document.addEventListener(selfContext.dataComponent.eventFires.type, function (e) {
        modelContext.getValuesFromDataComponent(selfContext.dataComponent.representData());
    });
};


