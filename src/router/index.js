//2.引入并声明使用插件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'


//  const originPush = VueRouter.prototype.push
//  VueRouter.prototype.push = function(location,onResolved,onRejected){
//      if(onRejected === undefined && onResolved === undefined  ){
//         return originPush.call(this,location).catch(() =>{}) 
//      } else{
//          return  originPush.call(this,location,onRejected,onResolved) 
//      }
//  }
 




//3.向外暴露一个路由器的对象
export default new VueRouter({
   routes:[
       {
        path:'/home',
        component:Home
       },
       {
        path:'/login',
        component:Login,
       //路由对象当中的元配置项，可以配置所需要的任何数据
        meta:{
            isHidden:true
        },
       },
       {
        path:'/search/:keyword',
        component:Search,
        name:'search' ,//命名路由
        
       },
       {
        path:'/register',
        component:Register,
        meta:{
            isHidden:true
        },
       },
       
       {
        path:'/',
        redirect:'/home'
 
       }
   ]  //配置路由
})
 //4. 在main.js中
