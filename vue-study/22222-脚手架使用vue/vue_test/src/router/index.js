import router from 'vue-router'

import About from '../components/About.vue'
import Home from '../components/Home.vue'
import News from '../components/News.vue'
import Message from '../components/Message.vue'
import Detail from '../components/Detail.vue'

export default new router({
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'news',
          component:News
        },
        {
          path:'message',
          component:Message,
          children:[
            {
              name:'xq',
              path:'detail',
              component:Detail,
              //props的第一种写法：值为对象，该对象中的所有key-value都会以props的形式传给Detail
              //props:{id:'111',title:'222'}
              //props的第二种写法：值为布尔值，就会把该路由组件收到的所有params中的参数，以props的方式传递给指向的组件
              //props:true
              //props的第三种写法：值为函数，参数为$route
              props($route){
                return {
                  id:$route.query.id,
                  title:$route.query.title
                }
              }
            }
          ]
        },
      ]
    }
  ]
})