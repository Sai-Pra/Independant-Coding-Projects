//import logo from './logo.svg';
import * as React from 'react';
import './App.css';
import * as ReactDOM from 'react-dom/client';
import Logo from './components/Logo.js';
import Introduction from './components/Introduction.js';
import BasicCard from './components/Card.js';
import ResponsiveAppBar from './components/OptionBar';
import { Router, Route, useNavigate, Link, Routes } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About';
import Blogs from './pages/Blog';
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
import phoenix from './/Phoenix.jpg';

{/* <div align='center'>
<ResponsiveAppBar />
</div> */}

function App() {
  return (
    <>
      <div id='theRoot'>
        <Home/>
      </div>
    </>
  );
}

// function App() {
//   return (
//       <Router>
//         <Routes>
//           <Route exact path='/' element={<Home />} />
//           <Route path='/about' element={<About/>} />
//           <Route path='/blogs' element={<Blogs/>} />
//         </Routes>
//       </Router>
//   );
// }

export default App;
