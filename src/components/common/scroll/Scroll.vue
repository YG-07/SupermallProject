<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  
  export default {
    name: "Scroll",
    props: {
      // 接收父组件的侦测参数，决定监听滚动的方式
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      // 避免document.querySelector('.wrapper')，因为该class可能有多个
      // 使用ref，一般绑定在子组件上，ref/children
      // 1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      
      // 2.on监听滚动位置，可选probeType参数
      this.scroll.on('scroll', (position) => {
        // console.log(position)
        // 对外发出position滚动参数
        this.$emit('scroll', position)
      })
      // 3.监听上拉事件，可选pullUpLoad参数
      this.scroll.on('pullingUp', () => {
        // console.log('上拉加载~')
        // 对外发送上拉事件
        this.$emit('pullingUp')
      })
    },
    methods: {
      scrollTo(x, y, time=300) {
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>
