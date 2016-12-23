import {tasks}  from './../../components/task-list/daily_list/Model.js';
var assert = require('assert');


describe('daily-list', function () {
    beforeEach(function () {
        model = tasks;
    });
    it("'s data", function () {
        assert.equal(JSON.stringify(model.data), JSON.stringify({}));
    });
    it("'s patchList", function () {
        sinon.stub(User,'getData');
        model.patchList();
        assert(User.getData.called);
    });
});