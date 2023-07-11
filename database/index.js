const server = require('./src/server')
const { Character, Film, Planet } = require('./src/database')
const PORT = process.env.PORT

// Character.find()
//   .populate('homeworld', ['_id', 'name'])
//   .populate('films', ['_id', 'titles'])
//   .then((res) => console.log(res))

// Character.getCharacters().then((res) => console.log(res))
// Character.getCharacterById(1).then((res) => console.log(res))

// Planet.insert({
//   _id: 62,
//   name: "Tierra"
// }).then((res) => console.log(res))

server.listen(PORT, () => {
  console.log(`DATABASE LISTENING ON PORT ${PORT}`)
})
