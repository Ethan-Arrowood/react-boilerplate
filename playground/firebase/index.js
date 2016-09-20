import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBk_9SG0t8eky8fTy8-tu_XRlr2Y7OY67s",
    authDomain: "arrowood-todo-app.firebaseapp.com",
    databaseURL: "https://arrowood-todo-app.firebaseio.com",
    storageBucket: "arrowood-todo-app.appspot.com",
    messagingSenderId: "335701366254"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo Application',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Ethan',
    age: 17
  }
});
var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});
todosRef.push({
  text: 'Code'
});
todosRef.push({
  text: 'More coding'
});

// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('Got value: ', snapshot.val());
// });
//
// firebaseRef.child('user').update({
//   name: 'Ethan Arrowood'
// })
//
// firebaseRef.child('app').update({
//   name: 'Todo App'
// })
