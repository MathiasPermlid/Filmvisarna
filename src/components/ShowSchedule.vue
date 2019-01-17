<template>
<div class="row container mx-auto content-bg"> 
    <div class="col-12">

<table class="table table-hover table-dark col-4">
  <thead>
    <tr>
      <th scope="col">Datum</th>
      <th scope="col">Tid</th>
      <th scope="col">Film</th>
      <th scope="col">Salong</th>
    </tr>
  </thead>
  <tbody v-for="day in this.showsList" v-bind:key="day.date">
    <tr v-for="(show, index) in day.shows" v-bind:key="index">
      <th scope="row">{{day.date}}</th>
      <td>{{show.time}}</td>
      <td>{{show.film}} </td>
      <td>{{show.auditorium}}</td>
    </tr>
  </tbody>
</table>
    </div>
   <!-- <div v-for="day in this.showsList" v-bind:key="day.date">
        <div v-for="(show, index) in day.shows" v-bind:key="index">
            <div><h2>{{day.date}}</h2>
                <div><h3><em>{{show.time}}</em> {{show.film}} {{show.auditorium}}</h3></div>
            </div>
        </div>
    </div>
    -->

    

</div>
 
</template>

<script>


export default {
    name: "showSchedule",
    data (){
        return{
            shows:this.$store.shows
        }
    },
     created() {
        console.log(this.shows);

        // konstruerar en hash av shows, med ett array-element per datum
        this.showsHash = {};
        for(let show of this.shows){
            if(!this.showsHash[show.date]){
                this.showsHash[show.date] = [];
            }
            this.showsHash[show.date].push(show);
        }
        console.log('showsHash', this.showsHash);

        // konverterar hashen eventsHash till en array som Vue gärna itererar
        this.showsList = [];
        for(let date in this.showsHash){
            this.showsList.push({
                date: date,
                shows: this.showsHash[date]
            });
        }
        console.log('showsList', this.showsList);
      
    }

}
    

</script>

<style scoped>

</style>
