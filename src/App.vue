<template>
  <div id="app">
    <div class="navList">
      <router-link to="/home" class="nav">表格封装 </router-link>
      <router-link to="/newInput" class="nav">
        <div title="封装组件的技巧">组件封装技巧</div>
      </router-link>
      <router-link to="/bubbling" class="nav">
        <div title="css实现冒泡效果">css实现冒泡效果</div>
      </router-link>
      <router-link to="/forceupdate" class="nav">
        <div title="强制更新数据的两种方法">
            Vue2数组、对象失去响应式的两种解决方法
        </div>
      </router-link>
      <router-link to="/oninput" class="nav">
        <div>oninput和@input的差异</div>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
.navList {
  display: flex;
}
.nav {
  padding: 10px 30px;
  border: 2px solid #aaa;
  font-size: 20px;
  font-weight: 600;
  color: #000;
  text-decoration: none;
}
</style>
