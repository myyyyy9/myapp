<template>
  <div>
   <view class="userinfo">
    <view class="userinfo-avatar">
     <open-data type="userAvatarUrl"></open-data>
    </view>
    <open-data type="userNickName"></open-data>
    </view>
    <i-panel title="我是影迷，我要推荐！！！">
      <i-input :value="name" @change="changeName($event)" title="电影名" autofocus placeholder="请输入电影名" maxlength="20" />
      <i-input :value="actor" @change="changeActor($event)" title="主演" placeholder="请输入主演" maxlength="30" />
      <i-input :value="content" @change="changeContent($event)" title="推荐介绍" placeholder="请输入影片内容" maxlength="50" />
      <i-input :value="rate" @change="changeRate($event)" title="评分" placeholder="请输入影片评分" maxlength="50" />
    </i-panel>
    <i-button @click="handleClick" type="warning" size="default">我要推荐</i-button>
    <view class="tips">电影豆瓣专用小程序，如果你有好看的电影请安利给我！！！</view>
  </div>
</template>

<script>
export default {
  data () {
    return {     
       name:"",
      rate:"",
      content:"",
       actor:""
      

    }
  },

  

  methods: {   
    
  },

  created () {
  }
}
</script>


<style scoped>
.userinfo {
  position: relative;
  width: 750rpx;
  height: 320rpx;
  color: #666;
  display: flex;
  flex-direction: column;
  align-items: center;
}
 
.userinfo-avatar {
  overflow:hidden;
  display: block;
  width: 160rpx;
  height: 160rpx;
  margin: 20rpx;
  margin-top: 50rpx;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
}
.tips {
  padding: 20pt;
  font-size: 10pt;
  color:rgb(26, 182, 12);
}
</style>
