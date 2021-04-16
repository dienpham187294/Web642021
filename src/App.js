import React, { useState, useEffect } from 'react';
import io from "socket.io-client";
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/LoginComponents/Login';
import Dangkytaikhoan from './components/LoginComponents/Dangkytaikhoan';
import Admin from './components/LoginComponents/admin';
import Giaotiep from "./components/gameComponents/Giaotiep"
import queryString from "query-string";
import { BrowserRouter as Router } from "react-router-dom";
// import CheckLoginAlready from "./helpers/CheckLoginAlreadyOrNot"
let socket = io("http://127.0.0.1:4444");
// // https://app-dienpham.herokuapp.com/
// let socket = io("https://app-dienpham.herokuapp.com/");
const App = () => {
  const [MainPage, SetMainPage] = useState("home");
  const [message, setMessage] = useState('Message first');
  useEffect(() => {
    let parsed = queryString.parse(window.location.search);
    if (typeof (parsed.m !== "undefined")) {
      SetMainPage(parsed.m)
    } else SetMainPage("home")
  }, [])

  return (
    <div className="container-fluid">
      <button style={{ display: "none" }} id="btnSaveMessage" onClick={() => setMessage(document.getElementById('inputCmd').value)}>Save</button>
      <Header />
      <Router>
        {MainPage === "trangchu" ? <Home />
          : MainPage === "admin" ? <Admin socket={socket} />
            : MainPage === "dangnhap" ? <Login socket={socket} />
              : MainPage === "dang-ky-tai-khoan" ? <Dangkytaikhoan socket={socket} />
                : MainPage === "giaotiep" ? <Giaotiep socket={socket} message={message} setMessage={setMessage} />
                  : <Home />}
      </Router>
      <Footer />

    </div>
  );
}

export default App;



// : MainPage === "doctruyen" ? <Reading socket={socket} />
// : MainPage === "tuvung" ? <Vocabulary socket={socket} />
//   : MainPage === "giaotrinh" ? <GameBoard socket={socket} />