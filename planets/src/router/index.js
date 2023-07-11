const { Router } = require("express")
const controllers = require("../controller")
const middlewares = require("../middlewares")

const router = Router()

router.get("/", controllers.getPlanets)
router.post("/", middlewares.valueValidation, controllers.createPlanet)

module.exports = router