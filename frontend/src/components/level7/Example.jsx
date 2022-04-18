import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import NumbersList from './NumbersList';

function Example({ listNumbersLeft, numberRight, listNumbersResult, comment }) {
  return (
    <Box
      sx={{
        width: 'max-content',
        margin: '1rem auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1.5rem 250px',
      }}
    >
      <Box sx={{ borderBottom: '2px solid black' }}>
        <NumbersList numbersList={listNumbersLeft} />
      </Box>
      <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>x</Typography>
      <Typography
        align='left'
        sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'green' }}
      >
        {numberRight}
      </Typography>
      <Box sx={{ marginTop: '0.5rem' }}>
        <NumbersList numbersList={listNumbersResult} />
      </Box>
      <Typography></Typography>
      <Typography variant='subtitle2'>{comment}</Typography>
    </Box>
  );
}

export default Example;
