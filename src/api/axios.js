// //对axios进行二次封装，
// //额外的让axios发请求时，具有其他的功能
// //配置基础路径跟进度条  nprogress
// // 放回响应，
// // 统一处理错误请求
// import axios from "axios";
// import { response } from "express";
// //import { config } from "vue/types/umd";
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'


// const service = axios.create({
//     baseURL: '/api',
//     timeout: 2000,

// });
//   //请求拦截
//   service.interceptors.request.use(
//       (config) =>{ 
//         NProgress.start(); //开启进度条
//         return config
//       },
//   );

// // 响应拦截器 ，Add a response interceptor
// service.interceptors.response.use(
//   (response) => {
//     NProgress.done();  //停止
//     return response.data 
//   },
//   (error) => {
//     NProgress.done();  //停止
//     alert('发送ajax请求失败'+error.message || '未知错误')
//    // return Promise.reject(new Error('发送ajax请求失败'))
//  return new Promise(() => {}) 
//   }
// );

//  export default service //把封装好的axios实例，暴露出去，后面去用