import { Server } from "socket.io";


const io = new Server();


io.on("connection", socket => {
    console.log("A user connected")


    //handle disconnection


    socket.on('disconnect', () => {
        console.log("User is disconnected")
    })
})

const broadMessage = (message) => {
    io.emit("Message", message)

}