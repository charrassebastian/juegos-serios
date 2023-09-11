const express = require('express')
const app = express()
const cors = require('cors')
const Game = require('./models/Game.schema')
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
 * Endpoint for adding a game to the database
 */
app.post('/api/game', async (req, res) => {
    try {
        const game = new Game(req.body.game)
        console.log('saving the following game')
        console.log(req.body.game)
        const savedGame = await game.save()
        if (savedGame) {
            console.log('saved')
            res.json({ status: 'ok' })
        } else {
            const error = 'the game could not be saved'
            console.log('error: ' + error)
            res.json({ status: 'error', error})
        }
    } catch (error) {
        console.log('error')
        console.log(error)
        res.json({ status: 'error', error })
    }
})

/**
 * Example endpoint for retrieving the saved games
 */
app.get('/api/games', async (req, res) => {
    try {
        const games = await Game.find()
        if (games) {
            console.log('these are the saved games')
            console.log(games)
            console.log('saved')
            res.json({ status: 'ok', games })
        } else {
            const error = 'the games could not be retrieved'
            console.log('error: ' + error)
            res.json({ status: 'error', error})
        }
    } catch (error) {
        console.log('error')
        console.log(error)
        res.json({ status: 'error', error })
    }
})

/**
 * Function for establishing the connection to the database. The parameters come from a .env file
 */
const run = async () => {
    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD
    const ip = process.env.DB_IP
    const port = process.env.DB_PORT
    const uri = `mongodb://${user}:${password}@${ip}:${port}`
    await mongoose.connect(uri)
    mongoose.connection.once('open', () => {
        console.log('MongoDB successfully connected to ' + uri)
    })
}

if (require.main === module) {
    const port = process.env.NODE_PORT ?? 8080
    // now it must connect to the database
    run()
    app.listen(port, () => console.log('Listening on port ' + port))
}
module.exports.app = app