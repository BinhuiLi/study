<template>
  <div class="row">
    <div class="card" v-for="user in info.users" :key="user.id">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
    <h2 v-if="info.isFirst">欢迎使用本系统！！！</h2>
    <h2 v-if="info.isLoading">正在加载中......</h2>
    <h2 v-if="info.errorMsg">发生错误！！！错误信息：{{info.errorMsg}}</h2>
  </div>
</template>

<script>
export default {
  name:'My-List',
  data(){
    return {
      info:{
        isFirst:true,
        isLoading:false,
        errorMsg:'',
        users:[]
      }
    }
  },
  mounted(){
    this.$bus.$on('getUser',(val)=>{
      this.info = {...this.info,...val}
    })
  }
}
</script>

<style scoped>
  .album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
  }

  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>