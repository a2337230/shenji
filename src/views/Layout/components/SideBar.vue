<template>
  <div class="side-bar">
    侧边栏
  </div>
</template>
<script>
export default {
  name: 'Layout',
  props: {
    data: {
      type: Object,
      default: () => { return {} }
    }
  },
  data () {
    return {
    }
  },
  watch: {
    data (val) {
      console.log(val)
    }
  }
}
</script>
<style lang="less" scoped>
.side-bar {
  width: 200px;
  height: calc(~"100vh - 80px");
  background-color: #455F85;
}
</style>
