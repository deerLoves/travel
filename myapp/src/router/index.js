import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import story from '@/components/story/home'
import storyDetalis from '@/components/story/storyDetalis'
import route from '@/components/route/home'
import my from '@/components/my/home'
import myStory from "@/components/my/myStory"
import place from '@/components/home/place'
import spot from '@/components/home/spot'
import attractions from '@/components/home/attractions'
import personInfor from "@/components/my/personInfor"
import feedBack from "@/components/my/feedBack"
import setting from "@/components/my/setting"
import aboutUs from "@/components/my/aboutUs"
import changePwd from "@/components/my/changePwd"

import register from '@/components/login/register'
import login from '@/components/login/login'
import forgetpassword from '@/components/login/forgetpassword'
Vue.use(Router)

import visitor from '@/components/route/visitor'
import visitorDetails from '@/components/route/visitorDetails'
import publish from "@/components/story/publish"
Vue.use(Router)
const router =  new Router({
  routes: [
    {
      path: '/',
      redirect:"/home"
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/story',
      name: 'story',
      component: story,
    },
    //故事详情页面路由
    {
      name:"storyDetalis",
      path:"/storyDetalis",
      component:storyDetalis,
    },
    //行程路由的模块
    {
      path: '/route',
      name: 'route',
      component: route
    },
    //由行程页面跳转到的游客行程页面的路由
    {
      path : '/visitor',
      name : 'visitor',
      component : visitor
    },
    //由游客行程页面，跳转到游客行程详情页面的路由
    {
      path : '/visitorDetails',
      name : 'visitorDetails',
      component : visitorDetails
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: "/myStory",
      name: "myStory",
      component: myStory
    },
    {
      path: '/place',
      name: 'place',
      component: place
    },
    {
      path:"/attractions",
      name:"attractions",
      component:attractions
    },
    {
      path: '/spot',
      name: 'spot',
      component: spot
    },
		{
			path:"/publish",
			name:"publish",
			component:publish
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
    {


      path: "/attractions",
      name: "attractions",
      component: attractions
    },
    {
      path: "/register",
      name: "register",
      component: register
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path:"/forgetpassword",
      name:"forgetpassword",
      component:forgetpassword
    }
  ]
})
export default router;