import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About'
import City from './City';
import NotFound from './NotFound';
import NewCity from './NewCity';
import { useDispatch, useSelector } from 'react-redux';
import {UserContext} from './context/UserContext'
import User from './User';
import Header from './Header';
 

const App=()=>{

    const [user,setUser] = useState('')

    return (
      <UserContext.Provider value={{
        user,
        setUser
      }}>
          <Header/>
           
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/home" element={<Home />} />
          </Routes>
      </UserContext.Provider>
    )
}

export default App