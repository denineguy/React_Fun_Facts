import { useState } from 'react'
import './App.css'
import React from "react"
import Main from "./components/Main"
import Navbar from "./components/Navbar"

export default function App() {
    return (
      <div>
        <h1 className="title">Hello World!</h1>
        <Navbar/>
        <Main/>
      </div>
        
    
    )
}