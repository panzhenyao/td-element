import Standard from "@/views/Standard/index.vue";
import Installation from "@/views/installation.vue";
import LogDesc from "@/views/LogDesc/index.vue";

export default [
  {
    path: "/views/log-desc",
    name: "log-desc",
    component: LogDesc,
    meta: {
      title: "更新日志",
    },
  },
  {
    path: "/views/installation",
    name: "installation",
    component: Installation,
    meta: {
      title: "组件指南",
    },
  },
  {
    path: "/views/standard",
    name: "standard",
    component: Standard,
    meta: {
      title: "UI规范",
    },
  },
];
