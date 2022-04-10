import { useEffect } from 'react';

import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { operators } from '../../../utils/constants';
import ButtonStop from '../../ui/buttons/ButtonStop';
import ButtonOk from '../../ui/buttons/ButtonOk';
import InputCircleCheck from '../../ui/inputs/inputCircleCheck';

function ExerciseCheck({
  displayExample,
  onStopExercise,
  example,
  operator,
  userAnswer_CheckNumberLeft,
  userAnswer_CheckNumberRight,
  userAnswer_CheckResultLeft,
  userAnswer_CheckResultRight,

  setAnswer_CheckNumberLeft,
  setAnswer_CheckNumberRight,
  setAnswer_CheckResultLeft,
  setAnswer_CheckResultRight,

  onAnswer,
  numberOf_Task,
}) {
  useEffect(() => {
    if (displayExample) {
      const userAnswer_CheckNumberLeft__input = document.getElementById(
        'userAnswer_CheckNumberLeft'
      );
      userAnswer_CheckNumberLeft__input.focus();
    }
  }, [displayExample]);
  return (
    <Grid item sx={{ display: displayExample ? 'block' : 'none' }}>
      <Grid item sx={{ flex: 1, padding: '10px' }}>
        <ButtonStop onClick={onStopExercise} />
      </Grid>

      <Typography variant='h5' align='center'>
        Упражнения
      </Typography>

      <Grid container justifyContent='space-evenly' alignItems='center'>
        <TableContainer
          component={Paper}
          sx={{
            width: '70%',
            margin: 'auto',
          }}
        >
          <Table align='center' aria-label='simple table'>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {example ? example.numberLeft : ''}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {operator}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {example ? example.numberRight : ''}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {operators[4]}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {example ? example.resultRight : ''}
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  align='center'
                  sx={{
                    padding: 0,
                  }}
                >
                  <InputCircleCheck
                    id='userAnswer_CheckNumberLeft'
                    name='userAnswer_CheckNumberLeft'
                    value={userAnswer_CheckNumberLeft}
                    onChange={setAnswer_CheckNumberLeft}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const userAnswer_CheckNumberRight_input =
                          document.getElementById(
                            'userAnswer_CheckNumberRight'
                          );

                        userAnswer_CheckNumberRight_input.focus();
                      }
                    }}
                  />
                </TableCell>
                <TableCell sx={{ pr: 0 }}></TableCell>
                <TableCell
                  align='center'
                  sx={{
                    padding: 0,
                  }}
                >
                  <InputCircleCheck
                    id='userAnswer_CheckNumberRight'
                    name='userAnswer_CheckNumberRight'
                    value={userAnswer_CheckNumberRight}
                    onChange={setAnswer_CheckNumberRight}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const userAnswer_CheckResultLeft_input =
                          document.getElementById('userAnswer_CheckResultLeft');

                        userAnswer_CheckResultLeft_input.focus();
                      }
                    }}
                  />
                </TableCell>
                <TableCell sx={{ pr: 0 }}></TableCell>
                <TableCell></TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  align='center'
                  sx={{
                    padding: 0,
                  }}
                  colSpan={3}
                >
                  <InputCircleCheck
                    id='userAnswer_CheckResultLeft'
                    name='userAnswer_CheckResultLeft'
                    value={userAnswer_CheckResultLeft}
                    onChange={setAnswer_CheckResultLeft}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const userAnswer_CheckResultRight_input =
                          document.getElementById(
                            'userAnswer_CheckResultRight'
                          );

                        userAnswer_CheckResultRight_input.focus();
                      }
                    }}
                  />
                </TableCell>

                <TableCell sx={{ pr: 0 }}></TableCell>
                <TableCell
                  align='center'
                  sx={{
                    padding: 0,
                  }}
                >
                  <InputCircleCheck
                    id='userAnswer_CheckResultRight'
                    name='userAnswer_CheckResultRight'
                    value={userAnswer_CheckResultRight}
                    onChange={setAnswer_CheckResultRight}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const answerButton =
                          document.getElementById('answerButton');

                        answerButton.focus();
                      }
                    }}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={5}>
                  <ButtonOk
                    id='answerButton'
                    variant='contained'
                    onClick={onAnswer}
                    disabled={
                      userAnswer_CheckNumberLeft.length < 1 ||
                      userAnswer_CheckNumberRight.length < 1 ||
                      userAnswer_CheckResultLeft.length < 1 ||
                      userAnswer_CheckResultRight.length < 1
                    }
                  >
                    {numberOf_Task}
                  </ButtonOk>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default ExerciseCheck;
