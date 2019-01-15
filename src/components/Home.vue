<template>
  <div class="home">
    <!--  <div id="slider">  *** SLIDER ***
      <infinite-slide-bar :barStyle="{ background: '#CC0020', padding: '5px 0' }">
        <span
          style="color: #FFFFFF;"
        >Aquaman 12:00 Aquaman 14:00 Aquaman 16:00 Aquaman 18:00 Aquaman 20:00</span>
      </infinite-slide-bar>
    </div>-->
    <h1>Start Page</h1>
    <div class="alert col-8 alert-success alert-dismissible fade show" role="alert">
      With Bootstrap!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
/* import InfiniteSlideBar from "vue-infinite-slide-bar"; *** SLIDER ****/
/* eslint-disable */
export default {
  components: {
    /*  InfiniteSlideBar  *** SLIDER *** */
  },
  name: "Home"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* #slider {        *** SLIDER ***
  overflow: hidden;
} */

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.alert {
  margin: 10% auto;
}
</style>
