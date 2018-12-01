<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
       <div class="item-img-wrapper" >
        <img class="item-img" :src="item.imgUrl" alt="">
       </div> 
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name:'HomeWeekend',
    props:{
      list: Array
    },
    data(){
      return {
        recommendList:[
          {
            id:'0001',
            imgUrl:'http://img1.qunarzz.com/sight/source/1509/fb/c45a951a9b4305.jpg_r_640x214_26fcfd26.jpg',
            title:'温州动人秋色',
            desc:'细数温州那些美到陶醉的赏秋地'
          },
           {
            id:'0002',
            imgUrl:'http://img1.qunarzz.com/sight/source/1509/fb/c45a951a9b4305.jpg_r_640x214_26fcfd26.jpg',
            title:'温州动人秋色',
            desc:'细数温州那些美到陶醉的赏秋地'
          },
           {
            id:'0003',
            imgUrl:'http://img1.qunarzz.com/sight/source/1509/fb/c45a951a9b4305.jpg_r_640x214_26fcfd26.jpg',
            title:'温州动人秋色',
            desc:'细数温州那些美到陶醉的赏秋地'
          }
         
        ]
      }
    }
  }
  // 样式中的... 同时在item-info 中设置了min-width:0 才有效果
</script >
<style lang="stylus" scoped>
.title
   margin-top: .2rem
   line-height: .8rem
   background: #eeeeee
   text-indent: .2rem
 .item-img-wrapper
   overflow:hidden
   height: 0
   padding-bottom: 33.9%
    
  .item-img
    width: 100%
.item-info
  padding: .1rem
  min-width:0
  .item-title
    line-height: .54rem
    font-size: .32rem
  .item-desc
    line-height: .4rem
    color: #eee
    overflow: hidden
    white-space: nowrap 
    text-overflow:ellipsis
 
     
</style>

