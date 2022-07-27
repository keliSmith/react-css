## 从 0 搭建一个 webpack5+react+ts+less+antd+redux 项目

### 脚手架搭建

[webpack 官网介绍](https://webpack.docschina.org/loaders/postcss-loader/#getting-started)

#### 项目初始化

1. 新建个项目，并初始话

```bash
mkdir css-animation
cd css-annimation
npm init -y
```

2. 安装 webpack 的一些依赖包

```bash
tnpm i -D webpack webpack-cli webpack-dev-server webpack-merge
```

3. 新建个 src 文件夹，在 scr 文件夹下新建个 index 入口文件，测试简单编译

4. 安装 react、react-dom,编写 react 代码

- babel-loader: 需要通过一个"转译器"将项目中的 jsx 文件转化成 js 文件，babel-loader 就是这个转译器
- @babel/core: babel-loader 仅仅识别出了 jsx 文件，内部核心转译功能需要@babel/core，@babel/core 模块就是负责内部核心转译的
- @babel/preset-react: 将 jsx 转化为 React.createElement 对象
- @babel/preset-env: babel 转译过程中的一些预设，它负责将一些基础的 es6+语法，比如 const/let 等，转译为 es6
- core-js: 支持 esc 稳定功能，配置 preset-env 指定它版本， core-js@3 废弃了 babel-polyfill，实现了完全无污染的 API 转译
- @babel/plugin-transform-runtime: Promise/Generate 等高级内置模块不会被@babel/preset-env 转化，所以你懂的
- @babel/runtime： <font color=red>不是必须的</font>,@babel/plugin-transform-runtime 可以达到效果

```bash
npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-react core-js @babel/runtime @babel/plugin-transform-runtime

```

5. 动态引入 html

- html-webpack-plugin：将打包编译好的文件注入到 html 中，可以使用自定的模版页
- clean-webpack-plugin: 每次打包 📦 前执行自动清空 dist 文件夹中原来的打包文件

```bash
tnpm i -D html-webpack-plugin clean-webpack-plugin
```

6. 处理 less 样式

- less、less-loader: less 文件转换器，将 less 文件转换为 css 文件
- [css-loader](https://github.com/webpack-contrib/css-loader#mode): css 样式识别转换，解析 css 文件
- style-loader: 将解析后的 css 注入到 html 上, 如果需要进行样式分离可以将 MiniCssExtractPlugin 插件替代 style-loader
- postcss-loader、postcss、autoprefixer: 为 css 自动添加前缀

```bash
tnpm i -D style-loader css-loader postcss postcss-loader less less-loader
```
7. 开启css样式模块化
- [postcss-loaser与css-loader冲突问题](https://blog.csdn.net/weixin_43714543/article/details/121271030)
```js
// 开启配置,由于postcss-loader版本7做了文件调整，所以需哟啊卸载css-loader下发
{
  loader: 'css-loader',
  options: {
    moudules: true
  }
},
'postcss-loader',
```

8. 样式分离

- [MiniCssExtractPlugin](https://www.npmjs.com/package/mini-css-extract-plugin)

```bash
tnpm i -D MiniCssExtractPlugin
```

9. 启用开发环境本底调式服务,webpack.dev.js 配置

```js
devServer: { // 新增webpack-dev-server 的配置
    headers: { 'Access-Control-Allow-Origin': '*' },
    hot: true, // 热更新
    host: '127.0.0.1', // 地址
    port: '8081', // 端口
    open: true, // 是否自动打开
    setupExitSignals: true,
    compress: true,
}
```
10. webpack配置优化，提取公共配置文件
- webpack.config.ts: 公共配置
- webpack.dev.ts 开发环境配置
- webpack.prod.ts 生产环境配置

11. 引入 typescript

- typescript
- ts-node: 支持 node 环境直接编译 ts 文件
- ts-loader、awesome-typescript-loader: 转译 ts 文件
- @babel/preset-typescript: 支持 babel 对 ts 文件进行编译
- @types/react @types/react-dom: react 相应的声明文件模块
- [tsconfig 配置介绍](https://www.tslang.cn/docs/handbook/compiler-options.html)

```bash
tnpm i -D typescript ts-node @babel/preset-typescript
tnpm i -D @types/react  @types/react-dom
```

基础脚手架基本搭建完成，引入之前写好的 css demo 文件,关联 git

12. 处理image等图片字体资源
- file-loader: 加载图片和字体资源
- url-loader:
- raw-loader
- ⚠️webpack5已经内置了以上处理静态资源文件
- 处理图片引入问题，新建静态资源申明文件

```bash
tnpm i -D file-loader
```
13. 路径别名处理
```bahs
resolve: {
  alias: {
    '@assets': path.resolve(__dirname, '../../src/assets'),
  },
  extensions: ['.tsx', '.js', '.ts', '.less', '.css']
}
```

14. [ 代码检查和规范](https://segmentfault.com/a/1190000022497035)
- .editorconfig: 用于在基本代码库中维持一致的编码风格和设置
- .eslintrc.js: 配置eslint规则
- .eslintignore: 忽略一些不需要eslint检测端文件or文件夹
- @typescript-eslint/parser: eslint的解析器,该解析器利用TypeScript ESTree允许ESLint整理TypeScript源代码
- @typescript-eslint/eslint-plugin: 是eslint识别TypeScript规则的插件
- .prettierrc.js: 配置一些代码风格格式化
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-800-2021-02-21): 用来关闭eslint和 prettier冲突的规则
- eslint-plugin-prettier: 用于开启prettier的规则, eslint-config-prettier 8.0版本后已经集成了
- husky+lint-staged: 构建代码工作流
- git-commit-msg-linter: 一个轻量级、独立、0 配置和快乐的 git commit 消息 linter插件

```bash
tnpm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
tnpm i -D prettier eslint-config-prettier eslint-plugin-prettier
tnpm i -D husky lint-staged
tnpm i -D git-commit-msg-linter
```
15. 使用react-router-dom路由模块
- react-router-dom是在react-router基础上提供了Link和NavLink
-[react-router-dom引导说明](https://github.com/remix-run/react-router/blob/main/docs/getting-started/installation.md)

```bash
tnpm i -S react-router-dom   
```
