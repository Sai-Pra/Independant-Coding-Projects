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

// Source for help: https://mui.com/material-ui/react-card/

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

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
        <img src={image} alt={desc} width='250px'/>
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


const images = [ISS_Image,WTH_Image,React_Image,phoenix,phoenix,phoenix,phoenix,phoenix];
const descs = ['My efforts to promote conservation in the Chicagoland area',
              'That time I sent a project to the International Space Station',
              'The work that went behind creating this website',
              'My experience with Arduinos (and why I love them so much)',
              'Top 10 Anime Recommendations that are objectively correct',
              'Phoenix',
              'Phoenix',
              'Phoenix'];
const descsLength = descs.length
const links = ['https://www.dailyherald.com/news/20201109/the-future-better-watch-out-for-sai-palatine-teen-earns-rare-boy-scout-honor',
              'https://www.dailyherald.com/article/20151109/submitted/151108929/',
              'https://www.youtube.com/watch?v=p7YXXieghto',
              'https://www.youtube.com/watch?v=p7YXXieghto',
              'https://www.youtube.com/watch?v=p7YXXieghto'
              ,'https://www.youtube.com/watch?v=p7YXXieghto',
              'https://www.youtube.com/watch?v=p7YXXieghto',
              'https://www.youtube.com/watch?v=p7YXXieghto'];

function makeList(){
    var CardsRow = [];
    var CardsCol = [];
    for (var i = 0; i < descsLength; i++) {
        CardsRow.push(BasicCard(images[i], descs[i], links[i])); 
        if(CardsRow.length === 3){
          CardsCol.push(CardsRow);
          CardsRow = [];
        }
    }
    if(CardsRow.length > 0){
      CardsCol.push(CardsRow);
    }
    return CardsCol;
}

function DisplayCardsList(){
    var list = makeList();
    return (
        <table align='center'>
            {list.map((cards) => (
              <tr>
                {cards.map((card) => (
                  <td>
                    {card}
                  </td>
                ))}
              </tr> 
            ))}
        </table>
    );
}

export default DisplayCardsList;