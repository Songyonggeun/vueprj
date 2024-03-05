import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TodoView from '../views/TodoView.vue'
import NoticeView from '../views/NoticeView.vue'
import UserDetails from '../views/UserDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },
  {
    path: "/todo",
    name: "todo",
    component: TodoView
  },
  {
    path: "/notice",
    name: "notice",
    component: NoticeView
  },
  {
    path: "/user/:id",
    name: "UserDetails",
    component: UserDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
