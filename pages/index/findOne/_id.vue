<template>
  <div id="id">
    <div v-if="id" class="id">
      <div id="header" class="items-center text-overflow" v-text="title"><!--hello title--></div>
      <div id="content" v-text="content"><!--hello content--></div>
    </div>
    <div id="bounce-error" class="flex-column align-center" v-else>
      <div class="align-center bounce animated">
        <span>4</span>
        <span class="fa fa-compass animated infinite fa-pulse"></span>
        <span>4</span>
      </div>
      <div>
        <p class="text-center id_tips" title="嘤嘤嘤~~~">
          <em>~前方高冷，施舍一床被子吧</em>
          <em class="fa-frown fa" v-for="x in 3"><!--循环表情包--></em>
        </p>
      </div>
      <div class="button-box justify-between">
        <nuxt-link tag="button" to="/">返回首页</nuxt-link>
        <button @click.stop="$router.back()">返回上一页</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'id',
    data () {
      const {params: query} = this.$route
      return {
        id: query.id,
        title: 'hello title',
        content: 'hello content'
      }
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
  em {
    font-style: normal;
  }

  #id, .id, #bounce-error {
    height: 100%;
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
      -webkit-transform: rotate(-170deg);
      transform: rotate(-170deg);
    }
    100% {
      -webkit-transform: rotate(-340deg);
      transform: rotate(-340deg);
    }
  }

  .button-box {
    width: 2rem;
    margin: .3rem auto;
  }

  #header, #content {
    font-family: Code;
  }

  #header {
    height: .3rem;
    font-size: .2rem;
    padding: 0 .1rem;
    font-weight: 900;
    position: relative;
    color: #24adff;
  }

  #header::after {
    content: "";
    height: 1px;
    background-color: rgba(36, 173, 255, .5);
    width: 99%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  #content {
    min-height: calc(100% - .3rem);
    padding: .1rem;
    font-weight: 500;
    font-size: .08rem;
  }
</style>
