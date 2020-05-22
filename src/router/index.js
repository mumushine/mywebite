import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HellowWzw from '@/components/HelloWzw'
import index from '@/views/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'HelloWzw',
      component: HellowWzw
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }

  ]
})
