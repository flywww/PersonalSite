//import { useState } from 'react'
import React from 'react';
import NavigationBar from "./NavigationBar";
import Header from "./Header"
import SkillList from "./SkillList"
import Experience from './Experience';

function App() {

  return (
    <>
      <NavigationBar/>
      <Header/>
      <SkillList />
      <Experience />
    </>
  )
}

export default App;
