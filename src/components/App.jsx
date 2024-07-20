//import { useState } from 'react'
import React from 'react';
import NavigationBar from "./NavigationBar";
import Footer from './Footer';

import { Route, Routes } from 'react-router-dom';
import BlogPage from './blog/BlogPage';
import ProjectsPage from './projects/ProjectsPage';
import AboutPage from './about/AboutPage';

function App() {

  return (
    <>
      <NavigationBar/>
        <Routes>
          <Route path="/" element={<AboutPage />}></Route>
          <Route path="/projects" element={<ProjectsPage />}></Route>
          <Route path="/blog" element={<BlogPage />} ></Route>
        </Routes>
      <Footer />
    </>
  )
}

export default App;
