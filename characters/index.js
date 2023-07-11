const server = require("./src/server.js")

const PORT = 7001

server.listen(PORT, () => {
    console.log(`Characters service listening on port ${PORT}`)
})