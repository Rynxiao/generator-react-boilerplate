# generator-react

> Yeoman generator for [ReactJS](http://facebook.github.io/react/) - lets you quickly set up a project including karma test runner and [Webpack](http://webpack.github.io/) module system.

react脚手架(react+redux+react-router+eslint+karma+react devTools)

基于YeoMan的react脚手架生成，改造

具体地址：[generator-react-webpack](https://github.com/react-webpack-generators/generator-react-webpack)

另外推荐地址：[react-starter-kit](https://github.com/kriasoft/react-starter-kit)

## 简单文件夹结构

```javascript
├── README.md                       # 项目README文件
├── conf                            # 配置文件夹
│   └── webpack                     # webpack配置(下面包括开发、生产、测试环境的配置)
├── karma.conf.js                   # karma测试配置文件
├── node_modules                    # 包文件夹
├── package.json                    # 包描述文件
├── src                             # 源文件夹
│   ├── actions                     # redux actions文件夹
│   ├── client.js                   # 客户端启动文件
│   ├── components                  # 项目组件(下面分为业务组件和公共组件)
│   ├── config                      # 环境配置文件夹(指明当前环境)
│   ├── containers                  # 入口容器
│   ├── exports.js                  # 常用组件的exports文件,可以忽略
│   ├── images                      # 图片
│   ├── index-release.html          # 生产环境模板文件
│   ├── index.html                  # 开发环境入口html
│   ├── reducers                    # redux reducers文件夹
│   ├── routes                      # 路由配置
│   ├── sources                     # 资源文件(可忽略)
│   ├── static                      # 静态文件(可以存放第三方库)
│   ├── stores                      # redux stores文件夹
│   ├── styles                      # 全局样式文件夹
│   └── views                       # 视图文件夹
├── test                            # 测试文件夹
│   ├── actions                     # 测试actions
│   ├── components                  # 测试组件
│   ├── config                      # 测试配置(检测环境)
│   ├── loadtests.js                # 加载测试文件
│   ├── reducers                    # 测试reducers
│   ├── sources                     # 测试资源(flux datasource)
│   └── stores                      # 测试stores
└── webpack.config.js               # webpack配置入口文件
```

## 整体应用技术

- react
- redux
- react-router(4.0.0^,可以换成2x或者3x)
- eslint
- karma + mocha
- immutable(可选)

## 在原始脚手架上新增

- 路由(react-router)
- 调试工具(react devTools)
- 增加文件分类(images/fonts/media)
- 生产配置增加文件hash,公共库拆分
- 添加异步middleware，统一处理全局状态
- 改造Actions/Reducers

## [新增内容](./change.md)

## 使用

```javascript
// 启动应用
npm start // or 
npm run serve

// 生成静态生产文件
npm run dist

// 运行测试案例
npm test
```

## 所有命令

```javascript
// 启动应用
npm start // or 
npm run serve

// 用服务器运行生产版本
npm run serve:dist

// 生成静态生产文件
npm run dist

// 运行测试案例
npm test

// 自动运行单元测试(文件改动时)
npm run test:watch

// eslint 运行源码文件(获取测试结果)
npm run lint

// 清除dist文件夹
npm run clean

// 拷贝静态文件
npm run copy
```


