const express = require('express');
const cors = require('cors')
const { dbConnection } = require('./database/config');
require('dotenv').config()


const app = express()
const port = process.env.PORT

dbConnection()

app.use( cors() )
app.use( express.json() )

app.use('/api/actor', require('./routes/actor.route'))
app.use('/api/auth', require('./routes/auth.route'))
app.use('/api/director', require('./routes/director.route'))
app.use('/api/movie', require('./routes/movie.route'))

app.use('/api/tvshow', require('./routes/tvshow/tvshow.route'))
app.use('/api/season', require('./routes/tvshow/season.route'))
app.use('/api/episode', require('./routes/tvshow/episode.route'))


app.listen( port, () => {
    console.log('Server running on port: ', port)
})