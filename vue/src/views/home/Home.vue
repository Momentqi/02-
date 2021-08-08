<template>
    <div id="home" >
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
     <tab-control :titles="['流行','新款','精选']"
          @tabClick="tabClick" 
          ref="tabControl1"
          class="tab-control" v-show="isTabFixed"/>
     <scroll class="content" 
     ref="scroll" 
     :probe-type="3" 
     @scroll="contentScroll"
      :pull-up-load="true"
      @pullINGuP="loadMore" > 
        <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
         <recommend-view :recommends="recommends"/>
         <feature-view/>
         <tab-control :titles="['流行','新款','精选']"
          @tabClick="tabClick" 
          ref="tabControl2"/>
      <goods-list :goods="showGoods"/>
     </scroll>
     <back-top @click.native="backClick" v-show="isShowBackTop"/>
    </div>
</template>

<script>
import HomeSwiper from  './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView'

import NavBar from '../../components/navbar/NavBar'
import TabControl from '../../components/tabControl/TabControl.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import Scroll from "../../components/scroll/Scroll.vue"
// import BackTop from '../../components/content/backTop/BackTop.vue'

import { getHomeMultidata,getHomeGoods} from "../../../network/home";
import {debounce} from '../../common/utils';
import {itemListenerMixin,backTopMixin} from "../../common/mixin"



export default {
  name:"Home",
  components:{
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    // BackTop

  },
  data(){
    return{
      banners: [],
      recommends: [],
      goods:{
        'pop':{page:0 ,list:[]},
        'new':{page:0 ,list:[]},
        'sell':{page:0 ,list:[]},
      },
      currentType:'pop',
      // isShowBackTop:false,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0
    }
  },
     mixins: [itemListenerMixin,backTopMixin],
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  destroyed(){
    // console.log(99999);
  },
  activated(){
    // console.log(1);
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    this.saveY= this.$refs.scroll.getScrollY()
     // 当页面离开首页时，取消全局事件监听。在其他页进行刷新时，不会刷新首页
      this.$buss.$off('itemImageLoad', this.homeImgListener)
    // console.log(this.saveY);
  },
  created(){
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh,50)
    this.$buss.$on('itemImageLoad',() =>{
      // this.$refs.scroll.refresh()
      refresh()
    })
  },
  methods:{
    tabClick(index){
       switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
        // console.log(this);
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position){
      // console.log(position);
      // this.BackTop(position)
      this.isShowBackTop =(-position.y) >1000
      this.isTabFixed =(-position.y) >this.tabOffsetTop
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
      // this.$refs.scroll.refresh()
    },
    swiperImageLoad(){
      this.tabOffsetTop =this.$refs.tabControl2.$el.offsetTop
        // console.log(this.$refs.tabControl.$el.offsetTop);
    },
    getHomeMultidata(){
      getHomeMultidata().then(res =>{
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    }) },
    getHomeGoods(type){ 
      const page =this.goods[type].page +1
     getHomeGoods(type,page).then(res =>{
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page += 1
      this.$refs.scroll.finishPullUp()
    }) },
  }
}
</script>
<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position:fixed;
    left :0;
    right: 0;
    top: 0;
    z-index:2;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0; 
  }
  .tab-control{
    position: relative;
    z-index:9;
  }

</style>