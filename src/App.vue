<template>
  <div id="app">
    <!-- HEADER -->
    <NavBar/>
    <!-- MAIN VIEW -->
    <router-view/>
    <!-- FOOTER -->
    <Footer/>
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import { db } from "@/plugins/cloud";

export default {
  name: "app",
  components: {
    NavBar,
    Footer
  },
  created() {
    // use right this-scope in callback
    let vm = this;

    // the 3 JSON files are stored in their own
    // target reference
    let refMovies = "movies",
      refAudits = "auditorium",
      refShows = "shows";

    // calls database to get the data
    db.ref(refMovies).on("value", getData, errData);
    db.ref(refAudits).on("value", getData, errData);
    db.ref(refShows).on("value", getData, errData);

    // callback when getting data
    function getData(data) {
      let gotJSON = data.val();

      // the same callback is called on all three
      // ref connections
      // and each json-tree is stored in their own global
      switch (data.ref.key) {
        case refMovies:
          vm.$store.movies = gotJSON;
          break;
        case refAudits:
          vm.$store.auditoriums = gotJSON;
          break;
        case refShows:
          vm.$store.shows = gotJSON;
          break;
        default:
      }
    }
    function errData(err) {
      console.log(err);
    }
  }
};
</script>

<style src="./style.css"></style>
