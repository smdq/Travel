<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Head'
import DetailList from './components/List'
  export default {
    name:'Detail',
    components:{
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data(){
      return {
        list:[{
          title:'成人票',
          children:[
            {
            title:'成人三管联票',
            children:[
              {
                title:'成人三管联票----1'
              },
              {
                title:'成人三管联票----2'
              }
            ]
          },{
            title:'成人无管联票'
          }
          ]
        },{
          title:'学生票'
        },
        {
          title:'儿童票'
        },{
          title:'特惠票'
        }
        ]
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .content{
    height: 50rem
  }
</style>

