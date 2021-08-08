/*
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// state:{
//     cartList:[]
// }
const store = new Vuex.Store({
    state:{
        cartList:[]
    },
    mutations:{
        addCart(state,payload){
            // state.cartList.push(payload)
            let oldProuct = state.cartList.find(item => item.lid === payload.lid)
            if(oldProuct){
                oldProuct.count +=1
            }else{
                payload.count =1
                state.cartList.push(payload)
            }
        }
    }
})
export default store*/ 