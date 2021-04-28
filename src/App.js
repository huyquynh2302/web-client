import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './components/screens/Homepage/Homepage'
import React from 'react'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <Header />
        </header>
        <Route path="/">
          <Homepage />
        </Route>
        <Footer />
      </div>
    </BrowserRouter>
    
    
  );
}

export default App;
