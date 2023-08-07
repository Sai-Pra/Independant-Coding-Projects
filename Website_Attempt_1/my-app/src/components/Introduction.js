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
import particles from "react-particles";
import Particles from 'react-tsparticles';

const Header = () => {
  return (
    <header style={{
      backgroundColor: 'black',
    }}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div align='middle'>
        <img src={phoenix} className='MyAvatar'/> 
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div align='middle'>
        <Card sx={{ 
          maxWidth: 500,
          minWidth: 275,
        }} style={{
          background: 'black'
          
        }}>
          <CardContent>
            <Typography variant="header" color="white" fontSize='200%'>
              SAIPRANAV VENKATAKRISHNAN
              <br />
            </Typography>
          </CardContent>
        </Card>  
      </div>
      <br></br>
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