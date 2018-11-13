import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import story from '@/components/story/home'
import route from '@/components/route/home'
import my from '@/components/my/home'
import storyDetalis from '@/components/story/storyDetalis'
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
  ]
})
