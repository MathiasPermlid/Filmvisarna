<template>
  <div class="row container mx-auto">
    <!-- Gallowwalkers -->
    <div class="row col-sm-12 col-md-12 pt-4 mx-auto">
      <div class="col-sm-12 col-md-6 row">
        <picture class="img-fluid hide-trailer-poster">
          <img :src="movie.poster" alt>
        </picture>
      </div>
      <div class="col-sm-12 col-md-6 hide-trailer-poster">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            class="embeded-responsive embeded-responsive-16by9"
            :src="trailers[movie.link]"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="pt-4">
          <p class="mobile-p lead">{{ movie.reviews[0].source }}</p>
          <p class="mobile-p">
            <i>- {{ movie.reviews[0].quote }}</i>
          </p>
          <p class="mobile-p lead">
            {{ movie.reviews[0].stars }} / {{ movie.reviews[0].max }}
            <i class="far fa-star"></i>
          </p>
        </div>
        <div class="pt-2">
          <p class="mobile-p lead">{{ movie.reviews[1].source }}</p>
          <p class="mobile-p">
            <i>- {{ movie.reviews[1].quote }}</i>
          </p>
          <p class="mobile-p lead">
            {{ movie.reviews[1].stars }} / {{ movie.reviews[0].max }}
            <i class="far fa-star"></i>
          </p>
        </div>
        <div class="pt-2">
          <p class="mobile-p lead">{{ movie.reviews[2].source }}</p>
          <p class="mobile-p">
            <i>- {{ movie.reviews[2].quote }}</i>
          </p>
          <p class="mobile-p lead">
            {{ movie.reviews[2].stars }} / {{ movie.reviews[0].max }}
            <i class="far fa-star"></i>
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <div class="row">
        <h2 class>{{ movie.title }}</h2>
      </div>
      <div class="row">
        <p class="mobile-p">Speltid: {{ movie.length }} min</p>
        <p class="mobile-p">Genre: {{ movie.genre }}</p>
      </div>
      <div class="row">
        <p class="mobile-p">Beskrivning: {{ movie.description }}</p>
      </div>
      <div class="row">
        <p
          class="mobile-p"
        >Skådespelare: {{ movie.actors[0] }}, {{ movie.actors[1] }}, {{ movie.actors[2] }}, {{ movie.actors[3] }}</p>
      </div>
      <div class="row">
        <p class="mobile-p">Regi: {{ movie.director }}</p>
      </div>
      <div class="row">
        <p class="mobile-p">Språk: {{ movie.language }}</p>
      </div>
      <div class="row">
        <p class="mobile-p">Undertext: {{ movie.subtitles }}</p>
      </div>
      <div class="row">
        <p class="mobile-p">Från: {{ movie.ageRestriction }} år</p>
      </div>
      <div class="row">
        <p
          class="mobile-p"
        >Biljettpris: Vuxna {{ movie.price }} kr, barn(6-18 år) {{ movie.price*0.6 }} kr</p>
      </div>
    </div>
    <div class="row col-sm-12 col-md-12 pt-3 mx-auto">
      <div class="col-sm-12 col-md-6 pt-3 move-trailer">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            class="embeded-responsive embeded-responsive-16by9"
            src="https://www.youtube.com/embed/l7N649DFaCA"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="pt-4">
          <p class="mobile-p lead">{{ movie.reviews[0].source }}</p>
          <p class="mobile-p">
            <i>- {{ movie.reviews[0].quote }}</i>
          </p>
          <p class="mobile-p lead">
            {{ movie.reviews[0].stars }} / {{ movie.reviews[0].max }}
            <i class="far fa-star"></i>
          </p>
        </div>
        <div class="pt-2">
          <p class="mobile-p lead">{{ movie.reviews[1].source }}</p>
          <p class="mobile-p">
            <i>- {{ movie.reviews[1].quote }}</i>
          </p>
          <p class="mobile-p lead">
            {{ movie.reviews[1].stars }} / {{ movie.reviews[0].max }}
            <i class="far fa-star"></i>
          </p>
        </div>
        <div class="pt-2">
          <p class="mobile-p lead">{{ movie.reviews[2].source }}</p>
          <p class="mobile-p">
            <i>- {{ movie.reviews[2].quote }}</i>
          </p>
          <p class="mobile-p lead">
            {{ movie.reviews[2].stars }} / {{ movie.reviews[0].max }}
            <i class="far fa-star"></i>
          </p>
        </div>
      </div>
      <hr class="my-4">
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "MovieInformation",
  data() {
    return {
      trailers: []
    };
  },
  computed: {
    movie() {
      let link = location.pathname.replace("/movieinfo/", "");

      for (let film of this.$store.movies) {
        if (film.link === link) {
          return film;
        }
      }
    },
    created() {
      trailers["Declaration-of-War"] =
        "https://www.youtube.com/watch?v=v5NMhtOTC-s";
      trailers["So-Ends-Our-Night"] =
        "https://www.youtube.com/watch?v=O5ROSS9ReUY";
      trailers["Luzhin-Defence"] =
        "https://www.youtube.com/watch?v=9BeWpZVVDhw";
      trailers["Emperor"] = "https://www.youtube.com/watch?v=Hjvy8vc39kw";
      trailers["gallowalkers"] = "https://www.youtube.com/watch?v=_frXIZZSaO4";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
picture {
  width: 100%;
}
img {
  width: 100%;
}

.mobile-p {
  padding-bottom: 0.2rem;
  margin-bottom: 0;
  letter-spacing: 0.025rem;
}

.move-trailer {
  display: none;
}

@media screen and (max-width: 824px) {
  .move-trailer {
    display: block;
  }

  .hide-trailer-poster {
    display: none;
  }

  .mobile-p {
    padding-bottom: 0.4rem;
    margin-bottom: 0;
    letter-spacing: 0.025rem;
    font-size: 0.8rem;
  }
}
</style>
