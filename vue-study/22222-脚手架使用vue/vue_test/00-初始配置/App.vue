<template>
  <div>
    <img alt="My Logo" src="./assets/logo.png" >
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
  //引入组件
  import School from './components/School.vue'
  import Student from './components/Student.vue'
  export default {
    name:'App',
    components:{
      School,
      Student
    }
  }
</script>