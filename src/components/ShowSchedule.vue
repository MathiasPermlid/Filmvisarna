<template>
  <div id="schedule" class="col-3">
    <div v-for="day in days" :key="day">
      <h4 class="day mt-3 pt-2">{{ day }}</h4>
      <div v-for="(show, index) in shows" :key="index">
        <Shows v-if="shows[index].date === day" :show="shows[index]"/>
      </div>
    </div>
  </div>
</template>

<script>
import Shows from "./Shows";
export default {
  components: {
    Shows
  },
  data() {
    return {
      shows: this.$store.shows,
      movies: this.$store.movies
    };
  },
  computed: {
    days() {
      let days = [];
      for (let show of this.shows) {
        if (!days.includes(show.date)) {
          days.push(show.date);
        }
      }
      return days;
    }
  },
  methods: {
    showDate(date) {
      return this.days;
    },
    dayShows(date) {
      let day = [];
      for (let item of this.shows) {
        if (item.date === date) {
          day.push(item);
        }
      }
      return day;
    }
  }
};
</script>

<style>
#schedule {
  height: 70vh;
  padding-right: 17px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 1%;
  background-color: rgba(119, 118, 118, 0.623);
  border: solid gray;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
#schedule::-webkit-scrollbar {
  display: none;
}
.day {
  border-top: 2px solid rgba(255, 255, 255, 0.4);
}
</style>
