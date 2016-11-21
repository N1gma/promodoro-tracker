function Controller(model, view) {
    this.model = model;
    this.view = view;
}

Controller.prototype.start = function () {
    var viewContext = this.view;
    var modelContext = this.model;
    var selfContext = this;
    this.view.initComponent();
    document.addEventListener(modelContext.eventFires.type, function (e) { //observes over module
        viewContext.clearComponent();
        viewContext.renderComponent(modelContext.data);
    });
    this.listenTo('input-changed'); //observes over event
    this.model.setDefaultData();
};


Controller.prototype.listenTo = function (eventType) {
    var modelContext = this.model;
    var selfContext = this;
    document.addEventListener(eventType, function (e) {
        modelContext.getValuesFromDataComponent(e.data);
    });
};


