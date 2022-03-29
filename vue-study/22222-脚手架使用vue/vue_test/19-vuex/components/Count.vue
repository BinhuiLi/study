<template>
  <div>
    <h1>当前求和值为：{{sum}}</h1>
    <h1>当前求和值放大十倍后为：{{bigSum}}</h1>
    <h2>学校名称：{{school}}</h2>
    <h2>学科：{{subject}}</h2>
    <h2 style="color:red;">下面的总人数为{{personList.length}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOaa">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等在加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  name:'My-Category',
  data(){
    return {
      n:1
    }
  },
  computed:{
    //计算属性原始写法
    /* sum(){
      return this.$store.state.sum
    },
    school(){
      return this.$store.state.school
    },
    subject(){
      return this.$store.state.subject
    }, */
   /*  bigSum(){
      return this.$store.getters['countAbout/bigSum'] //分模块不使用mapgetter写法
    }, */
    //使用mapState生成计算属性（对象写法）从state中取
    /* ...mapState({sum:'sum',school:'school',subject:'subject'}), */
    //使用mapState生成计算属性（数组写法）
    ...mapState('countAbout',['sum','school','subject']),
    ...mapState('personAbout',['personList']),
    //使用mapgetter生成计算属性（对象写法）数组写法同上 从getter中取
    ...mapGetters('countAbout',['bigSum'])
  },
  methods:{
  /*   increment(){
      this.$store.dispatch('increment',this.n)
    },
    decrement(){
      this.$store.dispatch('decrement',this.n)
    },
 */
    ...mapActions('countAbout',['increment','decrement']),

    //**************************************************************** */
    incrementOaa(){
      if(this.$store.state.countAbout.sum % 2){
        this.$store.dispatch('countAbout/increment',this.n)
      }
    },
    incrementWait(){
      setTimeout(()=>{
        this.$store.dispatch('countAbout/increment',this.n)
      },500)
    },
  }
}
</script>