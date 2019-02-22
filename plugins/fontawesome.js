import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faSearch
} from '@fortawesome/free-solid-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
// config.autoAddCss = false;

library.add(faSearch)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
