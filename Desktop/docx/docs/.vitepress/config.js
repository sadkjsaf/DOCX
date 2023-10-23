module.exports={ 
    title:'XPlaza 帮助中心',
    description:'在这里，我们为您提供帮助与服务',
    titleTemplate:'Custom Suffix',
    themeConfig: {
        // 导航栏配置
        logo:'../../public/favicon.ico',
        nav: [
        {text: '首页', link: '/'},
        {text: '文档', items:[
            {text: 'XPlaza 快速上手',link:'/center/index.md'},
            {text: '知识星球，冲冲冲',link:'/planet/index.md'},
        ]},
        {text: '产品', items: [
        {text: 'XPlaza', link: 'https://www.xplaza.cn/home/index'},
        {text: '知识星球', link: '/cssdocs/'}]},
        {text: '关于', items: [
            {text: '常见问题', link: '/htmldocs/'},
            {text: '团队', link: '/cssdocs/'},
        {text: '版本发布',link:'/haha'}]},
        {text: '价格', link: ''},
        ],
        sidebar: 
            {
              '/center/index.md': [
                { text: '登录注册', link: '/file/login.md' },
                { text: '资讯浏览', link: '/file/new.md' },
                { text: '社区浏览', link: '/file/community.md' },
                { text: '个人中心', link: '/file/user.md' },
                { text: '公司管理', link: '/file/company.md' },
                { text: '公司事务', link: '/file/matters.md' },
                { text: '代码仓库', link: '/file/warehouse.md' },
                { text: '资料与招聘', link: '/file/information.md' },
              ],
              '/file/': [
                { text: '登录注册', link: '/file/login.md' },
                { text: '资讯浏览', link: '/file/new.md' },
                { text: '社区浏览', link: '/file/community.md' },
                { text: '个人中心', link: '/file/user.md' },
                { text: '公司管理', link: '/file/company.md' },
                { text: '公司事务', link: '/file/matters.md' },
                { text: '代码仓库', link: '/file/warehouse.md' },
                { text: '资料与招聘', link: '/file/information.md' },
              ]
            }   
    }
}