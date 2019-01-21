<template>
  <div class="home">
    <Carousel id="carousel"/>
    <input class="col-10 col-md-6" type="text" v-model="searchMovie" placeholder="Sök film">
    <div v-if="!searchMovie">
      <h3 class="category-text mb-0">Kategori 1</h3>
      <div class="category-line mb-2"></div>
      <MovieSwiper :movies="movies" class="col-12"/>

      <h3 class="category-text mb-0">Kategori 2</h3>
      <div class="category-line mb-2"></div>
      <MovieSwiper :movies="movies" class="col-12"/>

      <h3 class="category-text mb-0">Kategori 3</h3>
      <div class="category-line mb-2"></div>
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
.home input:focus {
  outline: none;
}
.home input {
  margin: 5%;
  color: white;
  border-radius: 20px;
  background-color: rgba(131, 130, 130, 0.568);
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
  width: 60px;
  height: 5px;
  border-radius: 5px;
  background-color: rgb(255, 196, 0);
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