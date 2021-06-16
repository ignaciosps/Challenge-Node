const { Router } = require('express')
const { check } = require('express-validator')
const { create, getAll, getById } = require('../../controllers/tvshow/episode.controller')
const { fieldValidator } = require('../../middlewares/fieldValidator')
const { jwtValidator } = require('../../middlewares/jwtValidator')


const router = Router()


router.post('/', [
    jwtValidator,
    check('actors', 'Actors must be an ID or an array of IDs').optional().notEmpty().isMongoId(),
    check('director', 'Director must be an ID').optional().trim().notEmpty().isMongoId(),
    check('duration', 'Duration is required').trim().notEmpty().isNumeric(),
    check('image', 'Image can not be null').optional().trim().notEmpty(),
    check('name', 'Name is required').trim().notEmpty(),
    check('number', 'Number of episode is required').trim().notEmpty().isNumeric(),
    check('season', 'SeasonID is required').trim().notEmpty().isMongoId(),
    check('summary', 'Summary can not be null').optional().trim().notEmpty(),
    check('tvshow', 'TvshowID is required').trim().notEmpty().isMongoId(),
    check('votes', 'Votes must be a number').optional().trim().notEmpty().isNumeric(),
    check('year', 'Year must be a number').optional().trim().notEmpty().isNumeric(),
    fieldValidator
], create)

router.get('/', getAll)

router.get('/:id', getById)


module.exports = router