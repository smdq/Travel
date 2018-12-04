<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      
        <router-link 
        tag="li" 
        class="item border-bottom" 
        v-for="item of list" 
        :key="item.id"
        :to="'/detail/'+item.id"
        >
        
        <img class="item-img" :src="item.imgUrl" alt="">
        
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
     
    </ul>
  </div>
</template>
<script>
  export default {
    name:'HomeRecommend',
    props:{
     list:Array
    },
    data(){
      return {
        // recommendList:[
        //   {
        //     id:'0001',
        //     imgUrl:'http://img1.qunarzz.com/sight/p0/1508/12/4e6170303c63bdb7070fb1987480afab.water.jpg_200x200_0775a71c.jpg',
        //     title:'杭州极地海洋世界',
        //     desc:'世界三大名秀之一，杭州宋城的灵魂杭州宋城'
        //   },
        //   {
        //     id:'0001',
        //     imgUrl:'http://img1.qunarzz.com/sight/p0/1508/12/4e6170303c63bdb7070fb1987480afab.water.jpg_200x200_0775a71c.jpg',
        //     title:'杭州极地海洋世界',
        //     desc:'世界三大名秀之一，杭州宋城的灵魂杭州宋城'
        //   },{
        //     id:'0001',
        //     imgUrl:'http://img1.qunarzz.com/sight/p0/1508/12/4e6170303c63bdb7070fb1987480afab.water.jpg_200x200_0775a71c.jpg',
        //     title:'杭州极地海洋世界',
        //     desc:'世界三大名秀之一，杭州宋城的灵魂杭州宋城'
        //   }
        // ]
      }
    }
  }
  // 样式中的... 同时在item-info 中设置了min-width:0 才有效果
</script >
<style lang="stylus" scoped>
 .title
   line-height: .8rem
   background: #eeeeee
   text-indent: .2rem
 .item
   overflow:hidden
   display:flex
   height: 1.9rem
   .item-img
     width: 1.7rem
     height 1.7rem
     padding: .1rem
   .item-info
     flex: 1
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
     .item-button
       background #ff9300
       padding: 0 .1rem
       color: #ffffff
       border-radius: .06rem
     
</style>

