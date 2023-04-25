import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/pages/home';
import About from './Components/pages/about';
import Contact from './Components/pages/contact';
import Navrouting from './Components/pages/Navrouting/navrouting';

import '../src/styles/css/bootstrap.min.css';
import '../src/styles/css/main.css';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          {/* nav routing */}
          <Navrouting/>
          {/* page routing */}
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
