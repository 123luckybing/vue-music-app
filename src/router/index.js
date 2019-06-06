import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import User from '@/components/User'
import Recommend from '@/components/Recommend'
import Singer from '@/components/Singer'
import Band from '@/components/Band'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/user',
      name: 'User',
      component: User
    }, {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    }, {
      path: '/singer',
      name: 'Singer',
      component: Singer
    }, {
      path: '/band',
      name: 'Band',
      component: Band
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
