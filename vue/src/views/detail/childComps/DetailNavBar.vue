<template>
    <div>
        <nav-bar class="nav-bar"> 
            <div slot="left" class="back" @click="backclick">
                <img src="./back.svg" />
            </div>
        <div slot="center" class="title">
            <div v-for="(item,index) in titles"
            class="title-item"
            :class="{active:index ===currentIndex}"
            @click ="titleClick(index)"
             >{{item}}
            </div>
        </div>
        </nav-bar>
    </div>
</template>
<script >
import NavBar from '../../../components/navbar/NavBar.vue'
export default ({
        name:"DetailNavBar",
        components:{
            NavBar
        },
        data(){
            return{
                titles:['商品','参数','评论','推荐'],
                currentIndex:0
            }
        },
        methods:{
            titleClick(index){
                this.currentIndex =index;
                this.$emit('titleClick',index);
            },
            backclick(){
                this.$router.go(-1)
            }
        }
})
</script>
<style scoped>
.nav-bar{
    position: relative;
    z-index: 1;
}
    .title{
        display: flex;
        font-size: 13px;
    }
    .title-item{
        flex:1;
    }
    .active{
        color: pink;
    }
    .back img{
        margin-top:17px;
    }
</style>