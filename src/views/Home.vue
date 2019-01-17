<template>
  <div class="home container content-bg">
    <Carousel id="carousel"/>
    <div class="movie-content d-flex">
      <GraphicList id="graphic-list"/>
      <ShowSchedule id="schedule-comp"/>
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
  components: {
    GraphicList,
    Carousel,
    ShowSchedule
  }
};
</script>

<style>
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