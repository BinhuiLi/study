**#笔记**

vue文件第一行有波浪线提示，虽然项目能正常运行，但看着难受。

在package.json文件下找到"parserOptions"，添加一项配置："requireConfigFile" : false即可

**##脚手架文件结构**

Vue 脚手架隐藏了所有 webpack 相关的配置，若想查看具体的 webpakc 配置，
若想看到具体配置请执行：vue inspect > output.js
模板项目的结构
├── node_modules
├── public
│ ├── favicon.ico: 页签图标
│ └── index.html: 主页面
├── src
│ ├── assets: 存放静态资源
│ │ └── logo.png
│ │── component: 存放组件
│ │ └── HelloWorld.vue
│ │── App.vue: 汇总所有组件
│ │── main.js: 入口文件
├── .gitignore: git 版本管制忽略的配置
├── babel.config.js: babel 的配置文件
├── package.json: 应用包配置文件
├── README.md: 应用描述文件
├── package-lock.json：包版本控制文件

**##关于不同版本的Vue**

  1、vue.js与vue.runtime.xxx.js的区别

    （1）vue.js是完整版的vue：包含：核心功能+模板解析器

    （2）vue.runtime.xxx.js是运行版的vue：只包含核心功能没有模板解析

  2、因为vue.runtime.xxx.js没有模板解析器，所以不能在组件和vue实例里面写template配置项需要使用

    render函数接收到createElement函数去指定具体内容

**##ref属性**

1、被用来给元素或子组件注册引用信息（id的代替者）

2、应用在html标签上获取的是标签的真实DOM元素，应用在组件标签上获取的是该组件的实例对象

3、使用方式：

    打标识：在标签中使用ref="xxx" 其中xxx表示的是在自身实例上$refs里对应的名称

    获取：this.$refs.xxx

**##配置项props**

    功能：让组件接收外部传过来的数据

    （1）传递数据

    `<Demo name="xxx"/>`

    (2) 接收数据

    第一种方式（只接收）：

    props:['name']

    第二种方式（限制数据的类型）：

    props:{

    name:String

    }

    第三种方式（限制类型、限制必要性、指定默认值）：

    props:{

    name:{

    type:String,			//指定数据类型

    required:true,		//是否为必传数据

    default:xxx			//指定默认值

    }

   }

    备注：prop是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实要修改

    那么请复制props的内容到data中，然后去修改data中的数据

**##mixin属性**

    功能：可以把多个组件共用的配置提取成一个混入对象

    使用方式：

    第一步定义混合：例如：

    {

    data(){...),

    methods:{...},

    ...

    }

    第二步使用混入，例如：

    （1）全局加入混入：Vue.mixin(xxx,xxx)

    （2）局部加入混入：mixins:['xxx','xxx']

**##插件**

    功能：用于增强Vue

    本质：包含install方法的一个对象，install的第一个参数是Vue，第二个之后的参数是插件使用者传递的数据

    定义插件：

    对象.install = function (Vue,param1...){

    功能1，功能2，...

    }

    使用插件：Vue.user()

**##scoped属性**

    作用：让样式在局部生效，防止冲突

    写法：`<style scoped>...</style>`

##总结TodoList案例

    1、组件化编程流程：

    （1）拆分静态组件：组件要按照功能点去拆分，命名不要与html元素冲突

    （2）实现动态组件：考虑好数据的存放位置，数据是一个组件再用，还是一些组件在公用

    a、一个组件再用存放在自身就可

    b一些再用，放在他们共同的父组件上

    2、props适用于：

    （1）父组件 ===》子组件    通信

    （2）子组件 ===》父组件     通信（要求父组件先给子组件提供一个回调函数

    3、使用v-model时要切记：v-model绑定的值不能是prop传过来的值，因为props是不可更改的

    4、props传过来的若是对象类型的值，修改对象的属性时Vue不会报错，但不推荐这样做
