import React from 'react';
import './App.css';
import Houses from './config/Houses';
import { BrowserRouter, Route, Routes } from 'react-router';
import Core from './core/Core';
import Cores from './core/Cores';
import HousesCreate from './config/HousesCreate';
import HousesUpdate from './config/HousesUpdate';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Core />} />
          <Route path='/cores' element={<Cores />} />
          <Route path='/config/houses' element={<Houses />} />
          <Route path='/config/houses/create' element={<HousesCreate />} />
          <Route path='/config/houses/:id/update' element={<HousesUpdate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
