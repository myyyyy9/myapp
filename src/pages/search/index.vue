<template>
  <div>
  

<i-panel title="搜索">
    <i-input :value=" value1 " placeholder="请输入电影名" />
</i-panel>
<i-button bind:click="handleClick">确认</i-button>

  </div>
</template>

<script>
export default {
  data () {
    return {     
      value1: ''
       
      
    }
  },

  

  methods: {   
  },

  created () {
  }
}
</script>

<style scoped>
</style>
