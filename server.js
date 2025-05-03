const http = require('http');
const express = require("express")
const app = express()
const server = http.createServer(app)
const { Server } = require("socket.io")

const io = new Server(server)
app.use(express.static('/public')) // Serve static files from the 'public' directory

io.on("connection",(socket)=>{
 socket.on("user-message",(message)=>{
    io.emit("message",message)
 });

})

app.get("/", function(req,res){
    res.sendFile(__dirname + "/public/index.html") // Serve the index.html file from the 'public' directory
})

server.listen(3000, () => {
    console.log("Server is running on port 3000")
})