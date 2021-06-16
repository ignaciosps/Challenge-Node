const { Router } = require('express')
const { check } = require('express-validator')
const { create, getAll, getById } = require('../../controllers/tvshow/tvshow.controller')
const { fieldValidator } = require('../../middlewares/fieldValidator')
const { jwtValidator } = require('../../middlewares/jwtValidator')


const router = Router()


router.post('/', [
    jwtValidator,
    check('country', 'Country can not be null').optional().trim().notEmpty(),
    check('director', 'Director must be an ID').trim().notEmpty().isMongoId(),
    check('image', 'Image can not be null').optional().trim().notEmpty(),
    check('name', 'Name is required').trim().notEmpty(),
    check('summary', 'Summary can not be null').optional().trim().notEmpty(),
    check('votes', 'Votes must be a number').optional().trim().notEmpty().isNumeric(),
    check('year', 'Year must be a number').optional().trim().notEmpty().isNumeric(),
    fieldValidator
], create)

router.get('/', getAll)

router.get('/:id', getById)


module.exports = router