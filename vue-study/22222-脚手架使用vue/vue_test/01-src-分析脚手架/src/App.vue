<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom" ref="button">点我输出上方的Dom元素</button>
    <school ref="school"/>
  </div>
</template>

<script>
import School from './components/School.vue'

export default {
  name:'App',
  data(){
    return {
      msg:'欢迎学习Vue'
    }
  },
  methods:{
    showDom(){
      console.log(this.$refs.title);
      console.log(this.$refs.button);
      console.log(this.$refs.title);
    }
  },
  components:{
    School
  }
}
</script>