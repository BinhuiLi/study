import Vue from 'vue' //引入vue
import Vuex from 'vuex' //引入vuex

Vue.use(Vuex) //使用vuex插件

const countAbout = {
  namespaced:true,
  actions:{
    increment(context,value){
      context.commit('JIA',value)
    },
    decrement(context,value){
      context.commit('JIAN',value)
    }
  },
  mutations:{
    JIA(state,value){
      state.sum += value
    },
    JIAN(state,value){
      state.sum -= value
    }
  },
  state:{
    sum:0,
    school:'尚硅谷',
    subject:'vue'
  },
  getters:{
    bigSum(state){
      return state.sum * 10
    }
  }
}

const personAbout = {
  namespaced:true,
  actions:{
    addPerson(context,value){
      context.commit('ADDPERSON',value)
    }
  },
  mutations:{
    ADDPERSON(state,value){
      state.personList.push(value)
    }
  },
  state:{
    personList:[
      {id:'001',name:'张三'}
    ]
  },
  getters:{
    
  }
}

export default new Vuex.Store({
  modules:{countAbout,personAbout}
})