<template>
  <div id="show" class="row d-flex justify-content-center">
      <span class="line"></span>
    <h4 class="col-3">{{ show.time }}</h4>
    <div id="show-info" class="col-7">
      <h4>{{ show.film }}</h4>
      <h5>{{ show.auditorium }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
#show{
    align-items: center;
}
.line{
    height: 1px;
    width: 90%;
    margin: 3px 0 0;
    background-color: rgba(255, 255, 255, 0.2);
}
#show-info h5{
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
}
</style>
