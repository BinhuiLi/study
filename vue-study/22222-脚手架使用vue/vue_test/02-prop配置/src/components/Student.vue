<template>
  <div>
      <h1 v-text="msg"></h1>
      <h2> 学生姓名：{{s_name}}</h2>
      <h2> 学生性别：{{s_sex}}</h2>
      <h2> 学生年龄：{{age+1}}</h2>
      <button @click="updateAge">点我age++</button>
  </div>
</template>

<script>
export default {
  name:'school-info',
  data(){
    return {
      msg:'一个乖巧懂事的学生！！！！',
      age:this.s_age
    }
  },
  methods:{
    updateAge(){
      this.age++
    }
  },
  //简单声明接收
/*   props:['s_age','s_name','s_sex'] */

  //接收的同时对数据进行限制（接受数据但控制台报错）
/*   props:{
    s_name:String,
    s_age:Number,
    s_sex:String
  } */

  //
  props:{
    s_name:{
      type:String,    //name的类型为String
      required:true   //name为必传数据
    },
    s_age:{
      type:Number,    //age的类型为Number、
      default:99      //如果age没传  默认值为99
    },
    s_sex:{
      type:String,    //sex的类型为String
      required:true   //sex为必传数据
    }
  }
}
</script>