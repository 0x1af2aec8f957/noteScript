<template>
  <div id="id">
    <div id="header">hello world</div>
    <div id="content"> hello world</div>
    <div id="footer">hello world</div>
  </div>
</template>

<script>
  export default {
    name: 'id',
    data () {
      return {}
    },
    validate ({params}) {
      const id = {params}
      return id && id.length
      // return true // 如果参数有效
      // return false // 参数无效，Nuxt.js 停止渲染当前页面并显示错误页面
    }
  }
</script>

<style scoped>

</style>
