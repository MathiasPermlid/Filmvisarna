<template>
  <div>
     <Seat />
      


  </div>
</template>

<script>
import Seat from "@/components/Seat.vue";
import Vue from 'vue'; 
export default {
    name: "seatsComponent",
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
        for (let i = 0; i < this.seatsPerRow.length; i++) {
            let rowArray= [];
            for(let j= 0; j < this.seatsPerRow[i]; j++){
                //pushar in ett Seat-objekt med värden baserat på platsen
                rowArray.push(new SeatClass({ 
                    propsData: { //initieringsvärden
                        row: i+1,
                        seatNr: j+1,
                        empty: false
                    }
                }));//rowArray push
            }//for
            this.seatsArray.push(rowArray);
        }//for
        console.log('seatsArray', this.seatsArray);
        //console.log(this.seatsArray[0][0].empty);
    },//created
    components: {
        Seat
  },

};
</script>

<style scoped>
</style>
