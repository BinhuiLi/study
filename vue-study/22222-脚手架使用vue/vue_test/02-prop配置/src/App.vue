<template>
  <div>
    <Student s_name="秋香" s_sex="女" :s_age="18" />
  </div>
</template>

<script>
import Student from './components/Student.vue'

export default {
  name:'App',
  components:{
    Student
  }
}
</script>