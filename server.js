const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
var path = require('path');
var os = require('os');

let socketUrls = []

server.listen(3000)
console.log("Server is online")

function makeid(length) {
        var result           = '';
        var characters       = '0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
}
app.use(express.static(path.join(__dirname, "public")));


app.set('view engine', 'ejs') //? 


app.get('/', (req, res) => {
    res.redirect(`/game/${makeid(5)}`)
})

// room view

app.get('/game/:room', (req, res) => {
    res.render('room', {roomId: req.params.room})
})

// controller view 

function countInRoom(room) {
  return io.of("/").adapter.rooms.get(room)?.size || 0;
}

app.get('/controller/:room', (req, res) => {
    res.render('controller', {roomId: req.params.room})
})
io.on('connection', socket => {
    
    socketUrl = socket.request.headers.referer

    socket.on('join-room', (roomId) => {
            if (countInRoom(roomId) <2) {
                console.log(socketUrl)
                socket.join(roomId)
                socket.to(roomId).emit('user-connected', roomId)
                console.log(countInRoom(roomId))
                
            }
    })
       socket.on("serverOrientationData", (xAxis, yAxis) => {    
        io.emit("clientOrientationData", xAxis, yAxis);
    })

        socket.on("serverMotionData",  (xAxis, yAxis) => {
        io.emit("clientMotionData", xAxis, yAxis);    
    })
})

