# 项目统计

工作经验 10 年+,累计开发项目数量 100+

<script setup>
import { VueDataUi } from "vue-data-ui";
import "vue-data-ui/style.css";

const config = {
  userOptions: {
    show: false,
  },
  style: {
    chart: {
      backgroundColor: "#FFFFFF",
      color: "#1A1A1A",
      legend: { backgroundColor: "#FFFFFF", color: "#1A1A1A" },
      tooltip: {
        backgroundColor: "#FFFFFF",
        color: "#1A1A1A",
        showPercentage: true,
        borderColor: "#CCCCCC",
        backgroundOpacity: 30,
      },
      title: {
        text: "项目分布",
        textAlign: "left",
      },
      layout: {
        dataLabels: {
          hideUnderValue: 1,
        },
        labels: {
          percentage: { color: "#1A1A1A" },
          name: { color: "#6A6A6A" },
          value: { show: false },
          hollow: {
            average: { color: "#6A6A6A", value: { color: "#1A1A1A" } },
            total: {
              color: "#6A6A6A",
              offsetY: -6,
              value: { color: "#1A1A1A", offsetY: -6 },
            },
          },
        },
      },
    },
  },
  type: "polar",
};

const dataset = [
  { name: "电商", values: [30] },
  { name: "制造业", values: [30] },
  { name: "OA", values: [15] },
  { name: "SASS", values: [15] },
  { name: "低代码", values: [5] },
  { name: "物联网", values: [5] },
  { name: "WEB3", values: [10] },
  { name: "教育", values: [15] },
];

</script>

<VueDataUi
    style="margin-top: 30px"
    component="VueUiDonut"
    :dataset="dataset"
    :config="config"
/>
