module.exports = {
  type: 'blog',
  fullscreen: true,
  mode: 'light',
  authorAvatar: '/head.jpg',
  logo: '/head.jpg',
  // 博客设置
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: '分类' // 默认 “分类”
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: '标签' // 默认 “标签”
    }
  },
  markdown: {
    lineNumbers: true, //代码显示行号
  },
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: 'Liu Jiaming',
  // 备案号
  record: 'xxxxxx',
  // 项目开始时间
  startYear: '2020',
  search: true,
  searchMaxSuggestions: 10,
}