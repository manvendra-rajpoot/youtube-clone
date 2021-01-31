import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import SearchPage from './SearchPage';
import Sidebar from './Sidebar';
import Videos from './Videos';

function App() {
  return (
    <div className="app">
      <BrowserRouter >
        <Header />
        <Switch>

          <Route path='/search/:id'>
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>

          <Route path='/'>
            <div className="app__page">
              <Sidebar />
              <Videos />
            </div>
          </Route>
          
        </Switch>
      </BrowserRouter>      
    </div>
  );
}

export default App;
