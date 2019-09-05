<template>
  <div class="nav-bar">
    <div class="logo">
      <img src="./../../../common/images/logo.png" alt="">
    </div>
    <div class="nav-right">
      <h1 class="logo-title">现场审计作业平台系统</h1>
      <ul class="nav-tabs">
        <li :class="{active: $route.fullPath === item.path}" v-for="item in tabs" :key="item.path" @click="goTab(item)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  data () {
    return {
      tabs: [],
      tabClick: ''
    }
  },
  created () {
    this.tabs = this.$router.options.routes.filter(item => !item.hide)
    this.tabClick = this.tabs.filter(item => item.path === this.$route.fullPath)
    console.log(this.tabs, this.tabClick[0].children)
    if (this.tabClick) {
      this.$emit('tabClick', this.tabClick)
    }
  },
  methods: {
    goTab (val) {
      this.$emit('tabClick', val.children)
      this.$router.push(val.path)
      // console.log(val)
    }
  }
}
</script>
<style lang="less" scoped>
.nav-bar {
  height: 80px;
  background-color: #5F7CA5;
  display: flex;
  padding-top: 12px;
  box-sizing: border-box;
  .logo {
    width: 60px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .nav-right {
    margin-left: 23px;
    position: relative;
    height: 100%;
    .logo-title {
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: #FFFFFF;
      letter-spacing: 0;
      text-shadow: 0 2px 2px rgba(0,0,0,0.50);
    }
    .nav-tabs {
      display: flex;
      position: absolute;
      bottom: 0;
      li {
        width: 90px;
        text-align: center;
        font-size: 16px;
        line-height: 32px;
        color: #fff;
        cursor: pointer;
      }
      .active {
        background-color: #2F4668;
        border-radius: 10px 10px 0 0;
      }
    }
  }
}
</style>
