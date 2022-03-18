import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTimer } from 'use-timer';
import { genExample__Substr_WithCheck } from '../../../../utils/generateExample';
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

const operators = ['+', '-', '*', '/', '='];
const initialStateUserAnswers = {
  userDigit_1: '',
  userDigit_2: '',
  userDigit_3: '',
  userDigit_4: '',
  userDigit_5: '',
  userDigit_6: '',
  userDigit_7: '',
  userCheckNumber_1: '',
  userCheckNumber_2: '',
  userCheckNumber_3: '',
  userCheckSumNumbers: '',
  userCheckResult: '',
};

function Substruction() {
  const [min, set__min] = useState(1000000);
  const [max, set__max] = useState(9999999);

  const [userAnswers, set__userAnswers] = useState(initialStateUserAnswers);

  const {
    userDigit_1,
    userDigit_2,
    userDigit_3,
    userDigit_4,
    userDigit_5,
    userDigit_6,
    userDigit_7,
    userCheckNumber_1,
    userCheckNumber_2,
    userCheckSumNumbers,
    userCheckResult,
  } = userAnswers;

  const onChangeUserAnswers = (e) => {
    set__userAnswers({
      ...userAnswers,
      [e.target.name]: e.target.value,
    });
  };

  const [examplesNumber, set__examplesNumber] = useState(10);
  const [example, set__example] = useState(null);

  const [displayExample, set__displayExample] = useState(false);
  const [displaySettings, set__displaySettings] = useState(true);
  const [displayStatistics, set__displayStatistics] = useState(false);
  const [disableStartButton, set__disableStartButton] = useState(false);
  const [displayStopButton, set__displayStopButton] = useState(false);
  const [numberOf_Task, set_numberOf_Task] = useState(0);
  const [resultsList, set__resultsList] = useState([]);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { time, start, pause, reset } = useTimer();

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
    set__userAnswers(initialStateUserAnswers);
  };

  const nextTask = () => {
    set__example(new genExample__Substr_WithCheck(min, max));
    set_numberOf_Task((prevState) => prevState + 1);
  };
  const onContinue = () => {
    nextTask();

    dispatch(resetStatistic());
    reset();

    set__displayExample(false);
    set__displayStatistics(false);
    set_numberOf_Task(0);
    set__displaySettings(true);
    set__disableStartButton(false);
    set__resultsList([]);
    set__displayStopButton(false);
    set__userAnswers(initialStateUserAnswers);
  };

  const onAnswer = () => {
    const userResult = Number(
      `${userDigit_1}${userDigit_2}${userDigit_3}${userDigit_4}${userDigit_5}${userDigit_6}${userDigit_7}`
    );
    const doneResult = +userResult - +example.resultRight === 0;
    const doneCheck =
      +userCheckNumber_1 === +example.checkNumber_1 &&
      +userCheckNumber_2 === +example.checkNumber_2 &&
      +userCheckSumNumbers === +example.checkResultLeft &&
      +userCheckResult === +example.checkResultRight;

    const obj = {
      example: `${example.number_1} ${operators[1]} ${example.number_2}`,

      userResult,
      userCheckNumber_1,
      userCheckNumber_2,

      userCheckSumNumbers,
      userCheckResult,

      resultRight: example.resultRight,
      checkNumber_1: example.checkNumber_1,
      checkNumber_2: example.checkNumber_2,

      checkResultLeft: example.checkResultLeft,
      checkResultRight: example.checkResultRight,

      doneResult,
      doneCheck,
      doneExcercise: doneResult && doneCheck,
    };
    set__resultsList((prevState) => [...prevState, obj]);

    set__userAnswers(initialStateUserAnswers);

    if (numberOf_Task < examplesNumber) {
      nextTask();
      const userDigit_7_Input = document.getElementById('userDigit_7');

      userDigit_7_Input.focus();
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
    set__userAnswers(initialStateUserAnswers);
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
                  href='/lessons/level_4/addition'
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
          Вычитание
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
            sx={{
              display: 'none',
            }}
          >
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

          <Grid
            item
            sx={{
              display: 'none',
            }}
          >
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
            sx={
              {
                // border: '1px solid blue'
              }
            }
          >
            <Table
              align='center'
              aria-label='simple table'
              sx={{
                // border: '1px solid red',
                width: '50%',
                minWidth: '300px',
                margin: 'auto',
                padding: 0,
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      width: '50%',
                    }}
                  >
                    <Typography variant='h6' align='center'>
                      вычтитите число!!!
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='h6' align='center'>
                      проверка чисел
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='h6' align='center'>
                      проверка сумм
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ padding: 0 }}>
                    <Typography variant='h6' className={classes.number_field}>
                      {example ? `${example.number_1}` : ''}
                    </Typography>
                  </TableCell>
                  <TableCell align='center'>
                    <TextField
                      className={classes.check_field}
                      name='userCheckNumber_1'
                      // label='Ответ'
                      type='number'
                      id='userCheckNumber_1'
                      value={userCheckNumber_1}
                      onChange={onChangeUserAnswers}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' || e.key === 'Tab') {
                          const userCheckNumber_2_Input =
                            document.getElementById('userCheckNumber_2');

                          userCheckNumber_2_Input.focus();
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ padding: 0 }}>
                    <Typography variant='h6' className={classes.number_field}>
                      {example ? `${example.number_2}` : ''}
                    </Typography>
                  </TableCell>
                  <TableCell align='center'>
                    <TextField
                      className={classes.check_field}
                      name='userCheckNumber_2'
                      // label='Ответ'
                      type='number'
                      id='userCheckNumber_2'
                      value={userCheckNumber_2}
                      onChange={onChangeUserAnswers}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' || e.key === 'Tab') {
                          const userCheckSumNumbers_Input =
                            document.getElementById('userCheckSumNumbers');

                          userCheckSumNumbers_Input.focus();
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell align='center'>
                    <TextField
                      className={classes.check_field}
                      name='userCheckSumNumbers'
                      // label='Ответ'
                      type='number'
                      id='userCheckSumNumbers'
                      value={userCheckSumNumbers}
                      onChange={onChangeUserAnswers}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' || e.key === 'Tab') {
                          const userCheckResult_Input =
                            document.getElementById('userCheckResult');

                          userCheckResult_Input.focus();
                        }
                      }}
                    />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ padding: 0 }}>
                    <Grid
                      container
                      direction='row'
                      justifyContent='flex-end'
                      alignItems='center'
                      className={classes.digit_container}
                    >
                      <Grid item className={classes.digit_item}>
                        <TextField
                          type='number'
                          name='userDigit_1'
                          id='userDigit_1'
                          value={userDigit_1}
                          onChange={onChangeUserAnswers}
                          className={classes.digit_field}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              const userCheckNumber_1_Input =
                                document.getElementById('userCheckNumber_1');
                              userCheckNumber_1_Input.focus();
                            }
                          }}
                        />
                      </Grid>
                      <Grid item className={classes.digit_item}>
                        <TextField
                          type='number'
                          name='userDigit_2'
                          id='userDigit_2'
                          value={userDigit_2}
                          onChange={onChangeUserAnswers}
                          className={classes.digit_field}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              const userDigit_1_Input =
                                document.getElementById('userDigit_1');
                              userDigit_1_Input.focus();
                            }
                          }}
                        />
                      </Grid>
                      <Grid item className={classes.digit_item}>
                        <TextField
                          type='number'
                          name='userDigit_3'
                          id='userDigit_3'
                          value={userDigit_3}
                          onChange={onChangeUserAnswers}
                          className={classes.digit_field}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              const userDigit_2_Input =
                                document.getElementById('userDigit_2');
                              userDigit_2_Input.focus();
                            }
                          }}
                        />
                      </Grid>
                      <Grid item className={classes.digit_item}>
                        <TextField
                          type='number'
                          name='userDigit_4'
                          id='userDigit_4'
                          value={userDigit_4}
                          onChange={onChangeUserAnswers}
                          className={classes.digit_field}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              const userDigit_3_Input =
                                document.getElementById('userDigit_3');
                              userDigit_3_Input.focus();
                            }
                          }}
                        />
                      </Grid>
                      <Grid item className={classes.digit_item}>
                        <TextField
                          type='number'
                          name='userDigit_5'
                          id='userDigit_5'
                          value={userDigit_5}
                          onChange={onChangeUserAnswers}
                          className={classes.digit_field}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              const userDigit_4_Input =
                                document.getElementById('userDigit_4');
                              userDigit_4_Input.focus();
                            }
                          }}
                        />
                      </Grid>
                      <Grid item className={classes.digit_item}>
                        <TextField
                          type='number'
                          name='userDigit_6'
                          id='userDigit_6'
                          value={userDigit_6}
                          onChange={onChangeUserAnswers}
                          className={classes.digit_field}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              const userDigit_5_Input =
                                document.getElementById('userDigit_5');
                              userDigit_5_Input.focus();
                            }
                          }}
                        />
                      </Grid>
                      <Grid item className={classes.digit_item}>
                        <TextField
                          type='number'
                          name='userDigit_7'
                          id='userDigit_7'
                          value={userDigit_7}
                          onChange={onChangeUserAnswers}
                          className={classes.digit_field}
                          min={0}
                          max={9}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              const userDigit_6_Input =
                                document.getElementById('userDigit_6');
                              userDigit_6_Input.focus();
                            }
                          }}
                        />
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell align='center'>
                    <TextField
                      className={classes.check_field}
                      name='userCheckResult'
                      // label='Ответ'
                      type='number'
                      id='userCheckResult'
                      value={userCheckResult}
                      onChange={onChangeUserAnswers}
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
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>
                    <Button
                      fullWidth
                      variant='contained'
                      id='answerButton'
                      onClick={onAnswer}
                      disabled={
                        userDigit_7.length < 1 ||
                        userCheckNumber_1.length < 1 ||
                        userCheckNumber_2.length < 1 ||
                        userCheckSumNumbers.length < 1 ||
                        userCheckResult.length < 1
                      }
                    >
                      OK № {numberOf_Task}
                    </Button>
                  </TableCell>
                </TableRow>
              </TableFooter>
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
            sx={{ width: '90%', margin: 'auto', minWidth: '550px' }}
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
                    чей ответ?
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6' align='center'>
                    решение
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6' align='center'>
                    проверка 1
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6' align='center'>
                    проверка 2
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography variant='h6' align='center'>
                    контрольное число слева
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6' align='center'>
                    контрольное число справа
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
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Grid
                        container
                        justifyContent='flex-start'
                        alignItems='center'
                        direction='column'
                      >
                        <Grid item>
                          <Typography variant='h6' align='center'>
                            Ваш
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant='h6' align='center'>
                            Комп
                          </Typography>
                        </Grid>
                      </Grid>
                    </TableCell>

                    <TableCell>
                      <Grid
                        container
                        justifyContent='flex-start'
                        alignItems='center'
                        direction='column'
                      >
                        <Grid item>
                          <Typography
                            variant='h6'
                            align='center'
                            color={
                              item.userResult - item.resultRight === 0
                                ? 'success.main'
                                : 'error.main'
                            }
                          >
                            {item.userResult}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant='h6' align='center'>
                            {item.resultRight}
                          </Typography>
                        </Grid>
                      </Grid>
                    </TableCell>

                    <TableCell>
                      <Grid
                        container
                        justifyContent='flex-start'
                        alignItems='center'
                        direction='column'
                      >
                        <Grid item>
                          <Typography
                            variant='h6'
                            align='center'
                            color={
                              item.userCheckNumber_1 - item.checkNumber_1 === 0
                                ? 'success.main'
                                : 'error.main'
                            }
                          >
                            {item.userCheckNumber_1}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant='h6' align='center'>
                            {item.checkNumber_1}
                          </Typography>
                        </Grid>
                      </Grid>
                    </TableCell>

                    <TableCell>
                      <Grid
                        container
                        justifyContent='flex-start'
                        alignItems='center'
                        direction='column'
                      >
                        <Grid item>
                          <Typography
                            variant='h6'
                            align='center'
                            color={
                              item.userCheckNumber_2 - item.checkNumber_2 === 0
                                ? 'success.main'
                                : 'error.main'
                            }
                          >
                            {item.userCheckNumber_2}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant='h6' align='center'>
                            {item.checkNumber_2}
                          </Typography>
                        </Grid>
                      </Grid>
                    </TableCell>

                    <TableCell>
                      <Grid
                        container
                        justifyContent='flex-start'
                        alignItems='center'
                        direction='column'
                      >
                        <Grid item>
                          <Typography
                            variant='h6'
                            align='center'
                            color={
                              item.userCheckSumNumbers -
                                item.checkResultLeft ===
                              0
                                ? 'success.main'
                                : 'error.main'
                            }
                          >
                            {item.userCheckSumNumbers}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant='h6' align='center'>
                            {item.checkResultLeft}
                          </Typography>
                        </Grid>
                      </Grid>
                    </TableCell>

                    <TableCell>
                      <Grid
                        container
                        justifyContent='flex-start'
                        alignItems='center'
                        direction='column'
                      >
                        <Grid item>
                          <Typography
                            variant='h6'
                            align='center'
                            color={
                              item.userCheckResult - item.checkResultRight === 0
                                ? 'success.main'
                                : 'error.main'
                            }
                          >
                            {item.userCheckResult}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant='h6' align='center'>
                            {item.checkResultRight}
                          </Typography>
                        </Grid>
                      </Grid>
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
                  colSpan={4}
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
                  colSpan={4}
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

export default Substruction;
