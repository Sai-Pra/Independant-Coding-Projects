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
import { maxWidth, padding, width } from '@mui/system';

const Header = () => {
    var greetings = "Hello Reader,";                        
    
    return (
        <header style={{
            backgroundColor: 'blue',
        }}>
        <div className = "head-text">
            <div>
                <img src={phoenix} align="left" className='Phoenix' />
                <div align="center" className='Personal-Information' >
                <Card sx={{ 
            maxWidth: 700,
            minWidth: 275
        }} style={{
            marginTop: '10px',
            marginBottom: '10px',
            marginLeft: '30px',
            background: 'black'
        }}>
            <CardContent>
                <Typography variant="body2" color='white' fontSize='50%' >
                Hello Reader,<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thank you for visiting my website! my name is Sai, and I am a 
                Materials Science Engineer 
                at the University of Illinois of Urbana Champaign! I grew up in the town of Palatine, Illinois 
                in a traditional Desi Household with the smell of Dosa and the sounds of my parents yelling into their phone 
                at an absurb volume. In my free time, I like to watch a variety of animes (My favorite being 
                Black Clover right now) and learn more about different computer science.
                 </Typography>
            </CardContent>
        </Card>
                </div>
            </div>
        </div>
        </header>
    )
}

function AboutMe() {
    return (
        <>
            <Header/>
        </>
    )
}

export default AboutMe;