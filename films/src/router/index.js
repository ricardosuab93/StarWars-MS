const { Router } = require("express");
const controllers = require("../controller")
const middlewares = require("../middlewares")

const router = Router();

router.get("/", controllers.getFilms)
router.post("/", middlewares.valueValidation, controllers.createFilm)

module.exports = router
