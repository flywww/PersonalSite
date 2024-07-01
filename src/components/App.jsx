//import { useState } from 'react'
import React from 'react';
import NavigationBar from "./NavigationBar";
import Header from "./Header"
import SkillList from "./SkillList"
import Experience from './Experience';
import Portfolio from './Portfolio';
import Footer from './Footer';

function App() {

  return (
    <>
      <NavigationBar/>
      <Header/>
      <SkillList />
      <Experience />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App;
