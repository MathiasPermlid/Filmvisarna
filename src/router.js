import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import MovieInfo from "./views/MovieInfo.vue";
import About from "./views/About.vue";
import MissingPage from "./views/MissingPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/movieinfo",
      name: "MovieInfo",
      component: MovieInfo
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    // using path "*" matches every route
    // put this last to catch all missing routes
    {
      path: "*",
      name: "Missing-Page",
      component: MissingPage
    }
  ]
});
