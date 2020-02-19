const navConf = require('./config/nav');
const sidebarConf = require('./config/siderbar');

module.exports = {
    title: 'Moking的个人网站',
    description: '认真生活',
    theme: 'reco',
    head: [
        ['link', { rel: 'icon', href: '/img/head.jpg' }],
        ["link", { rel: "stylesheet", href: "/css/style.css" }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    themeConfig: {
        author: 'Moking',
        type: 'blog',
        authorAvatar: '/img/head.jpg',
        // 博客配置
        blogConfig: {
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'      // 默认文案 “标签”
            },
            category: {
                location: 4,     // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
        },
        valineConfig: {//评论
            appId: 'w0gnBUsPC2FiGPLXraNyXMaG-gzGzoHsz',// your appId
            appKey: '9GRIruOGQo7fbShlvGowR3p3', // your appKey
        },
        nav: navConf,
        sidebar: sidebarConf,
        sidebarDepth: 2,
        displayAllHeaders: true,

        // 备案
        record: '浙ICP备19042845号-2',
        recordLink: 'http://www.beian.miit.gov.cn/',
        //cyberSecurityRecord: '浙ICP备19042845号-2',
        //cyberSecurityLink: 'http://www.beian.miit.gov.cn/',
        // 项目开始时间，只填写年份
        startYear: '2019'
    },

}