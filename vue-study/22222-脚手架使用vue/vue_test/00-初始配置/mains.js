/* 
  该文件是整个项目的入口文件
*/
import Vue from 'vue'   //引入Vue文件
/* import Vue from 'vue/dist/vue' */
import App from './App.vue'   //引入App组件、他是所有组件的父组件

Vue.config.productionTip = false  //不开启生产提醒

//创建Vue实例对象
new Vue({
  el:'#app',
  render: h => h(App),  //将app组件放入容器中
 /*  render(createElement){
    return createElement(App)
  } */
/*   template:`<App></App>`,
  comments:{
    App
  } */
})/* .$mount('#app') //绑定id为app的容器 */
/* 关于不同版本的Vue
  1、vue.js与vue.runtime.xxx.js的区别
    （1）vue.js是完整版的vue：包含：核心功能+模板解析器
    （2）vue.runtime.xxx.js是运行版的vue：只包含核心功能没有模板解析
  2、因为vue.runtime.xxx.js没有模板解析器，所以不能在组件和vue实例里面写template配置项需要使用
  render函数接收到createElement函数去指定具体内容 */