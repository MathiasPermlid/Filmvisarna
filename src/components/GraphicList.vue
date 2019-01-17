<template>
  <div class="graphicList">
    <ul class="movieList container row content-bg mx-auto">
      <li v-for="(data, index) in movies" :key="index" class="movieItem col-6 col-md-3 m-0">
        <figure class="posters">
          <img v-bind:src="data.poster" class="img-fluid">
        </figure>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "graphicList",
  data() {
    return {
      movies: this.$store.movies
    };
  }
};
</script>

<style>
.posters{
  
}
.posters img {
  border: 6px black solid;
  
}
.graphicList ul {
  display: flex;
  justify-content: center;
}
.graphicList li {
  list-style: none;

}
</style>