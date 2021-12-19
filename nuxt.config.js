module.exports = {
    plugins:['~/plugins/request.js','~/plugins/date.js'],
    router: {
        linkActiveClass:'active',
        extendRoutes(route, resolve) {
            route.splice(0)
            route.push(...[
                {
                    path: '/',
                    component: resolve(__dirname, 'pages/layouts/'),
                    children: [{
                        path: '',
                        name: 'home',
                        component: resolve(__dirname, 'pages/home/')
                    }, {
                        path: '/login',
                        name: 'login',
                        component: resolve(__dirname, 'pages/login/')
                    },{
                        path: '/register',
                        name: 'register',
                        component: resolve(__dirname, 'pages/login/')
                    },{
                        path: '/profile/:username',
                        name: 'profile',
                        component: resolve(__dirname, 'pages/profile/')
                    },{
                        path: '/settings',
                        name: 'settings',
                        component: resolve(__dirname, 'pages/settings/')
                    },{
                        path: '/editor',
                        name: 'editor',
                        component: resolve(__dirname, 'pages/editor/')
                    },{
                        path: '/article/:slug',
                        name: 'article',
                        component: resolve(__dirname, 'pages/article/')
                    },]
                }
            ])
        }
    },
    server:{
        host:'0.0.0.0',
        port:3000
    }
}