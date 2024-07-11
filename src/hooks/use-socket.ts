import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

export const useSocket = (url: string) : [Socket | null, (message: string) => void]=> {

    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {

        const socketIO = io(url)

        setSocket(socketIO)

        //cleanup function
        return () => {
            socketIO.disconnect()
        }



    }, [url])


    const sendMessage = (message : string) => {

        if(socket) {
            socket.emit("message", message);

        }

    }

    return [socket, sendMessage]

}