import { createWebHashHistory, createRouter } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import About from '../components/About.vue'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/about', component: About }
  ]
})

export default router
