<template>
  <div class="home">
    <!--  <div id="slider">  ### SLIDER ###
      <infinite-slide-bar :barStyle="{ background: '#CC0020', padding: '5px 0' }">
        <span
          style="color: #FFFFFF;"
        >Aquaman 12:00 Aquaman 14:00 Aquaman 16:00 Aquaman 18:00 Aquaman 20:00</span>
      </infinite-slide-bar>
    </div>-->
    <!-- ### Carousel START ### -->
    <div class="container">
      <div class="row">
        <div class="col-sm-8 m-auto">
          <div id="slider4" class="carousel slide mb-5" data-ride="carousel">
            <ol class="carousel-indicators">
              <li class="active" data-target="#slider4" data-slide-to="0"></li>
              <li data-target="#slider4" data-slide-to="1"></li>
              <li data-target="#slider4" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block img-fluid"
                  src="https://www.geo.tv/assets/uploads/updates/2019-01-03/223970_5251622_updates.JPG"
                  alt="First Slide"
                >
                <div class="carousel-caption d-none d-md-block">
                  <h2 class="animated fadeInUp" id="light">Aquaman</h2>
                  <button
                    class="animated fadeInUp btn btn-outline-light buy m-2 hoverable test"
                    data-toggle="modal"
                    data-target="#buyModal"
                  >Biljetter</button>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src="https://www.baseservicedapartments.co.uk/wp-content/uploads/2017/10/Sing-A-Long-A-Frozen-Liverpool.png"
                  alt="Second Slide"
                >
                <div class="carousel-caption d-none d-md-block">
                  <h2 class="animated fadeInUp" id="light">Frozen</h2>
                  <button
                    class="animated fadeInUp btn btn-outline-light buy m-2 hoverable test"
                    data-toggle="modal"
                    data-target="#buyModal"
                  >Biljetter</button>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src="https://ashevillegrit.com/sites/default/files/styles/700x400slides/public/A%20Quiet%20Place%2002.jpg?itok=EhyL_GT9"
                >
                <div class="carousel-caption d-none d-md-block">
                  <h2 class="animated fadeInUp" id="light">A Quiet Place</h2>
                  <button
                    class="animated fadeInUp btn btn-outline-light buy m-2 hoverable test"
                    data-toggle="modal"
                    data-target="#buyModal"
                  >Biljetter</button>
                </div>
              </div>
            </div>

            <a href="#slider4" class="carousel-control-prev" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            
            <a href="#slider4" class="carousel-control-next" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- ### Carousel END -->
  </div>
</template>

<script>
/* import InfiniteSlideBar from "vue-infinite-slide-bar"; ### SLIDER ### */
/* eslint-disable */
export default {
  components: {
    /*  InfiniteSlideBar  ### SLIDER ### */
  },
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
