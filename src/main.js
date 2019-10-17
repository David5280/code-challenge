import Vue from 'vue';
import vueNumeralFilterInstaller from 'vue-numeral-filter';
import App from './App.vue';

Vue.use(vueNumeralFilterInstaller, { locale: 'en-gb' });

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
