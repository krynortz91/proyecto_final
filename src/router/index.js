import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DomosView from '../views/DomosView'
import SouvenirsView from '../views/SouvenirsView'
import FaunaView from '../views/FaunaView'
import NotFound from '../views/NotFound'






const routes = [
  
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/souvenirs',
    name: 'souvenirs',
    component: SouvenirsView
  },
  {
    path: '/domos',
    name: 'domos',
    component: DomosView
  },
  {
    path: '/aves',
    name: 'aves',
    component: FaunaView
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'NotFoundView',
    component: NotFound
    }  
  // {
  //   path: '/products',
  //   name: 'products',
  //   component: Products
  // }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
