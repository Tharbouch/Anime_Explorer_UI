import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/nav';
import Details from './pages/Details';
import Home from './pages/Home';
import NotFoud from './pages/NotFound';


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='anime/:animeId' element={<Details />} />
        <Route path='*' element={<NotFoud />} />
      </Routes>
    </>
  );
}

export default App
