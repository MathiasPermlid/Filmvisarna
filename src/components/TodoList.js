/* eslint-disable */
import { db } from "@/plugins/cloud";

export default {
  name: "TodoList",
  // data() is where varables that the template need access to is stored
  data() {
    return {
      item: "",
      // load array from local storage on startup
      items: [],
      validate: false,
      error: "Type atleast 2 characters"
    };
  },
  // watch will look for changes, and execute function when change happens
  watch: {
    // the property to watch
    item: {
      // check input length for validation
      handler: function() {
        this.validate =
          this.item.length < 2 && this.item.length > 0 ? true : false;
      }
    }
  },
  // functions to manipulate the template goes into methods
  methods: {},
  created() {
    this.items = this.$store.movies;

    console.log(this.$store.movies);
    console.log(this.$store.auditoriums);
    console.log(this.$store.shows);
  }
};
