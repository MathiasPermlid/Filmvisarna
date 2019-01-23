<template>
  <div>
    <figure></figure>
    <div>
      <h1>{{ clickedDate }}</h1>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    clickedDate: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      show: {}
    };
  },
  computed: {},
  methods: {
    getDate() {
      for (let day in this.$store.shows) {
        if (day.date === this.clickedDate) {
          return day.date;
        }
      }
    }
  },
  created() {
    console.log(this.$store.shows["-LWl4d2Fs9Y-q1RqYgDZ"].shows[1]);

    this.show = this.$store.shows["-LWl4d2Fs9Y-q1RqYgDZ"].shows[1];
  }
};
</script>

<style>
</style>
