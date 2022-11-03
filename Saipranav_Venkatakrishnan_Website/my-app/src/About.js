//import logo from './logo.svg';
import * as React from 'react';
import './App.css';
import Logo from './components/Logo.js';
import Introduction from './components/Introduction.js';
import BasicCard from './components/Card.js';
import ResponsiveAppBar from './components/OptionBar';

function About() {
    return (
    <>
      <div style={{
        backgroundColor: '#0d173b'
      }}>
        <div style={{
          background: 'black'
        }}>
          <br>
          </br> 
          <Logo />
          <br>
          </br> 
          <br>
          </br> 
          <br>
          </br> 
          <br>
          </br> 
          <br>
          </br> 
        </div>  
          <div align='center'>
            <ResponsiveAppBar />
          </div>
        <Introduction />
        <BasicCard />
      </div>
    </>
    )
}

export default About;