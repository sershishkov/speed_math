import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import Paper from '@mui/material/Paper';

import { generateExample__AddMultSub } from '../../../utils/generateExample';

const operators = ['+', '-', '*', '/', '='];

function SimpleAddition() {
  const [min, set__min] = useState(1);
  const [max, set__max] = useState(100);
  const [examplesNumber, set__examplesNumber] = useState(10);
  const [example, set__example] = useState(null);
  const [userAnswer, set__userAnswer] = useState([]);
  const [displayExample, set__displayExample] = useState(false);
  const [displaySettings, set__displaySettings] = useState(true);
  const [displayStatistics, set__displayStatistics] = useState(false);
  const [disableStartButton, set__disableStartButton] = useState(false);
  const [numberOf_Task, set_numberOf_Task] = useState(0);

  const [resultsList, set__resultsList] = useState([]);

  // const [statisticObject, set__statisticObject] = useState({
  //   // simpleAdditionScore: null,
  //   // simpleAddition_Done: false,
  //   // totalAttempts: null,
  //   // exersizeTime: null,
  //   // averageTimePerTask: null,
  //   // totalExersizesTime: null,
  //   // rightAnswers: null,
  //   // wrongAnswers: null,
  //   resultsList: [],
  // });

  const onStart = () => {
    set__displayExample(true);
    set__displaySettings(false);
    set__disableStartButton(true);
    nextTask();
  };

  const nextTask = () => {
    set__example(new generateExample__AddMultSub(min, max));
    set_numberOf_Task((prevState) => prevState + 1);
  };

  const onAnswer = () => {
    const obj = {
      example: `${example.numberLeft} ${operators[0]} ${example.numberRight}`,
      userAnswer,
      rightAnswer: example.result,
      done: +userAnswer === +example.result,
    };
    set__resultsList((prevState) => [...prevState, obj]);

    set__userAnswer('');

    console.log(numberOf_Task);

    if (numberOf_Task < examplesNumber) {
      nextTask();
    } else {
      set__displayExample(false);
      set__displayStatistics(true);
    }
  };
  const onSaveResults = () => {
    set__displayExample(true);
    set__displayStatistics(false);
    set_numberOf_Task(0);
    set__displaySettings(true);
    set__disableStartButton(false);
    set__resultsList([]);
    set__userAnswer('');
  };

  return (
    <Grid container direction='column'>
      <Grid item></Grid>
      <Grid item>
        <Typography variant='h6' align='center'>
          Решите упражнения
        </Typography>
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
          <Grid item>
            <TextField
              margin='normal'
              required
              name='min'
              label='Минимальное значение'
              type='number'
              id='min'
              onChange={(e) => set__min(e.target.value)}
              value={min}
            />
          </Grid>
          <Grid item>
            <TextField
              margin='normal'
              required
              name='max'
              label='Максимальное значение'
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
      <Grid item sx={{ display: displayExample ? 'block' : 'none' }}>
        <Typography variant='h5' align='center'>
          Упражнения
        </Typography>
        <Grid container justifyContent='space-evenly' alignItems='center'>
          <Grid item>
            <Typography variant='h4' align='center'>
              {example ? example.numberLeft : ''}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h4' align='center'>
              {operators[0]}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h4' align='center'>
              {example ? example.numberRight : ''}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h4' align='center'>
              {operators[4]}
            </Typography>
          </Grid>
          <Grid item>
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
            />
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              onClick={onAnswer}
              disabled={userAnswer.length < 1}
            >
              OK
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{ display: displayStatistics ? 'block' : 'none' }}>
        <Typography variant='h1' align='center'>
          Statistic list
        </Typography>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            align='center'
            aria-label='simple table'
          >
            <TableHead>
              <TableRow>
                <TableCell>Пример</TableCell>
                <TableCell>Ваш ответ</TableCell>
                <TableCell>Ответ</TableCell>
                <TableCell>Сдано?</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resultsList &&
                resultsList.length > 0 &&
                resultsList.map((item, index) => (
                  <TableRow key={index} sx={{}}>
                    <TableCell>{item.example}</TableCell>
                    <TableCell>{item.userAnswer}</TableCell>
                    <TableCell>{item.rightAnswer}</TableCell>
                    <TableCell
                      sx={{ color: item.done ? 'success.main' : 'error.main' }}
                    >
                      {item.done ? 'ok' : 'ошибка'}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4}>
                  <Button
                    fullWidth
                    onClick={onSaveResults}
                    variant='contained'
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Сохранить результаты
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

export default SimpleAddition;
