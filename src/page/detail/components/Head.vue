<template>
  <div>
    <router-link 
       tab="div" to="/" 
       class="header-abs"
       v-show="showAbs"
       >
       <span class="iconfont back-icon">&#xe624;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStye">
      
      <router-link to="/">
        <span class="iconfont header-fixed-back">&#xe624;</span>
      </router-link>  
      景点详情 
    </div>
  </div>
</template>
<script>
  export default {
    name:'DetailHeader',
    data(){
      return {
        showAbs:true,
        opacityStye:{
          opacity:0
        }
      }
    },
    methods:{

    handleScroll(){
      const top = document.documentElement.scrollTop
      //console.log(document.documentElement.scrollTop)
      if(top >60 ){
        let opacity = top/140
         opacity = opacity>1?1:opacity
        this.opacityStye ={
          opacity:opacity
        }
        this.showAbs = false
      }else{
        this.showAbs = true
      }
    }
    },
    //显示该页面的时候执行该函数
    activated(){
      window.addEventListener('scroll',this.handleScroll)
    },
    //当离开了该页面就会对上面activated进行解绑
    deactivated(){
      window.addEventListener('scroll',this.handleScroll)
    }
  }
</script>
<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
.header-abs
  position: absolute 
  top:.2rem
  left: .2rem
  width: .8rem
  height: .8rem
  text-align: center
  line-height: .8rem
  border-radius: .4rem
  background: rgba(0,0,0,.8)
  .back-icon
    color: #ffffff
    font-size: .4rem
.header-fixed
   z-index:99
   position: fixed
   top:0
   left:0
   right:0
   height: .86rem
   line-height: .86rem
   text-align: center 
   color: #fff
   background: $bgColor
   font-size: .4rem
   .header-fixed-back
     position: absolute 
     top:0
     left:0
     width: .64rem
     text-align: center
     font-size: .4rem
     color: #fff
</style>
