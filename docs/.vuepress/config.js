const themeConfig = require('./config/theme/')
const head = require('./config/head.js');

module.exports = {
  base: '/',
  title: "Liu Jiaming",
  description: '今天辛苦啦，静下心来学习吧!',
  dest: 'dist2', //打包路径
  head,
  theme: require.resolve('../../ljm-blog'), 
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart']
}  