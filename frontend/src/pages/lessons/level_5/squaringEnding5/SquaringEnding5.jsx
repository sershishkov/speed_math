import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTimer } from 'use-timer';
import { genExample__SuaringEnding_5 } from '../../../../utils/generateExample';
import {
  update__statistic,
  reset as resetStatistic,
} from '../../../../features/statistics/statisticSlice';
import Description1 from './Description1';
import classes from './styles.module.scss';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';

import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const operators = ['+', '-', '*', '/', '='];

function SquaringEnding5() {
  const [max, set__max] = useState(200);

  const [examplesNumber, set__examplesNumber] = useState(10);
  const [example, set__example] = useState(null);
  const [userAnswer, set__userAnswer] = useState('');

  const [displayExample, set__displayExample] = useState(false);
  const [displaySettings, set__displaySettings] = useState(true);
  const [displayStatistics, set__displayStatistics] = useState(false);
  const [disableStartButton, set__disableStartButton] = useState(false);
  const [displayStopButton, set__displayStopButton] = useState(false);
  const [numberOf_Task, set_numberOf_Task] = useState(0);
  const [resultsList, set__resultsList] = useState([]);

  const { user } = useSelector((state) => state.auth);
  const { time, start, pause, reset } = useTimer();

  const dispatch = useDispatch();

  const onStart = () => {
    set__displayExample(true);
    set__displayStopButton(true);
    set__displaySettings(false);
    set__disableStartButton(true);
    nextTask();
    start();
  };

  const onStopExercise = () => {
    set__displayStopButton(false);
    set__displayExample(false);
    set__displaySettings(true);
    reset();
    set__displayStatistics(false);
    set_numberOf_Task(0);
    set__disableStartButton(false);
    set__resultsList([]);
    set__userAnswer('');
  };

  const nextTask = () => {
    set__example(new genExample__SuaringEnding_5(max));
    set_numberOf_Task((prevState) => prevState + 1);
  };
  const onContinue = () => {
    nextTask();

    // dispatch(resetStatistic());
    reset();

    set__displayExample(false);
    set__displayStatistics(false);
    set_numberOf_Task(0);
    set__displaySettings(true);
    set__disableStartButton(false);
    set__resultsList([]);
    set__userAnswer('');
    set__displayStopButton(false);
  };

  const onAnswer = () => {
    const obj = {
      example: `${example.number_1}`,

      userAnswer,
      resultRight: example.resultRight,
      doneExcercise: +userAnswer - +example.resultRight === 0,
    };
    set__resultsList((prevState) => [...prevState, obj]);

    set__userAnswer('');

    if (numberOf_Task < examplesNumber) {
      nextTask();
      const userAnswerInput = document.getElementById('userAnswer');

      userAnswerInput.focus();
      // console.log(example);
    } else {
      set__displayExample(false);
      set__displayStatistics(true);
      pause();
      set__displayStopButton(false);
    }
  };
  const onSaveResults = () => {
    let rightTasks = 0;
    resultsList.forEach((item) => {
      if (item.doneExcercise) {
        rightTasks++;
      }
    });

    const statisticData = {
      totalTasks: resultsList.length,
      rightTasks,
      wrongTasks: resultsList.length - rightTasks,
      totalTime: time,
    };
    dispatch(update__statistic(statisticData));
    dispatch(resetStatistic());
    reset();

    set__displayExample(false);
    set__displayStatistics(false);
    set_numberOf_Task(0);
    set__displaySettings(true);
    set__disableStartButton(false);
    set__resultsList([]);
    set__userAnswer('');
  };

  return (
    <Grid container direction='column'>
      <Grid item>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <Grid container alignItems='center' justifyContent='flex-start'>
              <Grid item sx={{ mr: '5px' }}>
                <Button
                  variant='contained'
                  component={Link}
                  href='/lessons/level_4/substruction'
                >
                  Предыдущий урок
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  component={Link}
                  href='/lessons/level_5/squaring-ending-5'
                >
                  Следующий Урок
                </Button>
              </Grid>
            </Grid>
          </Grid>
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
        </Grid>
      </Grid>

      <Grid item>
        <Typography variant='h3' align='center'>
          Возведение в квадрат чисел,
        </Typography>
        <Typography variant='h3' align='center'>
          оканчивающихся на 5
        </Typography>
      </Grid>
      <Grid item>
        <Description1 />
      </Grid>
      <Grid item sx={{ display: displaySettings ? 'block' : 'none' }}>
        <Typography variant='h6' align='center'>
          Настройки
        </Typography>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          direction='column'
        >
          <Grid item>
            <TextField
              margin='normal'
              required
              name='examples_number'
              label='Количество упражнений'
              type='number'
              id='examples_number'
              onChange={(e) => set__examplesNumber(e.target.value)}
              value={examplesNumber}
            />
          </Grid>

          <Grid
            item
            sx={
              {
                // display: 'none',
              }
            }
          >
            <TextField
              margin='normal'
              required
              name='max'
              label='Максимум левого'
              type='number'
              id='max'
              onChange={(e) => set__max(e.target.value)}
              value={max}
            />
          </Grid>

          <Grid item>
            <Button
              disabled={disableStartButton}
              onClick={onStart}
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Поехали
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item sx={{ display: displayStopButton ? 'block' : 'none' }}>
        <Grid container justifyContent={`center`} alignItems='center'>
          <Grid item>
            <Button
              variant='contained'
              color='error'
              sx={{ margin: 'auto' }}
              onClick={onStopExercise}
            >
              Остановить упражнения
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item sx={{ display: displayExample ? 'block' : 'none' }}>
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
                      {example ? `${example.number_1}` : ''} <sup>2</sup>
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant='h3' align='center'>
                      {operators[4]}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <TextField
                      // margin='normal'
                      // required
                      // fullWidth

                      name='userAnswer'
                      label='Ответ'
                      type='number'
                      id='userAnswer'
                      value={userAnswer}
                      onChange={(e) => set__userAnswer(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' || e.key === 'Tab') {
                          const onAnswer_Button =
                            document.getElementById('answerButton');

                          onAnswer_Button.focus();
                        }
                      }}
                    />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell colSpan={3}>
                    <Button
                      id='answerButton'
                      fullWidth
                      variant='contained'
                      onClick={onAnswer}
                      disabled={userAnswer.length < 2}
                    >
                      OK № {numberOf_Task}
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid item sx={{ display: displayStatistics ? 'block' : 'none' }}>
        <Typography variant='h4' align='center'>
          Ваши результаты
        </Typography>

        <TableContainer component={Paper}>
          <Table
            sx={{
              width: '70%',
              margin: 'auto',
              minWidth: '550px',
            }}
            align='center'
            aria-label='simple table'
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant='h6' align='center'>
                    Пример
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography variant='h6' align='center'>
                    решение ваше
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6' align='center'>
                    Правильно
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography variant='h6' align='center'>
                    Сдан пример
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resultsList &&
                resultsList.length > 0 &&
                resultsList.map((item, index) => (
                  <TableRow key={index} sx={{}}>
                    <TableCell>
                      <Typography variant='h6' align='center'>
                        {item.example}
                        <sup>2</sup>
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography
                        variant='h6'
                        align='center'
                        color={
                          item.userAnswer - item.resultRight === 0
                            ? 'success.main'
                            : 'error.main'
                        }
                      >
                        {item.userAnswer}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant='h6' align='center'>
                        {item.resultRight}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography
                        variant='h6'
                        align='center'
                        color={
                          item.doneExcercise ? 'success.main' : 'error.main'
                        }
                      >
                        {item.doneExcercise ? 'ок!' : 'ошибка!'}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
            <TableFooter>
              <TableRow
                sx={
                  {
                    // padding: 0,
                  }
                }
              >
                <TableCell
                  colSpan={2}
                  sx={
                    {
                      //  border: '1px solid #0F0'
                    }
                  }
                >
                  <Button
                    fullWidth
                    disabled={!user}
                    onClick={onSaveResults}
                    variant='contained'
                    sx={
                      {
                        // padding: 0
                      }
                    }
                  >
                    {user
                      ? 'Сохранить результаты'
                      : 'Не возможно сохранить результаты - вы не авторизованы'}
                  </Button>
                </TableCell>
                <TableCell
                  // align='center'
                  colSpan={2}
                  sx={{
                    // border: '1px solid #00F',
                    display: !user ? 'table-cell' : 'none',
                  }}
                >
                  <Button
                    fullWidth
                    onClick={onContinue}
                    variant='contained'
                    sx={{ margin: 'auto' }}
                  >
                    Тренироваться еще
                  </Button>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default SquaringEnding5;
