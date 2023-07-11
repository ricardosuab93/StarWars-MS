const server = require("./src/server.js")

const PORT = 7002

server.listen(PORT, () => {
    console.log(`Films service listening on port ${PORT}`)
})