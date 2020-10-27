import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Meta from "vue-meta";
import date from './filters/date'
import highlight from './filters/highlight'

Vue.config.productionTip = false;

Vue.filter('date', date);
Vue.filter('highlight', highlight);

Vue.use(Meta);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
