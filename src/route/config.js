export default {
    // 侧栏菜单路由配置
    menu: [
        { title: '首页', path: '/', icon: 'iconindexnor', component: 'Home' },
        {
            title: 'UI',
            icon: 'uishezhi',
            subs: [
                { title: '按钮', path: '/Ui/Buttons', component: 'Buttons' },
                { title: '图标', path: '/Ui/Icons', component: 'Icons' },
                { title: '加载中', path: '/Ui/Loading', component: 'Loading' },
                { title: '对话框', path: '/Ui/Modals', component: 'Modals' },
                { title: '通知提示框', path: '/Ui/Notifications', component: 'Notifications' },
                { title: '标签页', path: '/Ui/Tabs', component: 'Tabs' },
                { title: '轮播图', path: '/Ui/Banners', component: 'Banners' },
                { title: '富文本', path: '/Ui/EditorCustom', component: 'EditorCustom' }
            ]
        },
        { title: '动画', path: '/Animate', icon: 'donghuapian', component: 'Animate' },
        {
            title: '权限管理',
            path: '/Auth',
            icon: 'quanxianpeizhi',
            subs: [
                { title: '基础演示', path: '/Animate/Basic', component: 'AniBasic' },
                { title: '路由拦截', path: '/Animate/RouterEnter', component: 'RouterEnter' }
            ]
        } 
    ]
};
