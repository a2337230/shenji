<template>
  <div class="layout">
    <nav-bar @tabClick="tabClick"></nav-bar>
    <div class="main-container">
      <div class="left">
        <side-bar :data="sideBar"></side-bar>
      </div>
      <div class="right">
        <navigation class="navigation" :url="key"></navigation>
        <section class="content-view">
          <el-scrollbar style="height: 100%">
            <transition name="fade-transform" mode="out-in">
              <router-view class="views" :key="key"></router-view>
            </transition>
          </el-scrollbar>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import Navigation from './components/Navigation'
export default {
  name: 'Layout',
  data () {
    return {
      sideBar: null
    }
  },
  components: {
    SideBar,
    NavBar,
    Navigation
  },
  computed: {
    key () {
      return this.$route.fullPath
    }
  },
  methods: {
    tabClick (val) {
      this.sideBar = val
    }
  }
}
</script>
<style lang="less" scoped>
.main-container {
  display: flex;
  .left {
    width: 200px;
  }
  .right {
    flex: 1;
    padding: 0 20px;
    box-sizing: border-box;
    .navigation {
      height: 40px;
      line-height: 40px;
    }
    .content-view {
      height: calc(~"100vh - 80px - 40px");
      overflow: auto;
    }
  }
}
</style>
