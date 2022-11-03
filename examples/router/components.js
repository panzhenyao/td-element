import Button from "../components/Button";
import IconDemo from "../components/Icon.vue";
import Anchor from "../components/Anchor.vue";
import Link from "../components/Link.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import DatePick from "../components/DatePick.vue";
export default [
  {
    path: "/component/icon",
    name: "iconDemo",
    component: IconDemo,
    meta: {
      title: "Icon 图标",
    },
  },
  // ---------- Basic 相关组件 -----------
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
  {
    path: "/component/datePick",
    name: "datePick",
    component: DatePick,
    meta: {
      title: "DatePick 日期组件",
    },
  },
  // ---------- Drg-front 相关组件 -----------
  {
    path: "/component/link",
    name: "link",
    component: Link,
    meta: {
      group: "Drg-front",
      title: "Link 链接",
    },
  },
  {
    path: "/component/breadcrumb",
    name: "breadcrumb",
    component: Breadcrumb,
    meta: {
      title: "Breadcrumb 面包屑导航",
    },
  },
];
