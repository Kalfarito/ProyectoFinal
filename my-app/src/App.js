import logo from './logo.svg';
import './App.css';
import Home from "./components/home/home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Note from "./components/Note/Note"
import Main from './components/main/main';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="App">
        <div>
          <a href="/">Home</a>
        </div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="main" element={<Main />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="Note" element={<Note />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
