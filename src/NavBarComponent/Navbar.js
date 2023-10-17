import React, { useState } from 'react'
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom"
import Home from '../Component/Home'
import Student from '../Component/Student'
import ContactUs from '../Component/ContactUs'
import Store from '../StoreComponent/Store'
import AddStudent from '../Component/AddStudent'
import EditStudent from '../Component/EditStudent'
function Navbar() {
  const[stuData,setStuData]=useState([
    {
        Name:"Niyaz Alam",
        Age:"22",
        Course:"MERN",
        Batch:"february",
        Change:"Edit"
    },
    {
        Name:"Doe",
        Age:"25",
        Course:"MERN",
        Batch:"November",
        Change:"Edit"
    },
    {
        Name:"Biden",
        Age:"26",
        Course:"MERN",
        Batch:"September",
        Change:"Edit"
    },
    {
        Name:"Barar",
        Age:"23",
        Course:"MERN",
        Batch:"September",
        Change:"Edit"
    },
    {
        Name:"Christ",
        Age:"24",
        Course:"MERN",
        Batch:"October",
        Change:"Edit"
    },
    {
        Name:"Elent",
        Age:"24",
        Course:"MERN",
        Batch:"November",
        Change:"Edit"
    },
    {
        Name:"Harshita Sharma",
        Age:"25",
        Course:"MERN",
        Batch:"October",
        Change:"Edit"
    }
])
console.log(stuData);
  return (
    <>
      <BrowserRouter>
      <div className='navbar'>
      <NavLink to="/" className="removeLine" style={({isActive})=>{return isActive?{color:"pink"}:{color:"white"}}} >Home</NavLink>
      <NavLink to="/student" className="removeLine" style={({isActive})=>{return isActive?{color:"pink"}:{color:"white"}}}>Students</NavLink>
      <NavLink to="/contact" className="removeLine" style={({isActive})=>{return isActive?{color:"pink"}:{color:"white"}}}>ContactUs</NavLink>
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/student' element={
          <Store.Provider value={{data:stuData,setData:setStuData}}>
            <Student/>
          </Store.Provider>
        } />
        <Route path='/addStu' element={
          <Store.Provider value={{data:stuData,setData:setStuData}}>
            <AddStudent/>
          </Store.Provider>
        }/>
        <Route path='/editStu/:id' element={
          <Store.Provider value={{data:stuData,setData:setStuData}}>
            <EditStudent/>
          </Store.Provider>
        }/>
        <Route path='/contact' element={<ContactUs/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Navbar
