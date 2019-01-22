
/* 
# Lägg in html för säte i Seat.Vue
#  SeatsComponent.vue innehåller array för salong.

*/



<template>
    <div class="booking">
        <div class="container-fluid">
            


            <svg width="100" height="50">
                <a href="#">
                    <path
                    d="M 0 0
                       H 100 0
                       V 100 50
                       H 0 100
                       L 0 55
                       Z"
                        fill="#b08a43"/>
                </a>
        </svg>

            <h1 class="row booking-title">{{movie.title}}</h1>

            <h2 class="flex-row booking-subtitle"><span class="col-4">{{movie.weekday}} </span><span class="col-4">{{movie.date}}</span><span class="col-4"> {{movie.time}}</span></h2>
            <!-- <img class="img-fluid booking-poster" v-bind:src="movie.posterURL"> -->
            <p class="row booking-line"> 
                <span class="col-4 float-left text-left">Vuxna:</span>
            </p>
             <div class="flex-row booking-button-row"> <button v-on:click="subtractAdult" class="col-1 btn btn-movie">-</button>
                <span class="col-1">{{adultsnumber}}</span><button v-on:click="addAdult" class="col-1 btn btn-movie">+</button></div>

            <p class="row booking-line">
                <span class="col-12">Pensionärer: </span>    
            </p>
            <div class="flex-row booking-button-row">
             <button v-on:click="subtractSenior" class="col-1 btn btn-movie">-</button><span class="col-1 ticket-number">{{seniorsnumber}}</span><button v-on:click="addSenior" class="col-1 btn btn-movie">+</button>
            </div>
            <hr>
            <p>Antal biljetter: {{totalnumber}} </p>
            <p>Summa: {{totalAmount}} kronor.</p>


            <div id="seats">

                SÄTENA TILL SALONGEN HAMNAR HÄR

            </div>
            <div class="row"><input type="email" class="form-control booking-button-row" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></div>
           
            <div class="row booking-button-row"><button class="col-12 btn btn-success">Boka</button></div>
            <div class="row booking-button-row"><button href=""class="col-12 btn btn-danger"> <router-link to="/" class="col-4">Avbryt</router-link></button></div>

           

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
            title: "John Wick",
            weekday: "Fredag",
            date: "25/1",
            time: "21:00",
            posterURL: "https://i.pinimg.com/474x/6e/1d/48/6e1d484aae1e5edfd456de52c6772244.jpg",
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
            if (this.adultsnumber>0 && this.totalnumber>0) {
                this.adultsnumber--;
                this.subtractToTotalNumber();
            }
        },
        addAdult(){
            if (this.adultsnumber<10 && this.totalnumber < 10) {
                this.adultsnumber++;
                this.addToTotalNumber();
            }
        },
        subtractSenior(){
            if (this.seniorsnumber>0 && this.totalnumber > 0){
                this.seniorsnumber--;
                this.subtractToTotalNumber()
            }
        },
        addSenior(){
            if (this.seniorsnumber<10 && this.totalnumber<10) {
                this.seniorsnumber++;
                this.addToTotalNumber();
            }
        },
        addToTotalNumber(){
            if(this.totalnumber<10){
            this.totalnumber ++;
            this.calculatePrice();
            }
        },
        subtractToTotalNumber(){
            this.totalnumber --;
            this.calculatePrice();
        },
        calculatePrice(){
            this.totalAmount = 0;
            this.totalAmount += (this.seniorsnumber * 80);
            this.totalAmount += (this.adultsnumber * 100);
        }
        
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


    .booking {
        margin-bottom: 100px;
    }

    .booking-line{
        justify-content: space-evenly;
        margin-bottom: 5px;
        
    }

    .booking-button-row{
        margin-bottom: 15px;
    }
    .btn-movie {
        color: var(--main-background-color);
        background-color: var(--special-element-color);
        color: var(--main-background-color);
        width: 35px;
        height: 35px;
        margin-left: 5px;
        margin-right: 5px;
        align-self: center;
    }
    .booking-title {
        text-align: center;
        justify-content: center;
        font-size: 2em;
        align-content: flex-start;
        margin-top: 30px;
        margin-bottom: 15px;
        font-weight: 100;

    }
    .booking-subtitle {
        justify-content: center;
        justify-items: center;
        font-size: 1.2em;
        margin-bottom: 30px;
        font-weight: 100;
    }

    .booking-poster {
        width: 50%;
        align-self: center;
        height: auto;
        margin-bottom: 20px;
    }

    .seat {
        color: var(--main-element-color);
    }
    .seat-blocked {
        color: rgb(107, 5, 5);
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
        margin: 20 20 20 20;
    }
        
</style>
