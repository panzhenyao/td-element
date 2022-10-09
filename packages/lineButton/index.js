import LineButton from "./src/lineButton.vue";

// 为组件提供 install 安装方法，供按需引入
LineButton.install = function (Vue) {
  Vue.component(LineButton.name, LineButton);
};

// 默认导出组件
export default LineButton;
