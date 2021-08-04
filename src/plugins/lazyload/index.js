import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

const lazyloadImageOptions = {
  preLoad: 1.3,
  error: '/static/placeholder-image.png',
  loading: '/static/loading.gif',
  attempt: 1
}

Vue.use(VueLazyload, lazyloadImageOptions)
