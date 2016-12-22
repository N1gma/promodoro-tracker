function View(eBus) {
    this.eBus = eBus;
}

View.prototype.auth = function (e) {
    var context = this;
    var val1 = document.getElementById('name_input').value;
    var val2 = document.getElementById('pw_input').value;
    firebase.auth().signInWithEmailAndPassword(val1, val2)
        .catch(function (error) {
            var msgs = document.getElementsByClassName('invalid_msg');
            for (var i = 0; i < msgs.length; i++) {
                msgs[i].style.display = 'block';
            }
            EventBus.publish('notify',{
                msg:'Invalid login/password',
                type:'fail'
            })
    })
};

View.prototype.logOut = function(){
    firebase.auth().signOut();
};



