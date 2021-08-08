<template>
    <div class="detail" >
      <detail-nav-bar  
      class="detail-nav" ref="nav" 
      @titleClick="titleClick" />
    <scroll class="contents"
    @scroll="contentScroll"
    :probe-type="3" 
     ref="scroll">
    <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shops="shops"/>
      <detail-goods-info  :detail-info="detailInfo" @imageLoads="imageLoads"/>
      <detail-param-info ref="params" :paramInfo="paramInfo"/>
       <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list  ref="recommend" :goods="recommends"/>
      </scroll>
      <detail-bottom-bar  @addCart="addtoCart"/>
      <back-top @click.native="backClick" v-show="isShowBackTop"/>
    </div>
</template>
<script >
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo  from"./childComps/DetailGoodsInfo.vue"
import DetailParamInfo from "./childComps/DetailParamInfo.vue"
import DetailCommentInfo  from "./childComps/DetailCommentInfo.vue"
import DetailBottomBar from "./childComps/DetailBottomBar.vue"

// import BackTop from "../../components/content/backTop/BackTop.vue"
import Scroll from '../../components/scroll/Scroll.vue'
import GoodsList from "../../components/content/goods/GoodsList.vue"

import {getDetail,Goods,Shop,GoodsParam,getRecommend } from '../../../network/detail'
import {itemListenerMixin,backTopMixin} from "../../common/mixin"
import { debounce } from '../../common/utils'

import { mapActions } from'vuex'
export default ({
    name :"Detail",
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        DetailBottomBar,
        GoodsList,
        Scroll,
        // BackTop,

    },
    data(){
        return{
            iid:null,
            topImages:[],
            goods:{},
            shops:{},
            detailInfo: {},
            paramInfo:{},
            commentInfo:{},
            recommends:[],
            themeTopYs:[],
            getThemenTopY:null,
            currentIndex: 0,
            // isShowBackTop:false
        }
    },
       mixins: [itemListenerMixin,backTopMixin],
    created(){
        // console.log(this.$route.params);
        // 1.保存ID
        this.iid =this.$route.params.iid
        // 2.根据ID请求详情数据
        getDetail(this.iid).then(res =>{
            console.log(res);


        const data =res.result;
        this.topImages =data.itemInfo.topImages
        this.goods =new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        // 创建店铺
        this.shops = new Shop(data.shopInfo)
        // 保存商品详情
        this.detailInfo = data.detailInfo;
         //2.5获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        // 2.6.取出评论信息
          if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
        }),
         getRecommend().then(res => {
        this.recommends = res.data.list
      })
      this.getThemenTopY =debounce(()=>{
        this.themeTopYs = []
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE);
       // console.log(this.themeTopYs);
      },100)
    },
     //3.请求推荐数据
      destroyed() {
      // 当页面离开详情页时，取消全局事件监听。在其他页进行刷新时，不会刷新详情页
      this.$buss.$off('itemImageLoad', this.detailImgListener)
    },

    methods:{
        ...mapActions(['addCart']),
        imageLoads(){
            this.refresh()
            // this.$refs.scroll.refresh()
            this.getThemenTopY()
        },
        titleClick(index){
            // console.log(123);
            this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],100)
        },
         backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
        contentScroll(position){
            // this.BackTop(position)
            // 1获取Y值
            // console.log(position);
        const positionY = -position.y

        // 2.positionY和主题中值进行对比
        const length = this.themeTopYs.length
        for (let i = 0; i < length - 1; i++) {
          if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && 
          positionY < this.themeTopYs[i + 1])) {
            this.currentIndex = i
            // console.log(this.currentIndex);
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
         this.isShowBackTop =(-position.y) >1000
         this.isTabFixed =(-position.y) >this.tabOffsetTop
        },
       addtoCart() {
    //     //添加到购物车
    //     // 1，获取需要加入购物车的商品信息
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;//商品的唯一标识
        // this.$store.cartList.push(product)
        // this.$store.commit('addCart',product)
        // this.$store.dispatch('addCart',product)

        // console.log(product);
    //       this.$store.dispatch('addCart',product).then(res =>{
    //     //   this.$toast.show(res, 1500)
    //     console.log(res);
    //     })
        //2.3使用mapActions的映射关系，直接使用addCart调用自己.然后使用promise方法进行弹窗提示
        this.addCart(product).then(res => {
          this.$toast.show(res, 1500)
        // console.log(res);
        })
       }
    },
   
})
</script>

<style scoped>
  .detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .contents {
    /* padding-top: 24px; */
    height: calc(100% - 44px);
    background-color: #fff;
  }

</style>
