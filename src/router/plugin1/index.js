const Plugin1Home = () => import(/* webpackChunkName: "module1" */ '@/views/plugin1/Plugin1Home.vue')

const routes = [
	{
		path: '/plugin1',
		name: 'plugin1-home',
		component: Plugin1Home,
	}
]

export default routes
