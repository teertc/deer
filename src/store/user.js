//这个是user模块的vuex模块

const state ={
    //存数据
}

  const mutations = {
        //直接修改数据
  }

   const actions = {
       //与组件当中的用户对接
       //一般是异步发送请求
       //提交action
   }

   const getters = {
       //简化数据的操作
   }


export default new Vuex.Store({
   state,
   mutations,
   actions,
   getters,
   module:{
       //模块化
   }

})