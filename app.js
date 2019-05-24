const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const db = require('./models')
const Record = db.Record
const User = db.User

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// 設定路由
// 首頁
app.get('/', (req, res) => {
  res.send('hello')
})
app.use('/users', require('./routes/user'))

app.listen(port, () => {
  console.log(`app is running at port ${port}`)
})