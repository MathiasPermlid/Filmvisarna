<template>
  <div class="home">
    <header>
      <h1 id="home-title">GRAND</h1>
    </header>
    <Carousel id="carousel"/>
    <input class="col-10 col-md-6" type="text" v-model="searchMovie" placeholder="Sök film">

    <div class="home-carousels-container" v-if="!searchMovie">
      <h3 class="category-text mb-0">Kategori 1</h3>

      <MovieSwiper :movies="movies" class="col-12"/>

      <h3 class="category-text mb-0">Kategori 2</h3>

      <MovieSwiper :movies="movies" class="col-12"/>

      <h3 class="category-text mb-0">Kategori 3</h3>

      <MovieSwiper :movies="movies" class="col-12"/>
    </div>

    <div v-else>
      <GraphicList :searchedMovies="[...filteredMovies]" id="graphic-list"/>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// need to import components to add to the view
// @ is an alias to /src
import GraphicList from "@/components/GraphicList.vue";
import Carousel from "@/components/carousel.vue";
import ShowSchedule from "@/components/ShowSchedule.vue";
import MovieSwiper from "@/components/MovieSwiper.vue";

export default {
  name: "home",
  data() {
    return {
      searchMovie: "",
      movies: []
    };
  },
  computed: {
    filteredMovies() {
      let filter = new RegExp(this.searchMovie, "i");
      return this.movies.filter(el => el.Title.match(filter));
    }
  },
  watch: {
    movies() {
      this.$store.movies = this.movies;
    }
  },
  components: {
    GraphicList,
    Carousel,
    ShowSchedule,
    MovieSwiper
  },
  created() {
    this.movies = this.$store.movies;
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
  --main-font-family: "Montserrat", sans-serif;

  /* 
    Use global color-variables with:
    EXAMPLE: "color: var(--main-element-color);"
*/
}

* {
  font-family: var(--main-font-family);
}

.category-text {
  font-weight: 100;
}

.home input:focus {
  outline: none;
}
.home input {
  margin: 5%;
  color: var(--main-element-color);
  border-radius: 20px;
  background-color: var(--main-background-color);
}

.home-carousels-container {
  margin-top: 5vh;
}
.movie-content {
  display: flex;
  flex-direction: row;
}
#schedule-comp {
  width: 25vw;
}
.category-text {
  text-align: left;
}
.category-line {
  width: 10%;
  height: 2px;
  background-color: var(--special-element-color);
}

#home-title {
  color: var(--special-element-color);
  font-weight: 400;
  text-shadow: 1px 1px var(--main-element-color);
  margin-top: 5vh;
}
@media screen and (max-width: 777px) {
  .movie-content {
    flex-direction: column;
  }
  #graphic-list {
    padding-top: 5%;
  }
  #schedule-comp {
    width: 100%;
  }
}
</style>