import React from 'react';
import { useTimer } from 'use-timer';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function TimerBasic({ onStart, onPause, onReset }) {
  const { time, start, pause, reset } = useTimer();

  return (
    <Grid container flexDirection='column' sx={{ mt: '5rem' }}>
      <Grid item>
        <Grid container alignItems='center' justifyContent='flex-end'>
          <Grid item>
            <Typography variant='h6' align='center'>
              {time > 60
                ? Math.floor(time / 60) < 10
                  ? `0${Math.floor(time / 60)}`
                  : Math.floor(time / 60)
                : '00'}
              :
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h6' align='center'>
              {time % 60 < 10 ? `0${time % 60}` : `${time % 60}`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item>
            <Button variant='contained' onClick={start}>
              Start
            </Button>
          </Grid>
          <Grid item>
            <Button variant='contained' onClick={pause}>
              pause
            </Button>
          </Grid>
          <Grid item>
            <Button variant='contained' onClick={reset}>
              Stop
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TimerBasic;
