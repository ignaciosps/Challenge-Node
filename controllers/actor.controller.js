const { request, response } = require('express')
const Actor = require('../models/actor.model')



const create = async ( req = request, res = response ) => {
    
    try {
        
        const actor = new Actor(req.body)
        await actor.save()


        res.status(200).json({
            ok: true,
            actor
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
        
        const actors = await Actor.find({})


        res.status(200).json({
            ok: true,
            actors
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
        const actor = await Actor.findById(id)


        res.status(200).json({
            ok: true,
            actor
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