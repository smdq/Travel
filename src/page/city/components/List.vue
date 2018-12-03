<template>
  <div class="list" ref="wrapper">
    <div >
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">{{this.$store.state.city}}</div>
        </div>
      </div>
      
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
       <div class="button-list">
        <div class="button-wrapper" 
        v-for="item of hot" 
        :key="item.id"
        @click="handleCityClick(item.name)"
        >
          <div class="button">{{item.name}}</div>
        </div>
       
      </div>
    </div>
    <div class="area" 
      v-for="(item,key) of cities" 
      :key="key"
      :ref="key"
      >
      <div class="title border-topbottom">{{key}}</div>
      <div class="item-list">
        <div class="item border-bottom" 
        v-for="innerItem of item" 
        :key="innerItem.id"
        @click="handleCityClick(innerItem.name)"
        > {{innerItem.name}} </div>
        
      </div>
       
    </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
  export default {
    name:'cityList',
    props:{
     hot: Array,
     cities:Object,
     letter:String
    },
    methods:{
      handleCityClick(city){
        this.$store.commit('changeCity',city)
      // console.log(city)
      this.$router.push('/')
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper)
    },
    watch:{
     letter(){

       if(this.letter){
        //  element 是一个数组 所以后面要加一个[0]
         const element = this.$refs[this.letter][0]
         //console.log(element)
        //  点击字母  让相应的显示在顶部
         this.scroll.scrollToElement(element)
       }
       console.log(this.letter)
     }
    }
  }
</script>
<style lang="stylus" scoped>
 .border-topbottom
   &:before
     border-color: #ccc
   &:after
     border-color: #ccc
 .list
  overflow:hidden
  position: absolute 
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
 
  .title
    line-height: .4rem
    background: #eeeeee
    padding-left: .2rem
    color: #666
    font-size: .26rem
  .button-list
    padding: .1rem .6rem .1rem .1rem
    overflow: hidden
    .button-wrapper
      float:left
      width: 33.33%
      .button
        text-align: center
        margin: .1rem
        padding: .1rem 0
        border: .02rem solid #ccc
        border-radius: .06rem
  .item-list
      .item
        line-height: .54rem
        color: #666
        padding-left: .2rem
</style>

