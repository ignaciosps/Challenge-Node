const { request, response } = require('express')
const Season = require('../../models/tvshow/season.model')

const create = async ( req = request, res = response ) => {


    try {
        
        const season = new Season (req.body)

        await season.save()

        res.status(200).json({
            ok: true,
            season
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
        
        const seasons = await Season.find({}).populate('tvshow', 'name')
        
        res.status(200).json({
            ok: true,
            seasons
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
        const season = await Season.findById(id).populate('tvshow', 'name')
        
        res.status(200).json({
            ok: true,
            season
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