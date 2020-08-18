import routes from '@/router/plugin1'
import plugin1 from '@/store/plugin1'
import Plugin1Header from '@/views/plugin1/sections/Plugin1Header.vue'

window.appName = 'plugin1'

ROUTES1.push(...routes)

STORE_MODULES1[window.appName] = plugin1

const components = [
	Plugin1Header
]

const Plugin1Components = {
	install(Vue, options = {}) {
	  	// components
	  	components.forEach(component => {
			Vue.component(component.name, component)
		})
	}
}

export default Plugin1Components
