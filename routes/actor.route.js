const { Router } = require('express')
const { check } = require('express-validator')
const { create, getAll, getById } = require('../controllers/actor.controller')
const { fieldValidator } = require('../middlewares/fieldValidator')
const { jwtValidator } = require('../middlewares/jwtValidator')

const router = Router()


router.post('/',[
    jwtValidator,
    check('awards', 'Awards can not be null').optional().trim().notEmpty(),
    check('birthdate', 'Birthdate must be Date').optional().trim().notEmpty(),
    check('country', 'Country can not be null').optional().trim().notEmpty(),
    check('image', 'Image can not be null').optional().trim().notEmpty(),
    check('name', 'Name is required').trim().notEmpty(),
    check('summary', 'Summary can not be null').optional().trim().notEmpty(),
    check('surname', 'Surname is required').trim().notEmpty(),
    fieldValidator
], create)

router.get('/', getAll)

router.get('/:id', [
    check('id', 'id must be a MongoId').isMongoId(),
    fieldValidator
],getById)



module.exports = router