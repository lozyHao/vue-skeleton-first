<script setup>
import { User, Password } from "@vicons/carbon";
import { ref } from "vue";
import CheckForm from "@/utils/checkForm.js";
import UserService from "@/services/user";
import { useMessage } from "naive-ui";
import router from "@/router";
import { useRoute } from "vue-router";

const message = useMessage();
const route = useRoute();

const formValue = ref({
  username: null,
  password: "",
});
const loading = ref(false);
const handleLogin = async () => {
  // 校验
  const check = new CheckForm().isEmptyOrSpaces([
    formValue.value.username,
    formValue.value.password,
  ]);
  if (check) {
    loading.value = true;
    const { data, error } = await new UserService().login(formValue.value);
    if (error?.value) {
      message.error(data.value.message);
      return;
    }
    localStorage.setItem("palworld_token", data.value.token);
    message.success("登录成功");
    // 路由跳转
    const redirect = route.query.redirect;
    if (redirect) {
      router.replace(redirect);
    } else {
      router.replace({ name: "home" });
    }
  } else {
    message.warning("账号密码不能为空");
  }
};
</script>
<template>
  <div
    class="login h-full w-full bg-gradient-to-rb from-cyan-500 to-blue-500 flex justify-center items-center bg-center bg-cover"
  >
    <div class="px-6 py-8 bg-#ffffff w-120 rounded-xl shadow-lg shadow-white">
      <div class="w-full my-6 font-bold text-center text-2xl">登陆</div>
      <n-input
        v-model:value="formValue.username"
        type="text
      "
        size="large"
        placeholder="账号"
      >
        <template #prefix>
          <n-icon :component="User" />
        </template>
      </n-input>
      <div class="h-4"></div>
      <n-input
        v-model:value="formValue.password"
        type="password"
        size="large"
        show-password-on="click"
        placeholder="密码"
      >
        <template #prefix>
          <n-icon :component="Password" />
        </template>
      </n-input>
      <div class="h-4"></div>
      <n-button
        type="info"
        size="large"
        class="w-full mt-2"
        @click="handleLogin"
        >登录</n-button
      >
    </div>
  </div>
</template>
