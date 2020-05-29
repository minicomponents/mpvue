let env = 'pro' // 环境切换开关,dev, pro, test

let config = { // 公共配置
  env: env,

  url: '',

  // 请求超时时间,10s
  timeout: 10000,

  err: '网络不给力~'
}

if (env === 'dev') { // 开发环境
  config.url = 'https://dev.xxxxx.com'
} else if (env === 'pro') { // 正式环境
  config.url = 'https://www.xxxxx.com'
} else if (env === 'test') { // 测试环境
  config.url = 'https://test.xxxxx.com'
}
export default config
