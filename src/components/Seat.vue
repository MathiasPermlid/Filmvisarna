<template>
  <div class="seat" :class="{ selected: this.selected, booked: this.booked }"  v-on:click="clickSeat" >
  </div>
</template>

<script>
/*TO DO:
 * class: booked  - enabled select för de sätena 
*/
export default {
  name: "seat",
  data(){
    return{
      selected: false,
      }
  },
  props: {
    row: Number,
    seatNr: Number,
    booked: Number,
  },
  methods:{
    clickSeat(){ 
      // om sätet INTE är bokat  
      if(!this.booked){   
        console.log('I seat, valda biljetter:'+this.$parent.selectedTickets);
            
        //om användaren har säten kvar att välja (valt fler biljetter än säten)  
        if(this.$parent.numberOfSelectedSeats  < this.$parent.selectedTickets){   
          this.selected = this.selected ? false : true; 
          let seatInfo = this.getSeatInfo();
          this.$emit('click-seat', seatInfo);
        }
        //om användaren har valt lika många säten som biljeter eller noll - kan ta bort säten men inte välja fler
        else {
            this.selected=false;
            let seatInfo = this.getSeatInfo();
            this.$emit('remove-seat', seatInfo);
        }
      }
    },//clickSeat

    getSeatInfo(){
      let seatInfo = {
        row: this.row,
        seatNr: this.seatNr,
        selected: this.selected,
        booked: this.booked
      }
      return seatInfo;
    }//getSeatInfo
  }//methods 
};//export default
</script>

<style scoped>
:root { 
    --main-background-color: whitesmoke;       /*whitesmoke is for background and text inside special elements*/ 
    --main-element-color: #36454f; /*CHARCOAL/       /Charcoal is for text on main pages and navbar background*/   
    --special-element-color: #b08a43; /*"BRASS"/       /Brass is for special elements like buttons*/   
    --main-font-family: 'Montserrat', sans-serif;    
    /* Use global color-variables with:     EXAMPLE: "color: var(--main-element-color);" */
    }
.seat{
  display: inline-block;
  width: 4vmin;
  height: 4vmin;
  margin: 2px;
  background-color: var(--main-element-color);
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
}
.seat:hover{
  cursor: pointer;
}

.seat.selected{
    background-color:  var(--special-element-color);

}
.seat.booked{
    background-color:  red;

}
/*@media screen and (min-width:800px){
  .seat:hover{
    background-color: #4e6372;
  }
}*/
</style>
