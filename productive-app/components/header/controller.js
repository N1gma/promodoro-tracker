import View from 'view'
class Controller{
    constructor(view){
        this.view=view
    }
    signOut(){
        firebase.auth().signOut();
    }
}

var headerController = new Controller(new View());

document.getElementById('log_out').addEventListener('click', function (e) {
    context.eBus.publish('logOut');
});




