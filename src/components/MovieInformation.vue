<template>
<div class="row container mx-auto">

    <!-- 
#####################################################################
#####################################################################

                        EMPERORS NEW GROOVE

#####################################################################
#####################################################################
-->
    <!-- Gallowwalkers -->
    <div id="gallowalkers" class="row col-sm-12 col-md-12 pt-4 mx-auto">
        <div class="col-sm-12 col-md-6 row">
            <picture class="img-fluid hide-trailer-poster">
                <img src="../assets/movies/Gallowwalkers/poster-1.jpg" alt>
        </picture>

        </div>
        <div class="col-sm-12 col-md-6 hide-trailer-poster">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embeded-responsive embeded-responsive-16by9" src="https://www.youtube.com/embed/l7N649DFaCA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="pt-4">
                <p class="mobile-p lead">{{ movies[0].reviews[0].source }}</p>
                <p class="mobile-p"><i>- {{ movies[0].reviews[0].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[0].reviews[0].stars }} / {{ movies[0].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
            <div class="pt-2">
                <p class="mobile-p lead">{{ movies[0].reviews[1].source }}</p>
                <p class="mobile-p"><i>- {{ movies[0].reviews[1].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[0].reviews[1].stars }} / {{ movies[0].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
            <div class="pt-2">
                <p class="mobile-p lead">{{ movies[0].reviews[2].source }}</p>
                <p class="mobile-p"><i>- {{ movies[0].reviews[2].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[0].reviews[2].stars }} / {{ movies[0].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
        </div>

    </div>
    <div class="col-md-12">
        <div class="row">
            <h2 class="">{{ movies[0].title }}</h2>

        </div>
        <div class="row">
            <p class="mobile-p">Speltid: {{ movies[0].length }} min</p>
            <p class="mobile-p">Genre: {{ movies[0].genre }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Beskrivning: {{ movies[0].description }}</p>

        </div>
        <div class="row">
            <p class="mobile-p">Skådespelare: {{ movies[0].actors[0] }}, {{ movies[0].actors[1] }}, {{ movies[0].actors[2] }}, {{ movies[0].actors[3] }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Regi: {{ movies[0].director }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Språk: {{ movies[0].language }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Undertext: {{ movies[0].subtitles }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Från: {{ movies[0].ageRestriction }} år</p>
        </div>
        <div class="row">
            <p class="mobile-p">Biljettpris: Vuxna {{ movies[0].price }} kr, barn(6-18 år) {{ movies[0].price*0.6 }} kr</p>
        </div>
    </div>
    <div class="col-12">
        <h3>Bilder</h3>
        <div class="row justify-content-around">
            <picture class="col-4">
                <img src="../assets/movies/Gallowwalkers/poster-1.jpg" alt>
        </picture>
                <picture class="col-4">
                    <img src="../assets/movies/Gallowwalkers/poster-2.jpg" alt>
        </picture>
                    <picture class="col-4">
                        <img src="../assets/movies/Gallowwalkers/poster-3.jpg" alt>
        </picture>
        </div>
    </div>
    <div class="row col-sm-12 col-md-12 pt-3 mx-auto">
        <div class="col-sm-12 col-md-6 pt-3 move-trailer">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embeded-responsive embeded-responsive-16by9" src="https://www.youtube.com/embed/l7N649DFaCA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="pt-4">
                <p class="mobile-p lead">{{ movies[0].reviews[0].source }}</p>
                <p class="mobile-p"><i>- {{ movies[0].reviews[0].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[0].reviews[0].stars }} / {{ movies[0].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
            <div class="pt-2">
                <p class="mobile-p lead">{{ movies[0].reviews[1].source }}</p>
                <p class="mobile-p"><i>- {{ movies[0].reviews[1].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[0].reviews[1].stars }} / {{ movies[0].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
            <div class="pt-2">
                <p class="mobile-p lead">{{ movies[0].reviews[2].source }}</p>
                <p class="mobile-p"><i>- {{ movies[0].reviews[2].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[0].reviews[2].stars }} / {{ movies[0].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
        </div>
  <hr class="my-4">
    </div>

    <!-- 
#####################################################################
#####################################################################

                        EMPERORS NEW GROOVE

#####################################################################
#####################################################################
-->
    <!-- Emperors New Groove -->
    <div id="Emperor" class="row col-sm-12 col-md-12 pt-4 mx-auto pt-5">
        <div class="col-sm-12 col-md-6 row">
            <picture class="img-fluid hide-trailer-poster">
                <img src="../assets/movies/Emperors-Groove/poster-3.jpg" alt>
        </picture>

        </div>
        <div class="col-sm-12 col-md-6 hide-trailer-poster">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embeded-responsive embeded-responsive-16by9" src="https://www.youtube.com/embed/REORN7vqPB0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="pt-4">
                <p class="mobile-p lead">{{ movies[1].reviews[0].source }}</p>
                <p class="mobile-p"><i>- {{ movies[1].reviews[0].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[1].reviews[0].stars }} / {{ movies[1].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
            <div class="pt-2">
                <p class="mobile-p lead">{{ movies[1].reviews[1].source }}</p>
                <p class="mobile-p"><i>- {{ movies[1].reviews[1].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[1].reviews[1].stars }} / {{ movies[1].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
            <div class="pt-2">
                <p class="mobile-p lead">{{ movies[1].reviews[2].source }}</p>
                <p class="mobile-p"><i>- {{ movies[1].reviews[2].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[1].reviews[2].stars }} / {{ movies[1].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
        </div>

    </div>
    <div class="col-md-12">
        <div class="row">
            <h2 class="">{{ movies[1].title }}</h2>

        </div>
        <div class="row">
            <p class="mobile-p">Speltid: {{ movies[1].length }} min</p>
            <p class="mobile-p">Genre: {{ movies[1].genre }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Beskrivning: {{ movies[1].description }}</p>

        </div>
        <div class="row">
            <p class="mobile-p">Skådespelare: {{ movies[1].actors[0] }}, {{ movies[1].actors[1] }}, {{ movies[1].actors[2] }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Regi: {{ movies[1].director }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Språk: {{ movies[1].language }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Undertext: {{ movies[1].subtitles }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Från: {{ movies[1].ageRestriction }} år</p>
        </div>
        <div class="row">
            <p class="mobile-p">Biljettpris: Vuxna {{ movies[1].price }} kr, barn(6-18 år) {{ movies[1].price*0.6 }} kr</p>
        </div>
    </div>
    <div class="col-12">
        <h3>Bilder</h3>
        <div class="row justify-content-around">
            <picture class="col-4">
                <img src="../assets/movies/Emperors-Groove/poster-1.jpg" alt>
        </picture>
                <picture class="col-4">
                    <img src="../assets/movies/Emperors-Groove/poster-2.jpg" alt>
        </picture>
                    <picture class="col-4">
                        <img src="../assets/movies/Emperors-Groove/poster-3.jpg" alt>
        </picture>
        </div>
    </div>
    <div class="row col-sm-12 col-md-12 pt-3 mx-auto">
        <div class="col-sm-12 col-md-6 pt-3 move-trailer">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embeded-responsive embeded-responsive-16by9" src="https://www.youtube.com/embed/REORN7vqPB0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="pt-4">
                <p class="mobile-p lead">{{ movies[1].reviews[0].source }}</p>
                <p class="mobile-p"><i>- {{ movies[1].reviews[0].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[1].reviews[0].stars }} / {{ movies[1].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
            <div class="pt-2">
                <p class="mobile-p lead">{{ movies[1].reviews[1].source }}</p>
                <p class="mobile-p"><i>- {{ movies[1].reviews[1].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[1].reviews[1].stars }} / {{ movies[1].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
            <div class="pt-2">
                <p class="mobile-p lead">{{ movies[1].reviews[2].source }}</p>
                <p class="mobile-p"><i>- {{ movies[1].reviews[2].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[1].reviews[2].stars }} / {{ movies[1].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
        </div>
  <hr class="my-4">
    </div>
    <!-- 
#####################################################################
#####################################################################

                        Luzhin Defence

#####################################################################
#####################################################################
-->
    <!-- Luzhin Defence -->
    <div id="Luzhin-Defence" class="row col-sm-12 col-md-12 pt-4 mx-auto pt-5">
        <div class="col-sm-12 col-md-6 row">
            <picture class="img-fluid hide-trailer-poster">
                <img src="../assets/movies/Luzhin-Defence/poster-3.jpg" alt>
        </picture>

        </div>
        <div class="col-sm-12 col-md-6 hide-trailer-poster">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embeded-responsive embeded-responsive-16by9" src="https://www.youtube.com/embed/9BeWpZVVDhw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="pt-4">
                <p class="mobile-p lead">{{ movies[2].reviews[0].source }}</p>
                <p class="mobile-p"><i>- {{ movies[2].reviews[0].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[2].reviews[0].stars }} / {{ movies[2].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
            <div class="pt-2">
                <p class="mobile-p lead">{{ movies[2].reviews[1].source }}</p>
                <p class="mobile-p"><i>- {{ movies[2].reviews[1].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[2].reviews[1].stars }} / {{ movies[2].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
            <div class="pt-2">
                <p class="mobile-p lead">{{ movies[2].reviews[2].source }}</p>
                <p class="mobile-p"><i>- {{ movies[2].reviews[2].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[2].reviews[2].stars }} / {{ movies[2].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
        </div>

    </div>
    <div class="col-md-12">
        <div class="row">
            <h2 class="">{{ movies[2].title }}</h2>

        </div>
        <div class="row">
            <p class="mobile-p">Speltid: {{ movies[2].length }} min</p>
            <p class="mobile-p">Genre: {{ movies[2].genre }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Beskrivning: {{ movies[2].description }}</p>

        </div>
        <div class="row">
            <p class="mobile-p">Skådespelare: {{ movies[2].actors[0] }}, {{ movies[2].actors[1] }}, {{ movies[2].actors[2] }}, {{ movies[2].actors[3] }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Regi: {{ movies[2].director }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Språk: {{ movies[2].language }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Undertext: {{ movies[2].subtitles }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Från: {{ movies[2].ageRestriction }} år</p>
        </div>
        <div class="row">
            <p class="mobile-p">Biljettpris: Vuxna {{ movies[2].price }} kr, barn(6-18 år) {{ movies[2].price*0.6 }} kr</p>
        </div>
    </div>
    <div class="col-12">
        <h3>Bilder</h3>
        <div class="row justify-content-around">
            <picture class="col-4">
                <img src="../assets/movies/Luzhin-Defence/poster-1.jpg" alt>
        </picture>
                <picture class="col-4">
                    <img src="../assets/movies/Luzhin-Defence/poster-2.jpg" alt>
        </picture>
                    <picture class="col-4">
                        <img src="../assets/movies/Luzhin-Defence/poster-3.jpg" alt>
        </picture>
        </div>
    </div>
    <div class="row col-sm-12 col-md-12 pt-3 mx-auto">
        <div class="col-sm-12 col-md-6 pt-3 move-trailer">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embeded-responsive embeded-responsive-16by9" src="https://www.youtube.com/embed/9BeWpZVVDhw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="pt-4">
                <p class="mobile-p lead">{{ movies[2].reviews[0].source }}</p>
                <p class="mobile-p"><i>- {{ movies[2].reviews[0].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[2].reviews[0].stars }} / {{ movies[2].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
            <div class="pt-2">
                <p class="mobile-p lead">{{ movies[2].reviews[1].source }}</p>
                <p class="mobile-p"><i>- {{ movies[2].reviews[1].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[2].reviews[1].stars }} / {{ movies[2].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
            <div class="pt-2">
                <p class="mobile-p lead">{{ movies[2].reviews[2].source }}</p>
                <p class="mobile-p"><i>- {{ movies[2].reviews[2].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[2].reviews[2].stars }} / {{ movies[2].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
        </div>
  <hr class="my-4">
    </div>
    <!-- 
#####################################################################
#####################################################################

                        So Ends Our Night

#####################################################################
#####################################################################
-->
    <!-- So Ends Our Night -->
    <div id="So-Ends-Our-Night" class="row col-sm-12 col-md-12 pt-4 mx-auto pt-5">
        <div class="col-sm-12 col-md-6 row">
            <picture class="img-fluid hide-trailer-poster">
                <img src="../assets/movies/So-Ends-Our-Night/poster-2.jpg" alt>
        </picture>

        </div>
        <div class="col-sm-12 col-md-6 hide-trailer-poster">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embeded-responsive embeded-responsive-16by9" src="https://www.youtube.com/embed/7uDuFh-nC-c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="pt-4">
                <p class="mobile-p lead">{{ movies[3].reviews[0].source }}</p>
                <p class="mobile-p"><i>- {{ movies[3].reviews[0].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[3].reviews[0].stars }} / {{ movies[3].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
            <div class="pt-2">
                <p class="mobile-p lead">{{ movies[3].reviews[1].source }}</p>
                <p class="mobile-p"><i>- {{ movies[3].reviews[1].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[3].reviews[1].stars }} / {{ movies[3].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
            <div class="pt-2">
                <p class="mobile-p lead">{{ movies[3].reviews[2].source }}</p>
                <p class="mobile-p"><i>- {{ movies[3].reviews[2].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[3].reviews[2].stars }} / {{ movies[3].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
        </div>

    </div>
    <div class="col-md-12">
        <div class="row">
            <h2 class="">{{ movies[3].title }}</h2>

        </div>
        <div class="row">
            <p class="mobile-p">Speltid: {{ movies[3].length }} min</p>
            <p class="mobile-p">Genre: {{ movies[3].genre }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Beskrivning: {{ movies[3].description }}</p>

        </div>
        <div class="row">
            <p class="mobile-p">Skådespelare: {{ movies[3].actors[0] }}, {{ movies[3].actors[1] }}, {{ movies[3].actors[2] }}, {{ movies[3].actors[3] }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Regi: {{ movies[3].director }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Språk: {{ movies[3].language }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Undertext: {{ movies[3].subtitles }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Från: {{ movies[3].ageRestriction }} år</p>
        </div>
        <div class="row">
            <p class="mobile-p">Biljettpris: Vuxna {{ movies[3].price }} kr, barn(6-18 år) {{ movies[3].price*0.6 }} kr</p>
        </div>
    </div>
    <div class="col-12">
        <h3>Bilder</h3>
        <div class="row justify-content-around">
            <picture class="col-4">
                <img src="../assets/movies/So-Ends-Our-Night/poster-1.jpg" alt>
        </picture>
                <picture class="col-4">
                    <img src="../assets/movies/So-Ends-Our-Night/poster-2.jpg" alt>
        </picture>
                    <picture class="col-4">
                        <img src="../assets/movies/So-Ends-Our-Night/poster-3.jpg" alt>
        </picture>
        </div>
    </div>
    <div class="row col-sm-12 col-md-12 pt-3 mx-auto">
        <div class="col-sm-12 col-md-6 pt-3 move-trailer">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embeded-responsive embeded-responsive-16by9" src="https://www.youtube.com/embed/7uDuFh-nC-c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="pt-4">
                <p class="mobile-p lead">{{ movies[3].reviews[0].source }}</p>
                <p class="mobile-p"><i>- {{ movies[3].reviews[0].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[3].reviews[0].stars }} / {{ movies[3].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
            <div class="pt-2">
                <p class="mobile-p lead">{{ movies[3].reviews[1].source }}</p>
                <p class="mobile-p"><i>- {{ movies[3].reviews[1].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[3].reviews[1].stars }} / {{ movies[3].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
            <div class="pt-2">
                <p class="mobile-p lead">{{ movies[3].reviews[2].source }}</p>
                <p class="mobile-p"><i>- {{ movies[3].reviews[2].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[3].reviews[2].stars }} / {{ movies[3].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
        </div>
  <hr class="my-4">
    </div>
    <!-- 
#####################################################################
#####################################################################

                        Declaration of War

#####################################################################
#####################################################################
-->
    <!-- Declaration of War -->
    <div id="Declaration-of-War" class="row col-sm-12 col-md-12 pt-4 mx-auto pt-5">
        <div class="col-sm-12 col-md-6 row">
            <picture class="img-fluid hide-trailer-poster">
                <img src="../assets/movies/Declaration-of-War/poster-1.jpg" alt>
        </picture>

        </div>
        <div class="col-sm-12 col-md-6 hide-trailer-poster">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embeded-responsive embeded-responsive-16by9" src="https://www.youtube.com/embed/v5NMhtOTC-s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="pt-4">
                <p class="mobile-p lead">{{ movies[4].reviews[0].source }}</p>
                <p class="mobile-p"><i>- {{ movies[4].reviews[0].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[4].reviews[0].stars }} / {{ movies[4].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
            <div class="pt-2">
                <p class="mobile-p lead">{{ movies[4].reviews[1].source }}</p>
                <p class="mobile-p"><i>- {{ movies[4].reviews[1].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[4].reviews[1].stars }} / {{ movies[4].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
            <div class="pt-2">
                <p class="mobile-p lead">{{ movies[4].reviews[2].source }}</p>
                <p class="mobile-p"><i>- {{ movies[4].reviews[2].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[4].reviews[2].stars }} / {{ movies[4].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
        </div>

    </div>
    <div class="col-md-12">
        <div class="row">
            <h2 class="">{{ movies[4].title }}</h2>

        </div>
        <div class="row">
            <p class="mobile-p">Speltid: {{ movies[4].length }} min</p>
            <p class="mobile-p">Genre: {{ movies[4].genre }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Beskrivning: {{ movies[4].description }}</p>

        </div>
        <div class="row">
            <p class="mobile-p">Skådespelare: {{ movies[4].actors[0] }}, {{ movies[4].actors[1] }}, {{ movies[4].actors[2] }}, {{ movies[4].actors[3] }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Regi: {{ movies[4].director }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Språk: {{ movies[4].language }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Undertext: {{ movies[4].subtitles }}</p>
        </div>
        <div class="row">
            <p class="mobile-p">Från: {{ movies[4].ageRestriction }} år</p>
        </div>
        <div class="row">
            <p class="mobile-p">Biljettpris: Vuxna {{ movies[4].price }} kr, barn(6-18 år) {{ movies[4].price*0.6 }} kr</p>
        </div>
    </div>
    <div class="col-12">
        <h3>Bilder</h3>
        <div class="row justify-content-around">
            <picture class="col-4">
                <img src="../assets/movies/Declaration-of-War/poster-1.jpg" alt>
        </picture>
                <picture class="col-4">
                    <img src="../assets/movies/Declaration-of-War/poster-2.jpg" alt>
        </picture>
                    <picture class="col-4">
                        <img src="../assets/movies/Declaration-of-War/poster-3.jpg" alt>
        </picture>
        </div>
    </div>
    <div class="row col-sm-12 col-md-12 pt-3 mx-auto">
        <div class="col-sm-12 col-md-6 pt-3 move-trailer">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embeded-responsive embeded-responsive-16by9" src="https://www.youtube.com/embed/v5NMhtOTC-s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="pt-4">
                <p class="mobile-p lead">{{ movies[4].reviews[0].source }}</p>
                <p class="mobile-p"><i>- {{ movies[4].reviews[0].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[4].reviews[0].stars }} / {{ movies[4].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
            <div class="pt-2">
                <p class="mobile-p lead">{{ movies[4].reviews[1].source }}</p>
                <p class="mobile-p"><i>- {{ movies[4].reviews[1].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[4].reviews[1].stars }} / {{ movies[4].reviews[0].max }} <i class="far fa-star"></i></p>
            </div>
            <div class="pt-2">
                <p class="mobile-p lead">{{ movies[4].reviews[2].source }}</p>
                <p class="mobile-p"><i>- {{ movies[4].reviews[2].quote }}</i></p>
                <p class="mobile-p lead">{{ movies[4].reviews[2].stars }} / {{ movies[4].reviews[0].max }} <i class="far fa-star"></i></p>
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
            movies: this.$store.movies,
            shows: this.$store.shows,
            auditoriums: this.$store.auditoriums
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
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
