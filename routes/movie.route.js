const { Router } = require('express')
const { check } = require('express-validator')
const { create, getAll, getById } = require('../controllers/movie.controller')
const { fieldValidator } = require('../middlewares/fieldValidator')
const { jwtValidator } = require('../middlewares/jwtValidator')

const router = Router()


router.post('/', [
    jwtValidator,
    check('actors', 'Actors must be an ID or an array of IDs').optional().notEmpty().isMongoId(),
    check('country', 'Country can not be null').optional().trim().notEmpty(),
    check('director', 'Director must be an ID').trim().notEmpty().isMongoId(),
    check('duration', 'Duration is required').trim().notEmpty().isNumeric(),
    check('genre', 'Genre is required').trim().notEmpty(),
    check('image', 'Image can not be null').optional().trim().notEmpty(),
    check('name', 'Name is required').trim().notEmpty(),
    check('summary', 'Summary can not be null').optional().trim().notEmpty(),
    check('votes', 'Votes must be a number').optional().trim().notEmpty().isNumeric(),
    check('year', 'Year must be a number').optional().trim().notEmpty().isNumeric(),
    fieldValidator
], create)

router.get('/', getAll)

router.get('/:id', [
    check('id', 'id must be a MongoId').isMongoId(),
    fieldValidator
],getById)











module.exports = router