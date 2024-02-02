import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import "./style.css"
import "./responsive.css"
import App from './App';
 







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div className='site'>
    <BrowserRouter>
      <App />
    </BrowserRouter>


  </div>

);

