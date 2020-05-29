/**
 * 示例模块
 */
export default {
  namespaced: true,
  state: {
    'list': {}
  },
  mutations: {
    /**
     * 更新订单列表信息
     * @param state
     * @param data
     */
    updateOrderList (state, data) {
      state.list = data
    }
  },
  actions: {},
  getters: {}
}
