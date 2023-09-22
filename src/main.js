import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import AOS from 'aos'
import 'aos/dist/aos.css'


import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC-GnX6Jy_RYWblu0xfhSnDzN4IPYfILVk', // Replace with your Google Maps API Key
    libraries: 'places', // You can add other libraries you need
  },
})

Vue.use(BootstrapVue);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted() {
    AOS.init()
  },

}).$mount('#app')
