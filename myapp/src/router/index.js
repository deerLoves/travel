import Vue from 'vue'
import Router from 'vue-router'

//引导页
import guide_page from '@/components/common/guide_page'
import guide_loop from '@/components/common/guide_loop'

//首页
import home from '@/components/home/home'
import place from '@/components/home/place'
import spot from '@/components/home/spot'
import attractions from '@/components/home/attractions'

//登录注册
import register from '@/components/login/register'
import login from '@/components/login/login'
import forgetpassword from '@/components/login/forgetpassword'

//故事
import story from '@/components/story/home'
import storyDetalis from '@/components/story/storyDetalis'
import publish from "@/components/story/publish"

//我的
import my from '@/components/my/home'
import myStory from "@/components/my/myStory"
import personInfor from "@/components/my/personInfor"
import feedBack from "@/components/my/feedBack"
import setting from "@/components/my/setting"
import aboutUs from "@/components/my/aboutUs"
import changePwd from "@/components/my/changePwd"

//行程
import route from '@/components/route/home'
import myRouteDetails from '@/components/route/myRouteDetails'
import visitor from '@/components/route/visitor'
import visitorDetails from '@/components/route/visitorDetails'
import mypath from "@/components/route/mypath"
import myPathNow from "@/components/route/mypathnow"
import myRoutePublish from "@/components/route/myRoutePublish"
import test_scroll from '@/components/route/test_scroll'
//行程子路由
import routeAddBtns from "@/components/route/routePlay/routeAddBtns"
import routePaths from "@/components/route/routePlay/routePaths"
import planPaths from "@/components/route/routePlay/planPaths"


Vue.use(Router)
const router =  new Router({
  routes: [
    {
      path: '/',
      redirect:"/guide_page"
    },
    {
      path:'/guide_page',
      name:'guide_page',
      component:guide_page
    },
    {
      path:'/guide_loop',
      name:'guide_loop',
      component:guide_loop
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
      component: route,
      children:[
        {
          path:'/routeAdd',
          name:'routeAdd',
          component:routeAddBtns
        },
        {
          path:'/routePlay',
          name:'routePlay',
          component:routePaths
        },
        {
          path:'/planPath',
          name:'planPath',
          component:planPaths
        },
      ]
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
    //我的行程-详情
    {
      path : '/myRouteDetails',
      name : 'myRouteDetails',
      component : myRouteDetails
    },
    //我的行程-发布
    {
      path : '/myRoutePublish',
      name : 'myRoutePublish',
      component : myRoutePublish
    },
    //点击 “我的页面” 的  “我的行程”   跳转的路由
    {
      path:'/mypath',
      name:'mypath',
      component:mypath
    },
    //点击  “我的行程”页面任意一个行程，跳转到详情行程页面的路由
    {
      path : '/myPathNow',
      name : 'myPathNow',
      component : myPathNow
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
      path: "/attractions",
      name: "attractions",
      component: attractions
    },
    {
      path: '/spot',
      name: 'spot',
      component: spot
    },
		{
			path:"/publish",
			name:"publish",
			component:publish,
		},
    {
      path:"/personInfor",
      name:'personInfor',
      component:personInfor
    },
    //点击 “我的页面” 的  “信息反馈”   跳转的路由
    {
      path:"/feedBack",
      name:'feedBack',
      component:feedBack

    },
    //点击 “我的页面” 的  “设置”   跳转的路由
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
      path: "/register",
      name: "register",
      component: register
    },
    // 登录
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path:"/forgetpassword",
      name:"forgetpassword",
      component:forgetpassword
    },
    {
      path:"/test_scroll",
      name:"test_scroll",
      component:test_scroll
    }
  ]
})

//全局守卫 验证用户的登陆状态
router.beforeEach((to,from,next)=>{
  //通过ajax获取过来的登陆状态
  let flag = true;

  //获取所有需要验证登陆状态的路由
  let routers = ["login",'register','forgetpassword'];
 
  //to.name 需要跳转到某个路由的名称  如果这个路由存在的情况下
  if(!flag){
     
      if(routers.indexOf(to.name)<0){
        router.push('/login')
      }else{
        next();
      }
  }else{
    next();
  }
})
export default router;
