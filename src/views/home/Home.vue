<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    
    <scroll class="content" ref="scroll"
            :probe-type="3" @scroll="contentScroll"
            :pull-up-load="true" @pullingUp="loadMore" >
      <home-swiper :banners="banners" />
      <home-recommend :recommends="recommends" />
      <home-feature />
      <tab-control class="tab-control" :titles="titles" @tabClick="tabClick" />
      <goods-list :goods="goods[currentType].list"/>
      <ul>
        <li>文字1</li>
        <li>文字2</li>
        <li>文字3</li>
        <li>文字4</li>
        <li>文字5</li>
        <li>文字6</li>
        <li>文字7</li>
        <li>文字8</li>
        <li>文字9</li>
        <li>文字10</li>
        <li>文字11</li>
        <li>文字12</li>
        <li>文字13</li>
        <li>文字14</li>
        <li>文字15</li>
        <li>文字16</li>
        <li>文字17</li>
        <li>文字18</li>
        <li>文字19</li>
        <li>文字20</li>
        <li>文字21</li>
        <li>文字22</li>
        <li>文字23</li>
        <li>文字24</li>
        <li>文字25</li>
        <li>文字26</li>
        <li>文字27</li>
        <li>文字28</li>
        <li>文字29</li>
        <li>文字30</li>
        <li>文字31</li>
        <li>文字32</li>
        <li>文字33</li>
        <li>文字34</li>
        <li>文字35</li>
        <li>文字36</li>
        <li>文字37</li>
        <li>文字38</li>
        <li>文字39</li>
        <li>文字40</li>
        <li>文字41</li>
        <li>文字42</li>
        <li>文字43</li>
        <li>文字44</li>
        <li>文字45</li>
        <li>文字46</li>
        <li>文字47</li>
        <li>文字48</li>
        <li>文字49</li>
        <li>文字50</li>
      </ul>
    </scroll>
    
    <!-- 修饰符.native，监听一个组件的原生事件-->
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    
  </div>
</template>

<script>
  // 界面子组件
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommend from './childComps/HomeRecommend'
  import HomeFeature from './childComps/HomeFeature'
  // 公共组件
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'
  
  // 网络请求js
  import {
    getHomeMultidata,
    getHomeGoods
  } from 'network/home'

  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
        titles: ['流行','新款','精选'],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isShowBackTop: false
      }
    },
    components: {
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    created() {
      this.getHomeMultidata()
      this.getHomeCoods('pop')
      this.getHomeCoods('new')
      this.getHomeCoods('sell')
    },
    methods: {
      tabClick(index) {
        if (index == 0) this.currentType = 'pop'
        else if (index == 1) this.currentType = 'new'
        else if (index == 2) this.currentType = 'sell'
        console.log(this.currentType)
      },
      // 对请求方法抽离，方法名可以和导入的相同
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          console.log(res);
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeCoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          // res是请求的前30条数据,后端接口已失效！
          console.log(res)
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      },
      backClick() {
        console.log('点击BackTop组件')
        // 通过this.$refs.scroll拿到组件对象，然后访问其中的元素scroll
        // 滚动的函数scrollTo(x坐标, y坐标, 变化时间毫秒)
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      contentScroll(position) {
        // console.log(position)
        this.isShowBackTop = (-position.y) > 300
      },
      loadMore() {
        console.log('父组件 上拉加载更多~')
        this.getHomeCoods(this.currentType)
        // 刷新一下，重新计算可滚动高度
        this.$refs.scroll.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  /*scoped作用域*/
  #home {
    height: 100vh;
    position: relative;
    /*padding-top: 44px;*/
    /* 底部间隙 待优化 */
    /*padding-bottom: 100px;*/
  }
  .home-nav {
    color: #fff;
    background-color: var(--color-tint);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control {
    /* sticky达到position的值时就变成fixed */
    position: sticky;
    top: 44px;
  }
  /*.content {*/
    /*height: calc(100% - 49px);*/
    /*margin-top: 44px;*/
    /*overflow: hidden;*/
    /*background-color: #ff8198;*/
  /*}*/
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
</style>
