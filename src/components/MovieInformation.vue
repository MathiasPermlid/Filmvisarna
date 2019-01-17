<template>
<div class="row container mx-auto content-bg">

    <!-- Gallowwalkers -->
    <div class="col-6">
        <span class="img-first row">
        <picture class>
          <img src="../assets/movies/Gallowwalkers/poster-1.jpg" alt>
        </picture>
      </span>
    </div>
    <div class="col-6">
        <h2 class="col-12">{{ movies[0].title }}</h2>
        <div class="row">
            <p>Speltid: {{ movies[0].length }} </p>
        </div>
        <div class="row">
            <p>Genre: {{ movies[0].genre }}</p>
        </div>
        <div class="row">
            <p>Beskrivning: {{ movies[0].description }}</p>
        </div>
        <p>{{ movies[0].director }}</p>
        <div class="row">
            <p class="">Skådespelare: {{ movies[0].actors[0] }} {{ movies[0].actors[1] }} {{ movies[0].actors[2] }} {{ movies[0].actors[3] }}</p>
        </div>
        <div class="row">
            <p class="">Språk: {{ movies[0].language }}</p>
        </div>
        <div class="row">
            <p class="">Undertext: {{ movies[0].subtitles }}</p>
        </div>
    </div>
    <div class="col-12 pt-3">
        <h3>Bilder</h3>
        <div class="row justify-content-around">
            <picture class="col-4">
                <img src="../assets/movies/Gallowwalkers/poster-1.jpg" alt>
        </picture>
                <picture class="col-4">
                    <img src="../assets/movies/Gallowwalkers/poster-2.jpg" alt>
        </picture>
                    <picture class="col-4">
                        <img src="../assets/movies/Gallowwalkers/poster-3.jpg" alt>
        </picture>
        </div>
    </div>
</div>
</template>

<script>
/* eslint-disable */
export default {
    name: "MovieInformation",
    data() {
        return {
            movies: [],
            shows: [],
            auditoriums: []
        };
    },
    created() {
        this.movies = this.$store.movies;
        this.shows = this.$store.shows;
        this.auditoriums = this.$store.auditoriums;

        console.log(this.$store.movies);
        console.log(this.$store.auditoriums);
        console.log(this.$store.shows);
    },
    methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
img {
    width: 50%;
}

.img-first {
    width: 650px;
}
</style>
