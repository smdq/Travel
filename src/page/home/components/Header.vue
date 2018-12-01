<template>
  <div class="header">
    
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <div class="header-right">
      {{city}}
      <span class="iconfont arrow-icon">&#xe65e;</span>
     </div>
  </div>
</template>
<script>
  export default {
    name:'HomeHeader',
    props:{
      city: String
    }
  }
  // @import '../../../assets/styles/varibles.styl'在build 文件里webpack.base 配置了变量  可改为
  // @import '~styles/assets/styles/varibles.styl'
</script>
<style scoped lang="stylus">
@import '~styles/varibles.styl'

  .header 
    display:flex
    height:.86rem
    background: $bgColor
    color: #fff
    .header-left
      text-align:center
      line-height:.86rem
      width 0.64rem
      float:left
       .back-icon
         font-size: .4rem
    .header-right
      width: 1.24rem
      float:right
      text-align:center
      line-height: .86rem
      .arrow-icon
        font-size: .24rem
    .header-input
      flex:1
      background:#fff
      border-radius:.1rem
      margin-top:.12rem
      line-height: .64rem
      height: .64rem
      margin-left:.2rem
      color:#ccc

    
</style>

