<template>
<div>
    <div :class="{ hide: !this.noTicketsAddedError }">Välj antal biljetter innan du väljer säten</div>
    <div :class="{ hide: !this.ticketsEqualToSeatsError }">Lägg till fler biljetter för att kunna välja fler säten</div>

    <div id="auditorium-seats">
        <div v-for="(row, index) in auditorium" :key="row + index">
            <div v-for="(seat, seatNr) in auditorium[index]" :key="seat+ seatNr">
                <Seat :row="index + 1" :seatNr="seatNr + 1" :booked="seat"
                @click-seat="selectSeat($event)" @remove-seat="unSelectSeat($event)"
                />
            </div>
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
        noTicketsAddedError: false,
        ticketsEqualToSeatsError: false,
        numberOfSelectedSeats:0,
        selectedSeats: []
        };
    },//data

    props: {
        auditorium: Array,
        selectedTickets: Number,
    },//props
    
    methods: {
        selectSeat(data){
            //console.log('I seatsComponent'+this.selectedTickets);
            
            if (!data.selected){ //om sätet redan är klickat (förbokat)
                this.unSelectSeat(data);
            }
            else{ //select seat by adding it to our array
                this.selectedSeats.push(data);
                this.numberOfSelectedSeats++;
                this.$emit('get-number', this.numberOfSelectedSeats);

                console.log(this.selectedSeats);
                
            }
        },//selectSeat

        unSelectSeat(data){
           /* //om användaren inte valt några biljetter
            if (!this.selectedTickets){
                this.noTicketsAddedError = true;
                //alert('INGA BILJETTER VALDA WTF')
            }
            //om användaren valt lika många biljetter som säten
            else { 
                //alert('DU HAR VALT LIKA MÅNGA BILJETTER SOM SÄTEN')
                this.ticketsEqualToSeatsError = true;
                    }*/
                for(let i = 0 ; i < this.selectedSeats.length ; i++){
                    if(this.selectedSeats[i].seatNr === data.seatNr && this.selectedSeats[i].row === data.row){
                        this.selectedSeats.splice(i, 1);
                        this.numberOfSelectedSeats--; 
                        this.$emit('get-number', this.numberOfSelectedSeats);
 
                    }
                } 
            console.log(this.selectedSeats);
        }//unSelectSeat
    }, //methods

    components: {
        Seat
    },//components
};//export default
</script>

<style scoped>
.hide{
    display: none;
}

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
