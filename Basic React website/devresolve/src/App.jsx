import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SolverView from "./pages/SolverView";
import Home from "./pages/Home";
import AskQuestion from "./pages/AskQuestion";
import Sidebar from "./components/Sidebar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp"
function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <h1>Welcome to the DevResolve</h1>
          <Routes>
            <Route path="/solver" element={<SolverView />} />
            <Route path="/" element={<Home />} />
            <Route path="/ask" element={<AskQuestion />} />
            <Route path="/Signin"element={<SignIn />}/>
            <Route path="/Signup"element={<SignUp />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
