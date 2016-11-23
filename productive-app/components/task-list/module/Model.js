export var tasks = {
    data: {},
    trashBufferZone :[],
    patchList: function (callback) {
        User.getData(User.currentLogin, 'tasks', function (value) {
            if(!value || value == []){
                console.log('empty list');
            }else{
                tasks.data = value;
            }
            callback();
        })
    },
    checkTrashBuffer:function (key) {
        for(var i = 0;i<this.trashBufferZone.length;i++){
            if(this.trashBufferZone[i] == key){
                return false;
            }
        }
        return true;
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