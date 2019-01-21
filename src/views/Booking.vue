
/* 
# Lägg in html för säte i Seat.Vue
#  SeatsComponent.vue innehåller array för salong.

*/



<template>
    <div class="booking container">
        <div class="col-12">
            <h1>{{movie.title}}</h1>
        
            <h2>{{movie.weekday}}, {{movie.date}}, {{movie.time}} </h2>


            <p class="booking-line"> Vuxna: <button v-on:click="subtractAdult" class="btn btn-movie">-</button>{{adultsnumber}}<button v-on:click="addAdult" class="btn btn-movie">+</button></p>

            <p class="booking-line">Pensionärer: <button v-on:click="subtractSenior" class="btn btn-movie">-</button><span class="ticket-number">{{seniorsnumber}}</span><button v-on:click="addSeniour" class="btn btn-movie">+</button></p>

            

            <hr>

            <p>SUMMA: {{totalAmount}} kronor.</p>


            <div id="seats">

                SÄTENA TILL SALONGEN HAMNAR HÄR

            </div>


        </div>  






    </div>
</template>


<script>
export default {
    name: "booking",
    data() {
        return {

            movie: {
        
            /* MOCKDATA  BELOW*/
            title: "Just another movie",
            weekday: "Friday",
            date: "25/1",
            time: "21:00",
            },
            /* END OF MOCKDATA */

            adultsnumber: 0,
            studentsnumber: 0,
            seniorsnumber: 0,
            totalnumber: 0,
            totalAmount: 0,
        };
    },

    methods: {
        subtractAdult(){
            if (this.adultsnumber>0) {
                this.adultsnumber--;
            }
        },
        addAdult(){
            if (this.adultsnumber<10) {
                this.adultsnumber++;
            }
        },
        subtractSenior(){
            if (this.seniorsnumber>0){
                this.seniorsnumber--;
            }
        },
        addSenior(){
            if (this.seniorsnumber>10) {
                this.adultsnumber++;
            }
        },
        
        }
  };
</script>


<style scoped>
    :root {

        --main-background-color: whitesmoke;
            /*whitesmoke is for background and text inside special elements*/
        --main-element-color: #36454f; /*"CHARCOAL*/
            /*Charcoal is for text on main pages and navbar background*/
        --special-element-color: #b08a43; /*"BRASS"*/
            /*Brass is for special elements like buttons*/
        --main-font-family: 'Montserrat', sans-serif;

        /* 
            Use global color-variables with:
            EXAMPLE: "color: var(--main-element-color);"
        */
        font-family: 'Montserrat', sans-serif;
    }

    .booking-line{
        text-align: left;
    }

    .btn {
        color: var(--main-background-color);
        background-color: var(--special-element-color);

    }
    .btn-movie {
        background-color: var(--special-element-color);
        color: var(--main-background-color);
        width: 35px;
        height: 35px;
        margin: 0px 15px 0px 15px
    }
    .seat {
        color: var(--main-element-color);
    }
    .seat-blocked {
        color: crimson;
    }
    .seat-selected {
        color: var(--special-element-color);
    }

    #seats {
        height: 200px;
        width: 100%;
        background-color: blueviolet;
        color: white;
        text-align: center;
    }
        
</style>
