<template>
  <div id="app">
    <div class="container">
      <MySearch/>
      <MyList/>
    </div>
  </div>
</template>

<script>
import MySearch from './components/My-Search.vue'
import MyList from './components/My-List.vue'
export default {
  name:'App',
  components:{MySearch,MyList}
}
</script>