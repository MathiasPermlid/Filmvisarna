<template>
  <div class="examples container row mx-auto content-bg">
    <div class="col-12 pt-3">
      <MovieInformation/>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import MovieInformation from "@/components/MovieInformation.vue";

export default {
  name: "MovieInfo",
  components: {
    MovieInformation
  }
};
</script>