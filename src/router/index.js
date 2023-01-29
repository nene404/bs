import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

// 使用插件声明
Vue.use(VueRouter);

// 向外暴露
export default new VueRouter({
  mode: "history",
  routes, // 注册所有的路由
});
