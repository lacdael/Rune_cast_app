import React, { useState } from 'react';
import CastSplash from './castSplash'; 
import Container from '@mui/material/Container';
import Rune, {RuneSvg} from '../components/rune';
import Paper from '@mui/material/Paper';
import { styled, makeStyles } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SvgIcon from '@mui/material/SvgIcon';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));


export const runes = [
	"F","U","TH","O","R","C",
	"G","W","H","N","I","J",
	"IW","P","X","S","T","B",
	"E","M","L","NG","OE","D" ]
	//,"A","AE","EA","Y"];
export const reversable = [
	"F","U","O","R","C",
	"W","H","N",
	"P","X","T","B",
	"E","M","L","OE",
	"A","AE","EA","Y"
];
export const flipped = [
   "B","P"
];


function RuneList( props ) {


	return (
		<>
          		{ runes.map( ( r,i ) => {
				return (
				<>
				<Grid container spacing={2} xs sx={{m:2}} >
        			<Grid item>
				<Box sx={{height:`40px`,width:`5em`}}>
				<RuneSvg
					rune={r}
					flicker={false}
					orientation="right"/>
				</Box>
				</Grid>
        			<Grid item xs>
				  	<Card sx={{ minWidth: 200 }}>
					<CardContent>
					<Typography variant="h5" component="div">
					{ props.str(`${r}_NAME`)  }

					</Typography>
								<Typography variant="body2">
					{ props.str(`${r}_RIGHT`)  } 
					</Typography>
				      </CardContent>
				    </Card>
				</Grid>
				</Grid>
				{ (reversable.includes(r)) &&  
				<Grid container spacing={2} xs sx={{m:2}} >
        			<Grid item >
				<Box sx={{height:`40px`,width:`5em`}}>
				<RuneSvg
					rune={r}
					flicker={false}
					orientation={ flipped.includes(r) ? "flipped" : "reversed" }/>
				</Box>
				</Grid>
        			<Grid item xs>
				   	<Card >
					<CardContent>
					<Typography variant="h5" component="div">
					{ `${props.str(`${r}_NAME`)} (${props.str("REVERSED")})` } 
					</Typography>
					<Typography variant="body2">
					{ props.str(`${r}_REVERSED`)  } 
					</Typography>
				      </CardContent>
				    </Card>
				</Grid>
				</Grid>



				}</>
				);} ) }
		</>
	);
};


export default RuneList;
