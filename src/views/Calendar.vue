<template>
  <div class>
    <Calendar class="col-12 col-sm-3" 
    v-on:showDay="clickDate($event)"/>
    <CalendarShows v-bind:clickedDate="newDate"/>
  </div>
</template>

<script>
import Calendar from "@/components/Calendar";
import CalendarShows from "@/components/CalendarShows";
export default {
  data() {
    return {
      newDate: ""
    };
  },
  components: {
    Calendar,
    CalendarShows
  },
  methods: {
    clickDate(date) {
      this.newDate = date;
    }
  }
};
</script>

<style>
</style>
