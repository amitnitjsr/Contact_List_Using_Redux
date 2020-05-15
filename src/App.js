import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidenav from './sidenav/sidenav';
// import Contacts from './components/contacts/Contacts';
import ReactTable from './components/contacts/ReactTable';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Sidenav />
          <ReactTable />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
