<template>
  <div class="seat" :class="{ selected: this.clicked }"  v-on:click="clickSeat" >
  </div>
</template>

<script>
export default {
  name: "seat",
  data(){
    return{
      clicked: false
    }
  },
  props: {
    row: Number,
    seatNr: Number,
    empty: Number,
  },
  methods:{
    clickSeat(){
      this.clicked = this.clicked ? false : true; 
      let sendClick = {
        row: this.row,
        seatNr: this.seatNr,
        clicked: this.clicked
      }
      this.$emit('click-seat', sendClick);
      //this.clicked=true;

      // alert(`Row: ${this.row}, SeatNr: ${this.seatNr}, Empty?: ${!this.empty ? 'Yes' : 'No'}`);
    }
  }
  
};
</script>

<style scoped>
.seat{
  display: inline-block;
  width: 4vmin;
  height: 4vmin;
  margin: 2px;
  background-color: grey;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
}
.seat:hover{
  cursor: pointer;
    background-color: blue;
}

.seat.selected{
    background-color: brown;

}
</style>
