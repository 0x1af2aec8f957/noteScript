<template>
  <div id="main" class="justify-between">
    <div id="content-left">
      <div class="row-2 vh vw">
        <div class="logo-box align-center"
             dropEffect="link"
             v-text="dragText"
             @dragenter.preventDefault="dragText='···发现目标···'"
             @dragover.preventDefault="dragText='···接收目标···'"
             @dragleave.preventDefault="dragText=''"
             @dragend.preventDefault="dragText=''"
             @drop.preventDefault="drag">
          <!--LOGO-->
        </div>
        <div class="align-center menu-list relative-box" :copyright="copyright">
          <nuxt-link v-for="x in menu"
                     tag="p"
                     :class="['cursor-pointer', 'text-center', 'no-select', $route.path.includes(x.link)&&'active']"
                     v-text="x.name" :to="x.link"
                     :key="x.link">
            <!--目录-->
          </nuxt-link>
        </div>
      </div>
    </div>
    <div id="content-right">
      <!--this's content-->
      <div class="content-header justify-between items-center">
        <div class="web-title no-select">NOTESCRIPT</div>
        <div class="align-center">
          <input class="search-box" type="text" placeholder="搜索/SEARCH"/>
          <i class="fa fa-microphone"></i>
        </div>
      </div>
      <div class="content-footer overflow-y">
        <!--views-->
        <nuxt-child/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'main',
    data () {
      return {
        dragText: '', // 拖拽区域状态文字
        copyright: `©2017-${new Date().getFullYear()} @Ed Me`, // 版权描述文字
        menu: [{ // 菜单列表
          name: '目录', // 左侧名字
          link: '/catalog' // 右侧链接
        }, {
          name: '地址',
          link: '/address'
        }, {
          name: '捐赠',
          link: '/donate'
        }, {
          name: '关于',
          link: '/about'
        }]
      }
    },
    created () {
      const [{$router: go}, {$route: query}] = [this, this]
      query.name === 'index' && go.push('/catalog')// 首页重定向到文章列表页
    },
    methods: {
      drag (event) {
        this.dragText = '···解析目标···'
        event.preventDefault()
        console.log('成功捕获到一个新文件：')
        console.log(event.dataTransfer.files)
        this.dragText = ''
      }
    }
  }
</script>

<style scoped>
  input, i {
    box-sizing: border-box !important;
  }

  #main, #main > * {
    height: 100% !important;
  }

  /*背景主题*/
  #main, .row-2 > *:first-child[class~="logo-box"], .content-header {
    background-color: rgba(36, 173, 255, 1);
    /*color: #fff;*/
  }

  #main > * {
    background-color: #ffffff;
  }

  #content-left, .logo-box {
    width: 1.6rem;
    flex-basis: 1.6rem;
  }

  #content-right {
    width: calc(100% - 1.9rem);
    flex-basis: calc(100% - 1.9rem);
  }

  .logo-box {
    height: 30%;
    position: relative;
    font-size: .1rem;
    color: #fff;
  }

  .logo-box::after {
    font-size: 1.6rem;
    content: "";
    width: .5em;
    height: .5em;
    position: absolute;
    border-radius: 1%;
    box-shadow: 0 2px 2px rgba(10, 16, 20, .24);
    bottom: -.25em;
    left: 0;
    right: 0;
    margin: auto;
    cursor: crosshair;
    background: rgb(255, 255, 255) url('data:image/png;base64,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') no-repeat center;
    background-size: cover;
    border: 2px solid #ffffff
  }

  .logo-box + * {
    height: 70%;
  }

  .menu-list[class~="align-center"]::after {
    content: attr(copyright);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
  }

  .menu-list[class~="align-center"] > * {
    padding: .05rem 0;
    font-size: .12rem;
    transition: color .25s ease-in-out;
  }

  .menu-list[class~="align-center"] > *:hover {
    color: rgba(36, 173, 255, .5)
  }

  .menu-list[class~="align-center"] > .active {
    color: rgba(36, 173, 255, 1)
  }

  #content-right > * {
    font-size: .7rem;
  }

  .content-header {
    height: 1em;
    padding-right: .25em;
  }

  .content-footer {
    height: calc(100% - 1em);
  }

  .web-title, .web-title + *, .search-box, .search-box + * {
    height: 32px;
  }

  .web-title, .search-box + * {
    font-size: .13rem;
    color: #ffffff;
  }

  .search-box, .search-box + * {
    border-style: solid;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-color: #ffffff;
    transition: border .2s ease-in-out;
    line-height: 1.5;
  }

  .web-title {
    letter-spacing: .05rem
  }

  .search-box {
    box-shadow: none;
    border-left-width: 1px;
    border-radius: 2px 0 0 2px;
    border-right-width: 0;
  }

  .search-box + * {
    border-right-width: 1px;
    border-left-width: 0;
    border-radius: 0 2px 2px 0;
    position: relative;
  }

  .search-box + *::before {
    width: 32px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    background-image: none;
    color: black;
    cursor: pointer;
  }

  .search-box + *::after {
    content: "";
    height: 80%;
    width: 0;
    border-left: 2px dotted rgba(187, 197, 222, 1);
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .search-box:focus, .search-box:focus + * {
    border-color: black;
  }
</style>
