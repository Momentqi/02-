<template>
<div class="wrapper">
   <ul >
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
     <li>e</li>
   </ul></div>
  
</template>
<script>
import BScroll from 'better-scroll'

export default {
  name:"Category",
  data(){
    return{
      scroll :null
    }
  },
  // 组键创建完成调用
  created(){
  },
  mounted(){
    this.scroll =new BScroll(document.querySelector('.wrapper'),{})
  }
}
</script>
<style scoped>
  .wrapper{
    height: 150px;
    background-color: pink;
    overflow: hidden;
  }
</style>