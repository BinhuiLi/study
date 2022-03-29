<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord" />&nbsp;
      <button @click="searchUser">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name:'My-Search',
  data(){
    return {
      keyWord:''
    }
  },
  methods:{
    searchUser(){ 
      this.$bus.$emit('getUser',{isFirst:false,isLoading:true,errorMsg:'',users:[]})
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        res =>{
          this.$bus.$emit('getUser',{isLoading:false,users:res.data.items})
        },
        error =>{
          this.$bus.$emit('getUser',{isLoading:false,errorMsg:error.message})
        }
      )
    }
  }
}
</script>