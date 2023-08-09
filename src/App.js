import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "../src/component/Join/Join";
import socketIO from "socket.io-client";
import Chat from "./component/Chat/Chat";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Join />} />
          <Route exact path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
