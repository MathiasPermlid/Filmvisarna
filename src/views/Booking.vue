
/* 
# Lägg in html för säte i Seat.Vue
#  SeatsComponent.vue innehåller array för salong.

*/



<template>
    <div class="booking">
        <div class="container-fluid">

            <h1 class="row booking-title">{{movie.title}}</h1>

            <h2 class="booking-subtitle"><span class="col-4">{{movie.weekday}} </span><span class="col-4">{{movie.date}}</span><span class="col-4"> {{movie.time}}</span></h2>
            <!-- <img class="img-fluid booking-poster" v-bind:src="movie.posterURL"> -->
            
            <div class="booking-button-row"> 
                <span class="col-1">Vuxna:</span>
                
                <a v-on:click="subtractAdult" class="col-1">
                    <img src="../assets/minusbutton.svg" class="add-subtract-button" alt="Ta bort en vuxen-biljett"/>
                </a>
                
                <span class="ticket-number col-1">{{adultsnumber}}</span>
                
                <a v-on:click="addAdult" class="col-1">
                    <img src="../assets/plusbutton.svg" class="add-subtract-button" alt="Lägg till en vuxen-biljett"/>
                </a>
            </div>


            <div class="flex-row booking-button-row">
                <span class="col-12">Pensionärer: </span>    
                <a v-on:click="subtractSenior" class="col-1">
                    <img src="../assets/minusbutton.svg" class="add-subtract-button" alt="Ta bort en pensionärs-biljett"/>
                </a>
                
                <span class="ticket-number col-1">{{seniorsnumber}}</span>
                <a v-on:click="addSenior" class="col-1">
                    <img src="../assets/plusbutton.svg" class="add-subtract-button" alt="Lägg till en pensionärs-biljett"/>
                </a>
            </div>
            
            <hr>
            
            <p>Antal biljetter: {{totalnumber}} </p>
            
            <p>Summa: {{totalAmount}} kronor.</p>

            <div id="seatsPlaceholder">
                <SeatsComponent :selectedTickets="totalnumber" />
            </div>

 <div class="row justify-content-around">    
       <div class="row justify-content-center"><input v-model="userEmail" type="email" class="form-control booking-button-row col-12" id="input-email" aria-describedby="emailHelp" placeholder="Skriv in din e-postadress"></div>
 </div>

 <div class="row justify-content-around">
      <div class="col-12 booking-button-row"><button class="col-5 btn btn-large btn-success" id="boka-button">Boka</button></div>
      <div class="col-12 booking-button-row"><button class="col-5 btn btn-large btn-danger" id="cancel-button"><router-link to="/">Avbryt</router-link></button></div>
 </div>



 
    


           
           
            
            
            

        </div>
    </div>
</template>


<script>
import SeatsComponent from "@/components/SeatsComponent.vue";
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
            userEmail: '',
        };
    },
    components: {
        SeatsComponent
    },//components
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

    a {
        color:inherit;
    }
    a:visited {
        color:inherit;
    }
    a:hover {
        font-style: none;
    }
    .booking {
        margin-bottom: 100px;
    }

    .booking-line{
        justify-content: space-evenly;
        margin-bottom: 10px;
        font-weight: 400;
    }

    .booking-button-row{
        margin-bottom: 30px;
        height: 25px;
        justify-content: baseline;
        align-content:unset;
    }
    

    .add-subtract-button{
        width: 50px;
        height: auto;
        object-fit: scale-down;
        padding-left: 0;
        padding-right: 0;
        padding-top: 3px;
        padding-bottom: 3px;
        margin: 0;
    }

    .booking-title {
        text-align: center;
        justify-content: center;
        font-size: 2em;
        align-content: flex-start;
        margin-top: 45px;
        margin-bottom: 15px;
        font-weight:100;

    }
    .booking-subtitle {
        justify-content: center;
        justify-items: center;
        font-size: 1.2em;
        margin-bottom: 30px;
        font-weight: 100;
    }

    .ticket-number{
        font-weight: 700;
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


    #boka-button{
        width: 200px;
    }
    #cancel-button {
        width: 200px;
    }

    /*#seatsPlaceholder {
        height: 200px;
        width: 100%;
        background-color: blueviolet;
        color: white;
        text-align: center;
        
        margin-bottom: 25px;    }*/
        
</style>
