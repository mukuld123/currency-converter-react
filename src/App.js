// import { useEffect, useState } from 'react';
import './App.css';
import CurrencyConverter from './components/CurrencyConverter'
import Navbar from './components/Navbar';



function App() {


  return (
    <div className="container">
        <Navbar/>
        <CurrencyConverter />
         
    </div>
  );
}

export default App;
