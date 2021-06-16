const { request, response } = require('express')
const Tvshow = require('../../models/tvshow/tvshow.model')

const create = async ( req = request, res = response ) => {


    try {
        
        const tvshow = new Tvshow (req.body)

        await tvshow.save()

        res.status(200).json({
            ok: true,
            tvshow
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

    try {
        const tvshows = await Tvshow.find({}).populate('director', { 'name': 1, 'surname': 1, '_id': 0 })
        
        res.status(200).json({
            ok: true,
            tvshows
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
        const tvshow = await Tvshow.findById(id).populate('director', { 'name': 1, 'surname': 1, '_id': 0 })
        
        res.status(200).json({
            ok: true,
            tvshow
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