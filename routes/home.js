const express = require('express')
const router = express.Router()

const db = require('../models')
const Record = db.Record
const User = db.User

const { authenticated } = require('../config/auth')

router.get('/', authenticated, (req, res) => {
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
      return res.render('index', { records: records, totalAmount: totalAmount })
    })
})

module.exports = router