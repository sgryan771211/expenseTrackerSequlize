const express = require('express')
const router = express.Router()

const db = require('../models')
const Record = db.Record
const User = db.User

const { authenticated } = require('../config/auth')

router.get('/month/:month', authenticated, (req, res) => {
  Record.findAll({
    where: {
      userId: req.user.id
    }
  })
    .then((records) => {
      const recordChoose = records.filter(record => {
        return req.params.month === record.date.substring(5, 7)
      })

      let totalAmount = 0
      for (record of recordChoose) {
        totalAmount += record.amount
      }
      return res.render('index', { records: recordChoose, totalAmount: totalAmount })
    })
})

router.get('/category/:category', authenticated, (req, res) => {
  Record.findAll({
    where: {
      category: req.params.category,
      userId: req.user.id
    }
  })
    .then((records) => {
      let totalAmount = 0
      for (record of records) {
        totalAmount += record.amount
      }
      return res.render('index', { records: records, totalAmount: totalAmount })
    })
})

module.exports = router