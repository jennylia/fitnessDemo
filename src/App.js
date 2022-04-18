import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";


import Home from "./pages/Home";
import Workout1 from "./pages/Workout1";
import Workout2 from "./pages/Workout2";
import Workout3 from "./pages/Workout3";
import Workout4 from "./pages/Workout4";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <content>
          <Link to="/Workout1">Workout1</Link>
          <Link to="/Workout2">Workout1</Link>
          <Link to="/Workout3">Workout1</Link>
          <Link to="/Workout4">Workout1</Link>

        </content>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Workout1" element={<Workout1/>}/>
          <Route exact path="/Workout2" element={<Workout2/>}/>
          <Route exact path="/Workout3" element={<Workout3/>}/>
          <Route exact path="/Workout4" element={<Workout4/>}/>
          <Route exact path="/WeeklySummary" element={<Home/>}/>

        </Routes>
      </div>
    </Router>
  );
}

