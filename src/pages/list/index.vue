<template>
  <div>
    <i-card v-for="item in list" :key="item" i-class="split" :title="item.name"  :extra="item.rate" :thumb="item.image">
       <view slot="content">{{item.content}}</view>
       <view slot="footer">{{item.actor}}</view>
    </i-card>
    <i-load-more tip="到底啦" :loading=" false" />
  </div>
</template>

<script>
export default {
  data () {
    return {   
      list :[]  
    }
  },
 onLoad(option){
   
   this.list=require('@/data/'+option.type+'.json')
   console.log(this.list)
 },
  

  methods: {   

  },

  created () {
  }
}
</script>

<style scoped>
div >>> .split {
  margin-bottom: 10pt;
}
</style>
