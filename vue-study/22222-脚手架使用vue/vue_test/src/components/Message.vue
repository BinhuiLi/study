<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <router-link :to="{
          path:'/home/message/detail',
          query:{
            id:m.id,
            title:m.title
          }
        }">
          {{m.title}}
        </router-link>
        &nbsp;&nbsp;
        <button @click="pushJump(m)">push跳转</button>
        <button @click="replaceJump(m)">replase跳转</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'home-message',
  data(){
    return {
      messageList:[
        {id:'001',title:'message001'},
        {id:'002',title:'message002'},
        {id:'003',title:'message003'}
      ]
    }
  },
  methods:{
    pushJump(m){
      this.$router.push({
        name:'xq',
        query:{
          id:m.id,
          title:m.title
        }
      })
    },
    replaceJump(m){
      console.log(this.$router);
      this.$router.replace({
        path:'/home/message/detail',
        query:{
          id:m.id,
          title:m.title
        }
      })
    },
  },
  beforeDestroy(){
    console.log('message即将被销毁了')
  }
}
</script>

<style>

</style>