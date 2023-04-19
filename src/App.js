import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/pages/home';

import '../src/styles/css/bootstrap.min.css'
import '../src/styles/css/main.css'


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
