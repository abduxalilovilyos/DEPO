import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import "./style.css"
import Navbar from './Navbar';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div className='site'>
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>


  </div>

);

