<template>
   <tab-bar>
    <tab-bar-item path="/home" activeColor="pink">
      <img slot="item-icon" src="../assets/image/all.svg">
      <img slot="item-icon-active" src="../assets/image/all0.svg">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="pink">
      <img slot="item-icon" src="../assets/image/all.svg">
      <img slot="item-icon-active" src="../assets/image/all0.svg">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="pink">
      <img slot="item-icon" src="../assets/image/all.svg">
      <img slot="item-icon-active" src="../assets/image/all0.svg">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" >
      <img slot="item-icon" src="../assets/image/all.svg">
      <img slot="item-icon-active" src="../assets/image/all0.svg">
      <div slot="item-text">我的</div>
    </tab-bar-item>
    </tab-bar>
</template>
<script>
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'

export default {
  name:"MainTabBar",
   components: {
      TabBar,
      TabBarItem
  }
}
</script>