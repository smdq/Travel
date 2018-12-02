<template>
 <ul class="list">
   <li class="item"
    v-for="item of letters" 
    :key="item"
    :ref="item"
    @click="handleLetterClick"
    @touchstart ="handleTouchStart"
    @touchmove ="handleTouchMove"
    @touchend="handleTouchEnd"
    >
    {{item}}
    </li>
 </ul>
</template>
<script>
  export default {
    name:'CityAlphabet',
    props:{
      cities:Object
    },
    computed:{
       letters(){
         const letters = []
         for(let i in this.cities){
           letters.push(i)
         }
         return letters
       }
    },
    data(){
      return {
        touchStatus: false
      }
    },
    methods:{
      handleLetterClick(e){
        this.$emit('change',e.target.innerText)
        //console.log(e.target.innerText)
      },
      handleTouchStart(){
       this.touchStatus = true
      },
      handleTouchMove(e){

      if(this.touchStatus){
        // A到蓝色底部的距离
        const startY = this.$refs['A'][0].offsetTop
        //console.log(startY)
        //滑动的位置减去蓝色区域的高度
        const touchY = e.touches[0].clientY -79
        //触动的位置减去A到蓝色底部的差值
        const index = Math.floor((touchY - startY)/16.8)
       // console.log(index)
        if(index >=0 && index <this.letters.length){
          
          this.$emit('change',this.letters[index])
        }
      }
      },
      handleTouchEnd(){
        this.touchStatus = false
      }
    }
  }
</script>
<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
 .list
   display: flex
   flex-direction: column
   justify-content: center
   position: absolute 
   top: 1.58rem
   right: 0
   bottom: 0
   width: .4rem
   .item
     text-align: center
     line-height: .34rem
     color: $bgColor
     font-size: .26rem

</style>

