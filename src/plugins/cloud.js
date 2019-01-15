import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";

// connect to firebase database
firebase.initializeApp({
  apiKey: "AIzaSyBRrkp5xlsol3iPFmMoUg_c6tz9bNmoag0",
  authDomain: "arcquest-85bc5.firebaseapp.com",
  databaseURL: "https://arcquest-85bc5.firebaseio.com",
  projectId: "arcquest-85bc5",
  storageBucket: "arcquest-85bc5.appspot.com",
  messagingSenderId: "727232800872"
});

let dbRef = firebase.database();
let fbRef = firebase.firestore();
fbRef.settings({
  timestampsInSnapshots: true
});
// export the ref to the todos list
export const db = dbRef.ref("todos");

export const fb = fbRef.collection("movies");

fb.get().then(query => {
  query.forEach(doc => {
    let data = doc.data();
    console.log(data.test);
  });
});

// fb.doc('test').set(object)
