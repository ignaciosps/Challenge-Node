const { request, response } = require('express')
const Episode = require('../../models/tvshow/episode.model')

const create = async ( req = request, res = response ) => {


    try {
        const episode = new Episode(req.body)

        await episode.save()

        res.status(200).json({
            ok: true,
            episode
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
        const episodes = await Episode.find({}).populate('actors director season tvshow', { 'name': 1, 'surname': 1, '_id': 0, 'number': 1 })
        
        res.status(200).json({
            ok: true,
            episodes
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
        const episode = await Episode.findById(id).populate('actors director season tvshow', { 'name': 1, 'surname': 1, '_id': 0, 'number': 1 })
        
        res.status(200).json({
            ok: true,
            episode
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