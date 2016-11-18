var config = {
    apiKey: "AIzaSyAxCZC-gz6f6pCxlPli1c-Vigmj0KVARyg",
    authDomain: "productive-app.firebaseapp.com",
    databaseURL: "https://productive-app.firebaseio.com",
    storageBucket: "productive-app.appspot.com",
    messagingSenderId: "587753540042"
};
firebase.initializeApp(config);
var database = firebase.database();

//firebase.auth().signOut();

firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
        localStorage.setItem('user',false)
    }
    if (user) {
        localStorage.setItem('user',true)
    }
});

/*document.getElementById('log_out').addEventListener('click', function (e) {
 firebase.auth().signOut();
 })*/




