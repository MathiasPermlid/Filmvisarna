<!-- 
    Documentation on how to work with
    the calendar component
    http://idangero.us/swiper/api/
 -->

<template>
  <div class="swiper-box">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(movie, index) in movies" :key="index" class="swipe-item">
        <figure class="posters">
          <router-link v-bind:to="'/movieinfo/' + movie.Link">
            <img v-bind:src="movie.Poster" class="img-fluid">
          </router-link>
        </figure>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import $ from "jquery";

export default {
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: this.startMobile(),
        spaceBetween: 2,
        freeMode: true,
        loop: true
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    // 
    startMobile() {
      return window.innerWidth < 700 ? 3.3 : 5.3;
    }
  },
  created() {
    $(window).on("resize", () => {
      this.swiperOption.slidesPerView = window.innerWidth < 700 ? 3.3 : 5.3;
    });
  }
};
</script>

<style>
.swiper-box {
  height: 30vmax;
  overflow: hidden;
}
.swipe-item {
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
