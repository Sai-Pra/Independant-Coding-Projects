import * as React from 'react'
import phoenix from '../Phoenix.jpg'
import '../App.css';
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



// List of Pages I want and Settings Options

const pages = ['Home', 'About', 'Blog'];
const settings = ['Contact Me', 'Appearance'];

function ResponsiveAppBar() {

  // const navigate = useNavigate();
  // const redirectToAboutPage = () => {
  //   //Redirect to the About page
  //   navigate("/About");
  // };
  // const redirectToHomePage = () => {
  //   //Redirect to the Home page
  //   navigate("/About");
  // };
  // function Home() {
  //   return <h2>Home Page Content</h2>;
  // }
  // function About() {
  //   return <h2>Python Page Content</h2>;
  // }

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (

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

            {/* Provides the Buttins with the ability to adapt based the amoutn of buttons provided*/}

          <td>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  key={pages[0]}
                  // onClick={redirectToAboutPage}
                  sx={{ my: 2, color: 'white', display: 'block'
                }}
                >
                  {pages[0]}
                </Button>
                <Button
                  key={pages[1]}
                  // onClick={redirectToHomePage}
                  sx={{ my: 2, color: 'white', display: 'block'
                }}
                >
                  {pages[1]}
                </Button>
                <Button
                  key={pages[2]}
                  // onClick={redirectToAboutPage}
                  sx={{ my: 2, color: 'white', display: 'block'
                }}
                >
                  {pages[2]}
                </Button>
                {/* <Routes>
                  <Route path="/About" element={<About />} />
                  <Route path="/About" element={<Home />} />
                </Routes> */}
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
  );
}

export default ResponsiveAppBar;