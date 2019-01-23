<!-- 
    When creating new pages you need to update the navbar
 -->
<template>
  <nav
    v-if="!mobile"
    class="navbar navbar-expand-lg navbar-light bg-light mb-0 row align-self-center"
  >
    <div>
      <router-link to="/">GRAND</router-link>
      <div class="category-line"></div>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav justify-content-center">
        <li class="nav-item active">
          <router-link to="/">Start</router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/kalender">Kalender</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">Om oss</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/kontakt">Kontakt</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <!-- link page toggled on hamburger -->
  <section v-else>
    <nav id="nav-mobile">
      <router-link to="/" class="col-4">Start</router-link>
      <router-link to="/kalender" class="col-4">Kalender</router-link>
      <router-link to="/about" class="col-4">Om oss</router-link>
    </nav>
    <!-- the bottom navbar -->
    <div>
      <!-- hamburger -->
      <i class="fas fa-search" @click="searching = !searching"></i>
    </div>
    <div v-if="searching">
      <i class="fas fa-search"></i>
      <!-- search input -->
      <input type="text" v-model="searchMovie" placeholder="Sök film">
      <i class="fas fa-times" @click="searching = !searching"></i>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import $ from "jquery";
import { eventBus } from "@/main";

export default {
  data() {
    return {
      searchMovie: "",
      searching: false,
      mobile: this.startMobile()
    };
  },
  watch: {
    searchMovie(input) {
      eventBus.$emit("search-query", input);
    }
  },
  methods: {
    startMobile() {
      return window.innerWidth < 600 ? true : false;
    }
  },
  created() {
    $(window).on("resize", () => {
      this.mobile = window.innerWidth < 600 ? true : false;
    });
  },
  mounted() {
    $("nav a").on("click", () => {
      $("#navbarNav").removeClass("show");
    });
  }
};
</script>

<style>

:root {
  --main-background-color: whitesmoke;
      /*whitesmoke is for background and text inside special elements*/
  --main-element-color: #36454f; /*"CHARCOAL*/
      /*Charcoal is for text on main pages and navbar background*/
  --special-element-color: #b08a43; /*"BRASS"*/
      /*Brass is for special elements like buttons*/
  --main-font-family: 'Montserrat', sans-serif;

  /* 
    Use global color-variables with:
    EXAMPLE: "color: var(--main-element-color);"
*/
}
nav {
  width: 100%;
  position: absolute;
  padding: 30px;
  background-color: var(--main-element-color);
  color: var(--special-element-color);
  font-family: var(--main-font-family);
  font-weight: 100;
  font-size: 1.3em;
}
#nav-mobile {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
}
nav img {
  width: 1.5em;
  height: 1.5em;
  margin-right: 5px;
}
nav a {
  color: var(--main-background-color);
}
nav > div > a {
  /* position: absolute; */
  font-size: 1.8em;
  top: 0;
  right: 3%;
}
nav > div > div {
  margin: 0;
}
nav > div > a:hover {
  text-decoration: none;
  color: #fff;
}
.navbar-expand-lg li {
  text-align: start;
  margin-left: 3%;
}
ul {
  width: 100%;
}
li {
  margin-right: 3%;
}
li > a {
  font-size: 1.4em;
}
li > a:hover {
  text-decoration: none;
  color: rgb(163, 127, 7);
}
li a.router-link-exact-active {
  color: rgb(255, 196, 0);
}
</style>
