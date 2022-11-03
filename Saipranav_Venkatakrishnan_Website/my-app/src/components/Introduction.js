import * as React from 'react';
import ReactDOM from 'react-dom/client';
import phoenix from '../Phoenix.jpg'
import '../App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const Header = () => {
  return (
    <header style={{
      backgroundColor: 'blue',
    }}>
      <div className = "head-text">
        <div>
          <img src={phoenix} align="left" className='Phoenix' />
          <div align="center" className='Personal-Information'>
            <h4> Hello World, my name is Sai! </h4>
            <p style={{
              fontSize: "50%"
              }}> 
              I'm a Computer Engineer at the University of Illinois Urbana Champaign. <br></br>
              My interests include all things Anime, Personal Coding Projects, and Spicy Food.
              </p>
          </div>
        </div>
      </div>
    </header>
  )
}

function Introduction() {
    return (
        <>
            <Header/>
        </>
    )
}

export default Introduction;