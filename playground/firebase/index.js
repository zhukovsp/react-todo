var moment = require('moment');
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDloK4svf7RKOAPFgTP6sMOVsBiN9iqDYQ",
    authDomain: "todo-app-9ae0d.firebaseapp.com",
    databaseURL: "https://todo-app-9ae0d.firebaseio.com",
    storageBucket: "todo-app-9ae0d.appspot.com",
    messagingSenderId: "689855714008"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  },
  todos: {
    text: ''
  }
});

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });
// console.log('Todo id', newNoteRef.key);



// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('User ref changed', snapshot.val());
// });
//
// firebaseRef.child('user').update({name: 'Mike'});
//
// firebaseRef.child('app').update({name: 'Something else!'});

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.off();
//
// firebaseRef.update({isRunning: false});

// firebaseRef.update({
//   isRunning: null
// });
// firebaseRef.child('user/age').remove();
// firebaseRef.child('use').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.update({
//   'app/name': 'Todo Application S',
//   'user/name': 'Sergey'
// });
//
//
// firebaseRef.child('app').update({ name: 'Todo Application S2'});
// firebaseRef.child('user').update({ name: 'Serge'});
