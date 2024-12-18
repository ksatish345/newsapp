import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default class App extends Component {
  render() {
 
   
    return (
      <div>
         <Router>
          <Navbar />
          <Routes>            
            <Route exact path="/general" element={<News key="general" pagesize={25} category="general" />} />
            <Route exact path="/business" element={<News key="business" pagesize={25} category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pagesize={25} category="entertainment" />} />
            <Route exact path="/health" element={<News key="health" pagesize={25} category="health" />} />
            <Route exact path="/science" element={<News key="science" pagesize={25} category="science" />} />
            <Route exact path="/sports" element={<News key="sports" pagesize={25} category="sports" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
