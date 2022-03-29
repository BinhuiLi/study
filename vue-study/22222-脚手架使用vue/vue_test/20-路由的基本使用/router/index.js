import router from 'vue-router'

import About from '../components/About.vue'
import Home from '../components/Home.vue'

export default new router({
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home
    }
  ]
})