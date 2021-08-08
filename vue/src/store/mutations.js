import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types'
export  default {
  //mutations唯一的目的就是修改state中状态
  //mutations中的每个方法尽可能的完成事件比较单一一点
  //其中的方法是可以跟踪的
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    //添加商品时，默认给每个商品添加checked属性，并设置为true
    payload.checked = true
    payload.count = 1
    state.cartList.push(payload)
  }
}
