<template>
  <div class="goods">
    <ul>
      {{goods}}
      <goods-list-item v-for="item in goods" :goods-item="item" />
      <li>goods列表1</li>
      <li>goods列表2</li>
      <li>goods列表3</li>
      <li>goods列表4</li>
      <li>goods列表5</li>
      <li>goods列表6</li>
      <li>goods列表7</li>
      <li>goods列表8</li>
      <li>goods列表9</li>
      <li>goods列表10</li>
    </ul>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  
  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
.goods-info p {
  overflow: hidden;
  /*多余的文本显示为“...”*/
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
</style>
