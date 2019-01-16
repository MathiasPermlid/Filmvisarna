<template>
  <div class="examples container row mx-auto content-bg">
    <div class="col-12 pt-3">
    <Example1 />
    <Example2 />

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Example1 from "@/components/examples/Example1.vue";
import Example2 from "@/components/examples/Example2.vue";

export default {
  name: "examples",
  components: {
    Example1,
    Example2
  },
  created(){
    console.log('test global from examples');
    console.log(this.$store.movies); 
  }
};
</script>