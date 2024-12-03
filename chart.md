# 项目统计

工作经验 10 年+,累计开发项目数量 100+

<script setup>
import { VueDataUi } from "vue-data-ui";
import "vue-data-ui/style.css";
import { ref,onMounted } from "vue";

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

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  },1000)
})

</script>

<div style="display: flex; justify-content: center; align-items: center;height:480px" v-if="loading">
  <div class="loader">
      <div class="orbe" style="--index: 0"></div>
      <div class="orbe" style="--index: 1"></div>
      <div class="orbe" style="--index: 2"></div>
      <div class="orbe" style="--index: 3"></div>
      <div class="orbe" style="--index: 4"></div>
  </div>
</div>

<VueDataUi
    style="margin-top: 30px"
    component="VueUiDonut"
    :dataset="dataset"
    :config="config"
    v-else
/>

<style>
.loader {
  --size-loader: 50px;
  --size-orbe: 10px;
  width: var(--size-loader);
  height: var(--size-loader);
  position: relative;
  transform: rotate(45deg);
}

.orbe {
  position: absolute;
  width: 100%;
  height: 100%;
  --delay: calc(var(--index) * 0.1s);
  animation: orbit7456 ease-in-out 1.5s var(--delay) infinite;
  opacity: calc(1 - calc(0.2 * var(--index)));
}

.orbe::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: var(--size-orbe);
  height: var(--size-orbe);
  background-color: #5f8fc9;
  box-shadow: 0px 0px 20px 2px #5f8fc9;
  border-radius: 50%;
}

@keyframes orbit7456 {
  0% {
  }

  80% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
