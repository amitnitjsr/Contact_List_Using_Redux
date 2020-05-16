import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidenav from './sidenav/sidenav';
import ReactTable from './components/contacts/ReactTable';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Sidenav /> */}
          <Navbar />
          <Sidebar />
          <ReactTable />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
