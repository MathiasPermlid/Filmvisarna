<template>
  <div class="swiper-box">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(movie, index) in posters" :key="index" class="swipe-item">
        <figure class="posters">
          <router-link v-bind:to="'/movieinfo/' + movie.Link">
            <img v-bind:src="movie.Poster" class="img-fluid">
          </router-link>
        </figure>
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  props: {
    posters: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3.3,
        spaceBetween: 2,
        freeMode: true,
        loop: true
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style>
.swiper-box {
  height: 30vmax;
  overflow: hidden;
}
.swipe-item{
  height: 100%;
}
.posters {
  width: 100%;
  height: 100%;
}
.posters img {
  height: 100%;
}
</style>
