<template>
  <div class="home">
    <Carousel id="carousel"/>
    <input class="col-10 col-md-6" type="text" v-model="searchMovie" placeholder="Sök film">
    <!-- <div class="movie-content d-flex"> -->
    <div v-if="!searchMovie">
      <h3 class="category-text mb-0">Kategori 1</h3>
      <div class="category-line mb-2"></div>
      <MovieSwiper :posters="movies" class="col-12"/>
      <br>
      <h3 class="category-text mb-0">Kategori 2</h3>
      <div class="category-line mb-2"></div>
      <MovieSwiper :posters="movies" class="col-12"/>
      <br>
      <h3 class="category-text mb-0">Kategori 3</h3>
      <div class="category-line mb-2"></div>
      <MovieSwiper :posters="movies" class="col-12"/>
    </div>

    <div v-else>
      <GraphicList :searchedMovies="[...filteredMovies]" id="graphic-list"/>
    </div>
    <!-- <ShowSchedule id="schedule-comp" class="ml-auto col-12 col-md-3"/> -->
    <!-- </div> -->
  </div>
</template>

<script>
/* eslint-disable */
import { db } from "@/plugins/cloud";
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
    let movielist = [
      "Fantastic+Beasts-+The+Crimes+of+Grindelwald",
      "Glass",
      "Hunter+Killer",
      "The+Grinch",
      "A+Star+Is+Born",
      "Bohemian+Rhapsody",
      "Lego+movie+2",
      "Ralph+Breaks+the+Internet",
      "Aquaman",
      "A+Dog's+Way+Home",
      "Bumblebee",
      "On+the+Basis+of+Sex",
      "Mary+Poppins+Returns",
      "Escape+room&y=2018",
      "Vice&y=2018",
      "Spider-Man%3A+Into+the+Spider-Verse"
    ];

    for (let query of movielist) {
      fetch("https://www.omdbapi.com/?t=" + query + this.$store.apikey)
        .then(res => {
          return res.json();
        })
        .then(res => {
          res.Link = query;
          this.movies.push(res);
        });
    }
    console.log(this.movies);
    
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