const { request, response } = require('express')
const bcrypt = require('bcryptjs')
const { generateJWT } = require('../helpers/jwt')
const User = require('../models/auth.model')

const create = async (req = request, res = response) => {

    const { email, password } = req.body

    try {
        const checkEmail = await User.findOne({email})
        
        if( checkEmail ) {
            res.status(400).json({
                ok: false,
                msg: 'A user with this email already exists',
            })
        }

        const user = new User(req.body)

        const salt = bcrypt.genSaltSync(10)

        user.password = bcrypt.hashSync( password, salt )

        await user.save()

        const token = generateJWT(user._id, 0)

        res.status(200).json({
            ok: true,
            user,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'An error has occurred, please contact the administrator.'
        })
    }
}

const login = async (req = request, res = response) => {
    const { email, password } = req.body

    try {
        const checkEmail = await User.findOne({email})
        
        if( !checkEmail ) {
            res.status(400).json({
                ok: false,
                msg: 'Incorrect email address or password',
            })
        }

        const checkPassword = bcrypt.compareSync(password, checkEmail.password)

        if( !checkPassword ) {
            res.status(400).json({
                ok: false,
                msg: 'Incorrect email address or password',
            })
        }

        const user = checkEmail

        const token = generateJWT(user._id, 0)

        res.status(200).json({
            ok: true,
            user,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'An error has occurred, please contact the administrator.'
        })
    }
}

const renewToken = async ( req = request, res = response) => {

    try {
        
        const { uid } = req
        const user = await User.findById(uid)
        const token = generateJWT(user._id, user.tokenVersion)
    
        res.status(200).json({
            ok: true,
            user,
            token
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'An error has occurred, please contact the administrator.'
        })
    }

}

module.exports = {
    create,
    login,
    renewToken
}