import { createRouter, createWebHistory } from "vue-router";
import staticRouters from "@/router/staticRouters";

const router = createRouter({
  history: createWebHistory(),
  routes: [...staticRouters],
});

// TODO：全局路由校验
// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('palworld_token')
//   if (to.path === '/login' && token) {
//     next(from.path)
//   } else if (to.path !== '/login' && !token) {
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router;
