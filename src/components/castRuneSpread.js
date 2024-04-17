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


function CastRuneSpread( props ) {

	const [cast,setCast] = useState([]);
	
	const orient = ( c ) => {
		if ( c[1] ){
			if ( reversable.includes(c[0]) ) return ( flipped.includes(c[0]) ) ? "flipped" : "reversed";
		}
		return "right";
	}

	const castRune = () => {
		const runeIndex1 = Math.floor(Math.random() * runes.length);
		const runeIndex2 = Math.floor(Math.random() * runes.length);
		const runeIndex3 = Math.floor(Math.random() * runes.length);
		setCast(
			[
			  [ runes[ runeIndex1 ] ,
				  (Math.random() < 0.5) ], 
			  [ runes[ runeIndex2 ] ,
				  (Math.random() < 0.5) ],
			  [ runes[ runeIndex3 ] ,
				  (Math.random() < 0.5) ] ] );
	}

	const castStyle = {width:`13em`,verticalAlign:"top",display:"inline-block",margin:`0.5em`}
	return (
		<>
		{ cast.length === 0 ?
			<CastSplash
				callback={ castRune }
				text={ props.str("CAST_THREE") } /> :
			 <><IconButton
				onClick={ e => castRune() }
				aria-label="refresh">
        <RefreshIcon />
      </IconButton> 
			<div style={{ width:"100%",textAlign:"center" }}>
			<Rune
				title={ props.str("CAST_THREE_THEN")  }
				style={ castStyle }
				str={ props.str }
				rune={ cast[0][0] }
				orientation={ orient( cast[0] ) } />
		
			<Rune
				title={ props.str("CAST_THREE_NOW")  }
				style={ castStyle }
				str={ props.str }
				rune={ cast[1][0] }
				orientation={ orient( cast[1] ) } />
		
			<Rune
				title={ props.str("CAST_THREE_SOON")  }
				style={ castStyle }
				str={ props.str }
				rune={ cast[2][0] }
				orientation={ orient( cast[2] ) } />
			</div>
			</>
		}
		</>
	);
};


export default CastRuneSpread;
