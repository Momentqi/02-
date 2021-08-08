<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        :is-checked="isSelectAll"
        class="check-button"
        @click.native="checkClick"/>
      <span>全部</span>
    </div>
    <div class="price">
      合计：{{totalPrice}}
    </div>
    <div class="calculate" @click="calcClick">
      去计算({{checkLength}})
    </div>

  </div>
</template>

<script>
  import CheckButton from "../../../components/content/checkButton/CheckButton.vue";
  import {mapGetters} from 'vuex'

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return '￥' + this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      checkLength() {
        return this.cartList.filter(item => item.checked).length
      },

      isSelectAll() {
        //首先判断购物车是否为空，若为空，全选按钮状态为false
        if (this.cartList.length === 0) {
          return false
        } else {
          //当购物车不为空时
          //方法一：当购物车中存在没选中商品的长度，那么全部选中为false
          //   return !this.cartList.filter(item => !item.checked).length
          //方法二：当购物车中存在一个没选中的商品，那么全部选中为false
          return !this.cartList.find(item => !item.checked)
        }
      }
    },
    methods: {
      checkClick() {
        if (this.isSelectAll) {//当购物车全部选中时，点击变成全部不选中
          this.cartList.forEach(item => item.checked = false)
        } else {//当购物车存在不选中或都不选中时，点击变成全部选中
          this.cartList.forEach(item => item.checked = true)
        }
      },
      calcClick() {
        //当购物车为空或选择商品为空时，有弹窗
        if (this.checkLength === 0) {
          this.$toast.show('请选择购买的商品', 1500)
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 40px;
    background-color: #eeeeee;
    position: relative;
    display: flex;
    line-height: 40px;
  }

  .check-content {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 80px;
    text-align: center;
  }

  .check-button {
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-left: 5px;
  }

  .price {
    /*margin-left: 20px;*/
    text-align: center;
    flex: 1;
  }

  .calculate {
    /*margin-left: 20px;*/
    width: 90px;
    background-color: #ff6699;
    color: #eeeeee;
    text-align: center;
  }
</style>
