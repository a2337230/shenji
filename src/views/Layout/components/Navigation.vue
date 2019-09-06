<template>
  <div class="navigation">
    <el-col :span="24" class="breadcrumb-container">
      <!-- <strong class="title">{{$route.name}}</strong> -->
      <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-inner">
        <transition-group name="breadcrumb" mode="out-in">
            <el-breadcrumb-item v-for="item in key" :key="item.path">
              {{ item.name }}
            </el-breadcrumb-item>
        </transition-group>
        <!-- <transition-group name="breadcrumb" mode="out-in">
            <el-breadcrumb-item>
              {{ $route.name}}
            </el-breadcrumb-item>
        </transition-group> -->
      </el-breadcrumb>
    </el-col>
  </div>
</template>
<script>
export default {
  name: 'Navigation',
  props: {
    url: {
      type: Array,
      default: () => { return []}
    }
  },
  mounted () {
    console.log(this.$route.matched)
  }
}
</script>
<style lang="less" scoped>
// 动画开始
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
/*fade-transform*/
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}
.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
/*breadcrumb transition*/
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all .5s;
}
.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}
.breadcrumb-move {
  transition: all .5s;
}
.breadcrumb-leave-active {
  position: absolute;
}
// 动画结束
.navigation {
  height: 28px;
  // margin: 10px 0;
  background-color:#fff;
  color: #333333;
  padding: 10px 0 10px 22px;
  font-size: 14px;
  line-height: 2;
  display: flex;
  align-items: center;
  transition: .5s;
}
</style>
