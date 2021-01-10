<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend :recommends="recommends" />
    <home-feature />
    <tab-control class="tab-control" :titles="titles" />
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
  // 网络请求js
  import {getHomeMultidata} from 'network/home'

  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
        titles: ['流行','新款','精选']
      }
    },
    components: {
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      NavBar,
      TabControl
    },
    created() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    /* 底部间隙 待优化 */
    padding-bottom: 100px;
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
</style>