<template>
  <div>
    <home-header ></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'  
import HomeWeekend from './components/Weekend' 
import {mapState} from 'vuex'
import axios from 'axios' 
  export default {
    name:'Home',
    components:{
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    },
    computed:{
    ...mapState(['city'])
    },
    data(){
      return{
        cityn:this.city,
        swiperList:[],
        iconList:[],
        recommendList:[],
        weekendList:[],
        lastCity:''
      }
    },
    methods:{
      getHomeInfo(){
        // 在哪config index.js文件配置了相关的内容
        axios.get('/api/index.json?city='+this.cityn)
        .then(this.getHomeInfoSuccsee)
      },
      getHomeInfoSuccsee(res){
        res = res.data
        if(res.ret &&res.data){
          const data = res.data
          this.city = data.city
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
        console.log(res)
      }
    },
    mounted(){
      this.lastCity = this.cityn
      console.log('mounted')
        this.getHomeInfo()
    },
    activated(){
      // 当首页App使用keep-alive 是  要重新渲染返回城市页面的时候，该钩子函数会执行
      if(this.lastCity !== this.cityn){
        //同时要把原来的值变成新的值
        this.lastCity = this.cityn
        this.getHomeInfo()
      }
    console.log('activated')
    }
  }
</script>
<style>
.home{
}
</style>

