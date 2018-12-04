<template>
  <div class="container" @click="handleGallaryClick">
   <div class="wrapper">
     <swiper  :options="swiperOptions">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in imgs" :key="index">
      <img  class="gallary-img" :src="item" alt="">
    </swiper-slide>
    
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
   </div>
  </div>
</template>
<script>
  export default {
    name:'commonGallary',
    props:{
      imgs:{
        type: Array,
        default(){
          return [
           
          ]
        }
      }
    },
    data(){
      return {
        swiperOptions:{
          pagination:'.swiper-pagination',
          // paginationType是显示下面的分页
          paginationType:'fraction',
          // 父级元素或该元素发生dom元素更新的时候，就会自动的自我刷新一次，就能解决swiper宽度的自我计算，轮播图就不会卡顿   /* 不要写错单词 */
          observeParents:true,
          observer: true
        }
      }
    },
    methods:{
      handleGallaryClick(){
        this.$emit('close')
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow:inherit
  .container
    display:flex
    flex-direction:column
    justify-content:center
    z-index:99
    position:fixed
    left:0
    right:0
    top:0
    bottom:0
    background:#000
    .wrapper
      
      width: 100%
      height:0
      padding-bottom:100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>

