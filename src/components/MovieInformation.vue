<template>
<div class="row container mx-auto">
    <div class="row col-sm-12 col-md-12 mx-auto justify-content-center">
        <div class="col-sm-12 col-md-6 row">
            <picture class="img-fluid">
                <img :src="movie.Poster" alt>
        </picture>
                <button type="button" class="btn btn-dark mt-2">Boka</button>
        </div>

        <div class="col-sm-12 col-md-6 hide-trailer-poster">
            <h2>Trailer</h2>
            <div class="embed-responsive embed-responsive-16by9">
                <iframe
            class="embeded-responsive embeded-responsive-16by9"
            src="https://www.youtube.com/embed/"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
            </div>
            <h2>Recensioner</h2>
            <div class="pt-2" v-for="ratings in movie.Ratings">
                <p class="mobile-p lead">{{ ratings.Source }} {{ ratings.Value }}</p>
            </div>
        </div>
    </div>
    <div class="col-md-12 pt-2">
        <div class="row">
            <h1>{{ movie.Title }}</h1>
        </div>
        <div class="row">
            <p class="mobile-p pl-0">Speltid: {{ movie.Runtime }} min</p>
            <p class="mobile-p">Genre: {{ movie.Genre }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Beskrivning: {{ movie.Plot }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Skådespelare: {{ movie.Actors }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Regi: {{ movie.Director }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Språk: {{ movie.Language }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Undertext: svenska</p>
        </div>
        <div class="row">
            <p class="mobile-p">Från: {{ movie.Rated }} år</p>
        </div>
        <div class="row">
            <p class="mobile-p">Biljettpris: Vuxna 100 kr, barn(6-18 år) 60 kr</p>
        </div>
    </div>
    <div class="row col-sm-12 col-md-12 mx-auto">
        <div class="col-sm-12 col-md-6 pt-3 move-trailer">
            <h2>Trailer</h2>
            <div class="embed-responsive embed-responsive-16by9">
                <iframe
            class="embeded-responsive embeded-responsive-16by9"
            src="https://www.youtube.com/embed/"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
            </div>
            <h2>Recensioner</h2>
            <div class="pt-2" v-for="ratings in movie.Ratings" :key="ratings">
                <p class="mobile-p lead">{{ ratings.Source }} {{ ratings.Value }}</p>
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
            trailers: {}
        };
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
        created() {

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
    padding-left: 0;
    margin-bottom: 0;
    letter-spacing: 0.025rem;
}

.mobile-p p {
    padding-left: 0;
    margin-left: 0;
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
        font-size: 0.75rem;
    }

    div>h1 {
        font-size: 1.65rem;
    }

}
</style>
