import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from "./components/hero";
import Card from "./components/card";
import data from "./components/data";


export default function App() {
  // <Hero />
const cards = data.map(item => {
return (
  <Card 
      key={item.id}
      {...item}
  />
)
})        

return (
<div>
  <Navbar />
  <Hero /> 
  <section className='cards-list'>
    {cards}
  </section>
</div>
)
}
