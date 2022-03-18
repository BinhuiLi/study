<template>
  <div>
    <!-- 通过prop将父组件的函数给子组进行回调使用，使得子组件与父组件进行通信，函数由子组件调用（可传递参数），父组件执行 -->
    <School :getSchoolName='getSchoolName' />
    <hr/>
    <!-- 由父组件给子组件设置一个事件，由子组件通过他的实例对象上的$emit('事件名',param1...)触发该事件，
    父组件监听该事件的触发，一旦触发执行对应的父组件方法（子组件可以向父组件发送参数） -->
    <!-- <Student @sendMyName="getStudentName"/> -->  <!--  直接在创建子组件实例对象时设置自定义事件 -->
    <Student ref="student"/>  <!--  给子组件打上标识，以供获取子组件实例对象，然后可以灵活的在其他地方配置该子组件实例对象 -->
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
  name:'App',
  methods:{
    getSchoolName(val){
      console.log('学校名称为：'+val);
    },
    getStudentName(val){
      console.log('学生名字为：'+val);
    },
  },
  mounted(){
    //通过拿到$refs中标识为student的组件实例对象，在该实例对象身上添加一个名为sendMyName的事件，并绑定自身的getStudentName方法
    this.$refs.student.$on('sendMyName',this.getStudentName)    
  },
  components:{
    Student,
    School
  }
}
</script>