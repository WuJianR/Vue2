<template>
  <div>
    <!-- 饿了么按钮的二次封装 -->
    <el-button v-bind="$attrs" v-on="$listeners"></el-button>
  </div>
</template>

<script>
export default {
  name: "HintButton",
  mounted() {
    // $attrs和$listeners属于组件的一个属性，
    console.log(this.$attrs);
    console.log(this.$listeners);
    console.log(this);
  },
};
</script>

<style></style>
