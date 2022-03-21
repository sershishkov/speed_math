import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTimer } from 'use-timer';
import { genExample__DivByMultipliers } from '../../../../utils/generateExample';
import {
  update__statistic,
  reset as resetStatistic,
} from '../../../../features/statistics/statisticSlice';
import classes from './styles.module.scss';
import Description1 from './Description1';

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

// const operators = ['+', '-', '*', '/', '='];
const initialStateUserAnswers = {
  userDigit_1: '',
  userDigit_2: '',
  userDigit_3: '',
  userDigit_4: '',
  userDigit_5: '',
  userDigit_6: '',
  userDigit_7: '',
  userAnswerRem: '',

  tempUserDigit_1: '',
  tempUserDigit_2: '',
  tempUserDigit_3: '',
  tempUserDigit_4: '',
  tempUserDigit_5: '',
  tempUserDigit_6: '',
  tempUserDigit_7: '',
  tempAnswerRem_1: '',
  tempAnswerRem_2: '',
};

function DivByMultipliers() {
  // const [min, set__min] = useState(100);
  const [max, set__max] = useState(9999999);

  const [examplesNumber, set__examplesNumber] = useState(10);
  const [example, set__example] = useState(null);
  const [arrOfDivident, set__arrOfDivident] = useState([]);
  const [userAnswers, set__userAnswers] = useState(initialStateUserAnswers);

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
  const {
    userDigit_1,
    userDigit_2,
    userDigit_3,
    userDigit_4,
    userDigit_5,
    userDigit_6,
    userDigit_7,
    userAnswerRem,
    tempUserDigit_1,
    tempUserDigit_2,
    tempUserDigit_3,
    tempUserDigit_4,
    tempUserDigit_5,
    tempUserDigit_6,
    tempUserDigit_7,
    tempAnswerRem_1,
    tempAnswerRem_2,
  } = userAnswers;

  const onChangeUserAnswers = (e) => {
    set__userAnswers({
      ...userAnswers,
      [e.target.name]: e.target.value,
    });
  };

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
    set__arrOfDivident([]);
  };

  const nextTask = () => {
    const newExample = new genExample__DivByMultipliers(max);
    const newArrOfDivident = newExample.divident.toString().split('');
    set__example(newExample);
    set__arrOfDivident(newArrOfDivident);
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
    set__userAnswers(initialStateUserAnswers);
    set__arrOfDivident([]);
    set__displayStopButton(false);
  };
  // console.log(arrOfDivident);
  const onAnswer = () => {
    const userResult = Number(
      `${userDigit_1}${userDigit_2}${userDigit_3}${userDigit_4}${userDigit_5}${userDigit_6}${userDigit_7}`
    );
    const doneResult = +userResult - +example.resultRight === 0;
    const doneReminder = +userAnswerRem - +example.reminderOfDivision === 0;

    const obj = {
      example: `${example.divident}/${example.divider_Total}`,
      userResult,
      userAnswerRem,
      resultRight: example.resultRight,
      reminderOfDivision: example.reminderOfDivision,
      doneExcercise: doneResult && doneReminder,
    };
    set__resultsList((prevState) => [...prevState, obj]);

    set__userAnswers(initialStateUserAnswers);
    set__arrOfDivident([]);
    if (numberOf_Task < examplesNumber) {
      nextTask();
      const userDigit_1_Input = document.getElementById('userDigit_1');

      userDigit_1_Input.focus();
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
    set__arrOfDivident([]);
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
                  href='/lessons/level_6/division-by-single-number'
                >
                  Предыдущий урок
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  component={Link}
                  href='/lessons/level_6/division-by-multipliers'
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
          Деление в столбик
        </Typography>
        <Typography variant='h3' align='center'>
          по множителям
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

          {/* <Grid
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
              name='min'
              label='Мин значение'
              type='number'
              id='min'
              onChange={(e) => set__min(e.target.value)}
              value={min}
            />
          </Grid> */}
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
              label='Макс значение'
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
        <Typography variant='h5' align='center' sx={{ mt: '1rem' }}>
          {example ? `${example.divident} / ${example.divider_Total} =` : ''}
        </Typography>

        <Grid container justifyContent='space-evenly' alignItems='center'>
          <TableContainer
            component={Paper}
            className={classes.example_tablecontainer}
          >
            <Table className={classes.example_table}>
              <TableBody className={classes.example_table_body}>
                <TableRow className={classes.example_table_row}>
                  <TableCell className={classes.example_cell_divider}>
                    <Typography variant='h6' align='center'>
                      {example ? `${example.divider_1}` : ''}
                    </Typography>
                  </TableCell>
                  <TableCell className={classes.example_cell_divident}>
                    {arrOfDivident && arrOfDivident.length > 0 ? (
                      <Grid container className={classes.divident_container}>
                        {arrOfDivident.map((item, index) => (
                          <Grid
                            item
                            className={classes.divident_item}
                            key={index}
                          >
                            {index !== 0 && (
                              <TextField
                                type='number'
                                name={`dividentHint${index + 1}`}
                                id={`dividentHint${index + 1}`}
                                className={classes.divident_hint}
                              />
                            )}

                            <Typography
                              variant='h6'
                              className={classes.divident_field}
                            >
                              {`${item}`}
                            </Typography>
                          </Grid>
                        ))}
                      </Grid>
                    ) : (
                      ''
                    )}
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow className={classes.example_table_row}>
                  <TableCell className={classes.example_cell_divider}>
                    <Typography variant='h6' align='center'>
                      {example ? `${example.divider_2}` : ''}
                    </Typography>
                  </TableCell>
                  <TableCell className={classes.example_cell_result_temp}>
                    <Grid
                      container
                      direction='row'
                      justifyContent='flex-start'
                      alignItems='center'
                      className={classes.digit_container_temp}
                    >
                      <Grid item className={classes.digit_item_temp}>
                        <TextField
                          type='number'
                          name='tempUserDigit_1'
                          id='tempUserDigit_1'
                          value={tempUserDigit_1}
                          onChange={onChangeUserAnswers}
                          className={classes.digit_field_temp}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              const userDigit_2_Input =
                                document.getElementById('userDigit_2');
                              userDigit_2_Input.focus();
                            }
                          }}
                        />
                      </Grid>
                      <Grid item className={classes.digit_item_temp}>
                        <TextField
                          type='number'
                          name={`dividentHint${tempUserDigit_2}`}
                          id={`dividentHint${tempUserDigit_2}`}
                          className={classes.divident_hint_temp}
                        />
                        <TextField
                          type='number'
                          name='userDigit_2'
                          id='userDigit_2'
                          value={userDigit_2}
                          onChange={onChangeUserAnswers}
                          className={classes.digit_field_temp}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              const userDigit_3_Input =
                                document.getElementById('userDigit_3');
                              userDigit_3_Input.focus();
                            }
                          }}
                        />
                      </Grid>
                      <Grid item className={classes.digit_item_temp}>
                        <TextField
                          type='number'
                          name='userDigit_3'
                          id='userDigit_3'
                          value={userDigit_3}
                          onChange={onChangeUserAnswers}
                          className={classes.digit_field_temp}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              const userDigit_4_Input =
                                document.getElementById('userDigit_4');
                              userDigit_4_Input.focus();
                            }
                          }}
                        />
                      </Grid>
                      <Grid item className={classes.digit_item_temp}>
                        <TextField
                          type='number'
                          name='userDigit_4'
                          id='userDigit_4'
                          value={userDigit_4}
                          onChange={onChangeUserAnswers}
                          className={classes.digit_field_temp}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              const userDigit_5_Input =
                                document.getElementById('userDigit_5');
                              userDigit_5_Input.focus();
                            }
                          }}
                        />
                      </Grid>
                      <Grid item className={classes.digit_item_temp}>
                        <TextField
                          type='number'
                          name='userDigit_5'
                          id='userDigit_5'
                          value={userDigit_5}
                          onChange={onChangeUserAnswers}
                          className={classes.digit_field_temp}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              const userDigit_6_Input =
                                document.getElementById('userDigit_6');
                              userDigit_6_Input.focus();
                            }
                          }}
                        />
                      </Grid>
                      <Grid item className={classes.digit_item_temp}>
                        <TextField
                          type='number'
                          name='userDigit_6'
                          id='userDigit_6'
                          value={userDigit_6}
                          onChange={onChangeUserAnswers}
                          className={classes.digit_field_temp}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              const userDigit_7_Input =
                                document.getElementById('userDigit_7');
                              userDigit_7_Input.focus();
                            }
                          }}
                        />
                      </Grid>
                      <Grid item className={classes.digit_item_temp}>
                        <TextField
                          type='number'
                          name='userDigit_7'
                          id='userDigit_7'
                          value={userDigit_7}
                          onChange={onChangeUserAnswers}
                          className={classes.digit_field_temp}
                          min={0}
                          max={9}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              const userAnswerRem_Input =
                                document.getElementById('userAnswerRem');
                              userAnswerRem_Input.focus();
                            }
                          }}
                        />
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell className={classes.example_cell_reminder_temp}>
                    <span>Остаток:</span>
                    <TextField
                      type='number'
                      name='tempAnswerRem_1'
                      id='tempAnswerRem_1'
                      // label='Остаток'
                      value={tempAnswerRem_1}
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

                <TableRow className={classes.example_table_row}>
                  <TableCell></TableCell>
                  <TableCell className={classes.example_cell_result}>
                    <Grid
                      container
                      direction='row'
                      justifyContent='flex-start'
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
                          name='userDigit_2'
                          id='userDigit_2'
                          value={userDigit_2}
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
                          name='userDigit_3'
                          id='userDigit_3'
                          value={userDigit_3}
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
                          name='userDigit_4'
                          id='userDigit_4'
                          value={userDigit_4}
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
                          name='userDigit_5'
                          id='userDigit_5'
                          value={userDigit_5}
                          onChange={onChangeUserAnswers}
                          className={classes.digit_field}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              const userDigit_6_Input =
                                document.getElementById('userDigit_6');
                              userDigit_6_Input.focus();
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
                              const userDigit_7_Input =
                                document.getElementById('userDigit_7');
                              userDigit_7_Input.focus();
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
                              const userAnswerRem_Input =
                                document.getElementById('userAnswerRem');
                              userAnswerRem_Input.focus();
                            }
                          }}
                        />
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell className={classes.example_cell_reminder}>
                    <span>Остаток:</span>
                    <TextField
                      type='number'
                      name='tempAnswerRem_2'
                      id='tempAnswerRem_2'
                      // label='Остаток'
                      value={tempAnswerRem_2}
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

                <TableRow className={classes.example_table_row}>
                  <TableCell></TableCell>

                  <TableCell
                    className={classes.example_cell_result}
                  ></TableCell>
                  <TableCell className={classes.example_cell_reminder}>
                    <span>Остаток пример:</span>
                    <TextField
                      type='number'
                      name='userAnswerRem'
                      id='userAnswerRem'
                      // label='Остаток'
                      value={userAnswerRem}
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

                <TableRow>
                  <TableCell colSpan={3}>
                    <Button
                      id='answerButton'
                      fullWidth
                      variant='contained'
                      onClick={onAnswer}
                      disabled={
                        `${userDigit_1}${userDigit_2}${userDigit_3}${userDigit_4}${userDigit_5}${userDigit_6}${userDigit_7}`
                          .length < 1
                      }
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
                    Комп
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography variant='h6' align='center'>
                    остаток ваше
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6' align='center'>
                    Комп
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
                          item.userAnswerRem - item.reminderOfDivision === 0
                            ? 'success.main'
                            : 'error.main'
                        }
                      >
                        {item.userAnswerRem}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant='h6' align='center'>
                        {item.reminderOfDivision}
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
                  colSpan={3}
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
                  colSpan={3}
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

export default DivByMultipliers;
