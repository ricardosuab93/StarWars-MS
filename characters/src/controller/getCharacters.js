const Character = require("../data")
const axios = require("axios")
const { response } = require("../utils")

module.exports = async (req, res) => {
    const characters = await Character.list()
    response(res, 200, characters.data)
}