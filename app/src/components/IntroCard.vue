<template>
  <div class="card text-bg-dark mb-3" >
  <div class="card-body">
    <h2 class="card-title text-start">{{current}}</h2>
    <img src="../assets/hero-image.jpg" class="card-img-top" alt="...">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</template>

<script>
export default {
props:['current']
}
</script>

<style>

</style>