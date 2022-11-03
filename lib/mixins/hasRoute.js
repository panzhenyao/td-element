export default {
  methods: {
    /**
     * @description 判断路由是否存在
     * @param {*} name
     * @param {*} routeList
     * @returns
     */
    hasRoute: function (name, routeList) {
      let list = routeList;
      if (!this.$store || !this.$store.getters || !this.$store.getters["routes/finalRoutes"]) {
        return false;
      }
      try {
        if (!Array.isArray(routeList)) {
          list = this.$store.getters["routes/finalRoutes"] || [];
        }
      } catch (e) {
        list = [];
      }
      let result = null;
      const recursive = arr => {
        arr.forEach(item => {
          if (item && item.name === name) {
            result = item;
          }
          if (item.children) {
            recursive(item.children);
          }
        });
      };
      recursive(list);
      if (!result) {
        console.warn(`[WARNING]: hasRoute: ${name} 路由可能未配置, 请检查路由！`);
        return false;
      } else {
        return result && result.name === name;
      }
    }
  }
};