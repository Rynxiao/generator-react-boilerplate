# generator-react

> Yeoman generator for [ReactJS](http://facebook.github.io/react/) - lets you quickly set up a project including karma test runner and [Webpack](http://webpack.github.io/) module system.

react脚手架(react+redux+react-router+eslint+karma+react devTools)

基于YeoMan的react脚手架生成，改造

具体地址：[generator-react-webpack](https://github.com/react-webpack-generators/generator-react-webpack)

另外推荐地址：[react-starter-kit](https://github.com/kriasoft/react-starter-kit)

## 整体应用技术

- react
- redux
- react-router
- eslint
- karma + mocha

## 在原始脚手架上新增

- 路由(react-router)
- 调试工具(react devTools)
- 增加文件分类(images/fonts/media)
- 支持code splitting

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


