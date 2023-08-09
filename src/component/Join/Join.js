import React, { useState } from "react";
import "../Join/join.css";
import talkup from "../../images/talkup.png";
import { Link } from "react-router-dom";
let user;
const Join = () => {
  const [name, setname] = useState("");
  console.log(name);

  const sendUser = () => {
    user = document.getElementById("joinInput").value;
    document.getElementById("joinInput").value = "";
  };
  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img src={talkup} alt="logo"></img>
        <h1> Chat App.io</h1>
        <input
          onChange={(e) => setname(e.target.value)}
          placeholder="Enter Your Name "
          type="text"
          id="joinInput"
        ></input>
        <Link
          onClick={(event) => (!name ? event.preventDefault() : null)}
          to="/chat"
        >
          {" "}
          <button onClick={sendUser} className="joinbtn">
            Log in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
export { user };
