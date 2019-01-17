<template>
  <div class="home">
    <Carousel />
    <!-- <ShowSchedule/> -->
    <GraphicList/>
  </div>
</template>

<script>
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