const { Router } = require('express')
const { check } = require('express-validator')
const { create, getAll, getById } = require('../../controllers/tvshow/season.controller')
const { fieldValidator } = require('../../middlewares/fieldValidator')
const { jwtValidator } = require('../../middlewares/jwtValidator')


const router = Router()


router.post('/', [
    jwtValidator,
    check('image', 'Image can not be null').optional().trim().notEmpty(),
    check('name', 'Name is required').trim().notEmpty(),
    check('number', 'Number of season is required').trim().notEmpty().isNumeric(),
    check('summary', 'Summary can not be null').optional().trim().notEmpty(),
    check('tvshow', 'TvShow ID is required').trim().notEmpty().isMongoId(),
    check('votes', 'Votes must be a number').optional().trim().notEmpty().isNumeric(),
    check('year', 'Year must be a number').optional().trim().notEmpty().isNumeric(),
    fieldValidator
], create)

router.get('/', getAll)

router.get('/:id', getById)


module.exports = router