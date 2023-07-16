<template>
  <div>
    <el-table border style="width: 100%" :data="table_data">
      <el-table-column
        v-if="table_config.checkbox"
        type="selection"
        width="35"
      ></el-table-column>
      <template v-for="item in table_config.thead">
        <!-- 开关渲染 -->
        <!-- <el-table-column
          v-if="item.type === 'function'"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
        >
          <template v-slot="scope">
            <el-switch
              v-model="scope.row.type"
              active-value="1"
              inactive-value="0"
              active-color="#13ce66"
              inactive-color="#ff4949"
            ></el-switch>
          </template>
        </el-table-column> -->
        <!-- 输入框渲染 -->
        <!-- <el-table-column
          v-else-if="item.type === 'input'"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
        >
          <template v-slot="scope">
            <el-input v-model="scope.row.inglat"></el-input>
          </template>
        </el-table-column> -->
        <!-- 回调 -->
        <el-table-column
          v-if="item.type === 'function'"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
        >
          <template v-slot="scope">
            <!-- <span>{{ scope.row.type}}</span> -->
            <span>{{
              item.callback && item.callback(scope.row, item.prop)
            }}</span>
          </template>
        </el-table-column>
        <!-- 纯文本渲染 -->
        <el-table-column
          v-else
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
        ></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "TableData",
  props: {
    config: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      table_config: {
        thead: [],
        checkbox: true,
      },
      table_data: [
        {
          id: "1",
          parkingName: "南山01停车场",
          type: "0",
          address: "广东省深圳市南山区",
          carsNumber: "20",
          status: "1",
        },
        {
          id: "2",
          parkingName: "南山02停车场",
          type: "1",
          address: "广东省深圳市南山区",
          carsNumber: "20",
          status: "1",
        },
        {
          id: "3",
          parkingName: "南山03停车场",
          type: "1",
          address: "广东省深圳市南山区",
          carsNumber: "60",
          status: "1",
        },
        {
          id: "4",
          parkingName: "南山04停车场",
          type: "0",
          address: "广东省深圳市南山区",
          carsNumber: "80",
          status: "1",
        },
      ],
    };
  },
  methods: {
    initConfig() {
      for (let key in this.config) {
        if (Object.keys(this.table_config).includes(key)) {
          this.table_config[key] = this.config[key];
        }
      }
      // console.log(this.table_config);
    },
  },
  watch: {
    config: {
      handler(newValue) {
        this.initConfig();
      },
      immediate: true,
    },
  },
};
</script>

<style></style>
