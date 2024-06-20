//import { useState } from 'react'
import React from 'react';
import NavigationBar from "./NavigationBar";
import Avatar from "./Avatar"

function App() {

  return (
    <>
      <NavigationBar/>
      <Avatar/>

      <div>
        <h1>Product developer/manager</h1>
        <p>a full-stack developer/product manager, playing around in medical tech, full-stack deva and web3.</p>
        <div>
          <button>Hire Me</button>
          <a href="http://">Download CV</a>
        </div>
        <div>
          <div>
            <img src="./src/assets/icon_circle_plan.png" alt="" />
            <div>
              <h3>Product Plan</h3>
              <p>Planing and managing products from ground up.</p>
            </div>
          </div>
          <div>
            <img src="./src/assets/icon_circle_coding.png" alt="" />
            <div>
              <h3>Front-End Develop</h3>
              <p>Coding front-end with Tailwind CSS, ReactJS, NextJS / web3 with ether.js and hardhat</p>
            </div>
          </div>
          <div>
            <img src="./src/assets/icon_circle_coding.png" alt="" />
            <div>
              <h3>Back-End Develop</h3>
              <p>Coding back-end with NodeJS, Express / web3 with solidity</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
