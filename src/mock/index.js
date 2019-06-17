// 将所有的mock文件引入
const slide = require('../Data/slide')
const singList = require('../Data/singsList')

// 在这里可以做一些通用的配置
const Mock = require('mockjs')
Mock.mock('/recommed/slide', 'get', slide)
Mock.mock('/recommed/singList', 'get', singList)
