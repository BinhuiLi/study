import Vue from 'vue'

export default{
  install(){
    //全局过滤器
    Vue.filter('mySlice',function(value){
      return value.slice(0,4)
    })
    //定义全局指令
    Vue.directive('fbind',{
      //当指令与元素成功绑定时
      bind(element,binding){
        element.value = binding.value
      },
      //指令所在元素被插入页面时
      inserted(element){
          element.focus()
      },
      //当指令所在的模板被重新解析时
      update(element,binding){
          element.value = binding.value
          element.focus()
      }
    })
    //全局加入一个混入配置
    Vue.mixin({
      methods:{
        showName(){
          alert(this.name)
        }
      }
    })
    //往原型上加一个方法
    Vue.prototype.hello = ()=>{
      console.log("hello");
    }
  }
}