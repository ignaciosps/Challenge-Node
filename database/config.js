const mongoose = require('mongoose')

const dbConnection = async () => {
    try {
        await mongoose.connect( process.env.DB_CNN , {useNewUrlParser: true, useUnifiedTopology: true} );
        console.log('DB Online')
    } catch (error) {
        console.log('Error in DB: ', error)
        throw new Error('An error has ocurred!')
    }
}

module.exports = {
    dbConnection
}