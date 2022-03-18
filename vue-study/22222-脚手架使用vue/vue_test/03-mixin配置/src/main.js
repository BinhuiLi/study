import Vue from 'vue'   //引入vue
import App from './App.vue' //引入app组件
import {hunhe} from './mixin'

Vue.config.productionTip = false  //取消生产提示
Vue.mixin(hunhe)    //全局引用

new Vue({   //创建vue实例
  el:'#app',    //绑定容器
  render: h => h(App),    //网容器中插入<App></App>
})