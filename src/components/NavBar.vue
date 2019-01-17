<!-- 
    When creating new pages you need to update the navbar
 -->
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-0 container row rounded align-self-center">
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
    <router-link to="/">Filmvisarna</router-link>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav justify-content-center">
        <li class="nav-item active">
          <router-link to="/">Start</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">Om oss</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
/* eslint-disable */
import $ from "jquery";

export default {
  mounted() {
    $("nav a").on("click", () => {
      $("#navbarNav").removeClass("show");
    });
  }
};
</script>

<style>
nav {
  position: absolute;
  padding: 30px;
  border: 2px solid rgba(77, 0, 0, 0.712);
  background-image: linear-gradient(rgba(119, 27, 27, 0.8), rgba(148, 5, 5, 0.9), rgb(119, 27, 27,8));
}

nav img {
  width: 1.5em;
  height: 1.5em;
  margin-right: 5px;
}

nav a {
  font-weight: bold;
  color: #fff;
}

nav > a {
  position: absolute;
  font-size: 1.8em;
  top: 0;
  right: 3%;
}
nav > a:hover {
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
  color: rgb(92, 91, 91);
}

li a.router-link-exact-active {
  color: #000;
}
</style>
