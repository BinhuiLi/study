el 	用于绑定容器

data		用于接收数据，且会被vue实例通过数据劫持监测数据的变化，并加载到vue实例的_data当中，最后通过数据代理将_data中的属性代理到vue实例自身上

methods		用于定义该vue实例会用到的一些方法，最后加载到vue的自身实例对象身上

当data中的值发生改变时模板将会重新解析

如何判断你的对data数据的修改是否会被vue监测？

这取决于vue对你的最后操作的数据在vm里是否对其有get、set方法生成（如数组没有get、set方法生成，但对操作会引起数组原数据变化的操作方法vue做了包装，所有当你通过下标操作数据数组元素时可以通过数组的原生方法（此处vue对其进行了功能加强，在不影响原方法的功能情况下，执行该方法会引起模板的重新渲染））

创建一个组件调用的是Vue里的   Vue.extend(options)方法，而这个方法里面使用的是VueCompoent(options)这个构造函数，也就意味着，每个组件都是一个原型相同的实例对象，其引用的内存地址不同

    //通过vm的隐式原型属性操作原型对象    追加一个值为99的x属性

    vm.__proto__.x = 99

    //通过vc获取x的值      返回结果为99

    console.log(school.prototype.x)

    //school（一个创建好的组件的名字）代表着Vuecomponent这个构造函数（当`<school></school>`标签被解析时才会创造出VueComponent的实例对象）

    //Vue就是创建Vue实例对象的构造函数

    //返回结果为true   代表着VueComponent构造方法的原型对象的原型对象指向着Vue构造方法的原型对象

    //这也就意味着vc可以拿到vm原型对象上的所有属性 也	可以使用vc操作vm的原型对象

    console.log(school.prototype.__proto__ === Vue.prototype)
