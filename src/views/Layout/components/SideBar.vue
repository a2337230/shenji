<template>
  <div class="side-bar">
    <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#455F85"
        text-color="#989898"
        active-text-color="#333333"
        unique-opened
        v-if="data"
      >
        <template v-for="item in data">
          <el-menu-item :index="item.path" :key="item.path">
            <router-link :to="{name: item.name}" tag="div" @click.native="toMenu">
              {{item.name}}
            </router-link>
          </el-menu-item>
        </template>
      </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  props: {
    data: {
      type: Array,
      default: () => { return [] }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    toMenu () {
      this.$emit('getNavigation', this.$route.matched)
      console.log(this.$route.matched)
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
.router-link-active {
  color: #fff;
}
</style>
