import Button from "../components/Button";
import IconDemo from "../components/Icon.vue";
import Anchor from "../components/Anchor.vue";

export default [
  {
    path: "/component/icon",
    name: "iconDemo",
    component: IconDemo,
    meta: {
      title: "Icon 图标",
    },
  },
  {
    path: "/component/button",
    name: "button",
    component: Button,
    meta: {
      title: "Button 按钮",
      group: "Basic",
    },
  },
  {
    path: "/component/anchor",
    name: "anchor",
    component: Anchor,
    meta: {
      title: "Anchor 锚点",
    },
  },
];
