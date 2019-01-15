import firebase from "firebase/app";
import "firebase/database";

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

// export the ref to the todos list
export const dbMovies = dbRef.ref("movies");
export const dbAuditoriums = dbRef.ref("auditorium");
export const dbShows = dbRef.ref("shows");
