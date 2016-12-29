var Renderer = app.Renderer;
describe('helpers', function () {
    it("'transform ", function () {
        sinon.spy(Renderer.helpers,'transformTime');
        Renderer.helpers.transformTime(370);
        Renderer.helpers.transformTime(40);
        Renderer.helpers.transformTime(360);
        assert(Renderer.helpers.transformTime.withArgs(370).returned('6h 10m'));
        assert(Renderer.helpers.transformTime.withArgs(40).returned('40m'));
        assert(Renderer.helpers.transformTime.withArgs(360).returned('6h '));
    });
});

