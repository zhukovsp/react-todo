import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyDloK4svf7RKOAPFgTP6sMOVsBiN9iqDYQ",
      authDomain: "todo-app-9ae0d.firebaseapp.com",
      databaseURL: "https://todo-app-9ae0d.firebaseio.com",
      storageBucket: "todo-app-9ae0d.appspot.com",
      messagingSenderId: "689855714008"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
