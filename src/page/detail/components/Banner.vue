<template>
  <div>
     <div class="banner" @click="handleBannerClick">
     <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1602/67/67feeab24cfc82bb90.water.jpg_600x330_5abf0855.jpg" alt="">
     <div class="banner-info">
       <div class="banner-title">太平洋海底世界(AAA景区)</div>
       <div class="banner-number">
         <span class="iconfont banner-icon">&#xe624;</span>
         39
       </div>
     </div>
   </div>
   <common-gallary 
   :imgs="imgs" 
   v-show="showGallary"
   @close ="handleGallaryClose"
   ></common-gallary>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
  export default {
    name:'DetailBanner',
    data(){
       return {
         showGallary:false,
         imgs:[
              "//img1.qunarzz.com/sight/p0/1601/6c/6cf2f668c00ec54190.water.jpg_600x330_7ec3a940.jpg",
            "//img1.qunarzz.com/sight/p0/1602/68/68aa05adb5315f9990.water.jpg_600x330_0dcecae1.jpg"
           ]
       }
        
       
    },
    components:{
      CommonGallary
    },
    methods:{
      handleBannerClick(){
        this.showGallary = true 
      },
      handleGallaryClose(){
        this.showGallary = false
      }
    }
  }
</script>
<style lang="stylus" scoped>
 .banner
    position: relative
    overflow:hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display:flex
      position: absolute 
      left: 0
      right: 0
      bottom: 0
      color: #fff
      line-height: .6rem
      background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
      .banner-title
        font-size: .32rem
        padding: 0 .2rem
        flex: 1
      .banner-number
        padding: 0 .4rem
        line-height: .32rem
        margin-top: .2rem
        height: .32rem
        border-radius: .2rem
        background:rgba(0,0,0,.8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem

        
</style>

