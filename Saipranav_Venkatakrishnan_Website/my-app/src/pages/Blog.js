//import logo from './logo.svg';
import * as React from 'react';
import '../App.css';
import Logo from '../components/Logo.js';
import Introduction from '../components/Introduction.js';
import BasicCard from '../components/Card.js';
import ResponsiveAppBar from '../components/OptionBar';

function Blog() {
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
        </div>  
        <ResponsiveAppBar/>
        {/* <Introduction /> */}
        <BasicCard />
      </div>
    </>
    )
}

export default Blog;