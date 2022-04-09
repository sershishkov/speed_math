import { useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ButtonStop from '../../ui/buttons/ButtonStop';
import ButtonOk from '../../ui/buttons/ButtonOk';
import { operators } from '../../../utils/constants';

function ExerciseSimple({
  displayExample,
  onStopExercise,
  example,
  operator,
  userAnswer,
  onChangeUserAnswer,
  onAnswer,
  numberOf_Task,
}) {
  useEffect(() => {
    if (displayExample) {
      const userAnswer__input = document.getElementById('userAnswer');
      userAnswer__input.focus();
    }
  }, [displayExample]);

  return (
    <Grid item sx={{ display: displayExample ? 'block' : 'none' }}>
      <Grid container flexDirection='column'>
        <Grid item sx={{ flex: 1, padding: '10px' }}>
          <ButtonStop onClick={onStopExercise} />
        </Grid>
        <Grid item sx={{ flex: 1 }}>
          <Typography variant='h5' align='center'>
            Упражнения
          </Typography>
        </Grid>
        <Grid item>
          <Grid container alignItems='center'>
            <Grid item sx={{ flex: 1 }}>
              <Typography variant='h4' align='center'>
                {example ? example.numberLeft : ''}
              </Typography>
            </Grid>
            <Grid item sx={{ flex: 0.3 }}>
              <Typography variant='h4' align='center'>
                {operator}
              </Typography>
            </Grid>
            <Grid item sx={{ flex: 1 }}>
              <Typography variant='h4' align='center'>
                {example ? example.numberRight : ''}
              </Typography>
            </Grid>
            <Grid item sx={{ flex: 0.3 }}>
              <Typography variant='h4' align='center'>
                {operators[4]}
              </Typography>
            </Grid>
            <Grid item sx={{ flex: 1.1 }}>
              <TextField
                name='userAnswer'
                label='Ответ'
                type='number'
                id='userAnswer'
                value={userAnswer}
                onChange={onChangeUserAnswer}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    const onAnswer_Button =
                      document.getElementById('answerButton');
                    onAnswer_Button.focus();
                  }
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ width: '100%', marginTop: '1rem' }}>
          <ButtonOk
            id='answerButton'
            variant='contained'
            onClick={onAnswer}
            disabled={userAnswer.length < 1}
          >
            {numberOf_Task}
          </ButtonOk>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ExerciseSimple;
