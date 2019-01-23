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
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
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
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
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
      return window.innerWidth < 700 ? 2.3 : 5.3;
    }
  },
  created() {
    $(window).on("resize", () => {
      this.swiperOption.slidesPerView = window.innerWidth < 700 ? 2.3 : 5.3;
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
  height: 50vh;
}
.posters img {
  height: 100%;
}
.swiper-button-prev {
  background-color: rgba(255, 255, 255, 0.418);
  border-radius: 40%;
}

.swiper-button-next {
  background-color: rgba(255, 255, 255, 0.418);
  border-radius: 50%;
}

@media only screen and (max-width: 600px) {
  .posters {
    height: 30vmax;
  }
  .swiper-button-next {
    display: none;
  }
  .swiper-button-prev {
    display: none;
  }
}
</style>
