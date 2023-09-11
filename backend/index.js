const express = require('express')
const app = express()
const cors = require('cors')
const Game = require('./models/Game.schema')
const mongoose = require('mongoose')
require('dotenv').config()
app.use(express.json())
app.use(cors())

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
            res.json({ status: 'error', error })
        }
    } catch (error) {
        console.log('error')
        console.log(error)
        res.json({ status: 'error', error })
    }
})

/**
 * Endpoint for editing a game given its id
 */
app.put('/api/game', async (req, res) => {
    try {
        const game = await Game.findOneAndUpdate({ _id: req.query.id }, req.body.game)
        if (game) {
            console.log('updated the following game')
            console.log(game)
            res.json({ status: 'ok' })
        } else {
            const error = "game with the id " + req.query.id + " not found"
            console.log(error)
            res.json({ status: 'error', error })
        }
    } catch (error) {
        console.log('error')
        console.log(error)
        res.json({ status: 'error', error })
    }
})

/**
 * Endpoint for retrieving the saved games
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
            res.json({ status: 'error', error })
        }
    } catch (error) {
        console.log('error')
        console.log(error)
        res.json({ status: 'error', error })
    }
})

/**
 * Endpoint for retrieving a game by its ID
 */
app.get('/api/game', async (req, res) => {
    try {
        const filter = { _id: req.query.id }
        console.log('finding a game with the following filter')
        console.log(filter)
        const game = await Game.findOne(filter)
        if (game) {
            console.log('these is the found game')
            console.log(game)
            res.json({ status: 'ok', game })
        } else {
            const error = 'the game could not be found'
            console.log('error: ' + error)
            res.json({ status: 'error', error })
        }
    } catch (error) {
        console.log('error')
        console.log(error)
        res.json({ status: 'error', error })
    }
})

/**
 * Endpoint for deleting a game given its id
 */
app.delete('/api/game', async (req, res) => {
    try {
        const game = await Game.findOneAndDelete({ _id: req.query.id })
        if (game) {
            console.log('deleted the following game')
            console.log(game)
            res.json({ status: 'ok' })
        } else {
            const error = "game with the id " + req.query.id + " not found"
            console.log(error)
            res.json({ status: 'error', error })
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
    const dbName = process.env.DB_NAME
    const uri = `mongodb://${ip}:${port}/${dbName}`
    await mongoose.connect(uri, {
        authSource: "admin",
        user,
        pass: password,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
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