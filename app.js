const http = require ('http')

const server = http.createServer((req, res )=>{
res.write('Welcome to France')
res.end()

})
server.listen(3000)

