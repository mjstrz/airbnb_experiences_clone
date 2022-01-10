import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from "./components/hero";
import Card from "./components/card";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  )
}
