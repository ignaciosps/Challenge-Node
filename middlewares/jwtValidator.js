const jwt = require('jsonwebtoken')

const jwtValidator = ( req, res, next ) => {
    
    const { token } = req.headers
    
    if( !token ) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no encontrado'
        })
    }
    
    
    
    try {

        const { uid, tokenVersion } = jwt.verify( token, process.env.SECRET_SEED )

        req.uid = uid
        req.tokenVersion = tokenVersion

    } catch (error) {
        console.log(error)
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        })
    }

    next()
}

module.exports = {
    jwtValidator
}
