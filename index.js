const express = require('express')
const app = express()
const port = 3300

app.get('/', (req, res) => res.send('Hello World from Express!'))

app.listen(port, () => console.log('API running on port ' + port))
