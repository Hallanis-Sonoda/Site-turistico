import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './App.css';

export default function ActionAreaCard(props) {
  return (
    <Card className="Card">
      <CardActionArea>
        <CardMedia className="Card-img"
          component="img"
          image={props.img}
        />
        <CardContent className="Card-component">
          <Typography gutterBottom variant="h5" component="div">
            {props.titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.descricao}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
