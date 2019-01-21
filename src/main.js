import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Store from "@/plugins/store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from "@/plugins/cloud";

// this creates an object to store variables in
// it loads the store into the Vue object
// which every component is a child of
Vue.$store = new Store();
Vue.prototype.$store = Vue.$store;

Vue.config.productionTip = false;

// the 3 JSON files are stored in their own
// target reference
let refMovies = "movies",
  refAudits = "auditorium",
  refShows = "shows";

// calls database to get the data
// db.ref(refMovies).on("value", getData, errData);
// db.ref(refAudits).on("value", getData, errData);
// db.ref(refShows).on("value", getData, errData);

// count all callbacks before starting Vue
let callbackCounter = 0;

// callback when getting data
function getData(data) {
  let gotJSON = data.val();

  callbackCounter++;
  // the same callback is called on all three
  // ref connections
  // and each json-tree is stored in their own global
  switch (data.ref.key) {
    case refMovies:
      Vue.$store.movies = gotJSON;
      break;
    case refAudits:
      Vue.$store.auditoriums = gotJSON;
      break;
    case refShows:
      Vue.$store.shows = gotJSON;
      break;
    default:
  }

  // load all data from firebase before
  // starting the Vue app
  // if (callbackCounter === 3) {
  //   new Vue({
  //     router,
  //     render: h => h(App)
  //   }).$mount("#app");
  // }
}
function errData(err) {
  console.log(err);
}

let movielist = [
  "Fantastic+Beasts-+The+Crimes+of+Grindelwald",
  "Glass",
  "Hunter+Killer",
  "The+Grinch",
  "A+Star+Is+Born",
  "Bohemian+Rhapsody",
  "Lego+movie+2",
  "Ralph+Breaks+the+Internet",
  "Aquaman",
  "A+Dog's+Way+Home",
  "Bumblebee",
  "On+the+Basis+of+Sex",
  "Mary+Poppins+Returns",
  "Escape+room&y=2018",
  "Vice&y=2018",
  "Spider-Man%3A+Into+the+Spider-Verse"
];

let movieCounter = 0;

for (let query of movielist) {
  fetch("https://www.omdbapi.com/?t=" + query + Vue.$store.apikey)
    .then(res => {
      return res.json();
    })
    .then(res => {

      movieCounter++;

      res.Link = query;
      Vue.$store.movies.push(res);

      if (movieCounter === Vue.$store.movies.length) {
        new Vue({
          router,
          render: h => h(App)
        }).$mount("#app");
      }
    });
}
console.log(Vue.$store.movies);

