<template>
  <div class="row container m-0 p-0">
    <h1 class="col-12 pt-3 pb-3 m-0 h1-custom-size">{{ movie.Title }}</h1>
    <!-- MOVIE BG MOBILE -->
    <div class="mobile-movie-bg col-12 pl-0 pr-0 pb-0">
      <picture class="img-fluid">
        <img v-bind:src="movie.PictureBackground">
      </picture>
      <button type="button" class="text-white btn-brass adjust-btn mr-4">Boka</button>
      <button
        type="button"
        class="text-white btn-brass adjust-btn ml-4"
        data-toggle="modal"
        data-target="#exampleModal"
      >Trailer</button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{{ movie.Title }}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embeded-responsive embeded-responsive-16by9"
                  :src="'https://www.youtube.com/embed/' + movie.Trailer"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Stäng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row col-sm-12 col-md-12 justify-content-center">
      <!--hide-on-mobile hides this on mobile and only shows it on desktop -->
      <div class="col-sm-12 col-md-5 row hide-on-mobile pr-5 pl-5 justify-content-center">
        <picture class="img-fluid hide-on-mobile">
          <img v-bind:src="movie.Poster">
        </picture>
        <button
          type="button"
          class="btn-brass-desktop text-white lead mt-4 mb-2 hide-on-mobile"
        >Boka</button>
      </div>

      <div class="col-sm-12 col-md-7 hide-on-mobile pr-5 pl-5 mb-1">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            class="embeded-responsive embeded-responsive-16by9"
            v-bind:src="'https://www.youtube.com/embed/' + movie.Trailer"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="row m-1">
          <p class="mobile-p lead">{{ movie.Plot }}</p>
        </div>
      </div>
    </div>
    <div class="col-md-12 mt-2 mb-4 desktop-margin-info mobile-margin-info">
      <div class="row">
        <p class="mobile-p lead hide-on-desktop">{{ movie.Plot }}</p>
      </div>
      <div class="row">
        <p class="mobile-p">
          <strong>Speltid:</strong>
          {{ movie.Runtime }}
        </p>
      </div>
      <div class="row">
        <p class="mobile-p">
          <strong>Genre:</strong>
          {{ movie.Genre }}
        </p>
      </div>
      <div class="row">
        <p class="mobile-p">
          <strong>Skådespelare:</strong>
          {{ movie.Actors }}
        </p>
      </div>
      <div class="row">
        <p class="mobile-p">
          <strong>Regi:</strong>
          {{ movie.Director }}
        </p>
      </div>
      <div class="row">
        <p class="mobile-p">
          <strong>Språk:</strong>
          {{ movie.Language }}
        </p>
      </div>
      <div class="row">
        <p class="mobile-p">
          <strong>Undertext:</strong> svenska
        </p>
      </div>
      <div class="row">
        <p class="mobile-p">
          <strong>Från:</strong>
          {{ movie.Rated }} år
        </p>
      </div>
      <div class="row">
        <p class="mobile-p">
          <strong>Biljettpris:</strong> Vuxna 100 kr, barn(6-18 år) 60 kr
        </p>
      </div>

      <!-- DESKTOP RECENSIONER -->
      <div class="row hide-on-mobile mt-2">
        <h3 class="mobile-p hide-on-mobile">Recensioner</h3>
      </div>
      <div v-for="ratings in movie.Ratings" class="hide-on-mobile">
        <p class="mobile-p row hide-on-mobile">
          <i>{{ ratings.Source }} {{ ratings.Value }}</i>
        </p>
      </div>
    </div>
    <!-- MOBIL RECENSIONER -->
    <div class="col-sm-12 col-md-12 hide-on-desktop mobile-margin-info">
      <h2 class="row mobile-margin-info ml-2">Recensioner</h2>
      <div class="row" v-for="ratings in movie.Ratings">
        <p class="mobile-p">
          <i>{{ ratings.Source }} {{ ratings.Value }}</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "MovieInformation",
  data() {
    return {};
  },
  computed: {
    movie() {
      let link = location.pathname.replace("/movieinfo/", "");

      for (let film of this.$store.movies) {
        if (film.Link === link) {
          return film;
        }
      }
    },
    created() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
button:focus {
  outline: none;
}

.desktop-margin-info {
  margin-left: 50px;
}

picture {
  width: 100%;
}

img {
  width: 100%;
}

.embed-responsive {
  border-radius: 10px;
}

.mobile-p {
  padding-bottom: 0.2rem;
  padding-left: 0;
  margin-bottom: 0;
  letter-spacing: 0.025rem;
  text-align: start;
}

.mobile-p p {
  padding-left: 0;
  margin-left: 0;
}

.hide-on-desktop {
  display: none;
}

.hide-on-mobile {
  display: block;
}

.mobile-movie-bg {
  display: none;
}

.btn-brass-desktop {
  background: #b08a43;
  text-align: center;
  padding: 4px 10px;
  border-radius: 5px;
  border: transparent;
  top: -20%;
  cursor: pointer;
  width: 250px;
}

.btn-brass-desktop:hover {
  background: #b08a43be;
}

.h1-custom-size {
  font-size: 3rem !important;
}

@media screen and (max-width: 1024px) {
  .desktop-margin-info {
    margin-left: 0;
  }

  .h1-custom-size {
    font-size: 2rem !important;
  }

  .mobile-margin-info {
    margin: 0;
  }

  .hide-on-desktop {
    display: block;
  }

  picture {
    width: 100%;
  }

  img {
    width: 100%;
  }

  .mobile-movie-bg {
    display: block;
    background-size: cover;
    min-height: 30vh;
  }

  .mobile-movie-bg {
    display: block;
    background-size: cover;
    min-height: 30vh;
  }

  .hide-on-mobile {
    display: none;
  }

  .mobile-p {
    padding-bottom: 0.4rem;
    margin: 0 25px;
    letter-spacing: 0.025rem;
    font-size: 0.75rem;
    text-align: start;
  }

  .adjust-btn {
    background: #b08a43ef;
    position: relative;
    top: -20%;
    text-align: center !important;
    padding: 4px 10px;
    border-radius: 5px;
    border: transparent;
    width: 75px;
    font-size: 0.75rem;
  }

  div > h1 {
    font-size: 1.65rem;
  }
}
</style>
