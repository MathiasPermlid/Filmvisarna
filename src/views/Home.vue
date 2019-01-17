<template>
  <div class="home container content-bg">
    <Carousel id="carousel"/>
    <input class="col-10 col-md-6" type="text" v-model="searchMovie" placeholder="Sök film">
    <div class="movie-content d-flex">
      <GraphicList :searchedMovies="[...filteredMovies]" id="graphic-list"/>
      <ShowSchedule id="schedule-comp" class="ml-auto col-12 col-md-3"/>
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

export default {
  name: "home",
  data() {
    return {
      searchMovie: ""
    };
  },
  computed: {
    filteredMovies() {
      let filter = new RegExp(this.searchMovie, "i");
      return this.$store.movies.filter(el => el.title.match(filter));
    }
  },
  components: {
    GraphicList,
    Carousel,
    ShowSchedule
  }
};
</script>

<style>
.home input:focus{
  outline: none;
}
.home input{
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