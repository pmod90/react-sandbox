import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import homePage from './home/homePage'
import AboutPage from './about/AboutPage';
import Header from './common/header';

function App() {
  return (
    <div className="container-fluid">
      {/* will always render */}
      <Header />
       {/* will render depending on the path in url */}
      <Route exact path="/" component={homePage} />
      <Route exact path="/about" component={AboutPage} />

    </div>
  );
}

export default App;
