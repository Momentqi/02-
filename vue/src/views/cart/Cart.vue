<template>
<div class="cart">
  <nav-bar class="nav-bar">
    <div slot="center">购物车({{cartLength}})</div>
  </nav-bar>

  <cart-list />

  <cart-bottom-bar />
</div>
    
</template>
<script>
import NavBar from "../../components/navbar/NavBar.vue"
import CartList from './childComps/CartList.vue'
import CartBottomBar from "./childComps/CartBottomBar.vue"

import{ mapGetters } from 'vuex'
export default {
  name:"Cart",
  components:{
    NavBar,
    CartList,
    CartBottomBar
  },
  
    computed:{
      ...mapGetters(['cartLength'])
      // ...mapGetters({
      //   length:'cartLength',
      //   list:'cartList'
      // })
      // cartLength(){
      //    return this.$store.getters.cartLength
      // }
  
  }
  
}
</script>
<style  scoped>
  .cart {
    /*position: relative;*/
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 500;
    color: #fff;
  }
</style>