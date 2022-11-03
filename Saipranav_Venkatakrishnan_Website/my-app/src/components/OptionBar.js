import * as React from 'react'
import phoenix from '../Phoenix.jpg'
import '../App.css';
import App from '../App'
import Home from '../pages/Home'
import About from '../pages/About';
import Blogs from '../pages/Blog';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Route, useNavigate, Link, Routes } from "react-router-dom";
import * as ReactDOM from 'react-dom/client';

//https://mui.com/material-ui/react-app-bar/

// List of Pages I want and Settings Options
const pages = ['Home', 'About', 'Blog'];
const settings = ['Contact Me', 'Appearance'];

const root = ReactDOM.createRoot(document.getElementById('root'));

var rend =     
<>
  <div id='theRoot' className='App'>
    
    <Home/>
  </div>
</>

function setAbout(){
  rend =
  <>
  <div id='theRoot' className='App'>
    
    <About/>
  </div>
  </>
  root.render(rend);
}

function setHome(){
  rend = 
  <>
  <div id='theRoot' className='App'>
    
    <Home/>
  </div>
  </>
  root.render(rend);
}

function setBlog(){
  rend = 
  <>
  <div id='theRoot'>
    <Blogs/>
  </div>
</>
  root.render(rend);
}

function choosePage(page){
  switch (page) {
    case 'Home':
      setHome();
      break;
  
    case 'About':
      setAbout();
      break;

    case 'Blog':
      setBlog();
      break;

    default:
      break;
  }
}

function ResponsiveAppBar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div style={{
      background: 'black'
    }}>
    <table>
      <tr>
      <Container maxWidth="x1">
        <Toolbar disableGutters>

        {/* Puts the first part of the Bar; the first Phoenix Image */}

          <td className='Moderate-spacing' style={{
            // paddingRight: '70px',
          }}>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Phoenix" src={phoenix} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </td>

            {/* Provides the Buttons with the ability to adapt based the amount of buttons provided*/}

          <td>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {/* {pages.map((page) => (
                <Button
                  key={page}
                  onClick={choosePage(page)}
                  sx={{ my: 2, color: 'white', display: 'block'
                }}
                >
                  {page}
                </Button>
              ))} */}
                <Button
                  key={pages[0]}
                  onClick={setHome}
                  sx={{ my: 2, color: 'white', display: 'block'
                }}
                >
                  {pages[0]}
                </Button>
                <Button
                  key={pages[1]}
                  onClick={setAbout}
                  sx={{ my: 2, color: 'white', display: 'block'
                }}
                >
                  {pages[1]}
                </Button>
                <Button
                  key={pages[2]}
                  onClick={setBlog}
                  sx={{ my: 2, color: 'white', display: 'block'
                }}
                >
                  {pages[2]}
                </Button>
            </Box>
          </td>

            {/* Puts the first part of the Bar; the first Phoenix Image */}

          <td className='Moderate-spacing' style={{
            // paddingLeft: '10px'
          }}>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Phoenix" src={phoenix} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </td>
        </Toolbar>
      </Container>
      </tr>
    </table>
    </div>
  );
}

export default ResponsiveAppBar;