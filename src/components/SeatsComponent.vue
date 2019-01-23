<template>
  <div id="auditorium-seats">

<div v-for="(row, index) in auditorium" :key="row + index">
    <div v-for="(seat, seatNr) in auditorium[index]" :key="seat+ seatNr">
         <Seat v-bind:row="index + 1" v-bind:seatNr="seatNr + 1" v-bind:empty="seat"
         v-on:click-seat="selectSeat($event)" v-on:remove-seat="unSelectSeat($event)"
         />
    </div>
</div>

  </div>
</template>

<script>
import Seat from "@/components/Seat.vue";
export default {
    name: "seatsComponent",
    data() {
        return {
        auditorium: null,
        selectedTickets: 3,
        numberOfSelectedSeats:0,
        selectedSeats: []
        };
    },//data
    methods: {
        selectSeat(data){
                if (!data.selected){ //om sätet redan är klickat (förbokat)
                    this.unSelectSeat(data);
                }
                else{ //select seat by adding it to our array
                    this.selectedSeats.push(data);
                    this.numberOfSelectedSeats++;
                                    console.log(this.selectedSeats);

                }
        },//selectSeat

        unSelectSeat(data){
            for(let i = 0 ; i < this.selectedSeats.length ; i++){
                if(this.selectedSeats[i].seatNr === data.seatNr && this.selectedSeats[i].row === data.row){
                    this.selectedSeats.splice(i, 1);
                    this.numberOfSelectedSeats--;  
                }
            } 
                console.log(this.selectedSeats);
        }//unSelectSeat
    }, //methods

    created() {
        this.auditorium = this.$store.shows["-LWl4d2Fs9Y-q1RqYgDZ"].shows[0].auditorium.seats;
    },//created

    components: {
        Seat
    },//components
};//export default
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
