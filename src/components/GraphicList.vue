<template>
  <div class="graphicList mx-auto">
    <h3>PÅ BION JUST NU</h3>
    <h3 v-if="!searchedMovies[0]" class="mb-5">Inga filmer matchade din sökning</h3>
    <ul v-else class="movieList container row mx-auto">
      <li v-for="(data, index) in searchedMovies" :key="index" class="movieItem col-6 col-md-3 m-0">
        <figure class="posters">
          <router-link v-bind:to="'/movieinfo/' + data.link">
            <img v-bind:src="data.poster" class="img-fluid">
          </router-link>
          <div class="movie-title">
            <h5>{{data.title}}</h5>
          </div>
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
.movie-title {
  position: relative;
  padding: 13% 0;
  margin: 0;
  background-color: rgba(141, 5, 5, 0.9);
  border-radius: 0 0 10px 10px;
}
.movie-title h5 {
  position: absolute;
  font-size: 0.8em;
  top: 0;
  width: 100%;
}
.posters {
  width: 110%;
  height: 70%;
}
.posters img {
  height: 100%;
  border: 4px rgba(141, 5, 5, 0.9) solid;
  border-radius: 10px 10px 0 0;
}
.graphicList li {
  list-style: none;
}
@media screen and (max-width: 990px) {
  .movie-title {
    padding: 30% 0;
  }
  .posters {
    height: 60%;
  }
}
@media screen and (max-width: 777px) {
  .movie-title {
    padding: 13% 0;
  }
  .posters {
    height: 70%;
  }
}
@media screen and (max-width: 370px) {
  .movie-title {
    padding: 22% 0;
  }
  .posters {
    height: 70%;
  }
}
</style>