export default [
  {
    path: "",
    name: "home",
    component: () => import("@/views/HomePage.vue"),
    meta: {
      name: "首页",
      key: "home",
    },
    // beforeEnter: (to, from, next) => {
    //   const token = localStorage.getItem("token");
    //   // 校验token是否有效
    //   if (token) {
    //     next();
    //   } else {
    //     next(`/login?redirect=${to.path}`);
    //   }
    // },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginPage.vue"),
    // beforeEnter: (to, from, next) => {
    //   const token = localStorage.getItem("token");
    //   // 校验token是否有效
    //   if (token) {
    //     next(from.path);
    //   } else {
    //     next();
    //   }
    // },
  },
  // 错误页面
  {
    path: "/:path(.*)",
    name: "not-found",
    component: () => import("@/views/ErrorPage/NotFoundPage.vue"),
    meta: {
      mobile: true,
      pc: true,
    },
  },
  {
    path: "/unauthorized",
    name: "unauthorized-page",
    component: () => import("@/views/ErrorPage/AccessDeniedPage.vue"),
    meta: {
      mobile: true,
      pc: true,
    },
  },
];
