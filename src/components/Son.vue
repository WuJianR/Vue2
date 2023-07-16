<template>
  <div style="background-color: #cccccc">
    <span>儿子有存款：{{ money }}</span>
    <br />
    <button @click="giveFather(50)">给爸爸钱：50</button>
  </div>
</template>

<script>
export default {
  name: "Son",
  data() {
    return {
      money: 10000,
    };
  },
  mounted() {
    console.log("父组件", this.$parent);
  },
  methods: {
    giveFather(num) {
      this.money -= num;
      // $parent获取父组件
      this.$parent.money += num;
    },
  },
};
</script>

<style></style>
