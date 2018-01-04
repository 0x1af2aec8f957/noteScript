<template>
  <div id="home" class="flex-box">
    <div id="content-left" class="flex-column align-center">
      <p>目录</p>
      <p>地址</p>
      <p>关于</p>
      <p>{{name}}</p>
    </div>
    <div id="content-right">

    </div>
  </div>
</template>
<script>
  import Logo from '~/components/Logo.vue'

  export default {
    name: 'home',
    components: {
      Logo
    },
    data () {
      return {
        name: 'noteScript'
      }
    }
  }
</script>

<style scoped>
  #home, #home > * {
    height: 100% !important;
  }

  #home > *:first-child {
    width: 100rem;
    flex-basis: 100rem;
    background-color: red;
  }

  #home > *:last-child {
    width: calc(100% - 100rem);
    flex-basis: calc(100% - 100rem);
    background-color: yellow;
  }

  #content-left > * {
    padding: 1rem 0;
  }
</style>
