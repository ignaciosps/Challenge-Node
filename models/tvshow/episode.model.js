const { Schema, model } = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const reqNumber = {
    type: Number,
    required: true
}

const EpisodeSchema = Schema({
    actors: [{
        type: Schema.Types.ObjectId,
        ref: 'Actor',
    }],
    director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
    },
    duration: reqNumber,
    image: String,
    name: reqString,
    number: reqNumber,
    season: {
        type: Schema.Types.ObjectId,
        ref: 'Season',
        required: true
    },
    summary: String,
    votes: Number,
    tvshow: {
        type: Schema.Types.ObjectId,
        ref: 'Tvshow',
        required: true
    },
    year: Number
},{ timestamps: true })

module.exports = model('Episode', EpisodeSchema)