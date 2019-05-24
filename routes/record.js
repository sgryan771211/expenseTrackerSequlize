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
  res.render('new')
})

// 新增一筆  Record
router.post('/', authenticated, (req, res) => {
  let errors = []
  if (!req.body.name || !req.body.category || !req.body.date || !req.body.amount) {
    errors.push({ message: '新增失敗，所有欄位都是必填' })
  }
  if (errors.length > 0) {
    Record.findAll({
      where: {
        UserId: req.user.id
      }
    })
      .then((records) => {

        let totalAmount = 0
        for (record of records) {
          totalAmount += record.amount
        }
        return res.render('index', { errors, records: records, totalAmount: totalAmount })
      })
  } else {
    const record = new Record({
      name: req.body.name,
      category: req.body.category,
      date: req.body.date,
      amount: req.body.amount,
      UserId: req.user.id
    })
      .save()
      .then(() => {
        res.redirect('/')
      })
      .catch((error) => {
        return res.status(422).json(error)
      })
  }
})

// 修改 Record 頁面
router.get('/:id/edit', authenticated, (req, res) => {
  User.findByPk(req.user.id)
    .then((user) => {
      if (!user) {
        return res.error();
      }
      Record.findOne({
        where: {
          Id: req.params.id,
          UserId: req.user.id,
        }
      })
        .then((record) => {
          return res.render('edit', { record });
        })
    })
})

// 修改 Record
router.put('/:id', authenticated, (req, res) => {
  let errors = []
  if (!req.body.name || !req.body.category || !req.body.date || !req.body.amount) {
    errors.push({ message: '修改失敗，所有欄位都是必填' })
  }
  if (errors.length > 0) {
    Record.findAll({
      where: {
        UserId: req.user.id
      }
    })
      .then((records) => {

        let totalAmount = 0
        for (record of records) {
          totalAmount += record.amount
        }
        return res.render('index', { errors, records: records, totalAmount: totalAmount })
      })
  } else {
    Record.findOne({
      where: {
        Id: req.params.id,
        UserId: req.user.id,
      }
    })
      .then((record) => {
        record.name = req.body.name
        record.category = req.body.category
        record.date = req.body.date
        record.amount = req.body.amount

        record.save()
          .then((record) => {
            return res.redirect('/')
          })
          .catch(err => {
            return res.status(422).json(err)
          })
      })
  }
})

// 刪除 Record
router.delete('/:id/delete', authenticated, (req, res) => {
  User.findByPk(req.user.id)
    .then((user) => {
      if (!user) {
        return res.error()
      }
      Record.destroy({
        where: {
          UserId: req.user.id,
          Id: req.params.id
        }
      })
        .then(() => {
          return res.redirect('/')
        })
    })
    .catch((error) => {
      return res.status(422).json(error)
    })
})

module.exports = router