// 将所有的mock文件引入
const slide = require('../Data/slide')

// 在这里可以做一些通用的配置
const Mock = require('mockjs')
Mock.mock('/recommed/slide', 'get', slide)
