import React, { useState } from 'react';
import TimerBasic from '../../../components/lessons/TimerBasic';

import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';

function UseMyTimer() {
  // const [timeBasic, set__timeBasic] = useState('');
  const timerBasicStartHandler = (cb) => cb();

  return (
    <Grid container direction='column'>
      <Grid item>
        <Button onClick={timerBasicStartHandler}>start timer</Button>
      </Grid>
      <Grid item>
        <TimerBasic timerBasicStartHandler={timerBasicStartHandler} />
      </Grid>
    </Grid>
  );
}

export default UseMyTimer;
