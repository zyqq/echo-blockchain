const path = require('path')
const assert = require('assert')
// 连接以太坊
const Web3 = require('web3')
// 本地虚拟的以太坊环境
const ganache = require('ganache-cli')
// 创建web3实例链接私有链
const web3 = new Web3(ganache.provider())
// 引入合约
const CourseList = require(path.resolve(__dirname, '../src/compiled/CourseList.json'))
const Course = require(path.resolve(__dirname, '../src/compiled/Course.json'))
// 全局变量，所有测试都要用到
let accounts
// 实例
let courseList
let course
describe('测试课程的智能合约', () => {
  before(async () => {
    // 测试前的数据初始化
    accounts = await web3.eth.getAccounts()
    // 1. 虚拟部署一个合约
    console.log(accounts)
    console.log('账户余额：' + await web3.eth.getBalance(accounts[9]))

    courseList = await new web3.eth.Contract(CourseList.abi)
            .deploy({data: CourseList.evm.bytecode.object})
            .send({
              // 最后一个是部署者
              from: accounts[9],
              gas: '5000000'
            })
            console.log(courseList)
  })
  // it('测试添加课程',async () => {
  //   assert.equal(1+1, 2)
  // })
  it('测试1+1是不是等于2', () => {
    assert.equal(1+1, 2)
  })
})