<template>
  <div class="booking">
    <div class="container-fluid">

    
        <h1 class="row align-items-center booking-title text-center">{{movie.title}}</h1>

        <h2 class="booking-subtitle row align-items-center text-center">
          <span class="booking-subtitle-span">{{movie.weekday}}</span>
          <span class="booking-subtitle-span">{{movie.date}}</span>
          <span class="booking-subtitle-span">{{movie.time}}</span>
        </h2>


      <!-- <img class="img-fluid booking-poster" v-bind:src="movie.posterURL"> -->
      <div class="booking-button-row row justify-content-between ml-4">
        <span class="col-4 text-left">Vuxna:</span>
        <div  class=""></div>
        <a v-on:click="subtractAdult" class="">
          <img
            src="../assets/minusbutton.svg"
            class="add-subtract-button"
            alt="Ta bort en vuxen-biljett"
          >
        </a>
        
        <span class="ticket-number ">{{adultsnumber}}</span>
        
        <a v-on:click="addAdult" class="mr-4">
          <img
            src="../assets/plusbutton.svg"
            class="add-subtract-button"
            alt="Lägg till en vuxen-biljett"
          >
        </a>
      </div>

      <div class="booking-button-row row justify-content-between ml-4">
        <span class="col-4 text-left">Pensionärer:</span>
        <a v-on:click="subtractSenior" class="ml-4">
          <img
            src="../assets/minusbutton.svg"
            class="add-subtract-button"
            alt="Ta bort en pensionärs-biljett">
        </a>
        
        <span class="ticket-number">{{seniorsnumber}}</span>
        <a v-on:click="addSenior" class="mr-4">
          <img
            src="../assets/plusbutton.svg"
            class="add-subtract-button"
            alt="Lägg till en pensionärs-biljett"
          >
        </a>
      </div>
      <div class="booking-button-row row justify-content-between ml-4">
        <span class="col-4 text-left">Barn:</span>
        <a v-on:click="subtractChild" class="ml-4">
          <img
            src="../assets/minusbutton.svg"
            class="add-subtract-button"
            alt="Ta bort en pensionärs-biljett">
        </a>
        
        <span class="ticket-number">{{childnumber}}</span>
        <a v-on:click="addChild" class="mr-4">
          <img
            src="../assets/plusbutton.svg"
            class="add-subtract-button"
            alt="Lägg till en pensionärs-biljett"
          >
        </a>
      </div>
        <div class="booking-error" :class="{ hide: !this.subtractError }">Du måste avvälja säten innan du kan ta bort biljetter</div>


      <hr>

      <p>Antal biljetter: {{totalnumber}}</p>

      <div class="booking-error" :class="{ hide: !this.noTicketsAddedError }">Välj antal biljetter innan du väljer säten</div>
      <div class="booking-error" :class="{ hide: !this.ticketsEqualToSeatsError }">Lägg till fler biljetter för att kunna välja fler säten</div>
      
      <div class="row justify-content-center">
        <div id="screen" class=""></div>
      </div>

            <div id="seatsPlaceholder">
                <SeatsComponent :auditorium="this.show.auditorium.seats" :selectedTickets="totalnumber" @send-info="getInfo($event)" @error-message="showErrorMessage()" />
            </div>

      <div class="row justify-content-around">
        <div class="row justify-content-center">
          <input
            v-model="userEmail"
            type="email"
            class="form-control booking-button-row col-12"
            id="input-email"
            aria-describedby="emailHelp"
            placeholder="Skriv in din e-postadress"
          >
        </div>
      </div>

      <div class="row justify-content-around">
        <div class="col-12 booking-button-row">
          <button class="col-5 btn btn-large btn-success" id="boka-button">Boka</button>
        </div>
        <div class="col-12 booking-button-row">
          <button class="col-5 btn btn-large btn-danger" id="cancel-button">
            <router-link to="/">Avbryt</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { db } from "@/plugins/cloud";

import SeatsComponent from "@/components/SeatsComponent.vue";
export default {
  name: "booking",
  data() {
    return {
      date: "",
      dateIndex: 0,
      day: {},
      show: {},
      movie: {
        /* MOCKDATA  BELOW*/
        title: "John Wick",
        weekday: "Fredag",
        date: "25/1",
        time: "21:00",
        posterURL:
          "https://i.pinimg.com/474x/6e/1d/48/6e1d484aae1e5edfd456de52c6772244.jpg"
      },
      /* END OF MOCKDATA */

      adultsnumber: 0,
      childnumber: 0,
      seniorsnumber: 0,
      totalnumber: 0,
      totalAmount: 0,
      userEmail: "",
      noTicketsAddedError: false,
      ticketsEqualToSeatsError: false,
      subtractError: false,
      numberOfSelectedSeats: 0,
      
    };
  },
  created() {
    // get date and the dates show from path param
    let link = location.pathname.replace("/book/", "");
    this.dateIndex = link.split("").pop();
    this.date = link.split("");
    this.date.pop();
    this.date = this.date.join("");

    this.day = this.$store.shows[this.date];
    this.show = this.day.shows[this.dateIndex];

    //this.show.auditorium.seats[row][seat] = 1;

    console.log('this.show SKRIVES UT HÄR: ',this.show);
  },
  /*
  mounted() {
    //  get date and the dates show from path param
    let link = location.pathname.replace("/book/", "");
    this.dateIndex = link.split("").pop();
    this.date = link.split("");
    this.date.pop();
    this.date = this.date.join("");

    this.day = this.$store.shows[this.date];
    this.show = this.day.shows[this.dateIndex];

    //this.show.auditorium.seats[row][seat] = 1;

    console.log('this.show SKRIVES UT HÄR: ',this.show);
  },*/
    components: {
        SeatsComponent
    },//components
  methods: {
    showErrorMessage(){
        //om användaren ej har valt några biljetter alls
        if (!this.totalnumber){
                this.noTicketsAddedError = true;
            }
        //om användaren valt lika många biljetter som säten
        else{ 
            this.ticketsEqualToSeatsError = true;
        }
    },
    getInfo(infoFromChild){
        this.numberOfSelectedSeats = infoFromChild.numberOfSelectedSeats;
        this.ticketsEqualToSeatsError = infoFromChild.error;
        this.subtractError = infoFromChild.error;
    },

   /* //BEHÖVS DENNA METOD???
    updateShow() {
      // update show with current seats left and seats taken
      db.ref("visningar/" + this.date).set({
        date: this.day.date,
        shows: {
          0: {
            auditorium: this.day.shows[0].auditorium,
            time: "17:00",
            movie: this.day.shows[0].movie
          },
          1: {
            auditorium: this.day.shows[1].auditorium,
            time: "17:00",
            movie: this.day.shows[1].movie
          },
          2: {
            auditorium: this.day.shows[2].auditorium,
            time: "19:30",
            movie: this.day.shows[2].movie
          }
        }
      });
    },//updateShow
        */
      
    subtractAdult() {
        //om valda biljetter är mer än valda säten
        if(this.totalnumber > this.numberOfSelectedSeats){
            if (this.adultsnumber > 0 && this.totalnumber > 0) {
                this.adultsnumber--;
                this.subtractToTotalNumber();
            }
        }
        //om valda biljetter är desamma som valda säten och mer än 0
        else if (this.totalnumber === this.numberOfSelectedSeats && this.totalnumber > 0){
            this.subtractError = true;
        }
    },
    addAdult() {
      if (this.adultsnumber < 10 && this.totalnumber < 10) {
        this.adultsnumber++;
        this.addToTotalNumber();
      }
    },
    subtractSenior() {
        //om valda biljetter är mer än valda säten
        if(this.totalnumber > this.numberOfSelectedSeats){
            if (this.seniorsnumber > 0 && this.totalnumber > 0) {
              this.seniorsnumber--;
              this.subtractToTotalNumber();
            }
        }
       //om valda biljetter är desamma som valda säten och mer än 0
        else if (this.totalnumber === this.numberOfSelectedSeats && this.totalnumber > 0){
            this.subtractError = true;
        }
    },
    addSenior() {
      if (this.seniorsnumber < 10 && this.totalnumber < 10) {
        this.seniorsnumber++;
        this.addToTotalNumber();
      }
    },
      subtractChild() {
        //om valda biljetter är mer än valda säten
        if(this.totalnumber > this.numberOfSelectedSeats){
            if (this.childnumber > 0 && this.totalnumber > 0) {
              this.childnumber--;
              this.subtractToTotalNumber();
            }
        }
        //om valda biljetter är desamma som valda säten och mer än 0
        else if (this.totalnumber === this.numberOfSelectedSeats && this.totalnumber > 0){
            this.subtractError = true;
        }
    },
    addChild() {
      if (this.childnumber < 10 && this.totalnumber < 10) {
        this.childnumber++;
        this.addToTotalNumber();
      }
    },
    addToTotalNumber() {
        this.noTicketsAddedError = false;
        this.ticketsEqualToSeatsError = false;
        this.subtractError = false;

        if (this.totalnumber < 10) {
            this.totalnumber++;
            this.calculatePrice();
        }
    },
    subtractToTotalNumber() {
      this.totalnumber--;
      this.calculatePrice();
    },
    calculatePrice() {
      this.totalAmount = 0;
      this.totalAmount += this.seniorsnumber * 80;
      this.totalAmount += this.adultsnumber * 100;
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
  --main-font-family: "Montserrat", sans-serif;

  /* 
            Use global color-variables with:
            EXAMPLE: "color: var(--main-element-color);"
        */
  font-family: "Montserrat", sans-serif;
}
.booking {
  min-height: 100vh;
  width: 100%;
  margin-bottom: 70px;
}

.hide{
    display: none;
}

a {
  color: inherit;
}

a:visited {
  color: inherit;
}

a:hover {
  font-style: none;
}

.booking-title {
  text-align: center;
  justify-content: space-around;
  font-size: 2em;
  align-content: flex-start;
  margin-top: 45px;
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
.booking-subtitle-span {
  margin-right: 10px;
  margin-left: 10px;
}


.booking-button-row {
  margin-bottom: 10px;
  height: 20px;
}

.add-subtract-button {
  height: 19px;
  width: auto;
  margin: 0;
  justify-self: center;
}

.booking-error{
  color: crimson;
  font-weight: 400;
  font-size: 0.8em;
  margin: 10px;
}


.ticket-number {
  font-weight: 400;
  height: 19px;

  color: var(--main-element-color);
  margin: 0;  
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

#boka-button {
  width: 200px;
}
#cancel-button {
  width: 200px;
}

#boka-button{
    width: 200px;
    margin: 30px;
}
#cancel-button {
    width: 200px;
    margin: 30px;
}
#screen {
  width: 200px;
  height: 10px;
  background-color: var(--special-element-color);
  border-color: var(--special-element-color);
  
  border-radius: 10px;

}
#input-email{
  height: 35px
}

#seatsPlaceholder {
  width: 100%;
  height: 200px;
  object-fit:contain;
  justify-content: center;
  align-content: center;  
  margin-bottom: 20px;    }
        
</style>
