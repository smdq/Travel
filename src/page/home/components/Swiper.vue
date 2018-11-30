<template>
  <div class="wrpper">
    <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
   

    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>
<script>
  export default {
    name:'HomeSwiper',
    data(){
      return{
        swiperOption:{
          pagination:".swiper-pagination",
          loop:true
        },
         swiperList:[
        {
          id:'0001',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1809/12/856f100069809e02.jpg_750x200_e3485a2b.jpg'
        },
        {
          id:'0002',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/f7/72ce947f4dff4c02.jpg_750x200_aa583dba.jpg'
        }
      ]
      }
    }
  }
</script>
<style lang="stylus" scoped>
.wrpper >>> .swiper-pagination-bullet-active
  background: #fff
.wrpper
  overflow:hidden
  width: 100%
  height: 0
  padding-bottom: 31.25%
  .swiper-img
    width: 100%
</style>

