<template>
  <div id="about">
    <div class="about-list" v-for="x in aboutData">
      <h5 v-text="x.title"></h5>
      <p v-for="y in x.list" v-text="y"></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data () {
      return {
        aboutData: [{
          title: '关于我',
          list: [
            '93年生人（地点：降落在一个小山村） ~~~',
            '15年毕业于四川托普信息技术职业学院（专业：游戏美术） ~~~',
            `多年怼代码的经验，对代码已经产生了某种激素（经验：3+3+${new Date().getFullYear() - 2015}） ~~~`
          ]
        }, {
          title: '关于地址',
          list: [
            '2017年建成 ~~~',
            '2018年开放访问 ~~~'
          ]
        }, {
          title: '关于言论自由',
          list: [
            '没有绝对，只有相对 ~~~'
          ]
        }]
      }
    }
  }
</script>

<style scoped>
  .about-list {
    background-color: rgba(187, 197, 222, 0.1);
    margin: .1rem .1rem 0 .1rem;
    padding: .1rem;
    border-radius: 2px;
  }

  h5, p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h5 {
    padding: .1rem 0;
    font-size: .1222rem;
    text-indent: .1rem;
  }

  p {
    text-indent: .111rem;
    font-size: .1rem;
    padding: .0355rem 0;
  }
</style>
