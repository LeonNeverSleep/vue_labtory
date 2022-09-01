import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Activity from '../views/Activity.vue'
import ContactUs from '../views/ContactUs.vue'
import GroupMember from '../views/GroupMember.vue'
import JoinUs from '../views/JoinUs.vue'
import News from '../views/News.vue'
import Result from '../views/Result.vue'
import SearchDirection from '../views/SearchDirection.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/activity',
    name: 'activity',
    component: Activity
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactUs
  },
  {
    path: '/group',
    name: 'group',
    component: GroupMember
  },
  {
    path: '/join',
    name: 'join',
    component: JoinUs
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/result',
    name: 'result',
    component: Result
  },
  {
    path: '/search',
    name: 'search',
    component: SearchDirection
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
