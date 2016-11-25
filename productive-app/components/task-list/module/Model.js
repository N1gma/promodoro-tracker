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
    },
    getStruct:function(data){
        var structure = {};
        for(var key in data){
            if(structure[data[key].category]){
                structure[data[key].category].push(key);
            }else if(!structure[data[key].category]){
                structure[data[key].category]=[];
                structure[data[key].category].push(key);
            }
        }
        return structure;
    }
};

