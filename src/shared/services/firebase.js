import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBLmc--wEdWqrkGd2S97OQPQM4UyjGWvo0",
  authDomain: "dpack-7ea45.firebaseapp.com",
  databaseURL: "https://dpack-7ea45.firebaseio.com",
  projectId: "dpack-7ea45",
  storageBucket: "dpack-7ea45.appspot.com",
  messagingSenderId: "161042332693"
};

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseApp = firebase.initializeApp(config);