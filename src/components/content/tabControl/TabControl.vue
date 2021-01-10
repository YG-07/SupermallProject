<template>
  <div class="tab-control">
    <div class="tab-control-item" :class="{active: index === currentIndex}"
      v-for="(item, index) in titles" @click="itemClick(index)" :key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  //只是文字不一样时，可以不用slot，通过组件props传递数据

  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>