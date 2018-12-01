<template>
  <div class="icons" >
   <swiper :options="swiperOption" >
     <swiper-slide v-for="(page,index) of pages" :key="index">
    <div class="icon" v-for="item of page" :key="item.id">
      <div class="icon-img">
       <img class="icon-content-img" :src="item.imgUrl" alt="">        
      </div>
      <p class="icon-desc">{{item.desc}}</p>
    </div>
    </swiper-slide>
   </swiper>  
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props:{
   list:Array
  },
  data() {
    return {
      swiperOption:{
        autoplay:false
      }
      // iconList: [
      //   {
      //     id: "0001",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
      //     desc: "景点门票景点门票景点门票"
      //   },
      //   {
      //     id: "0002",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
      //     desc: "景点门票"
      //   },
      //   {
      //     id: "0003",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
      //     desc: "景点门票"
      //   },
      //   {
      //     id: "0004",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
      //     desc: "景点门票"
      //   },
      //   {
      //     id: "0005",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
      //     desc: "景点门票"
      //   },
      //   {
      //     id: "0006",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
      //     desc: "景点门票"
      //   },
      //   {
      //     id: "0007",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
      //     desc: "景点门票"
      //   },
      //   {
      //     id: "0008",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
      //     desc: "景点门票"
      //   },
      //   {
      //     id: "0009",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
      //     desc: "景点门票"
      //   },
      //    {
      //     id: "00010",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
      //     desc: "景点门票"
      //   },
      //    {
      //     id: "00011",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
      //     desc: "景点门票"
      //   }
      // ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        } 
          pages[page].push(item);
        
      });
      return pages;
      console.log(pages);
    }
  }
};
</script>
<style scoped lang='stylus'>
.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
  oveflow: hidden;
}

.icon {
  position: relative;
  overflow: hidden;
  float: left;
  height: 0;
  width: 25%;
  padding-bottom: 25%;

  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.44rem;
    box-sizing: border-box;

    .icon-content-img {
      height: 100%;
      display: block;
      margin: 0 auto;
    }
  }

  .icon-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.44rem;
    line-height: 0.44rem;
    color: #333;
    text-align: center;
    
    overflow:hidden;
    white-space: nowrap;
    text-overflow:ellipsis; 

  }
}
</style>

