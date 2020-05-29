/**
 * 我们组装模块并导出 store 的地方
 * https://vuex.vuejs.org/zh/guide/structure.html
 */

import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import order from './modules/order'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    order
  }
})
