## 叁浪科技

> 西安叁浪信息科技有限公司是国内大型综合性软件与信息服务企业，具有极高的市场感召力和客户忠诚度，以领先的技术、丰富的经验、精湛的服务在中国 IT 行业享有极高的声誉。自成立以来，叁浪科技取得了业界瞩目的成就，并作为国内第一家专注于电子政务领域的 IT 服务商。在未来的发展中，将软件外包作为重点的业务发展方向。

## Build Setup

``` bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
npm install

# 开发时构建
npm run dev

# 打包构建
npm run build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm run dev:wx
npm run dev:swan
npm run dev:tt
npm run dev:my

# 指定平台的打包构建
npm run build:wx  // 微信
npm run build:swan // 百度
npm run build:tt // 字节跳动
npm run build:my  // 支付宝

# 生成 bundle 分析报告
npm run build --report
```

```doc
## 项目结构
-src
  --components  组件
  --config  配置
  --pages  页面
  --stores  vuex
  --utils  工具包
  --app.json  小程序配置JSON
  --App.vue  入口页面
  --main.js  入口js
-static
  --images  图片资源
  --tabs  底部tab图片资源
```
