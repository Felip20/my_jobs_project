import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/jobs/Job.vue'
import JobDetail from '../views/jobs/JobDetail.vue'


 
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
    path: "/jobs",
    name: "Job",
    component: Jobs
  },
  {
    path:"/jobdetail/:id",
    name: "JobDetail",
    component: JobDetail,
    props:true
  },
  {
    path:'/all-jobs',
    redirect:"/jobs"
  },
  {
    path:"/:catchAll(.*)",
    component:NotFound
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
