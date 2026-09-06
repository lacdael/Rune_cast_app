import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const DEFINITIONS = {
  F: ['Feoh', `
  | /
  |/
  | /
  |/
  |
  |
`],
  U: ['Ur', `
|\\
| \\
|  \\
|   \\
|    \\
|     \\
 `],
  O: ['Os', `
  |  /
  |\\/
  |  /
  |\\/
  |
  |
`],
  R: ['Rad', `
 |\\
 | \\
 | /
 |/  
 |\\
 | \\
`],
  C: ['Cen', `
  |
  |
  |
  |\\
  | \\
  |  \\
`],
  G: ['Gyfu', `
 \\    /
  \\  /
   \\/
   /\\
  /  \\
 /    \\
`],
  W: ['Wynn', `
|\\  
| \\
| /
|/
|
|
`],
  H: ['Haegl', `
|  |
|  |
|\\ |
| \\|
|  |
|  |
`],
  N: ['Nyd', `
  |
  |
 \\|
  |\\
  |
  |
`],
  I: ['Is', `
  |
  |
  |
  |
  |
  |
`],
J: ['Gaer', `
  |
  |
 \\|/
 /|\\
  |
  |
`],
IH: ['Ih', `
  |\\
  | \\
  |
  |
\\ |
 \\|
`],
P: ['Peord', `
  |\\/
  | 
  |
  |
  |
/\\|
`],
X: ['Ilcs', `
\\ | /
 \\|/ 
   |
   |
   |
   |
`],
S: ['Sygil', `
|
|
| /| 
|/ |
   |
   |
`],
T: ['Tiw', `
  /|\\
 / | \\
   | 
   |
   |
   |
`],
B: ['Berc', `
 |\\
 | \\
 | / 
 | \\
 | /
 |/ 
`],
E: ['Eh', `
|\\  /|
| \\/ |
|     |
|     |
|     |
|     |
`],
M: ['Mon', `
|\\  /|
| \\/ |
| /\\ |
|/  \\|
|    |
|    |
`],
L: ['Lagu', `
|\\ 
| \\
| 
|
|
|
`],
ING: ['Ing', `
|\\ /|
| X |
|/ \\|
|\\ /| 
| X |
|/ \\|
`],
AE: ['Oedil', `
 /\\
/  \\
\\  /
 \\/  
 /\\ 
/  \\
`],
D: ['Daeg', `
|    |
|\\  /|
| \\/ |
| /\\ |
|/  \\|  
|    |
`],
A: ['Ac', `
 |\\  /
 | \\/ 
 |\\ 
 | \\  
 |
 |
`],
AE: ['Aesc', `
 |\\  
 | \\ 
 |\\ 
 | \\  
 |
 |
`],
EA: ['Ear', `
\\  /|\\  /
 \\/ | \\/ 
    |
    |  
    |
    |
`],
Y: ['Yr', `
|\\
| \\
|  \\
|  |\\
|  | \\
|  |  \\
`],



};

const keys = Object.keys(DEFINITIONS);

function marksFromAscii(art) {
  const marks = [];
  art.replace(/^\n|\n$/g, '').split('\n').forEach((line, y) => {
    [...line].forEach((char, x) => {
      if (!/\s/.test(char)) marks.push([x, y, char]);
    });
  });
  const minX = Math.min(...marks.map(([x]) => x));
  const minY = Math.min(...marks.map(([, y]) => y));
  return marks.map(([x, y, char]) => [x - minX, y - minY, char]);
}

function rotate(marks, turns) {
  let result = marks.map((mark) => [...mark]);
  for (let i = 0; i < turns % 4; i += 1) {
      result = result.map(([x, y, char]) => [y, -x, { '|': '-', '-': '|', '/': '\\', '\\': '/' }[char] || char]);
    const minX = Math.min(...result.map(([x]) => x));
    const minY = Math.min(...result.map(([, y]) => y));
    result = result.map(([x, y, char]) => [x - minX, y - minY, char]);
  }
  return result;
}

function vertices(marks) {
  const ends = [];
  // ASCII diagonal/stave joins can land half a cell apart. Treat those as
  // one logical joint so shapes such as Nyd and Jer keep their junctions when
  // rotated.
  const joinTolerance = 0.51;
  marks.forEach(([x, y, char]) => {
    const points = {
      '|': [[x, y - 0.5, 0, -1], [x, y + 0.5, 0, 1]],
      '-': [[x - 0.5, y, -1, 0], [x + 0.5, y, 1, 0]],
      '/': [[x - 0.5, y + 0.5, -1, 1], [x + 0.5, y - 0.5, 1, -1]],
      '\\': [[x - 0.5, y - 0.5, -1, -1], [x + 0.5, y + 0.5, 1, 1]],
      X: [
        [x - 0.5, y - 0.5, -1, -1], [x + 0.5, y + 0.5, 1, 1],
        [x - 0.5, y + 0.5, -1, 1], [x + 0.5, y - 0.5, 1, -1],
      ],
    }[char];
    if (points) points.forEach(([px, py, dx, dy]) => ends.push({ point: [px, py], direction: [dx, dy] }));
  });
  const groups = [];
  ends.forEach((end) => {
    let group = groups.find((candidate) => Math.hypot(
      candidate[0].point[0] - end.point[0],
      candidate[0].point[1] - end.point[1],
    ) <= joinTolerance);
    if (!group) { group = []; groups.push(group); }
    group.push(end);
  });
  return groups.map((group) => {
    // Keep the stave's grid coordinate when a diagonal endpoint is clustered
    // with it. Otherwise Nyd/Jer can acquire a one-cell horizontal offset
    // after rotation because the diagonal happened to be encountered first.
    const stemEndpoint = group.find(({ direction: [dx, dy] }) => dx === 0 || dy === 0);
    const point = (stemEndpoint || group[0]).point;
    const directions = [...new Map(group.map((item) => [item.direction.join(','), item.direction])).values()].sort((a, b) => a.join(',').localeCompare(b.join(',')));
    let kind = 'junction';
    if (directions.length === 1) kind = 'endpoint';
    if (directions.length === 2) kind = directions[0][0] === -directions[1][0] && directions[0][1] === -directions[1][1] ? 'straight' : 'corner';
    return { point, directions, kind };
  });
}

function cellKey([x, y]) { return `${x},${y}`; }
function placedMarks(marks, offset, rotation) { return rotate(marks, rotation / 90).map(([x, y, char]) => [x + offset[0], y + offset[1], char]); }
function markSegments(x, y, char) {
  const half = 0.5;
  if (char === '|') return [[x, y - half, x, y + half]];
  if (char === '-') return [[x - half, y, x + half, y]];
  if (char === '/') return [[x - half, y + half, x + half, y - half]];
  if (char === '\\') return [[x - half, y - half, x + half, y + half]];
  if (char === 'X') return [
    [x - half, y - half, x + half, y + half],
    [x - half, y + half, x + half, y - half],
  ];
  return [];
}
function connected(cells) {
  if (!cells.length) return false;
  const seen = new Set([cellKey(cells[0])]);
  const todo = [cells[0]];
  while (todo.length) {
    const [x, y] = todo.pop();
    for (let dx = -1; dx <= 1; dx += 1) for (let dy = -1; dy <= 1; dy += 1) {
      const next = [x + dx, y + dy];
      if (cells.some((cell) => cell[0] === next[0] && cell[1] === next[1]) && !seen.has(cellKey(next))) { seen.add(cellKey(next)); todo.push(next); }
    }
  }
  return seen.size === cells.length;
}

function generate(first, second) {
  const firstMarks = marksFromAscii(DEFINITIONS[first][1]);
  const secondMarks = marksFromAscii(DEFINITIONS[second][1]);
  const firstVertices = vertices(firstMarks);
  const result = [];
  [0, 90, 180, 270].forEach((rotation) => {
    const rotated = rotate(secondMarks, rotation / 90);
    vertices(rotated).forEach((a) => firstVertices.forEach((b) => {
      if (a.kind !== b.kind || JSON.stringify(a.directions) !== JSON.stringify(b.directions)) return;
      const offset = [Math.round(b.point[0] - a.point[0]), Math.round(b.point[1] - a.point[1])];
      const secondPlaced = placedMarks(secondMarks, offset, rotation);
      const firstCells = firstMarks.map(([x, y]) => [x, y]);
      const secondCells = secondPlaced.map(([x, y]) => [x, y]);
      const overlap = firstCells.filter((cell) => secondCells.some((other) => cellKey(cell) === cellKey(other))).length;
      const union = [...new Map([...firstCells, ...secondCells].map((cell) => [cellKey(cell), cell])).values()];
      if (!overlap || !connected(union)) return;
      const key = `${rotation}:${union.map(cellKey).sort().join('|')}`;
      if (!result.some((item) => item.key === key)) result.push({ key, firstMarks, secondMarks, offset, rotation, overlap });
    }));
  });
  return result.sort((a, b) => b.overlap - a.overlap || a.rotation - b.rotation).slice(0, 18);
}


function RunePreview_new({ placements }) {
  const strokeWidth = 0.13;

  function segmentPath(x1, y1, x2, y2, width) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = Math.hypot(dx, dy);

    const radius = width / 2;

    // Perpendicular unit vector
    const px = (-dy / length) * radius;
    const py = (dx / length) * radius;

    const a = [x1 + px, y1 + py];
    const b = [x2 + px, y2 + py];
    const c = [x2 - px, y2 - py];
    const d = [x1 - px, y1 - py];

    return `
      M ${a[0]} ${a[1]}
      L ${b[0]} ${b[1]}
      A ${radius} ${radius} 0 0 1 ${c[0]} ${c[1]}
      L ${d[0]} ${d[1]}
      A ${radius} ${radius} 0 0 1 ${a[0]} ${a[1]}
      Z
    `;
  }

  const paths = placements
    .flatMap(({ marks, offset, rotation }) => placedMarks(marks, offset, rotation))
    .flatMap(([x, y, char], index) => markSegments(x, y, char).map(([x1, y1, x2, y2], segment) => ({
      key: `${index}-${segment}-${x}-${y}`,
      x1,
      y1,
      x2,
      y2,
      d: segmentPath(x1, y1, x2, y2, strokeWidth),
    })));

  const xs = paths.flatMap(({ x1, x2 }) => [x1, x2]);
  const ys = paths.flatMap(({ y1, y2 }) => [y1, y2]);

  const margin = 0.8;

  const minX = Math.min(...xs) - margin;
  const minY = Math.min(...ys) - margin;
  const width = Math.max(...xs) - Math.min(...xs) + margin * 2;
  const height = Math.max(...ys) - Math.min(...ys) + margin * 2;

  const viewBox = `${minX} ${minY} ${width} ${height}`;

  return (
    <svg
      className="flicker right"
      viewBox={viewBox}
      role="img"
      aria-label="Generated bindrune"
      style={{ width: '100%', height: 220 }}
    >
      <g>
        {paths.map(({ key, d }) => (
          <path key={key} d={d} />
        ))}
      </g>
    </svg>
  );
}



function RunePreview({ placements }) {
  const lines = placements.flatMap(({ marks, offset, rotation }) => placedMarks(marks, offset, rotation)).flatMap(([x, y, char], index) => markSegments(x, y, char).map(([x1, y1, x2, y2], segment) => ({
    key: `${index}-${segment}-${x}-${y}`,
    x1,
    y1,
    x2,
    y2,
    stroke: 'currentColor',
    strokeWidth: 0.13,
    strokeLinecap: 'round',
  })));
  const xs = lines.flatMap((line) => [line.x1, line.x2]);
  const ys = lines.flatMap((line) => [line.y1, line.y2]);
  const margin = 0.8;
  const viewBox = `${Math.min(...xs) - margin} ${Math.min(...ys) - margin} ${Math.max(...xs) - Math.min(...xs) + margin * 2} ${Math.max(...ys) - Math.min(...ys) + margin * 2}`;
  return <svg className="flicker right" viewBox={viewBox} role="img" aria-label="Generated bindrune" style={{ width: '100%', height: 220 }}><g stroke="none" fill="#000000"  >{lines.map((line) => <line {...line} />)}</g></svg>;
}

export default function BindruneGenerator({ str }) {
  const [first, setFirst] = React.useState('F');
  const [second, setSecond] = React.useState('U');
  const candidates = React.useMemo(() => generate(first, second), [first, second]);
  return <Stack spacing={3}>
    <Box><Typography variant="h3" component="h1" gutterBottom>Bindrune generator</Typography><Typography color="text.secondary">Choose two runes and explore compatible grid placements.</Typography></Box>
    <Grid container spacing={2}>
      {[['First rune', first, setFirst], ['Second rune', second, setSecond]].map(([label, value, setter]) => <Grid item xs={12} sm={5} key={label}><FormControl fullWidth><InputLabel>{label}</InputLabel><Select value={value} label={label} onChange={(event) => setter(event.target.value)}>{keys.map((key) => <MenuItem value={key} key={key}>{key} — {str(`${key}_NAME`) === '. . .' ? DEFINITIONS[key][0] : str(`${key}_NAME`)}</MenuItem>)}</Select></FormControl></Grid>)}
    </Grid>
    <Grid container spacing={2}>{candidates.map((candidate, index) => <Grid item xs={12} sm={6} md={4} key={candidate.key}><Card><CardContent><RunePreview placements={[{ marks: candidate.firstMarks, offset: [0, 0], rotation: 0 }, { marks: candidate.secondMarks, offset: candidate.offset, rotation: candidate.rotation }]} />
	    </CardContent></Card></Grid>)}</Grid>
    {candidates.length === 0 && <Typography>No compatible placements found for this pair.</Typography>}
  </Stack>;
}
