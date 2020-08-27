const Plugin1Home = () => import(/* webpackChunkName: "module1" */ '@/views/plugin1/Plugin1Home.vue')
const Plugin1Settings = () => import(/* webpackChunkName: "module1" */ '@/views/plugin1/Plugin1Settings.vue')

const routes = [
	{
		path: '/plugin1',
		name: 'plugin1-home',
		component: Plugin1Home,
		children: [
			{
				path: 'settings',
				name: 'settings',
				component: Plugin1Settings
			}
		]
	}
]

export default routes
