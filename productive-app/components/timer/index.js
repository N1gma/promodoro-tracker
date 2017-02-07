import Controller from './controller';

/**
 * Method which show timer on page
 *
 * @memberOf app.Renderer
 * @instance
 * @namespace Timer
 */
app.Renderer.renderTimer = function (target) {
    var helpers = app.Renderer.helpers;
    !helpers.isEmptyObj(app.User.settings) ? Controller.preinit(target)
        : app.User.getSettings(app.User.currentLogin, function () {
        Controller.preinit(target)
    })
};
