import React, { Component } from "react";
import { Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

       <div className="container mt-3">
          <Routes>
            {/* <Route  path={["/", "/tutorials"]} element={TutorialsList} /> */}
            <Route exact path="/" element={<TutorialsList/>} />
            <Route exact path="/tutorials" element={<TutorialsList/>} />
            <Route exact path="/add" element={<AddTutorial/>} />
            
            {/* <Route path="/tutorials/:id" component={Tutorial} />; 
            Mostra a nav bar mas nem chega à classe
            */}
            <Route path="/tutorials/:id" element={<Tutorial/>} />
          </Routes>
        </div>

      </div>
    );
  }
}

export default App;