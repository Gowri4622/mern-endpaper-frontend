import React from 'react'
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HomeComponent from './Component/HomeComponent';
import FooterComponent from './Component/FooterComponent';
import NavbarComponent from './Component/NavbarComponent';
import AddNewComponent from './Component/AddNewComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={
            <React.Fragment>
            <NavbarComponent/>
            <HomeComponent/>
            <FooterComponent/>
            </React.Fragment>
          }></Route>
          <Route exact path='/admin/new' element={<AddNewComponent/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
