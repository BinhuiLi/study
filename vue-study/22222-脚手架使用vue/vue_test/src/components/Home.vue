<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- <a class="list-group-item" href="./home-news.html">News</a> -->
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <!-- <a class="list-group-item active" href="./home-message.html">Message</a> -->
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <div>
        <keep-alive :include="['home-news','home-message']">
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'home-info'
}
</script>

<style>

</style>