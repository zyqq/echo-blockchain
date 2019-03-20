1. truffle 相当于 create-react-app 或者 vue-cli
2. 一开始使用没问题，但是想进阶，还是需要自己配置一下webpack
3. 使用 js 测试合约，测试驱动开发

### solc
[solc](https://github.com/ethereum/solc-js) 编译 .sol 文件，生成一个 json（后面部署、测试等需要的数据）
  1. bytecode: 部署合约用的数据
  2. interface: 接口声明，测试使用

### 编译合约
`npm run compile`