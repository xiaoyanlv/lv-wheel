<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.topnav {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: pink;

  > .log {
    // TODO: 新增 logo
    max-width: 6em;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }
}
</style>