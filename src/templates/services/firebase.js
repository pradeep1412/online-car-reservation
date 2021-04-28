import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "your are apikey",
    authDomain: "your are ",
    projectId: "your are projectId",
    storageBucket: "your are storageBucket",
    messagingSenderId: "your are messagingSenderId",
    appId: "your are appId",
    measurementId: "your are measurementId"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const auth = firebase.auth();
const store = firebase.database();
// const functions = require('firebase-function');

// exports.helloworld = functions.https.onRequest((request,response) =>{
//   response.send("hello world!");
// });


export {db,auth,firebaseConfig,store};
