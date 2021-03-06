import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../store/index'
import './registerServiceWorker'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import VModal from 'vue-js-modal'

Vue.use(VModal, { dialog: true })

const requireComponent = require.context(
  './components/base',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(camelCase(fileName.split('/').pop().replace(/\.\w+$/, '')))
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
