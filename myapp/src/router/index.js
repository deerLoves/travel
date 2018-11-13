import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import story from '@/components/story/home'
import route from '@/components/route/home'
import my from '@/components/my/home'
import personInfor from "@/components/my/personInfor"
import feedBack from "@/components/my/feedBack"
import setting from "@/components/my/setting"
import aboutUs from "@/components/my/aboutUs"
import changePwd from "@/components/my/changePwd"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/story',
      name: 'story',
      component: story
    },
    {
      path: '/route',
      name: 'route',
      component: route
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path:"/personInfor",
      name:'personInfor',
      component:personInfor

    },
    {
      path:"/feedBack",
      name:'feedBack',
      component:feedBack

    },
    {
      path:"/setting",
      name:'setting',
      component:setting

    },
    {
      path:"/aboutUs",
      name:'aboutUs',
      component:aboutUs

    },
    {
      path:"/changePwd",
      name:'changePwd',
      component:changePwd

    },



  ]
})
