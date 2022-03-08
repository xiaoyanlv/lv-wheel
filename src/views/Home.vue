<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>lv UI</h1>
      <h2>练手 UI 框架</h2>
      <p class="actions">
        <a href>Github</a>
        <a href>开始</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Topnav from '../components/Topnav.vue'
</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      height: 28px;
      line-height: 28px;
      border-radius: 14px;
      padding: 0 8px;
    }
  }
}
</style>