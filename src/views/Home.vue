<template>
  <div class="home">
    <GraphicList />
  </div>
</template>

<script>
// need to import components to add to the view
// @ is an alias to /src
import Home from "@/components/Home.vue";
import GraphicList from "@/components/GraphicList.vue";


export default {
  name: "home",
  components: {
    Home,
    GraphicList
  }
};
</script>