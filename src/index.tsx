import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './components/css/bootstrap.module.css';
// import './components/css/fonts.min.css';
import './components/css/loader.css';
import './components/css/main.module.css';
import Register from './components/pages/Register'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Register />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
