<template>
  <div id="id">
    <div v-if="title" class="id">
      <div id="header" class="items-center text-overflow" v-text="title"><!--hello title--></div>
      <div id="content"
           class="md-plan"
           v-html="content">
        <!--hello content-->
        <p>Getting data······</p>
      </div>
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
        <nuxt-link tag="button" to="/donate">去催促博主</nuxt-link>
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
      return query.id === 'hello world' ? {
        title: query.id,
        content: `<p>如你所见，我正在为此工作。</p>
                  <p>当你看到这篇文章时，意味着我们的距离更近了一步。</p>
                  <p>文末，感谢你抽出时间阅读至此。</p>
                  <p>当然，所有的这一切都离不开一个人 — 布莱恩·柯林汉 <span class="cursor-crosshair" onclick="window.open('https://web.archive.org/web/20150203071526/http://cm.bell-labs.com/cm/cs/who/dmr/btut.html')">《A Tutorial Introduction to the Language B》</span></p>`
      } : {}
    },
    head () {
      return {
        title: this.title || 'Ed Me - Personal blog',
        meta: [
          {name: 'keywords', content: this.title},
          {
            hid: 'description',
            name: 'description',
            content: this.content ? this.content.replace(/<[^>]+>/g, '') : '' // 去掉html中所有的标签
          }
        ]
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
    position: relative;
  }

  #header {
    height: .5rem;
    font-size: .18rem;
    padding: 0 .1rem;
    font-weight: 900;
    color: #24adff;
  }

  #header::after {
    content: "";
    height: 5px;
    background-color: #24adff;
    width: 3%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  #content {
    min-height: calc(100% - .5rem);
    padding: .1rem;
    font-weight: 500;
    font-size: .09rem;
  }

  #content::after {
    content: "Affirming: all the comments in the article represent the author's personal views and respect the original work. Plagiarism is shameful!";
    display: block;
    font-size: .08rem;
    color: #959595;
    font-weight: 900;
    margin: .35rem 0;
    text-indent: .2rem;
  }
</style>
