/* eslint-disable */
import { dbMovies } from "@/plugins/cloud";

export default {
  name: "TodoList",
  // data() is where varables that the template need access to is stored
  data() {
    return {
      item: "",
      // load array from local storage on startup
      items: [],
      getMovies: ["hej"],
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
  methods: {
    addItem() {
      if (!this.validate && this.item.trim()) {
        // add item to database
        db.push(this.item);
        this.item = "";
      } else {
        console.log("Not valid");
      }
    }
  },
  created() {
    let self = this;

    // on changes to database list
    dbMovies.on("value", gotData, errData);

    // callback when getting data
    function gotData(data) {
      let list = [];

      // convert stored hashmap to normal array
      let dbList = data.val();

      console.log(data.val());

      let keys = Object.keys(dbList);

      for (let key of keys) {
        list.push({
          item: dbList[key],
          // import hash for index to remove
          key: key
        });
      }
      // update local array with imported
      self.items = list;

      console.log(list[0].item);
    }
    function errData(err) {
      console.log(err);
    }
  }
};
