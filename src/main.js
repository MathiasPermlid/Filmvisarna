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
db.ref(refMovies).on("value", getData, errData);
db.ref(refAudits).on("value", getData, errData);
db.ref(refShows).on("value", getData, errData);

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
      Vue.$store.ready = true;
      break;
    case refAudits:
      Vue.$store.auditoriums = gotJSON;
      break;
    case refShows:
      Vue.$store.shows = gotJSON;
      break;
    default:
  }

  if (callbackCounter === 3) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
}
function errData(err) {
  console.log(err);
}
