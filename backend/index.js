const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
app.use(express.json())
app.use(cors())

/**
 * Example GET endpoint
 */
app.get('/api/helloWorld', (req, res) => {
    res.json({ text: 'hello world!!!' })
})

/**
 * Function for establishing the connection to the database. The parameters come from a .env file
 */
const run = async () => {
    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD
    const ip = process.env.DB_IP
    const port = process.env.DB_PORT
    const uri = `mongodb://${user}:${password}+${ip}:${port}`
    await mongoose.connect(uri)
    mongoose.connection.once('open', () => {
        console.log('MongoDB successfully connected to ' + uri)
    })
}
if (require.main === module) {
    const port = process.env.NODE_PORT ?? 8080
    // TODO: connect to the database
    // run()
    app.listen(port, () => console.log('Listening on port ' + port))
}
module.exports.app = app