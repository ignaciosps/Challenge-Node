const { Schema, model } = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const DirectorSchema = Schema({
    awards: [String],
    birthdate: Date,
    country: String,
    image: String,
    name: reqString,
    summary: String,
    surname: reqString,
},{ timestamps: true })

module.exports = model('Director', DirectorSchema)