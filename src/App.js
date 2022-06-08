import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/SingUp/SignUp';
import Profile from './pages/Profile/Profile'
import Footer from './Components/Footer/Footer';

function App() {
  return (

    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
        {/* <Footer/> */}
        </Router>
    </div>

  );
}

export default App;
