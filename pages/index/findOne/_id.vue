<template>
  <div id="id">
    <div v-if="id">
      <div id="header">hello world</div>
      <div id="content"> hello world</div>
      <div id="footer">hello world</div>
    </div>
    <div id="bounce-error" class="flex-column justify-center" v-else>
      <div class="align-center bounce animated">
        <span>4</span>
        <span class="fa fa-compass animated infinite fa-pulse"></span>
        <span>4</span>
      </div>
      <div>
        <p class="text-center id_tips" title="嘤嘤嘤~~~">~前方高冷，施舍一床被子吧<em class="fa-frown fa" v-for="x in 3"></em></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'id',
    data () {
      const {params: query} = this.$route
      return {id: query.id}
    }/* ,
    validate ({params}) {
      const id = {params}
      return id && id.length
      // return true // 如果参数有效
      // return false // 参数无效，Nuxt.js 停止渲染当前页面并显示错误页面
    } */
  }
</script>

<style scoped>
  #id,#bounce-error {
    height:100%;
    width: 100%;
  }

  .id_tips {
    font-size: .1rem;
    color: red
  }

  .flash {
    animation-delay: 1s;
  }

  .fa-frown {
    margin-left: .02rem;
    color: #6a6a6a;
  }

  .fa-pulse {
    animation: fa-spin 1s infinite steps(8);
    color: #24adff;
  }

  .animated, .animated > * {
    font-size: 1rem;
  }

  .animated > *:first-child, .animated > *:last-child {
    color: orangered;
  }

  @keyframes fa-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(170deg);
      transform: rotate(170deg);
    }
    100% {
      -webkit-transform: rotate(340deg);
      transform: rotate(340deg);
    }
  }
</style>
