const PluginHome = () => import('./PluginHome.vue')

let pluginRoutes = [
    {
        path: '/plugin1',
        component: PluginHome
    }
]

ROUTES1.push(...pluginRoutes)