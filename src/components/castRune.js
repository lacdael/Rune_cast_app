import React, { useState } from 'react';
import CastSplash from './castSplash'; 
import { runes, reversable, flipped } from './runeList'; 
import Container from '@mui/material/Container';
import Rune from '../components/rune';
import Paper from '@mui/material/Paper';
import { styled, makeStyles } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));


function CastRune( props ) {

	const [cast,setCast] = useState([]);
	
	const orient = ( c ) => {
		if ( c[1] ){
			if ( reversable.includes(c[0]) ) return ( flipped.includes(c[0]) ) ? "flipped" : "reversed";
		}
		return "right";
	}

	const castRune = () => {
		const runeIndex = Math.floor(Math.random() * runes.length);
		setCast( [ runes[ runeIndex ] , (Math.random() < 0.5) ] );
	}

	return (
		<>
		{ cast.length === 0 ?
			<CastSplash
				callback={ castRune }
				text={ props.str("CAST_ONE") } /> :
			 <><IconButton
				onClick={ e => castRune() }
				aria-label="refresh">
        <RefreshIcon />
      </IconButton> 
			<Rune
				str={ props.str }
				rune={ cast[0] }
				orientation={ orient( cast ) } /></>
		}
		</>
	);
};


export default CastRune;
