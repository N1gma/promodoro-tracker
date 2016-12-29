import {tasks as model}  from './../../components/task-list/daily_list/Model.js';
import Controller  from './../../components/task-list/daily_list/Controller.js';

var assert = require('assert');

var User = app.User;
var EventBusLocal = app.EventBusLocal;

var tasks = {
    "-KXalbMvKlpVVEw8qu9a": {
        "category": "other",
        "deadline": {
            "day": "12",
            "fullDate": "December 12, 2016",
            "month": "December",
            "year": "2016"
        },
        "description": "fghfghfdgfdg21",
        "estimation": "estimate-3",
        "priority": "urgent",
        "title": "fghfgh11"
    },
    "-KYAjjJHLAyyeawZNS1P": {
        "category": "hobby",
        "deadline": {
            "day": "15",
            "fullDate": "December 15, 2016",
            "month": "December",
            "year": "2016"
        },
        "description": "fsdf",
        "estimation": "estimate-3",
        "priority": "middle",
        "title": "fsdf"
    }
};


describe('daily-list', function () {
    it("'s data", function () {
        assert.equal(JSON.stringify(model.data), JSON.stringify({}));
    });
    it("'s patchList", function () {
        sinon.stub(User, 'getData');
        model.patchList();
        assert(User.getData.called);
    });
    it("'s checkTrashBuffer", function () {
        sinon.spy(model, 'checkTrashBuffer');
        User.trashData = [];
        User.trashData.push('11');
        model.checkTrashBuffer('11');
        assert(model.checkTrashBuffer.returned(false));
    });
    it("'s getStruct", function () {
        sinon.spy(model, 'getStruct');
        model.getStruct(tasks);
        assert(model.getStruct.returned(
            {
                other: ['-KXalbMvKlpVVEw8qu9a'],
                hobby: ['-KYAjjJHLAyyeawZNS1P']
            }
        ));
    });
    it("'s getFilterStruct", function () {
        sinon.spy(model, 'getFilterStruct');
        model.getFilterStruct(tasks, 'middle');
        assert(model.getFilterStruct.returned(
            {
                type: 'middle',
                list: ['-KYAjjJHLAyyeawZNS1P']
            }
        ))
    });
});

describe('daily-list-full', function () {
    var controller  = new Controller(model, EventBusLocal);
    sinon.stub(console, 'log');
    it("'s initController ", function () {
        sinon.stub(controller.model, 'patchList');
        var el = 'some element';
        controller.initController();
        assert(controller.model.patchList.called);
        controller.model.patchList.restore();
    });
    it(" should subscribe fore taks filter ", function () {
        sinon.spy(controller, 'setEventListeners');
        sinon.stub(document.body, 'addEventListener');
        sinon.stub(controller, 'initController');
        controller.setEventListeners(document.body);
        EventBusLocal.publish('filter-tasks','urgent');
        assert(controller.initController.called);
    });
});