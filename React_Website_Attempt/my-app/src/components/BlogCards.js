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
import WTH_Image from '../William_T_Hornaday_Medal.jfif'
import ISS_Image from '../ISS_Project.jfif'
import React_Image from '../React.jfif'


function BasicCard(image, desc, link){
    return (
      <Card sx={{ 
        maxWidth: 285,
        minWidth: 275
      }} style={{
        marginTop: '10px',
        marginBottom: '10px',
        marginLeft: '30px',
        background: 'black'
      }}>
        <CardContent>
          <Typography variant="body2">
            {desc}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={link}>Learn More</Button>
        </CardActions>
      </Card>
    );
  }

