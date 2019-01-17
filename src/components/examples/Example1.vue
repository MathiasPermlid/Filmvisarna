<template>
  <div id="example1">
    <br>
    <!-- 
    <div class="card-columns">
      <div class="card col-7 col-lg-5 m-auto shadow">
        <div class="card-body pb-1">
          
          <p v-if="!message">Enter some text</p>
        
          <p v-else>Text is: {{ message }}</p>
        </div>
      </div>
    </div>
    -->
    <div class="card-deck">
      <div class="card col-7 col-lg-5 m-2 shadow">
        <div class="card-body text-center">
          <h4 class="card-text">1</h4>
        </div>
      </div>

      <div class="card col-7 col-lg-5 m-2 shadow">
        <div class="card-body text-center">
          <p class="card-text">5</p>
        </div>
      </div>

      <div class="card col-7 col-lg-5 m-2 shadow">
        <div class="card-body text-center">
          <p class="card-text">Some text inside the second card</p>
        </div>
      </div>

      <div class="card col-7 col-lg-5 m-2 shadow">
        <div class="card-body text-center">
          <p class="card-text">Some text inside the fourth card</p>
        </div>
      </div>
      <div class="card col-7 col-lg-5 m-2 shadow">
        <div class="card-body text-center">
          <p class="card-text">Some text inside the fifth card</p>
        </div>
      </div>
      <div class="card col-7 col-lg-5 m-2 shadow">
        <div class="card-body text-center">
          <p class="card-text">Some text inside the sixth card</p>
        </div>
      </div>
    </div>

    <!-- v-model binds input to property -->
    <input class="mt-4" v-model="message" placeholder="edit me">
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Example1",
  data() {
    return {
      message: ""
    };
  }
};
</script>

<style>
</style>



