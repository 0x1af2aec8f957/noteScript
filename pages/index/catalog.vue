<template>
  <div id="catalog">
    <span class="group-list" v-for="x in group" :target="x.tag" v-text="x.title" :style="{fontSize:x.random}"></span>
  </div>
</template>

<script>
  export default {
    name: 'catalog',
    data () {
      return {
        origin: '------',
        group: [{
          title: 'import world!',
          content: `welcome to ${this.origin}`,
          time: '2018-01-01',
          tag: 'JAVASCRIPT',
          random: '0rem'
        }, {
          title: '你好，世界',
          content: `欢迎来到 ${this.origin}`,
          time: '2018-01-01',
          tag: 'JAVASCRIPT',
          random: '0rem'
        }, {
          title: '你好，世界',
          content: `欢迎来到 ${this.origin}`,
          time: '2018-01-01',
          tag: 'JAVASCRIPT',
          random: '0rem'
        }, {
          title: '你好，世界',
          content: `欢迎来到 ${this.origin}`,
          time: '2018-01-01',
          tag: 'JAVASCRIPT',
          random: '0rem'
        }, {
          title: '你好，世界',
          content: `欢迎来到 ${this.origin}`,
          time: '2018-01-01',
          tag: 'JAVASCRIPT',
          random: '0rem'
        }, {
          title: '你好，世界',
          content: `欢迎来到 ${this.origin}`,
          time: '2018-01-01',
          tag: 'JAVASCRIPT',
          random: '0rem'
        }, {
          title: '你好，世界',
          content: `欢迎来到 ${this.origin}`,
          time: '2018-01-01',
          tag: 'JAVASCRIPT',
          random: '0rem'
        }, {
          title: '你好，世界',
          content: `欢迎来到 ${this.origin}`,
          time: '2018-01-01',
          tag: 'JAVASCRIPT',
          random: '0rem'
        }, {
          title: '你好，世界',
          content: `欢迎来到 ${this.origin}`,
          time: '2018-01-01',
          tag: 'JAVASCRIPT',
          random: '0rem'
        }, {
          title: '你好，世界',
          content: `欢迎来到 ${this.origin}`,
          time: '2018-01-01',
          tag: 'JAVASCRIPT',
          random: '0rem'
        }]
      }
    },
    mounted () {
      [this.origin] = [window.origin]
      this.group.forEach(x => (x.random = this.random()[Math.random().toString().split('.')[1].split('')[0] * true] + 'px'))
    },
    methods: {
      random (step = 2) { // 随机字体大小
        /* eslint one-var: ["error", "always"] */
        /* eslint camelcase: "error" */
        /* eslint-env es6 */
        let [MIN, MAX] = [15, 30], fontArr = [MIN]// 字体大小设置[最小,最大]
        while (MIN <= MAX) fontArr.push(MIN += step)
        return fontArr
      }
    }
  }
</script>

<style scoped>
  #catalog {
    padding: .18rem;
    white-space:nowrap;
    word-break:keep-all;
  }

  .group-list {
    color: rgba(25, 118, 210, 1);
    position: relative;
    margin: .05rem;
    cursor: pointer;
    font-family: Code;
    background-color: rgba(187, 197, 222, 0.1);
    border-radius: 2px
  }

  .group-list::before {
    content: attr(target);
    position: absolute;
    color: #08c;
    font-size: .25em;
    right: 0;
    top: 0;
    transform: rotate(180deg);
    cursor: crosshair;
    background-color: rgba(187, 197, 222, 0.1)
  }

  /*.group-list {
    margin: .1rem auto;
    width: 90%;
    flex-basis: 3.1415926rem;
    background-color: rgba(187, 197, 222, 0.1);
    !*box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, .2);*!
    !*border:1px solid rgba(250, 116, 69, 0.2);*!
    border-radius: 3px;
    overflow: hidden;
  }

  .group-list > * {
    padding: .1rem
  }

  *[class^="group-"] {
    font-family: Code;
    font-size: .111rem;
  }

  !*.group-list:nth-child(2n) > .group-title {
    background: linear-gradient(320deg, #0d47a1, #3a92d9);
  }

  .group-list:nth-child(2n+1) > .group-title {
    background: linear-gradient(160deg, #0d47a1, #3a92d9);
  }*!

  .group-title {
    background-color: rgba(36, 173, 255, 1);
    color: #fff;
    font-size: .125rem;
  }

  .group-content {
    color: #00f;
  }

  .group-target > * {
    font-size: .1rem;
  }

  .classification::before {
    content: "\f02c";
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: rgba(25, 118, 210, .35);
  }

  .classification {
    color: red;
  }

  .time::before {
    content: "\f0c6";
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: rgba(25, 118, 210, .35);
  }

  .time {
    color: #08c;
  }*/

</style>
