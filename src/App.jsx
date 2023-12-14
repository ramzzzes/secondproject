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
 

const App=()=>{

    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [email,setEmail] = useState('')
    

    return (
      <UserContext.Provider value={{
        name,
        setName,
        age,
        setAge,
        email,
        setEmail
      }}>
          <Link to={'/'}>Home</Link>
          <Link to={'/city'}>City</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/city" element={<NewCity />} />
            <Route path="/city/:city/:id" element={<City />} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
      </UserContext.Provider>
    )
}

export default App