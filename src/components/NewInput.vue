<template>
  <div>
    <!--input输入-->
    <el-input
      ref="elInput"
      v-bind="$attrs"
      v-model="innerVal"
      v-on="$listeners"
    >
      <template v-for="(_, slotName) in $slots" #[slotName]>
        <slot :name="slotName"></slot>
      </template>
    </el-input>
  </div>
</template>

<script>
export default {
  name: "NewInput",
  created() {
    console.log(this.$attrs);
    console.log(this.$listeners);
    console.log(this.$slots);
  },
  data() {
    return {
      innerVal: "",
    };
  },
  methods: {
    // focus() {
    //   this.$refs.elInput.focus();
    // },
  },
};
</script>

<style></style>
