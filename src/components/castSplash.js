import * as React from 'react';
import Wyrd from '../images/wyrd.svg'; 
import "./rune.css";

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { styled, makeStyles } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

function CastSplash( props ) {

	return (
		<Container sx={{maxWidth:"sm",height:`50vw`}} >
		     <div style={{
			     height:`100%`,
				
			     position:`relative`,
		     }}>
			<Wyrd className="flicker right" style={{
				position:`absolute`,
					height:"100%",
					top:0
				}}  />
		<Button
			onClick={ e => props.callback() }
			variant="contained"
			size="large"
			color="primary"
			style={{
				backgroundColor:'rgba(33,33,33,0.5)',
				color:'white',
				position:`absolute`,
	top:"50%",left:"50%",transform:'translate(-50%,-50%)'
			}}>{ props.text }</Button>
		     </div>
		</Container>
	);
};

export default CastSplash;
