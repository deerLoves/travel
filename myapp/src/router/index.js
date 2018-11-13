import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import story from '@/components/story/home'
import route from '@/components/route/home'
import my from '@/components/my/home'
import myStory from "@/components/my/myStory"
import visitor from '@/components/route/visitor'
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
    //由行程页面跳转到的游客行程页面的路由
    {
      path : '/visitor',
      name : 'visitor',
      component : visitor
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
		}
  ]
})
