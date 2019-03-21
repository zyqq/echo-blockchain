1. truffle 相当于 create-react-app 或者 vue-cli
2. 一开始使用没问题，但是想进阶，还是需要自己配置一下webpack
3. 使用 js 测试合约，测试驱动开发

### solc
[solc](https://github.com/ethereum/solc-js) 编译 .sol 文件，生成一个 json（后面部署、测试等需要的数据）
  1. bytecode: 部署合约用的数据
  2. interface: 接口声明，测试使用

### 编译合约
`npm run compile:w`
1. 每次compile清空文件，重新生成: rimraf 模块可以用来清空文件，npm script命令为`rimraf PATH`
2. 报错信息打印: 查看打印信息打印错误
3. 最好能监听，自动compile：使用 onchange 模块, npm script命令为`onchange 'contracts/*.sol' -- npm run compile`

### 课程列表
1. 每一个课程，是一个单独的合约
2. 使用 CourseList 来控制课程的合约

### 测试
`npm run test:w` 启动测试代码`test/course.spec.js`
使用`mocha`，断言使用`node`自己的`assert`，本地部署环境`ganache-cli`,测试的时候开虚拟环境

### 部署
ropsten 和公网一样的逻辑，但币不用花钱按