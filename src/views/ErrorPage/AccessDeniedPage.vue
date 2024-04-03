<script setup>
import router from "@/router";
const clickReturn = () => {
  router.replace("/");
};
</script>
<template>
  <div
    class="unauthorized-page w-screen h-screen flex items-center justify-center"
  >
    <div class="notice flex content-center justify-center flex-wrap">
      <div class="w-full text-center text-#ee9b2f text-8xl font-bold">401!</div>
      <div class="w-full text-center text-#999 pb-4">
        很抱歉，你的访问请求被禁止~
      </div>
      <n-button @click="clickReturn"> 返回首页 </n-button>
    </div>
  </div>
</template>
