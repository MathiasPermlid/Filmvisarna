<template>
  <div>
   
  </div>
</template>

<script>
import Seat from "@/components/Seat.vue";
import Vue from 'vue'; 
export default {
    name: "seatComponent",
  data() {
    return {
       auditoriums:this.$store.auditoriums,
       //seatsPerRow nedan endast för utvecklingssyften och testning
       seatsPerRow: [
            6,
            8,
            9,
            10,
            10,
            12
        ]
    };
  },
  created() {
    // konstruerar en array med seat-objekt 
    let SeatClass= Vue.extend(Seat)
    this.seatsArray = [];
    for (let row of this.seatsPerRow) {
        let rowArray= [];
        for(let i= 0; i < row; i++){
            rowArray.push(new SeatClass());
        }
        this.seatsArray.push(rowArray);
    }
    //console.log('seatsArray', this.seatsArray);
    //console.log(this.seatsArray[0][0].empty);
   
  }//created

};
</script>

<style scoped>
</style>
