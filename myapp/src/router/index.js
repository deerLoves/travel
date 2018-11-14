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


import visitor from '@/components/route/visitor'
import visitorDetails from '@/components/route/visitorDetails'
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
      component: story, 
       
    },
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
			path:"/myStory",
			name:"myStory",
			component:myStory
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
    }
  ]
})
