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
	socket.on('send', (params) => {
        console.log(params)
		io.emit('get-data', JSON.stringify(params));
	})
});

server.listen(3000);