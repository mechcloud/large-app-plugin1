const PluginHome = () => import('./PluginHome.vue')

// import PluginHome from './PluginHome'

let pluginRoutes = [
    {
        path: '/plugin1',
        component: PluginHome
    }
]

ROUTES1.push(...pluginRoutes)