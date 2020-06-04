import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import homePage from './home/homePage'
import AboutPage from './about/AboutPage';

function App() {
  return (
    <div className="container-fluid">
      <Route exact path="/" component={homePage} />
      <Route exact path="/about" component={AboutPage} />

    </div>
  );
}

export default App;
