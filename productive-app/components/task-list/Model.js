class Model  {
    constructor(){
        this.data = {};
    }
    /**
     * refresh task list data
     *
     * @memberOf DailyList.tasks
     * @param {function} callback
     */
    patchList (callback) {
        var self = this;
        //self.patchList.resolved = false;
        app.User.getData(app.User.currentLogin, 'tasks', function (value) {
            if (!value || value === []) {
                console.log('empty list');
            } else {
                self.data = value;
            }
            callback();
        });
    }
    /**
     * check if task in trash
     *
     * @memberOf DailyList.tasks
     * @param {string} key - task ID
     * @returns {boolean}
     */
    checkTrashBuffer (key) {
        for (var i = 0; i < app.User.trashData.length; i++) {
            if (app.User.trashData[i] === key) {
                return false;
            }
        }
        return true;
    }
    /**
     * compare dates to render
     *
     * @memberOf DailyList.tasks
     * @param {string} data
     * @returns {Object}
     */
    getStruct (data) {
        var structure = {};
        for (var key in data) {
                if (!this.compareDates(data[key].deadline)) {
                    if (structure[data[key].category]) {
                        structure[data[key].category].push(key);
                    } else if (!structure[data[key].category]) {
                        structure[data[key].category] = [];
                        structure[data[key].category].push(key);
                    }
                }

        }
        return structure;
    }
    /**
     * filters tasks to render
     *
     * @memberOf DailyList.tasks
     * @param {string} data
     * @param {string} type
     * @returns {Object}
     */
    getFilterStruct (data, type) {
        var structure = [];
        for (var key in data) {
                if (!this.compareDates(data[key].deadline)) {
                    if (data[key].priority === type) {
                        structure.push(key);
                    }
                }

        }
        return {
            type: type,
            list: structure
        };
    }
    /**
     * compare dates
     *
     * @memberOf DailyList.tasks
     * @param {Object} date
     * @returns {Boolean}
     */
    compareDates (date) {
        var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var currentDate = new Date();
        return (monthArray[parseInt(currentDate.getMonth(), 10)] === date.month &&
        (parseInt(currentDate.getDate(), 10) === +date.day) &&
        (parseInt(currentDate.getFullYear(), 10) === +date.year));
    }
}


export default Model;
