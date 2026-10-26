const jsonserver = require('json-server')
const server = jsonserver.create()
const router = jsonserver.router('db.json')
const middleware = jsonserver.defaults()
server.use(middleware)
server.use(router)
server.listen(3000,()=>{
    console.log("Resume builder is running on the port 3000");
    
})