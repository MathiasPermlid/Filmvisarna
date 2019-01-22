<template>
  <div id="auditorium-seats">

<div v-for="(row, index) in auditorium" :key="row + index">
    <div v-for="(seat, seatNr) in auditorium[index]" :key="seat+ seatNr">
         <Seat v-bind:row="index + 1" v-bind:seatNr="seatNr + 1" v-bind:empty="seat"
         v-on:click-seat="clickedSeat($event)"/>
    </div>
</div>

  </div>
</template>

<script>
import Seat from "@/components/Seat.vue";
// import Vue from 'vue'; 
export default {
    name: "seatsComponent",
    data() {
        return {
        auditorium: null,
        //auditoriums:this.$store.auditoriums,
        //seatsPerRow nedan endast för utvecklingssyften och testning
        //
        clickedSeats: []
        };
    },
    methods: {
        clickedSeat(data){
            if (!data.clicked){ //om sätet redan är klickat (förbokat)
                for(let i = 0 ; i < this.clickedSeats.length ; i++)
                    if(this.clickedSeats[i].seatNr === data.seatNr && this.clickedSeats[i].row === data.row){
                        this.clickedSeats.splice(i, 1);
                        break;
                    }
            }
            else{
                this.clickedSeats.push(data);
            }
            console.log(this.clickedSeats);
            
            //alert(`Row: ${data.row}, SeatNr: ${data.seatNr}`);

        }
    },
    created() {
        this.auditorium = this.$store.shows["-LWl4d2Fs9Y-q1RqYgDZ"].shows[0].auditorium.seats;



/*
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
        */

    },//created
    components: {
        Seat
  },

};
</script>

<style scoped>
#auditorium-seats{
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(90deg);
    width: 100%;
    height: 100%;
}
#auditorium-seats > div {
display: inline-block;
}


</style>
