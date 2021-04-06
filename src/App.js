import React, { useState } from 'react';
import io from "socket.io-client";
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/LoginComponents/Login';
import Admin from './components/LoginComponents/admin';
import Reading from './components/gameComponents/Reading';
import GameBoard from "./components/gameComponents/GameBoard"
import Giaotiep from "./components/gameComponents/Giaotiep"
import Vocabulary from './components/gameComponents/Vocabulary';
import { BrowserRouter as Router, Route } from "react-router-dom";
// let socket = io("http://127.0.0.1:4444");
// // https://app-dienpham.herokuapp.com/
let socket = io("https://app-dienpham.herokuapp.com/");
const App = () => {
  const [UpdatePage, SetUpdatePage] = useState(1);
  return (
    <div className="container-fluid">
      <Router>
        <Header SetUpdatePage={SetUpdatePage} />
        <Route path="/" exact component={Home} />
        <Route path="/admin">
          <Admin socket={socket} />
        </Route>
        <Route path="/dangnhap">
          <Login socket={socket} />
        </Route>
        <Route path="/doctruyen">
          <Reading socket={socket} />
        </Route>
        <Route path="/tuvung">
          <Vocabulary socket={socket} />
        </Route>
        <Route path="/giaotrinh">
          <GameBoard socket={socket} UpdatePage={UpdatePage} />
        </Route>
        <Route path="/giaotiep">
          <Giaotiep socket={socket} UpdatePage={UpdatePage} />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;



