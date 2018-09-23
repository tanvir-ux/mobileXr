const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

port = 3000


app.listen(port,() => {
console.log("app is running on port" +  port)
}
