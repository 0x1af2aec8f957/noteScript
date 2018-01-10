<template>
  <div id="catalog">
    <p class="group-list text-overflow"
       v-for="x in group"
       :target="x.tag"
       v-text="x.title"
       @click.stop="$router.push(`/findOne/${x.title}`)"
       :style="{fontSize:x.random}"></p>
  </div>
</template>

<script>
  export default {
    name: 'catalog',
    data () {
      return {
        origin: '------',
        group: [{
          title: 'hello world!',
          tag: 'PREFACE',
          random: 0// 初始化字体大小
        }]
      }
    },
    head () {
      return {
        // title: this.title,
        meta: [
          {name: 'keywords', content: this.group.map(x => x.title).toString()}
        ]
      }
    },
    mounted () {
      [this.origin] = [window.origin]
      this.group.forEach(x => (x.random = (this.random()[Math.random().toString().split('.')[1].split('')[0] * true] || 15/* 禁止为0 */) + 'px'))
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
    /*white-space: nowrap;
    word-break: keep-all;*/
  }

  .group-list {
    display: block;
    color: rgba(25, 118, 210, 1);
    cursor: pointer;
    font-family: Code;
    padding-right: .888em; /*确保看到after[tag/标签]*/
    margin: .035rem 0;
    position: relative;
    /*background-color: rgba(187, 197, 222, 0.1);*/
    border-radius: 2px;
    transition: color .25s ease;
  }

  .group-list:hover {
    color: red;
    padding-right: 5.888em; /*确保看到after[tag/标签]*/
  }

  .group-list::after {
    content: attr(target);
    position: absolute;
    color: #08c;
    font-size: .25em;
    right: 0;
    top: 0;
    transform: rotate(180deg);
    cursor: crosshair;
    /*background-color: rgba(187, 197, 222, 0.1);*/
    transition: all .25s ease;
  }

  .group-list:hover::after {
    color: #00f;
    font-size: 1em;
    transform: rotate(360deg);
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
