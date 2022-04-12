import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Description1 from './Description1';
import Description2 from './Description2';
import Description3 from './Description3';

function Landing() {
  return (
    <Grid
      container
      direction='column'
      sx={
        {
          // border: '1px solid red',
        }
      }
    >
      <Grid item>
        <Typography variant='h5' align='center'>
          Считайте в уме как компютер
        </Typography>
      </Grid>
      <Description1 />
      <Description2 />
      <Description3 />
      <Grid item></Grid>
      <Grid item></Grid>
      <Grid item></Grid>
      <Grid item></Grid>
      <Grid item></Grid>
      <Grid item></Grid>
    </Grid>
  );
}

export default Landing;
