import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types'
export default {
  addCart(context,payload){
    return new Promise((resolve ,reject) =>{
      // 第一种：payload新添加的商品
      // let oldProduct = null;
      // for (let item of context.state.cartList){
      //   if (item.iid === payload.iid){
      //     oldProduct = item;
      //   }
      // }
      //第二种：payload新添加的商品，find()返回值true时，返回元素的值；没有符合条件的元素返回undefined
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      //2.判断oldProduct
      if (oldProduct) {
        context.commit(ADD_COUNTER,oldProduct)
        resolve('当前商品数量+1')
      } else {
        context.commit(ADD_TO_CART,payload)
        resolve('添加商品成功')
      }
    })
    }
}
