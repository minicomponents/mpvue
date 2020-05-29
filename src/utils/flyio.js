// 参考：https://wendux.github.io/dist/#/
// import fly from 'flyio'
import Fly from 'flyio/dist/npm/wx'
import Cfg from '../config/config'

const fly = new Fly()

// 请求配置
fly.config = {
  method: 'GET', // 请求方法， GET 、POST ...
  headers: {}, // 请求头
  baseURL: Cfg.url, // 请求基地址
  parseJson: true, // 是否自动将Content-Type为“application/json”的响应数据转化为JSON对象，默认为true
  timeout: Cfg.timeout // 超时时间
}

/**
 * 添加请求拦截器。
 * 请求拦截实现签名算法。具体算法看接口文档
 */
fly.interceptors.request.use((request) => {
  // 给所有请求添加自定义header
  request.headers['X-Tag'] = 'flyio'
  // 打印出请求体
  console.log(request.body)
  // 终止请求
  // var err=new Error("xxx")
  // err.request=request
  // return Promise.reject(new Error(""))

  // 可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request
})

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  (response) => {
    // 只将请求结果的data字段返回
    return response.data
  },
  (err) => {
    // 发生网络错误后会走到这里
    return Promise.reject(err)
  }
)

export default fly
