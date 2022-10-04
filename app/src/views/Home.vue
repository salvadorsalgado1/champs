<template>
<div class="home container">
  <h1>Home</h1>
  <div class="card text-bg-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Dark card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
mounted(){
  const options = {
  method: 'GET',
  url: 'https://sportspage-feeds.p.rapidapi.com/games',
  headers: {
    'X-RapidAPI-Key': 'b531c9d465msh05a33a32e9fd8dfp1e55b9jsnf81864f81182',
    'X-RapidAPI-Host': 'sportspage-feeds.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}
}
</script>

<style>

</style>