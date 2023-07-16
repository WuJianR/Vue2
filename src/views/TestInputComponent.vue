<template>
  <div>
    <new-input
      ref="newInput"
      :clearable="clearable"
      :type="type"
      @clear="handleClear"
    >
      <template #prepend>
        <div>prepend</div>
      </template>
      <template #append>
        <div>append</div>
      </template>
    </new-input>
  </div>
</template>

<script>
import NewInput from "@/components/NewInput";
export default {
  name: "TestInputComponent",
  components: { NewInput },
  data() {
    return {
      clearable: true,
      type: "password",
    };
  },
  created() {},
  methods: {
    handleClear() {
      console.log("clear");
    },
    // focus() {
    //   this.$refs.newInput.focus();
    // },
  },
};
</script>

<style></style>
