<template>
  <div>
    <ul>
      <li v-for="(item, index) in todos" :key="index">
        <!-- {{ item.text }} -->
        <!-- 作用域插槽可以让子组件把数据回传给父组件 -->
        <slot :todo="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  props: ["todos"],
};
</script>

<style></style>
