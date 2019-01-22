<template>
  <div class="seat">
    
  </div>
</template>

<script>
export default {
  name: "seat",
  props: {
    row: Number,
    seatNr: Number,
    empty: Boolean,
  }
  
};
</script>

<style scoped>
.seat{
  background-color: brown;
  border-radius: 50%;
}
</style>
