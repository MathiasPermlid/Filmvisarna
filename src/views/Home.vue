<template>
  <div class="home">
    <Home />
  </div>
</template>

<script>
// need to import components to add to the view
// @ is an alias to /src
import Home from "@/components/Home.vue";

export default {
  name: "home",
  components: {
    Home
  },
  created(){
    console.log('test globals from gome');
    console.log(this.$store.movies); 
  }
};
</script>