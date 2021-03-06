import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HellowWzw from '@/components/HelloWzw'
import index from '@/views/index'
import test from '@/views/test'
import careerPlan from '@/views/careerPlan'
import messageBoard from '@/views/messageBoard'
import myblogs from '@/views/myblogs'
import mylife from '@/views/mylife'
import myinfo from '@/views/myinfo'
import cover from '@/views/cover'
import dayily from '@/views/views2/dayily'
import growth from  '@/views/views2/growth'
import unilife from  '@/views/views2/unilife'


Vue.use(Router)

export default new Router({
  //mode: 'history',//跳转时不带#号
  routes: [
    {
      path: '/',
      name: 'cover',
      component: cover
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
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/careerPlan',
      name: 'careerPlan',
      component: careerPlan
    },
    {
      path: '/messageBoard',
      name: 'messageBoard',
      component: messageBoard
    },
    {
      path: '/myblogs',
      name: 'myblogs',
      component: myblogs
    },
    {
      path: '/mylife',
      name: 'mylife',
      component: mylife,
      children:[
        {
          path: 'growth',
          redirect: '/growth',
          name: 'growth',
          component:  growth
        },{
          path: 'dayily',
          redirect: '/dayily',
          name: 'dayily',
          component:  dayily
        },{
          path: 'unilife',
          redirect: '/unilife',
          name: '/unilife',
          component: unilife
        }
      ]
    },
    {
      path: '/myinfo',
      name: 'myinfo',
      component: myinfo
    },
    {
      path: '/dayily',
      name: 'dayily',
      component: dayily
    },
    {
      path: '/unilife',
      name: 'unilife',
      component: unilife
    },
    {
      path: '/growth',
      name: 'growth',
      component: growth
    }
  ]
})
