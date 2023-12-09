const express = require('express')
const http = require('http')
const app = express();
const server = http.createServer(app);

var io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"]
    },
    allowEIO3: true,
});

io.on("connection", (socket) => {
    console.log("Connected!");
	socket.on('send', (params) => {
		console.log(params)
	})
});

server.listen(3000);