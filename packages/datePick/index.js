import DatePick from "./src/datePick";
// 为组件提供 install 安装方法，供按需引入
DatePick.install = function (Vue) {
  Vue.component(DatePick.name, DatePick);
};

// 默认导出组件
export default DatePick;
