const { Schema, model } = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const reqNumber = {
    type: Number,
    required: true
}

const MovieSchema = Schema({
    actors: [{
        type: Schema.Types.ObjectId,
        ref: 'Actor',
    }],
    country: String,
    director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: true
    },
    duration: reqNumber,
    genre: reqString,
    image: String,
    name: reqString,
    summary: String,
    votes: Number,
    year: Number
},{ timestamps: true })

module.exports = model('Movie', MovieSchema)