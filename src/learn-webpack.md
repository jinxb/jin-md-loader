# 学习webpack
## 一. webpack原理
* 认识webpack
* webpack的执行流程
* webpack的启动源码
* webpack的源码阅读


## 二. webpack基本配置
* 入口的配置
* 出口的配置
* 学习Loader

```js
const path = require('path');

module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
		path: path.resolve(__dirname,"./build"),
        filename: "jinxb_util.js",
        // 适配各种环境
        libraryTarget: "umd",
        library: "jinxbUtil",
        globalObject: "this"
    }
}
```