import React from 'react';
import { useTimer } from 'use-timer';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function TimerBasic({
  timerBasicStartHandler,
  //  setTimeHandler
}) {
  const { time, start, reset } = useTimer();

  const onStart = () => {
    start();
  };

  const onStop = () => {
    reset();
  };

  return (
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
  );
}

export default TimerBasic;
