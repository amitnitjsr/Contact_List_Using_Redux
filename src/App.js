import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidenav from './sidenav/sidenav';
import Contacts from './components/contacts/Contacts';
// import AddEditContacts from './components/contacts/AddEditContacts'
// import Table from './components/contacts/Table'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Sidenav />
          <Contacts />
          {/* <Table /> */}
          {/* <Route exact path='/profile' component={Profile} />
          <Route path='/notification' component={Notification} />
          <Route path='/tast_1' component={Mytask} />
          <Route /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
