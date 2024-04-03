<script setup>
import { zhCN, dateZhCN } from "naive-ui";
</script>
<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" class="h-screen">
    <n-dialog-provider>
      <n-notification-provider>
        <n-message-provider>
          <router-view />
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>
