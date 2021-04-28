import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    
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
