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

// calls database to get the data
db.ref("visningar").on("value", getData, errData);

// callback when getting data
function getData(data) {
  let gotJSON = data.val();

  Vue.$store.shows = gotJSON;
  console.log(Vue.$store.shows);
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

      // starts Vue after collecting all data from api
      if (movieCounter === Vue.$store.movies.length) {
        new Vue({
          router,
          render: h => h(App)
        }).$mount("#app");

        console.log(Vue.$store.movies);
      }
    });
}
