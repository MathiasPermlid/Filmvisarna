<template>
  <div class="examples container row mx-auto content-bg">
    <div class="col-12 pt-3">

    <MovieInformation />

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Example1 from "@/components/examples/Example1.vue";
import Example2 from "@/components/examples/Example2.vue";
import MovieInformation from "@/components/MovieInformation.vue";

export default {
  name: "examples",
  components: {
    Example1,
    Example2,
    MovieInformation
  },
  created(){
    console.log('test global from examples');
    console.log(this.$store.movies); 
  }
};
</script>