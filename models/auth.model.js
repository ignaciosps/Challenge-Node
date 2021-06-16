const { Schema, model } = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const UserSchema = Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: reqString,
    password: reqString,
    surname: reqString,
    tokenVersion: {
        type: Number,
        default: 0
    }
},{ timestamps: true })

module.exports = model('User', UserSchema)