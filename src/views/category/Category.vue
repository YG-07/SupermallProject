<template>
  <div>分类
    <!-- 下载better-scroll，实现移动端更好的滚动效果
     npm指令：npm install better-scroll --save
     -->
    <scroll class="content" ref="scroll" :probe-type="1">
      <ul>
        <button class="btn">按钮</button>
        <li>分类列表1</li>
        <li>分类列表2</li>
        <li>分类列表3</li>
        <li>分类列表4</li>
        <li>分类列表5</li>
        <li>分类列表6</li>
        <li>分类列表7</li>
        <li>分类列表8</li>
        <li>分类列表9</li>
        <li>分类列表10</li>
        <li>分类列表11</li>
        <li>分类列表12</li>
        <li>分类列表13</li>
        <li>分类列表14</li>
        <li>分类列表15</li>
        <li>分类列表16</li>
        <li>分类列表17</li>
        <li>分类列表18</li>
        <li>分类列表19</li>
        <li>分类列表20</li>
        <li>分类列表21</li>
        <li>分类列表22</li>
        <li>分类列表23</li>
        <li>分类列表24</li>
        <li>分类列表25</li>
        <li>分类列表26</li>
        <li>分类列表27</li>
        <li>分类列表28</li>
        <li>分类列表29</li>
        <li>分类列表30</li>
        <li>分类列表31</li>
        <li>分类列表32</li>
        <li>分类列表33</li>
        <li>分类列表34</li>
        <li>分类列表35</li>
        <li>分类列表36</li>
        <li>分类列表37</li>
        <li>分类列表38</li>
        <li>分类列表39</li>
        <li>分类列表40</li>
        <li>分类列表41</li>
        <li>分类列表42</li>
        <li>分类列表43</li>
        <li>分类列表44</li>
        <li>分类列表45</li>
        <li>分类列表46</li>
        <li>分类列表47</li>
        <li>分类列表48</li>
        <li>分类列表49</li>
        <li>分类列表50</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  // import BScroll from 'bet/ter-scroll'
  import Scroll from 'components/common/scroll/Scroll'
  
  export default {
    name: "Category",
    components: {
      Scroll
    }
    
    // mounted() {
    //   console.log(this.$refs.wpr)
    //   console.log(document.querySelector('.wrapper'))
    //   console.log(BScroll)
    //   // 2. better-scroll滚动，顺滑，底部有弹簧效果
    //   this.scroll = new BScroll(this.$refs.wpr, {
    //     // probe侦测。默认0，0和1不侦测位置，2手指在上面时侦测，3手指不在上面也侦测
    //     probeType: 0,
    //     // button不受影响，当为true时，div/span等等标签才能被点击
    //     click: true,
    //     pullUpLoad: true
    //   })
    //
    //   // on事件监听
    //   this.scroll.on('scroll', (position) => {
    //     // console.log(position)
    //   })
    //
    //   this.scroll.on('pullingUp', () => {
    //     console.log('上拉加载~')
    //     // 发送网络请求，请求更多页的数据
    //     // 等数据请求完成，并且将新的数据展示出来后使用finishPullUp()
    //     setTimeout(() => {
    //       this.scroll.finishPullUp()
    //     }, 1000)
    //   })
    //
    //   document.querySelector('.btn').addEventListener('click', () => {
    //     console.log('点击按钮')
    //   })
    // }
    
  }
</script>

<style scoped>
  .content {
    height: 200px;
    background-color: #ff8198;
    overflow: hidden;
    
    /*1. 原生的滚动,停顿式滚动*/
    /*overflow-y: scroll;*/
  }
</style>
