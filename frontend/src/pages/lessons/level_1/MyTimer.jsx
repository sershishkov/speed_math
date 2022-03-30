import React from 'react';
import TimerBasic from '../../../components/lessons/TimerBasic';

import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

function MyTimer() {
  // const onStartHandler = (cb) => cb();
  // const onPauseHandler = (cb) => cb();
  // const onResetHandler = (cb) => cb();
  return (
    <Grid container flexDirection='column' sx={{ mt: '5rem' }}>
      <Grid item>
        <TimerBasic
        // onStart={onStartHandler}
        // onPause={onPauseHandler}
        // onReset={onResetHandler}
        />
      </Grid>
      {/* <Grid item>
        <Grid container>
          <Grid item>
            <Button variant='contained' onClick={onStartHandler}>
              Start
            </Button>
          </Grid>
          <Grid item>
            <Button variant='contained' onClick={onPauseHandler}>
              pause
            </Button>
          </Grid>
          <Grid item>
            <Button variant='contained' onClick={onResetHandler}>
              Stop
            </Button>
          </Grid>
        </Grid>
      </Grid> */}
    </Grid>
  );
}

export default MyTimer;
