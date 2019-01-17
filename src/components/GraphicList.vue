<template>
  <div class="graphicList">
    <h3>PÅ BION JUST NU</h3>
    <ul class="movieList container row mx-auto">
      <li v-for="(data, index) in movies" :key="index" class="movieItem col-6 col-md-3 m-0">
        <figure class="posters">
          <router-link v-bind:to="'/movieinfo/#' + movies[index].link">
            <img v-bind:src="data.poster" class="img-fluid">
          </router-link>
        </figure>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "graphicList",
  data() {
    return {
      movies: this.$store.movies
    };
  }
};
</script>

<style>
.posters {
}
.posters img {
  border: 6px black solid;
}
.graphicList ul {
  display: flex;
  justify-content: center;
}
.graphicList li {
  list-style: none;
}
</style>