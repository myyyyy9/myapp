<template>
  <div>
     <swiper
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
      style="height:250px"
    >
    <block v-for="item in imgUrls" :key="item">
      <swiper-item>
        <image   :src="item" style="width:100%;height:100%"/>
      </swiper-item>
    </block>
  </swiper>
    <i-grid i-class="no-border">
    <i-grid-item @click="goType(grid)"     v-for="grid in grids" :key="grid" i-class="no-border">
        <i-grid-icon>
            <image :src="grid.image" />
        </i-grid-icon>
        <i-grid-label>{{grid.title}}</i-grid-label>
    </i-grid-item>
   
</i-grid>
<i-panel :title="title_name">
  <view style="padding: 15px;">
    <i-card v-for="item in top" :key="item" i-class="split" :title="item.name"  :extra="item.rate" :thumb="item.image">
       <view slot="content">{{item.content}}</view>
       <view slot="footer">{{item.actor}}</view>
    </i-card>
    
  </view>
</i-panel>

  </div>
</template>

<script>
export default {
  created () {
    const db = wx.cloud.database({ env: 'myapp-0c4c38' })
    db.collection('movie').get().then(
      res => {
        console.log(res.data)
        this.movies = res.data
      }
    )
  },
  data () {
    return { 
      title_name: "推荐" ,
      grids:[
           {title:"热门", image:"/static/images/1.png"},
           {title:"排行榜", image:"/static/images/2.png"},
           {title:"收藏", image:"/static/images/3.png"},
            ],
      top:[
        {name:"终结者5",rate:"9.2",image:"cloud://myapp-0c4c38.6d79-myapp-0c4c38/movie/thumb_1_150_203_20150703111212683247.jpg",actor:"主演：阿诺·施瓦辛格",content:"《终结者：创世纪》"},
        {name:"摩登时代",rate:"9.4",image:"cloud://myapp-0c4c38.6d79-myapp-0c4c38/movie/thumb_1_150_203_20181205105605151777.jpg",actor:"主演：卓别林",content:"卓别林之讽刺杰作"},
        {name:"好莱坞往事",rate:"8.6",image:"cloud://myapp-0c4c38.6d79-myapp-0c4c38/movie/4a3be023078f370aa3a142856f9ebd95.jpg",actor:"主演：莱昂纳多·迪卡普里奥",content:"好莱坞杀人事件"},
        {name:"一出好戏",rate:"8.9",image:"cloud://myapp-0c4c38.6d79-myapp-0c4c38/movie/1.jpg",actor:"主演：黄渤",content:"黄渤张艺兴荒岛求生"},

      ],
        imgUrls: [
        'cloud://myapp-0c4c38.6d79-myapp-0c4c38/movie/d6f1b4c734b5eb8b0dcf6546ebad7830.jpg',
        'cloud://myapp-0c4c38.6d79-myapp-0c4c38/movie/m2.jpg',
        'cloud://myapp-0c4c38.6d79-myapp-0c4c38/movie/m3.jpg',
        'cloud://myapp-0c4c38.6d79-myapp-0c4c38/movie/ead6e3c88b2d3848a9515931ac032176.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
    }
  },

  

  methods: {   
    goType(type){
      console.log(type)
      let url ='../list/main?type='+type.title
      mpvue.navigateTo({ url })
    }

    
  },

  created () {
  }
}
</script>

<style scoped >
div >>> .no-border {
  border-width: 0pt;
}
div >>> .split {
  margin-bottom: 10pt;
}

 

</style>
