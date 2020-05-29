import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import store from './stores/index'
import fly from './utils/flyio'
import App from './App'
// TODO: 解决flyio.js不支持finally
require('promise.prototype.finally').shim()

Vue.use(MpvueRouterPatch)

// 配置vuex
Vue.prototype.$store = store

// flyio.js。参考地址：https://www.npmjs.com/package/flyio
Vue.prototype.$fly = fly

// 全局变量
Vue.prototype.globalData = { }

// 阻止启动生产消息
Vue.config.productionTip = false

// mpvue性能优化的一个黑科技
Vue.config._mpTrace = true

App.mpType = 'app'

const app = new Vue(App)
app.$mount()
