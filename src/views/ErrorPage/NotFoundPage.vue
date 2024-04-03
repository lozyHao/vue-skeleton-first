<script setup>
import router from "@/router";
const clickReturn = () => {
  router.replace("/");
};
</script>
<template>
  <div class="not-found w-screen h-screen flex items-center justify-center">
    <div class="notice flex content-center justify-center flex-wrap">
      <div class="w-full text-center text-#cc2d48 text-8xl font-bold">404!</div>
      <div class="w-full text-center text-#999 pb-4">
        页面，我找不到你，我找不到你啊~
      </div>
      <n-button @click="clickReturn"> 返回首页 </n-button>
    </div>
  </div>
</template>
