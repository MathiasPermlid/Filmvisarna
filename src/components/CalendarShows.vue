<template>
  <div id="calendar-shows">
    <div v-for="(show, index) in day.shows" :key="index+show" class="row">
      <figure class="col-3">
        <img v-bind:src="movies[index].Poster" class="image-fluid">
      </figure>
      <div class="col-9">
        <h5>{{ day.shows[index].movie }}</h5>
        <p>Genre: {{ movies[index].Genre }}</p>
        <p>
          <strong>{{ day.shows[index].auditorium.name }}</strong>
        </p>
        <p>Tid: {{ day.shows[index].time }}</p>
        <p>Platser kvar: {{ day.shows[index].auditorium.seatsLeft }}</p>
        <p>Speltid: {{ movies[index].Runtime }}</p>
      </div>
      <span id="break-line"></span>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main";

export default {
  props: {
    clickedDate: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      day: {}
    };
  },
  computed: {
    movies: function() {
      return [
        this.getMovie(this.day.shows[0].movie),
        this.getMovie(this.day.shows[1].movie),
        this.getMovie(this.day.shows[2].movie)
      ];
    }
  },
  methods: {
    getMovie: function(movie) {
      for (let film of this.$store.movies) {
        if (movie === film.Title) {
          return film;
        }
      }
    }
  },
  created() {
    eventBus.$on("showDay", date => {
      for (let day in this.$store.shows) {
        let data = this.$store.shows[day];
        if (data.date === date) {
          this.day = data;
        }
      }
    });
  }
};
</script>

<style scoped>
#calendar-shows {
  text-align: start;
}
#calendar-shows p {
  font-size: 0.8em;
  margin: 0;
}
#break-line {
  margin: 2% auto 3%;
  width: 90%;
  height: 1px;
  background-color: lightgray;
}
.show-list-move {
  transition: transform 1s;
}
</style>
