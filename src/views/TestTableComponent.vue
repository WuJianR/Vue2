<template>
  <div>
    <TableData :config="table_config"></TableData>
  </div>
</template>

<script>
import TableData from "@/components/TableData.vue";
export default {
  name: "ParentComponent",
  components: { TableData },
  data() {
    return {
      // 表格配置
      table_config: {
        thead: [
          { label: "停车场名称", prop: "parkingName" },
          {
            label: "类型",
            prop: "type",
            type: "function",
            callback: (row, prop) => {
              const data = this.parking_type.filter(
                (item) => item.value == row[prop]
              );
              if (data && data.length > 0) {
                return data[0].label;
              }
            },
          },
          { label: "区域", prop: "address" },
          { label: "可停放车辆", prop: "carsNumber" },
          { label: "禁启用", prop: "disabled" },
          { label: "查看位置", prop: "lnglat", type: "input" },
          { label: "操作" },
        ],
        checkbox: false,
      },
      parking_type: [
        { value: "1", label: "室内" },
        { value: "0", label: "户外" },
      ],
    };
  },
};
</script>
