<template>
<div id="donate">
<p>根据
  <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh"
  target="_blank"
  rel="external">署名-非商业性使用-禁止演绎 4.0 国际</a>，博客内的文章你可以随意与他人进行共享。</p>
  <p>本人所有开源项目都基于
    <a href="https://egoist.mit-license.org/"
    target="_blank"
    rel="external">MIT</a> 协议发布，无任何应用内外收费。</p>
    <p>所有的捐助都将用于建设博客。</p>
    <div class="donate justify-between">
<div class="donate-alipay background-box"></div>
<div class="donate-wechatpay background-box"></div>
    </div>
</div>
</template>

<script>
export default {
  name: 'donate',
  data () {
    return {}
  }
}
</script>

<style scoped>
#donate{
  padding:.1rem
}
a,a:active,a:link{
  color: #b63300;
  /* text-decoration: none; */
  margin:0 .05rem
}
a,p,p::before{
  justify-content: flex-start;
  align-items: center;
}
a,p{
  font-size: .1rem;
  display: flex
}
p{
  padding:.025rem 0
}
p::before{
  content: "\f111";
  font-size: .0666rem;
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  margin-right:.05rem
}
.donate{
  padding:.2rem 3%
}
.donate>*{
  width:2rem;
  flex-basis: 2rem;
  height:2rem;
  cursor:crosshair;
  background-color: rgba(187, 197, 222, 0.1)
}
</style>
