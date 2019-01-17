<template>
  <div class="examples container row mx-auto content-bg">
    <div class="col-12 pt-3">
      <MovieInformation/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieInformation from "@/components/MovieInformation.vue";

export default {
  name: "examples",
  components: {
    MovieInformation
  }
};
</script>