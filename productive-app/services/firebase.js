(function(){
    window.firebase = require("firebase");
    var config = {
        apiKey: "AIzaSyAxCZC-gz6f6pCxlPli1c-Vigmj0KVARyg",
        authDomain: "productive-app.firebaseapp.com",
        databaseURL: "https://productive-app.firebaseio.com",
        storageBucket: "productive-app.appspot.com",
        messagingSenderId: "587753540042"
    };
    firebase.initializeApp(config);
    window.database = firebase.database();
})();
