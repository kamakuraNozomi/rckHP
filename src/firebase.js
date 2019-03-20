import * as firebase from "firebase";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCoTxG8f7939EaPucMHiGykPxKAMGQ1oCs",
  authDomain: "diary-f11e7.firebaseapp.com",
  databaseURL: "https://diary-f11e7.firebaseio.com",
  projectId: "diary-f11e7",
  storageBucket: "diary-f11e7.appspot.com",
  messagingSenderId: "437213458354"
};
firebase.initializeApp(config);

export const database = firebase.database().ref("/notes");

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
