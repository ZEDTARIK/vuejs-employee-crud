import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/blog'
import ShowPost from '../views/blog/ShowPost'
import EditPost from '../views/blog/EditPost'
import PageNotFound from '../views/PageNotFound'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:id/:slug',
    name: 'Show-Post',
    component: ShowPost,
    props: true
  },
  {
    path: '/blog/edit/:id',
    name: 'Edit-Post',
    component: EditPost,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
