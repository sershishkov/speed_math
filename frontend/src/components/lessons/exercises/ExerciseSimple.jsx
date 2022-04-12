import { useEffect } from 'react';

import Grid from '@mui/material/Grid';
import ButtonStop from '../../ui/buttons/ButtonStop';
import ButtonOk from '../../ui/buttons/ButtonOk';
import { operators } from '../../../utils/constants';
import DescrCellMain from '../../ui/description/DescrCellMain';
import ExerciseHeader from '../../ui/description/ExerciseHeader';
import InputUserAnswerSimple from '../../ui/inputs/InputUserAnswerSimple';

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
          <ExerciseHeader align='center'>Упражнения</ExerciseHeader>
        </Grid>
        <Grid item>
          <Grid container alignItems='center'>
            <Grid item sx={{ flex: 1 }}>
              <DescrCellMain align='center'>
                {example ? example.numberLeft : ''}
              </DescrCellMain>
            </Grid>
            <Grid item sx={{ flex: 0.3 }}>
              <DescrCellMain align='center'>{operator}</DescrCellMain>
            </Grid>
            <Grid item sx={{ flex: 1 }}>
              <DescrCellMain align='center'>
                {example ? example.numberRight : ''}
              </DescrCellMain>
            </Grid>
            <Grid item sx={{ flex: 0.3 }}>
              <DescrCellMain align='center'>{operators[4]}</DescrCellMain>
            </Grid>
            <Grid item sx={{ flex: 1.1 }}>
              <InputUserAnswerSimple
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
