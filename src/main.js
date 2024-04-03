import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "virtual:uno.css";

import "@/assets/styles/common.less";
import "@/assets/styles/layout.less";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
