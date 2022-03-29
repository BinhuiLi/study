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

**##组件的自定义事件**

    1、一种组件的通信方式，适用于：子组件 ===》父组件

    2、使用场景：A是父组件，B是子组件，B想要给A传递信息，那么就要在A中给B绑定自定义事件（事件 的回调在A中）

    3、绑定自定义事件：

    1、第一种方式：在父组件中：<Demo @atguigu="test" />或`<Demo v-on:atguigu="test"/>`

    2、第二种方式：在父组件中：

    `		<Demo ref="demo"/>...mounted:{this.$refs.demo.$on('atguigu',this.test)}`

    3、若想让自定义事件只触发一次，可以使用$once绑定事件或在事件后添加once修饰符

    4、触发自定义事件：this.$emit('atguigu',参数1...)

    5、注意：通过`this.$refs.xxx.$on('atguigu',回调)绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向就会出现问题`

**##全局事件总线**

    1、一种组件间通信的方式，适用于任意组件间通信

    2、安装全局事件总线：

    new Vue{beforecreate(){Vue.prototype.$bus = this})}

    3、使用事件总线：

    1、接收数据：A组件想要接收数据，则A组件中给$bus绑定自定义事件，事件的回调留在A组件自身

    2、提供数据：使用全局事件总线.$emit('xxx',val)触发xxx事件，并提供参数val

    4、最好在beforedestroy钩子中，用$off去解绑当前组件所用到的事件

**##消息订阅与发布**

    1、一种组件间通信的方式，适用于任意组件间通信

    2、使用步骤：

    1、安装pubsub：npm i pubsub-js

    2、引入：import pubsub from 'pubsub-js'

    3、接收数据：A组件想要接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身

    this.pubsubid = pubsub.subscribe('studentName',this.reportStudentName) //订阅studentName信息thi

    4、提供信息：pubsub.publish('studentName',this.name)

    5、取消订阅：pubsub.unsubscribe(this.pubsubid) //取消订阅pubsubid的信息

**##nextTick**

    1、语法：this.$nextTick(回调函数)

    2、作用：在下一次DOM更新结束后执行其指定的回调。

    3、什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行

**##配置代理**  见15代理配置/App.vue与vue.config.js

**##插槽**

    1、作用：让父组件可以向子组件指定位置插入html结构，也是一种组件之间的通信方式，适用于父组件 ===》子组件

    2、分类：默认插槽、具名插槽、作用域插槽

    3、使用方式：

    1、默认插槽：父组件中在组件标签中写入要插入的html结构。子组件使用slot标签指定要插入的位置

    2、具名插槽：父组件在写html结构时使用添加一个属性**slot=“xxx”**或者**v-slot=xxx**指定要插入的插槽，子组件在声明xlot标签时写入name=“xxx”与父组件一		 一对应

    3、作用域插槽：子组件在声明slot标签时使用:xxx="yyy"声明一个xxx属性的值为yyy，父组件使用templat标签使用**slot-scope=“zzz”**获取该插槽的作用域，使用zzz.xxx获取到子组件在xxx上声明的yyy数据

**##Vuex**

    1、组件中读取vuex中的数据：this.$store.state.xxx

    2、组件中执行vuex的方法：this.$store.dispatch('xxx',param1...)或者直接越过actions直接使用mutations中的方法

this.&dollar;store.commit('xxx',param1...)

##四个map方法的使用

    mapState方法：用于帮助我们映射state中的数据

    mapGetters方法：用于帮助我们映射getter中的数据

    mapActions方法：用于帮助我们生成与action对话方法

    mapMutations方法：用于帮助我们生成与Mutations对话方法
