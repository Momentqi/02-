<template>
<div class="check-button" :class="{active : isChecked}">
  <img src="./tick.svg" alt="">
</div>
</template>

<script>
    export default {
      name: "CheckButton",
      props:{
          isChecked:{
            type:Boolean,
            default:false
          }
      }
    }
</script>

<style scoped>
  .check-button{

    border-radius: 50%;
    border: 2px solid #a3a3a5;
  }
  .active{
    border-color: #ff6699;
    background-color: #ff6699;
  }

</style>
