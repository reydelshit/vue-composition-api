import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PostDescription from '../views/postDescription.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/posts/:id',
    name: 'PostDescription',
    component: PostDescription,
    props: true
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
