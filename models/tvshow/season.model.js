const { Schema, model } = require('mongoose')

const reqNumber = {
    type: Number,
    required: true
}

const SeasonSchema = Schema({
    image: String,
    name: String,
    number: reqNumber,
    summary: String,
    tvshow: {
        type: Schema.Types.ObjectId,
        ref: 'Tvshow',
        required: true
    },
    votes: Number,
    year: Number
},{ timestamps: true })

module.exports = model('Season', SeasonSchema)