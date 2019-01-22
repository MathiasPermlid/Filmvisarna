<template>
<div class="row container m-0 p-0">
    <h1 class="col-12 pt-3 pb-3 m-0">{{ movie.Title }}</h1>
    <!-- MOVIE BG MOBILE -->
    <div class="mobile-movie-bg col-12 mobile-p pl-0 pr-0 pb-0">
        <picture class="img-fluid">
            <img v-bind:src="movie.PictureBackground">
            </picture>
            <button type="button" class="text-white btn-brass adjust-btn mr-4">Boka</button>
            <button type="button" class="text-white btn-brass adjust-btn ml-4" data-toggle="modal" data-target="#exampleModal">Trailer</button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

        <!--hide-trailer-poster hides this on mobile and only shows it on desktop -->
        <div class="col-sm-12 col-md-6 row hide-trailer-poster">
            <picture class="img-fluid hide-trailer-poster">
                <img v-bind:src="movie.Poster">
                <button type="button" class="btn-brass mt-2">Boka</button>
            </picture>
        </div>

        <div class="col-sm-12 col-md-6 hide-trailer-poster ">
            <h2>Trailer</h2>
            <div class="embed-responsive embed-responsive-16by9">
                <iframe
            class="embeded-responsive embeded-responsive-16by9"
            v-bind:src="'https://www.youtube.com/embed/' + movie.Trailer"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
            </div>
            <h2>Recensioner</h2>
            <div v-for="ratings in movie.Ratings">
                <p class="mobile-p">{{ ratings.Source }} {{ ratings.Value }}</p>
            </div>
        </div>
    </div>
    <div class="col-md-12">
        <div class="row">
            <p class="mobile-p lead">{{ movie.Plot }}</p>
        </div>
        <div class="row">
            <p class="mobile-p"><strong>Speltid:</strong> {{ movie.Runtime }}</p>
        </div>
        <div class="row">
            <p class="mobile-p"><strong>Genre:</strong> {{ movie.Genre }}</p>
        </div>
        <div class="row">
            <p class="mobile-p"><strong>Skådespelare:</strong> {{ movie.Actors }}</p>
        </div>
        <div class="row">
            <p class="mobile-p"><strong>Regi:</strong> {{ movie.Director }}</p>
        </div>
        <div class="row">
            <p class="mobile-p"><strong>Språk:</strong> {{ movie.Language }}</p>
        </div>
        <div class="row">
            <p class="mobile-p"><strong>Undertext:</strong> svenska</p>
        </div>
        <div class="row">
            <p class="mobile-p"><strong>Från:</strong> {{ movie.Rated }} år</p>
        </div>
        <div class="row">
            <p class="mobile-p"><strong>Biljettpris:</strong> Vuxna 100 kr, barn(6-18 år) 60 kr</p>
        </div>
    </div>
    <div class="col-sm-12 col-md-12">

        <h2>Recensioner</h2>
        <div class="" v-for="ratings in movie.Ratings">
            <p class="mobile-p"> <i> {{ ratings.Source }} {{ ratings.Value }}</i></p>
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

.mobile-movie-bg {
    display: none;
}

.btn-brass {
    background: #b08a43cb;
    text-align: center;
    padding: 4px 10px;
    border-radius: 5px;
    border: transparent;
}

@media screen and (max-width: 824px) {
    .move-trailer {
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
        position: absolute;
        background-size: cover;
        max-height: 35vh;
    }

    .adjust-btn {
        background: #b08a43cb;
        position: relative;
        top: -20%;
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
