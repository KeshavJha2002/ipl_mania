const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const helmet = require('helmet')
const pool = require('./models/db')
const seasonRouter = require('./routes/seasonRouter')
const teamRouter = require('./routes/teamRouter')
const apiRouter = require('./routes/apiRouter')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
dotenv.config()
const port = process.env.PORT


const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(helmet())
app.use((req, res, next) => {
    console.log(`HTTP Method - ${req.method} URL - ${req.url}`)
    next()
})

app.use("/season", seasonRouter)
app.use("/team", teamRouter)
app.use("/api", apiRouter)

app.listen(port, () => {
    console.log(`Server listening at ${port}...`)
})