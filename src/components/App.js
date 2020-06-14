import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import homePage from './home/homePage'
import AboutPage from './about/AboutPage';
import Header from './common/header';
import CoursesPage from './courses/CoursesPage'
import TodoList from './todolist/TodoList'

function App() {
  return (
    <div className="container-fluid">
      {/* will always render */}
      <Header />
       {/* will render depending on the path in url */}
      <Route exact path="/" component={homePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/courses" component={CoursesPage} />
      <Route exact path="/todolist" component={TodoList} />
    </div>
  );
}

export default App;
