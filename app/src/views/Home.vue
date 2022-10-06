<template>
<div class="home container">
  <h1>Home</h1>
  <IntroCard :current="this.getTimePeriod()"/>

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
import IntroCard from '../components/IntroCard.vue'
import axios from 'axios'
export default {
  components:{IntroCard},
  methods:{
    getTimePeriod(){
      let greeting="";
      let time = new Date(); 
      let hour = time.getHours() 
      if(hour < 11){
        return greeting="Good Morning"
      }else if(hour > 11 && hour < 4){
        return greeting="Good Afternoon"
      }else{
        return greeting="Good Evening"
      }
    }
  },
mounted(){
   
  this.getTimePeriod();
   
}
}
</script>

<style>

</style>