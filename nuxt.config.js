function resolve (dir) { // 加载文件
  return require('path').join(__dirname, '..', dir)
}

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Ed Me - Personal blog',
    meta: [{
      charset: 'utf-8'
    },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'author',
        content: 'Ed Me'
      },
      {
        name: 'keywords',
        content: 'Ed Me,权川,QuanChuan,noteScript,javaScript,Python,C,Java,nodeJs,Html,Css'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Ed Me - Personal blog'
      }
    ]/*,
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]*/
  },
  css: ['qc-ui', '~assets/style/main.css'],
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  plugins: [{
    src: '~plugins/util',
    ssr: false /* 仅在浏览器中使用 */
  }],
  build: {
    /*
     ** Run ESLint on save
     */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['em-util', 'axios']
    /* babel: {
      plugins: [['component', [{
        libraryName: 'qc-ui',
        styleLibraryName: 'theme-default'
      }]]]
    } */
  }
}
