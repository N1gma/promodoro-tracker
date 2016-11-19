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

