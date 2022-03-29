<template>
  <ul>
    <h2 :style="{opacity}">欢迎学习VUE</h2>
    <li>news001&nbsp;&nbsp;<input/></li>
    <li>news002&nbsp;&nbsp;<input/></li>
    <li>news003&nbsp;&nbsp;<input/></li>
  </ul>
</template>

<script>
export default {
  name:'home-news',
  data(){
    return {
      opacity:1
    }
  },
  beforeDestroy(){
    console.log('news即将被销毁');
  },
  activated(){
    console.log('news组件被激活了')
    this.timerId = setInterval(()=>{
        this.opacity -= 0.01
        if(this.opacity <= 0) this.opacity = 1
    },16)
  },
  deactivated(){
    console.log('news组件失活了')
    clearInterval(this.timerId)
  }
}
</script>
  
<style>

</style>