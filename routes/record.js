const express = require('express')
const router = express.Router()

// 載入 model
const db = require('../models')
const Record = db.Record
const User = db.User

// 載入 auth middleware
const { authenticated } = require('../config/auth')

// 設定 /record 路由
// 列出全部 Record
router.get('/', authenticated, (req, res) => {
  res.send('列出全部 Record')
})

// 新增一筆 Record 頁面
router.get('/new', authenticated, (req, res) => {
  res.send('新增 Record 頁面')
})

// 顯示一筆 Record 的詳細內容
router.get('/:id', authenticated, (req, res) => {
  res.send('顯示一筆 Record')
})

// 新增一筆  Record
router.post('/', authenticated, (req, res) => {
  res.send('新增一筆  Record')
})

// 修改 Record 頁面
router.get('/:id/edit', authenticated, (req, res) => {
  res.send('修改 Record 頁面')
})

// 修改 Record
router.put('/:id', authenticated, (req, res) => {
  res.send('修改 Record')
})

// 刪除 Record
router.delete('/:id/delete', authenticated, (req, res) => {
  res.send('刪除 Record')
})

module.exports = router