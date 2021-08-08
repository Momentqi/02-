<template>
    <div class="tab-control">
     <div v-for="(item,index) in titles" 
     class="TabControl-item" :class="{active: index === currentIndex}"
     @click="itemclick(index)">
     <span>{{item}}</span></div>
    </div>
</template>

<script>

export default {
    name : "TabControl",
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemclick(index){
            this.currentIndex = index;
            this.$emit('tabClick',index)
        }
    }
}
</script>
<style >
    .tab-control{
        display: flex;
        text-align: center;
        font-size: 16px;
         height: 38px;
        line-height: 38px;
        background-color: #fff;
    }
    .TabControl-item{
        flex: 1;
    }
    .tab-control span{
        padding: 5px;
    }
    .active{
        color: pink;
    }
    .active span{
        border-bottom: 3px solid pink ;
    }
</style>