const http = require("http")

//http req response tcp
//router fs
const server = http.createServer((req,res)=>{
    res.write("hello server")
    res.end()
})


server.listen(3001,()=>{
    console.log("server is ready on port 3001")
})
