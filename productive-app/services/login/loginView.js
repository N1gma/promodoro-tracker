/**
 * @param {CEventBus} eBus
 * @constructor
 */
function loginView(eBus) {
    this.eBus = eBus;
}
/**
 * memberOf loginView
 * @param {Event} e
 */
loginView.prototype.auth = function (e) {
    var context = this;
    var val1 = document.getElementById('name_input').value;
    var val2 = document.getElementById('pw_input').value;
    firebase.auth().signInWithEmailAndPassword(val1, val2)
        .catch(function (error) {
            var msgs = document.getElementsByClassName('invalid_msg');
            for (var i = 0; i < msgs.length; i++) {
                msgs[i].style.display = 'block';
            }
            app.EventBus.publish('notify',{
                msg:'Invalid login/password',
                type:'fail'
            });
    });
};
/**
 * memberOf loginView
 */
loginView.prototype.logOut = function(){
    firebase.auth().signOut();
};

export default loginView;


