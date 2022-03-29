<template>
  <div>
    <h1>人员列表信息</h1>
    <h2>上面的求和值为{{sum}}</h2>
    <input placeholder="请输入添加人员姓名" v-model="personName"/>
    <button @click="addPerson">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
    
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name:'person-info',
  data(){
    return {
      personName:''
    }
  },
  computed:{
    personList(){
      return this.$store.state.personAbout.personList
    },
    sum(){
      return this.$store.state.countAbout.sum
    }
  },
  methods:{
    addPerson(){
      this.$store.dispatch('personAbout/addPerson',{id:nanoid(),name:this.personName})
    }
  }
}
</script>

<style>

</style>