const { request, response } = require('express')
const Director = require('../models/director.model')



const create = async ( req = request, res = response ) => {
    
    try {
        
        const director = new Director(req.body)
        await director.save()


        res.status(200).json({
            ok: true,
            director
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
        
        const directors = await Director.find({})


        res.status(200).json({
            ok: true,
            directors
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
        const director = await Director.findById(id)


        res.status(200).json({
            ok: true,
            director
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