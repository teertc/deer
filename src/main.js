import Vue from 'vue'
import App from '@/App.vue'
import  router from '@/router'
// import store from '@/store'

//局部注册typenav
import TypeNav from '@/components/TypeNav'
Vue.component('TypeNav',TypeNav)

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
   router, //挂载后所有组件都可以使用this.$router和this.$route
    //  store,   //注册后所有组件都可以拿到this.$store
}) .$mount('#app')
