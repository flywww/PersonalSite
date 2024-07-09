//import { useState } from 'react'
import React from 'react';
import NavigationBar from "./NavigationBar";
import Footer from './Footer';

import { Route, Routes } from 'react-router-dom';
import Blog from './blog/Blog';
import PortfolioList from './projects/Projects';
import Home from './home/Home';

function App() {

  return (
    <>
      <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<PortfolioList />}></Route>
          <Route path="/blog" element={<Blog />} ></Route>
        </Routes>
      <Footer />
    </>
  )
}

export default App;
