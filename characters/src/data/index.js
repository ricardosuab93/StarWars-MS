const characters = require('./characters.json')
const axios = require('axios')

module.exports = {
    list: async () => {
        return await axios.get("http://database:7004/Character");
    },
    create: async() => {
        throw Error("Hubo un error en el index del data")
    }
}
