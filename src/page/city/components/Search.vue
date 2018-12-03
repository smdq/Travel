<template>
  <div>
    <div class="search">
    <input class="search-input" v-model="keyword" type="text" placeholder="输入城市名或拼音">
   
   </div>
   <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item"
         v-for="(item,index) of list" 
         :key="index"
         >
         {{item.name}}
         </li >
         <li class="search-item" v-show="hasnoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscorll from 'better-scroll'
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed:{
    hasnoData() {
      return !this.list.length
    }
  },
  watch: {
    keyword(){
      if(this.timer){
        setTimeout(this.timer)
      }

      if(!this.keyword){
        this.list = []
        return
      }

      this.timer = setTimeout( () =>{
        const result =[]

        for (let i in this.cities){

          this.cities[i].forEach( (value) =>{
            if(value.spell.indexOf(this.keyword) >-1 || value.name.indexOf(this.keyword) >-1){
              result.push(value)
            }
          })
        }
        this.list = result

      },100)
    }
  },
  mounted(){
   this.scroll = new Bscorll(this.$refs.search)
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  height: 0.72rem;
  background: $bgColor;
  padding: 0 0.1rem;

  .search-input {
    height: 0.62rem;
    line-height: 0.62rem;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    border-radius: 0.06rem;
    padding: 0 0.1rem;
    color: #666;
  }
}

.search-content {
  overflow: hidden;
  z-index: 1;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: red;
}
.search-item{
  line-height:.62rem;
  padding-left: .2rem;
  color: #666;
  background:#fff;
}
</style>

