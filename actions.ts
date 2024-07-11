// "use server"

// import { redis } from "@/lib/redis";



// export const generate = async() => {

// try {

//     const id = crypto.randomUUID();
//     await redis.set(`key-${id}`, id)

//     return {
//         id
//     }
    
// } catch (error) {

//     console.log(error)

//     throw new Error("Failed to generate random id")
    
// }


// // }


// import WebSocket, { WebSocketServer } from 'ws';

// const server = new WebSocket.Server({port: 8080})


// server.on("connection", socket=>  {{
//     socket.on("message" , message => {
//         console.log('received: %s', message);


//         server.client.forEach( client => {

//         })

//     })
// }})
