const jwt = require('jsonwebtoken')

const generateJWT = (uid, tokenVersion) => {

    const payload = { uid, tokenVersion }

    return jwt.sign( payload, process.env.SECRET_SEED, {expiresIn: '7d'})

}

module.exports = {
    generateJWT
}