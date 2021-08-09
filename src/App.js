import React from 'react'
import Intro from './components/Intro/Intro';
import Nav from './components/Nav/Nav';
import ServicesSection from './components/ServicesComp/ServicesSection';
import {servObj1, servObj2} from './Data';

const App = () => {
  return (
    <div>
      <Nav/>
      <Intro/>
      <ServicesSection {...servObj1}/>
      <ServicesSection {...servObj2}/>
    </div>
  )
}

export default App
