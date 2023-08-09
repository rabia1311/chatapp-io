import React, { useEffect } from "react";
import { user } from "../Join/Join";
import socketIO from "socket.io-client";
import "../Chat/Chat.css";

const ENDPOINT = "http://localhost:4500/";

const Chat = () => {
  useEffect(() => {
    const socket = socketIO(ENDPOINT, { transports: ["websocket"] });
    socket.on("connect", () => {
      alert("connected");
    });

    socket.emit("joined", { user });

    socket.on("welcome", (data) => {
      console.log(data.user, data.message);
    });

    socket.on("userJoined", (data) => {
      console.log(data.user, data.message);
    });

    socket.on("leave", (data) => {
      console.log(data.user, data.message);
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, []);
  return (
    <div className="chatpage">
      <div className="chatContainer">
        <div className="header"> </div>
        <div className="chatbox"> </div>
        <div className="inputbox">
          <input type="text" id="chatinput" />
          <button className="sendbtn">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
