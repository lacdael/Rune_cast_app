import * as React from 'react';
import Wyrd from '../images/wyrd.svg'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import RuneA from '../images/a.svg'; 
import RuneAE from '../images/ae.svg'; 
import RuneB from '../images/b.svg'; 
import RuneC from '../images/c.svg'; 
import RuneD from '../images/d.svg'; 
import RuneE from '../images/e.svg'; 
import RuneEA from '../images/ea.svg'; 
import RuneF from '../images/f.svg'; 
import RuneG from '../images/g.svg'; 
import RuneH from '../images/h.svg'; 
import RuneI from '../images/i.svg'; 
import RuneIW from '../images/iw.svg'; 
import RuneJ from '../images/j.svg'; 
import RuneL from '../images/l.svg'; 
import RuneM from '../images/m.svg'; 
import RuneN from '../images/n.svg'; 
import RuneNG from '../images/ng.svg'; 
import RuneO from '../images/o.svg'; 
import RuneOE from '../images/oe.svg'; 
import RuneP from '../images/p.svg'; 
import RuneR from '../images/r.svg'; 
import RuneS from '../images/s.svg'; 
import RuneT from '../images/t.svg'; 
import RuneTH from '../images/th.svg'; 
import RuneU from '../images/u.svg'; 
import RuneW from '../images/w.svg'; 
import RuneX from '../images/x.svg'; 
import RuneY from '../images/y.svg'; 
import "./rune.css";
import Paper from '@mui/material/Paper';
import { styled, makeStyles } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));


export function RuneSvg ( props ) {
	const aClass = props.flicker ? `flicker ${props.orientation}`: props.orientation;
	switch (props.rune) {
		case "F": return <RuneF className={aClass}/>
		case "U": return <RuneU className={aClass}/>
		case "TH": return <RuneTH className={aClass}/>
		case "O": return <RuneO className={aClass}/>
		case "R": return <RuneR className={aClass}/>
		case "C": return <RuneC className={aClass}/>
		case "G": return <RuneG className={aClass}/>
		case "W": return <RuneW className={aClass}/>
		case "H": return <RuneH className={aClass}/>
		case "N": return <RuneN className={aClass}/>
		case "I": return <RuneI className={aClass}/>
		case "J": return <RuneJ className={aClass}/>
		
		case "IW": return <RuneIW className={aClass}/>
		case "P": return <RuneP className={aClass}/>
		case "X": return <RuneX className={aClass}/>
		case "S": return <RuneS className={aClass}/>
		case "T": return <RuneT className={aClass}/>
		case "B": return <RuneB className={aClass}/>
		case "E": return <RuneE className={aClass}/>
		case "M": return <RuneM className={aClass}/>
		case "L": return <RuneL className={aClass}/>
		case "NG": return <RuneNG className={aClass}/>
		case "OE": return <RuneOE className={aClass}/>
		case "D": return <RuneD className={aClass}/>
		case "A": return <RuneA className={aClass}/>
		case "EA": return <RuneEA className={aClass}/>
		case "AE": return <RuneAE className={aClass}/>
		case "EA": return <RuneEA className={aClass}/>
		case "Y": return <RuneY className={aClass}/>
		default: return <Wyrd className="flicker right"/>;
	}
}

function Rune( props ) {

	return (
		<>
		<Grid container
			direction="column"
			spacing={2}
			style={props.style}>
		<Grid item>
		{ props.title && <Typography variant="h5">
			{ props.title }
		</Typography> }
		</Grid>
		<Grid item>
		<div
			style={{maxWidth:"sm",width:`50%`,margin:"auto"}}
		>
		<RuneSvg
			rune={props.rune}
			flicker={true}	
			orientation={props.orientation} />
		</div>
		</Grid>
		<Grid item>
		<Card sx={{ minWidth: 200 }}>
		  <CardContent>
		   <Typography variant="h5" component="div">
		   { props.str(`${props.rune}_NAME`)  }
   		</Typography>
			<Typography variant="body2">
		{ props.str(`${ props.rune}_${ props.orientation.toUpperCase() !== "RIGHT" ? "REVERSED" : "RIGHT" }`) }
			</Typography>
		      </CardContent>
		    </Card>
		</Grid>
		</Grid>


		</>
	);
};

export default Rune;
