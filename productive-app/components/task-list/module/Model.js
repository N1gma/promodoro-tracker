export var tasks = {
    data: {},
    patchList: function (callback) {
        User.getData(User.currentLogin, 'tasks', function (value) {
            if(!value || value == []){
                console.log('empty list');
            }else{
                tasks.data = value;
            }
            callback();
        })
    }
};

class taskModel {
    constructor(title, description, createDate, startDate, deadLine, isActive, estimationTotal,
                estimationUsed, priority, category) {
        this.title = title;
        this.description = description;
        this.createDate = createDate;
        this.startDate = startDate;
        this.tideadLinetle = deadLine;
        this.isActive = isActive;
        this.estimationTotal = estimationTotal;
        this.estimationUsed = estimationUsed;
        this.priority = priority;
        this.category = category;
    }
}