// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Particles from "particles.vue";


export default function (Vue, { router, head, isClient }) {
  // add Buefy to Vue project with use global method
  Vue.component('Layout', DefaultLayout)
  Vue.use(Particles);

}
