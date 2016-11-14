var config = {
    apiKey: "AIzaSyAxCZC-gz6f6pCxlPli1c-Vigmj0KVARyg",
    authDomain: "productive-app.firebaseapp.com",
    databaseURL: "https://productive-app.firebaseio.com",
    storageBucket: "productive-app.appspot.com",
    messagingSenderId: "587753540042"
};
firebase.initializeApp(config);
var database = firebase.database();
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log(user)
    } else {

    }
});
//database.auth().createUserWithEmailAndPassword('oleksandr_chornobai@epam.com', 'eE4180029818').catch(function(error) {});
firebase.auth().signInWithEmailAndPassword('oleksandr_chornobai@epam.com', 'eE4180029818');

var el = database.ref('https://productive-app.firebaseio.com/Accounts');
console.log(el)
