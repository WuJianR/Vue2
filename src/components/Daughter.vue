<template>
  <div style="background-color: #cffccc">
    <span>女儿有存款：{{ money }}</span>
    <br />
  </div>
</template>

<script>
export default {
  name: "Daughter",
  data() {
    return {
      money: 15000,
    };
  },
};
</script>

<style></style>
