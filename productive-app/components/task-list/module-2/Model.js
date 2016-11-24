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

