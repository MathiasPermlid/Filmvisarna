<template>
  <div class="graphicList mx-auto">
    <h3>PÅ BION JUST NU</h3>
    <h3 v-if="!searchedMovies[0]" class="mb-5">Inga filmer matchade din sökning</h3>
    <ul v-else class="movieList container row mx-auto">
      <li v-for="(data, index) in searchedMovies" :key="index" class="movieItem col-6 col-md-3 m-0">
        <figure class="posters">
          <router-link v-bind:to="'/movieinfo/' + data.Link">
            <img v-bind:src="data.Poster" class="img-fluid">
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
  props: {
    searchedMovies: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      movies: this.$store.movies
    };
  }
};
</script>

<style>
.graphicList {
  width: 100%;
}
.posters {
  width: 110%;
  height: 90%;
}
.posters img {
  height: 100%;
}
.graphicList li {
  list-style: none;
}
</style>