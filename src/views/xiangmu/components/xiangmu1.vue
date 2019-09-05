<template>
  <div>
    {{title}}
  </div>
</template>
<script>
export default {
  name: 'Layout',
  data () {
    return {
      title: this.$route.name
    }
  }
}
</script>
