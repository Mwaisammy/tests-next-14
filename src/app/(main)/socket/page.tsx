"use client";
import React, { useState, useEffect } from "react";

///handle websocket connection
import io from "socket.io-client";

//initialize websocket connection to server

const socket = io("http://localhost:3001");

function SoketLearn() {
  const [message, setMessage] = useState("");

  ///stores an array of messages from the server
  const [receivedMessages, setReceivedMessages] = useState<string[]>([]);

  useEffect(() => {
    //listen for 'message' events from server and adds the recieved messages to the list of received messages

    socket.on("message", (message) => {
      //adds the recieved messages to the list of received messages
      setReceivedMessages((prevMessages) => [...prevMessages, message]);
    });

    // cleanup function, on component mount remove the event listners
    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    if (message) {
      //socket.emit() => send message from client to server
      socket.emit("message", message);
      setMessage("");
    }
  };

  return (
    <div>
      <ul>
        {receivedMessages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default SoketLearn;

// function Socket() {
//   const [message, setMessage] = useState<boolean>(false);
//   const [receivedMessages, setReceivedMessages] = useState<string[]>([]);

//   const socket = io("http://localhost:3001");

//   useEffect(()=> {

//     socket.on("message", (message) => {
//       setReceivedMessages((prevMessages) => [...prevMessages, message])
//     })

//     return(() => {
//       socket.off("message")
//     })
//   },[socket])

//   const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {

//     e.preventDefault()
//     if(message) {

//       socket.emit("message", message)
//       //clear the input field"
//       setMessage('')
//     }
//   }

//   return <div>

//   <form onSubmit={e =>sendMessage}>

//     <input type="text"
//     placeholder="Send a message"
//     onChange={(e) => setMessage(e.target.value)}
//     />
//     <ul>
//       {receivedMessages.map((msg, index) => (
//         <li key={index}>{msg}</li>
//       ))}
//     </ul>
//     <button type="submit">Send</button>
//   </form>

//   </div>;
// }
