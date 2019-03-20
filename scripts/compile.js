// 文件模块
const fs = require('fs')
const path = require('path')
const solc = require('solc')

// 合约路径
const contractPath = path.resolve(__dirname, '../contracts/CourseList.sol')
// 获取合约文件内容
const contractSource = fs.readFileSync(contractPath, 'utf-8')

//预先定义好编译源json对象
let jsonContractSource = JSON.stringify({
  language: 'Solidity',
  sources: {
    'CourseList': {  // 指明编译的文件名
      content: contractSource, // solidity 源代码
    },
  },
  settings: { // 自定义编译输出的格式。以下选择输出全部结果。
      outputSelection: {
    '*': {
      '*': [ '*' ]
    }
  }
  },
})
// 编译
let output = JSON.parse(solc.compile(jsonContractSource));  
// console.log(output)
if(Array.isArray(output.errors) && output.errors.length > 0) {
  // 出错了
  console.log(output.errors[0].formattedMessage)
} else {
  Object.keys(output.contracts).forEach(name => {
    const filePath = path.resolve(__dirname, `../src/compiled/${name}.sol`)
    fs.writeFileSync(filePath, JSON.stringify(output.contracts[name]))
    console.log(`${filePath} bingo`)
  })
}