<template>
<div id="address">
  <h5>服务</h5>
<p>代码托管：<em>Github</em></p>
<p>服务托管：<em>Digitalocean</em></p>
<h5>框架</h5>
<p>客户端：<em>vue、nuxt、qc-ui、em-util、js-calculation、js-transmission</em></p>
<p>服务端：<em>Nodejs、Python、MongoDB、mongoose</em></p>
</div>
</template>

<script>
export default {
  name: 'address',
  data () {
    return {}
  }
}
</script>

<style scoped>
#address{
  padding:.25rem .2rem
}
p,em{
  font-size: .111rem;
}
p{
  padding:.02rem 0
}
p::before{
  content: "\f22d";
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  margin-right:.05rem

}
em{
  font-style: normal;
  color:#b63300;
  text-decoration:underline;
}
h5{
  font-size: .125rem;
  margin:.121rem 0
}
h5::before{
  content: "\f101";
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  margin-right:.05rem
}
</style>
