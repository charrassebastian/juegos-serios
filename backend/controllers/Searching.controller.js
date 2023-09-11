const Game = require('../models/Game.schema')

/**
 * Endpoint for retrieving the saved games
 */
module.exports.getAllGames = async (req, res) => {
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
}