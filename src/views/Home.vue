<template>
  <div class="home">
    <!-- <GraphicList/> -->
    <ShowSchedule class="m-auto"/>
  </div>
</template>

<script>
// need to import components to add to the view
// @ is an alias to /src
import GraphicList from "@/components/GraphicList.vue";
import ShowSchedule from "@/components/ShowSchedule.vue";

export default {
  name: "home",
  components: {
    GraphicList,
    ShowSchedule
  }
};
</script>