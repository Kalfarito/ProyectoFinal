import logo from './logo.svg';
import './App.css';
import Home from "./components/home/home";
import Login from "./components/Login/Login";
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
            <Route path="/" element={<Login />} />
            
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
