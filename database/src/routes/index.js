const { Router } = require('express')
const models = require("../database")
const { validateModel } = require("../middlewares")
 
const router = Router()

// router.get("/characters", async (req, res) => {
//     const characters = await Character.list()
//     res.status(200).json(characters)
// })

// router.get("/films", async (req, res) => {
//     const films = await Film.list()
//     res.status(200).json(films)
// })

// router.get("/planets", async (req, res) => {
//     const planets = await Planet.list()
//     res.status(200).json(planets)
// })

router.get("/:model", validateModel, async (req, res) => {
    const { model } = req.params
    const response = await models[model].list()
    res.status(200).json(response)
})

router.get("/:model/:id", validateModel, async (req, res) => {
    const { model, id } = req.params
    const response = await models[model].get(id)
    res.status(200).json(response)
})

router.post("/:model", validateModel, async (req, res) => {
    const { model, id } = req.params
    const response = await models[model].insert(id)
    res.status(200).json(response)
})

module.exports = router