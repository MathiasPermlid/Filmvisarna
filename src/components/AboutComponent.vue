<template>
<div class="row container m-0 p-0">
    <h1 class="col-12 pt-3 pb-3 m-0 h1-custom-size">Om oss</h1>
    <div class="col-sm-12  pl-0 pr-0 pb-0">
        <div class="col-md-12 row hide-on-mobile">

            <div class="col-md-6 hide-on-mobile row">
                <picture class="img-fluid hide-on-mobile">
                    <img src="https://pro.boxoffice.com/wp-content/uploads/2018/04/IMG_3865-e1524058912730.jpg">
            </picture>

            </div>
            <div class="col-md-6 hide-on-mobile row">
                <h5 class="mobile-p hide-on-mobile">Den stora salong som rymmer 81 biogäster</h5>
            </div>

            <div class="col-md-6 hide-on-mobile row">
                <picture class="img-fluid hide-on-mobile">
                    <img src="http://luxsupreme.com/wp-content/uploads/2014/06/embassy-diplomat-screens-1-636x310.jpg">
            </picture>

            </div>
            <div class="col-md-6 hide-on-mobile row">
                <h5 class="mobile-p hide-on-mobile">Den mysiga lilla salong som rymmer 56 biogäster</h5>
            </div>
        </div>
        <div class="mobile-movie-bg col-12 pl-0 pr-0 pb-0">
            <picture class="img-fluid">
                <img src="https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
            </picture>

        </div>
    </div>
    <article class="mobile-p mt-3 ml-3 mr-3">
        <p class="mobile-p lead">Grand är Malmös mest anrika bio med fullständiga rättigheter, säten av mjuk sammet och inga dumma inloggningar <i>- som på den goda tiden.</i></p>

        <h3 class="mt-2 mb-0">Hitta hit</h3>
        <p class="mobile-p">Fina gatan 4, Malmö</p>

        <h3 class="mt-2 mb-0">Telefon</h3>
        <p class="mobile-p">040 - 56 26 00 00</p>

        <h3 class="mt-2 mb-0">Vanliga frågor</h3>
        
      

            <div id="accordion">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Finns det sittkuddar för barn?
        </button>
                        </h5>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                            Ja. Det finns sittkuddar innanför samtliga entrédörrar till salongerna.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Har ni hörslingor?
        </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div class="card-body">
                            Ja. Fråga personalen när du scannar din biljett så hjälper de dig.
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Vilka förfriskningar säljer ni?
        </button>
                        </h5>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div class="card-body">
                            Vi har milkshakes, läsk, vin och ett urval av öl.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingFour">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          Säljer ni snacks och mat?
        </button>
                        </h5>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                        <div class="card-body">
                            Vi har ett urval av tjocka amerikanska pizzor som säljs i slicebitar. Vi har även en gammaldags popcornmaskin, sockervadd och godis från lilla godisfabriken här i Malmö. Vegetariska och veganska alternativ finns.
                        </div>
                    </div>
                </div>
            </div>

        
    </article>
</div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    components: {},
    methods: {}
}
</script>

<style>
img {
    width: 100%;
}

picture {
    width: 100%;
}

@media screen and (max-width: 1024px) {}
</style>
