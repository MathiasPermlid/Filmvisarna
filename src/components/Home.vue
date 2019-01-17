<template>
  <div class="home row container mx-auto content-bg">
    <div class="col-12 pt-3">
      <h1 class>Start Page</h1>
    </div>
  </div>
</template>

<script>
/* import InfiniteSlideBar from "vue-infinite-slide-bar"; ### SLIDER ### */
/* eslint-disable */
export default {
  name: "Home"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* #slider {        ### SLIDER ###
  overflow: hidden;
} */

/* ### Carousel CSS START ### */
#dark {
  color: rgb(0, 11, 31);
}

#light {
  color: rgb(255, 255, 255);
}
h2 {
  animation-delay: 1s;
}

h4 {
  animation-delay: 1.5s;
}
/* ### Carousel CSS END ### */

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
.buy:hover {
  color: rgb(255, 255, 255);
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  background-color: #f8f8f846;
}
</style>
