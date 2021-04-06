const express = require("express")
const app = express()

const http = require("http").createServer(app)
const io = require("socket.io")(http, {
	cors: {
		origin: '*'
	}
});

io.on("connection", socket => {
	console.log("connected")
	socket.on("msg", ({name, msg}) => {
		io.emit("msg", {name, msg})
	})
})

http.listen(3000, () => {
	console.log("running")
})