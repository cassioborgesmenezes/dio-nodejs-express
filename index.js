const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/userRoute')

const app = express()
const port = 3300

app.use(bodyParser.urlencoded({ extended: false }))

userRoute(app)

app.get('/', (req, res) => res.send('Hello World from Express!'))

app.listen(port, () => console.log('API running on port ' + port))
