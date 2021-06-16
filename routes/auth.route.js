const { Router } = require('express')
const { check } = require('express-validator')
const { create, login, renewToken } = require('../controllers/auth.controller')
const { fieldValidator } = require('../middlewares/fieldValidator')
const { jwtValidator } = require('../middlewares/jwtValidator')

const router = Router()


router.post('/create', [
    check('email', 'Email is required').trim().notEmpty().isEmail(),
    check('name', 'Name is required').trim().notEmpty(),
    check('surname', 'Surname is required').trim().notEmpty(),
    check('password', 'Password is required').trim().notEmpty(),
    fieldValidator
], create)

router.post('/', [
    check('email', 'Email is required').trim().notEmpty().isEmail(),
    check('password', 'Password is required').trim().notEmpty(),
    fieldValidator
],login)

router.get('/', jwtValidator, renewToken)



module.exports = router
