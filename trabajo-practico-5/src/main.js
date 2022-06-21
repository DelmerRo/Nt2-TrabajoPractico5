import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap'

/* -------------- FORMULARIO AVANZADO (vue-form) -------------*/
/* https://www.npmjs.com/package/vue-form */
/* Instalación: npm i vue-form */
import './form'

/* -------------- ROUTER (vue-router) -------------*/
/* https://www.npmjs.com/package/vue-router */
/* Instalación: npm i vue-router@3 */
import { router } from './router'



/* -------------- AXIOS -------------*/
/* Instalación: npm i axios vue-axios */
//import './axios'

/* -------------- GLOBAL FILTERS -------------*/
//import './globalFilters'

/* -------------- GLOBAL MIXINS -------------*/
//import './globalMixins'

/* -------------- GLOBAL MIXINS -------------*/
//import './localMixins'


/* -------------- VUEX -------------*/
//
//npm i vuex@3
//import store from './store'


Vue.config.productionTip = false

new Vue({
  router, // es igual a -> router : router,
 //store,// es igual a -> store:store,
  render: h => h(App),
}).$mount('#app')
