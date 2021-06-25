const themeConfig = require('./config/theme/')

module.exports = {
  base: '/blog/',
  title: "ljm博客",
  description: 'ljm的嘘唏记录',
  dest: "public",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    
    // add jquert and fancybox
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }]
  ],
  theme: require.resolve('../../ljm-blog'), // 使用本地主题
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart']
}  