const { Schema, model } = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const TvshowSchema = Schema({
    country: String,
    director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: true
    },
    image: String,
    name: reqString,
    summary: String,
    votes: Number,
    year: Number
},{ timestamps: true })

module.exports = model('Tvshow', TvshowSchema)