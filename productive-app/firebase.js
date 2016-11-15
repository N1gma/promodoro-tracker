
var config = {
    apiKey: "AIzaSyAxCZC-gz6f6pCxlPli1c-Vigmj0KVARyg",
    authDomain: "productive-app.firebaseapp.com",
    databaseURL: "https://productive-app.firebaseio.com",
    storageBucket: "productive-app.appspot.com",
    messagingSenderId: "587753540042"
};
firebase.initializeApp(config);
var database = firebase.database();

/*firebase.auth().signOut();

 firebase.auth().onAuthStateChanged(function(user) {
 if(!user) {
 window.location = 'index.html';
 }
 });*/
document.addEventListener('DOMContentLoaded', function () {
    document.getElementsByClassName('center-inputs')[0].addEventListener('submit', function (e) {
        e.preventDefault();
        var val1 = document.getElementById('name_input').value;
        var val2 = document.getElementById('pw_input').value;
        firebase.auth()
            .signInWithEmailAndPassword(val1, val2);
    });
    /*document.getElementById('log_out').addEventListener('click', function (e) {
        firebase.auth().signOut();
    })*/
});



