const { request, response } = require('express')
const Movie = require('../models/movie.model')


const create = async ( req = request, res = response ) => {


    try {
        
        const movie = new Movie(req.body)

        await movie.save()

        res.status(200).json({
            ok: true,
            movie
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'An error has occurred, please contact the administrator.'
        })
    }

}


const getAll = async ( req = request, res = response ) => {

    const limit = parseInt(req.query.limit || 10)
    const skip = parseInt(req.query.skip || 0)
    
    const sortBy = req.query.sort || 'name'
    let sortOrder = req.query.order
    if( (sortOrder && sortOrder.toLocaleLowerCase() == "desc") || sortOrder == "-1" ) {
        sortOrder = -1
    } else {
        sortOrder = 1
    }
    
    const { name, genre, year } = req.query
    const filter = {}
    if( name ){
        filter.name = { $regex: name, $options: 'i' }
    }
    if ( genre ) {
        filter.genre = { $eq: genre }
    }
    if ( year ) {
        filter.year = { $eq: parseInt(year) }
    }


    const sort = { [sortBy]: sortOrder }

    try {
        const movies = await Movie.find(filter)
                                .sort(sort)
                                .populate('actors director', {'name': 1, 'surname': 1, '_id': 0})
                                .limit(limit)
                                .skip(skip)

        res.status(200).json({
            ok: true,
            movies,
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'An error has occurred, please contact the administrator.'
        })
    }
    
}


const getById = async ( req = request, res = response ) => {
    try {
        const { id } = req.params
        const movie = await Movie.findById(id).populate('actors director', {'name': 1, 'surname': 1, '_id': 0})

        res.status(200).json({
            ok: true,
            movie
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
    getAll,
    getById
}