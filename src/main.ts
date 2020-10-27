import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Meta from "vue-meta";
import dateFilter from './filters/dateFilter'
import highlightFilter from './filters/highlightFilter'

Vue.config.productionTip = false;

Vue.filter('date', dateFilter);
Vue.filter('highlighted', highlightFilter);

Vue.use(Meta);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
