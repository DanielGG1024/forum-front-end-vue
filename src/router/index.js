import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Restaurant from '../views/Restaurants.vue'
// import { component } from 'vue/types/umd'
Vue.use(VueRouter)


const routes = [
  {
    path:'/',
    name:'root',
    redirect:'/restaurants'
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: SignUp

  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurant
  },
  {
    path: '/restaurants/feeds',
    name: 'restaurant-feeds',
    component: () => import('../views/RestaurantsFeeds.vue')
  },
  {
    path: '/restaurants/top',
    name: 'restaurant-top',
    component: () => import('../views/RestaurantsTop.vue')
  },
  {
    path: '/restaurants/:id',
    name:'restaurant',
    component: () => import('../views/Restaurant.vue')
  },
  {
    path:'/restaurants/:id/dashboard',
    name:'restaurants-dashboard',
    component:() => import('../views/Dashboard.vue')
  },
  {
    path: '/users/top',
    name: 'user-top',
    component: () => import('../views/UserTop.vue')
  },
  {
    path:'/users/:id',
    name:'user',
    component: () => import('../views/User.vue')
  },
  {
    path:'/users/:id/edit',
    name:'user-edit',
    component:()=>import('../views/UserEdit.vue')
  },
  {
    path:'/admin/restaurants',
    name:'admin-restaurants',
    component:()=>import('../views/AdminRestaurants.vue')
  },
  {
    path:'/admin/restaurants/new',
    name:'admin-restaurants-new',
    component:()=>import('../views/AdminRestaurantNew.vue')
  },
  {
    path:'/admin/restaurants/:id/edit',
    name:'admin-restaurant-edit',
    component:()=>import('../views/AdminRestaurantEdit.vue')
  },
  {
    path:'/admin/restaurants/:id',
    name:'admin-restaurant',
    component:()=>import('../views/AdminRestaurant.vue')
  },
  {
    path:'/admin/categories',
    name:'admin-categories',
    component:()=>import('../views/AdminCategories.vue')
  },
  {
    path:'/admin/users',
    name:'admin-users',
    component:()=>import('../views/AdminUsers.vue')
  },
  {
     path:'/admin',
     exact: true,
     redirect:'/admin/restaurants'
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  },
]

const router = new VueRouter({
  linkExactActiveClass:'active',
  routes
})

export default router
