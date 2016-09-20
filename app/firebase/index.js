import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyBk_9SG0t8eky8fTy8-tu_XRlr2Y7OY67s",
      authDomain: "arrowood-todo-app.firebaseapp.com",
      databaseURL: "https://arrowood-todo-app.firebaseio.com",
      storageBucket: "arrowood-todo-app.appspot.com",
      messagingSenderId: "335701366254"
    };
  firebase.initializeApp(config);
} catch (e) {
  console.log(e)
}

export var firebaseRef = firebase.database().ref();
export default firebase;
