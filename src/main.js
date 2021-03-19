// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

// import Buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css' 

export default function (Vue, { router, head, isClient }) {
  // add Buefy to Vue project with use global method
  Vue.use(Buefy)
  Vue.component('Layout', DefaultLayout)
}
