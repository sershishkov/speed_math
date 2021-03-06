import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTimer } from 'use-timer';
import { genExample_Mult__WithDifferentRangers } from '../../../../utils/generateExample';
import {
  update__statistic,
  reset as resetStatistic,
} from '../../../../features/statistics/statisticSlice';
import Description1 from './Description1';
import Description2 from './Description2';
import Description3 from './Description3';

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

function TwoRefNumbers() {
  const [minLeft, set__minLeft] = useState(11);
  const [maxLeft, set__maxLeft] = useState(19);
  const [minRight, set__minRight] = useState(90);
  const [maxRight, set__maxRight] = useState(99);
  const [referenceNumber1, set__referenceNumber1] = useState(20);
  const [referenceNumber2, set__referenceNumber2] = useState(5);
  const [examplesNumber, set__examplesNumber] = useState(10);
  const [example, set__example] = useState(null);
  const [userAnswer, set__userAnswer] = useState('');
  // const [userAnswer_CheckNumberLeft, set__userAnswer_CheckNumberLeft] =
  //   useState('');
  // const [userAnswer_CheckNumberRight, set__userAnswer_CheckNumberRight] =
  //   useState('');
  // const [userAnswer_CheckResultLeft, set__userAnswer_CheckResultLeft] =
  //   useState('');
  // const [userAnswer_CheckResultRight, set__userAnswer_CheckResultRight] =
  //   useState('');
  const [displayExample, set__displayExample] = useState(false);
  const [displaySettings, set__displaySettings] = useState(true);
  const [displayStatistics, set__displayStatistics] = useState(false);
  const [disableStartButton, set__disableStartButton] = useState(false);
  const [displayStopButton, set__displayStopButton] = useState(false);
  const [numberOf_Task, set_numberOf_Task] = useState(0);
  const [resultsList, set__resultsList] = useState([]);
  const [showHints, set__showHints] = useState(true);
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
    set__userAnswer('');
    // set__userAnswer_CheckNumberLeft('');
    // set__userAnswer_CheckNumberRight('');
    // set__userAnswer_CheckResultLeft('');
    // set__userAnswer_CheckResultRight('');
  };

  const nextTask = () => {
    set__example(
      new genExample_Mult__WithDifferentRangers(
        minLeft,
        maxLeft,
        minRight,
        maxRight
      )
    );
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
    set__userAnswer('');
    set__displayStopButton(false);
    // set__userAnswer_CheckNumberLeft('');
    // set__userAnswer_CheckNumberRight('');
    // set__userAnswer_CheckResultLeft('');
    // set__userAnswer_CheckResultRight('');
  };

  const onAnswer = () => {
    const doneExample = +userAnswer === +example.resultRight;
    // const doneCheck =
    //   +userAnswer_CheckNumberLeft === +example.checkNumberLeft &&
    //   +userAnswer_CheckNumberRight === +example.checkNumberRight &&
    //   +userAnswer_CheckResultLeft === +example.checkResultLeft &&
    //   +userAnswer_CheckResultRight === +example.checkResultRight;

    const obj = {
      example: `${example.numberLeft} ${operators[2]} ${example.numberRight}`,

      userAnswer,
      // userAnswer_CheckNumberLeft,
      // userAnswer_CheckNumberRight,
      // userAnswer_CheckResultLeft,
      // userAnswer_CheckResultRight,

      resultRight: example.resultRight,
      checkNumberLeft: example.checkNumberLeft,
      checkNumberRight: example.checkNumberRight,
      checkResultLeft: example.checkResultLeft,
      checkResultRight: example.checkResultRight,

      doneExample,
      // doneCheck,
      // doneExcercise: doneExample && doneCheck,
      doneExcercise: doneExample,
    };
    set__resultsList((prevState) => [...prevState, obj]);

    set__userAnswer('');
    // set__userAnswer_CheckNumberLeft('');
    // set__userAnswer_CheckNumberRight('');
    // set__userAnswer_CheckResultLeft('');
    // set__userAnswer_CheckResultRight('');

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
    // set__userAnswer_CheckNumberLeft('');
    // set__userAnswer_CheckNumberRight('');
    // set__userAnswer_CheckResultLeft('');
    // set__userAnswer_CheckResultRight('');
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
                  href='/lessons/level_3/decimals'
                >
                  ???????????????????? ????????
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  component={Link}
                  href='/lessons/level_4/addition'
                >
                  ?????????????????? ????????
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
          ?????????????????? ?? ??????????????
        </Typography>
        <Typography variant='h3' align='center'>
          ???????? ?????????????? ??????????
        </Typography>
      </Grid>
      <Grid item>
        <Description1 />
        <Description2 />
        <Description3 />
      </Grid>
      <Grid item sx={{ display: displaySettings ? 'block' : 'none' }}>
        <Typography variant='h6' align='center'>
          ??????????????????
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
              label='???????????????????? ????????????????????'
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
              name='minLeft'
              label='?????????????? ????????????'
              type='number'
              id='minLeft'
              onChange={(e) => set__minLeft(e.target.value)}
              value={minLeft}
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
              name='maxLeft'
              label='???????????????? ????????????'
              type='number'
              id='maxLeft'
              onChange={(e) => set__maxLeft(e.target.value)}
              value={maxLeft}
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
              name='minRight'
              label='?????????????? ??????????????'
              type='number'
              id='minRight'
              onChange={(e) => set__minRight(e.target.value)}
              value={minRight}
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
              name='maxRight'
              label='???????????????? ??????????????'
              type='number'
              id='maxRight'
              onChange={(e) => set__maxRight(e.target.value)}
              value={maxRight}
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
              name='referenceNumber1'
              label='?????????????? ?????????? 1'
              type='number'
              id='referenceNumber1'
              onChange={(e) => set__referenceNumber1(e.target.value)}
              value={referenceNumber1}
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
              name='referenceNumber2'
              label='?????????????? ?????????? 2'
              type='number'
              id='referenceNumber2'
              onChange={(e) => set__referenceNumber2(e.target.value)}
              value={referenceNumber2}
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              // value={showHints}
              control={
                <Switch
                  checked={showHints}
                  onChange={(e) => set__showHints(e.target.checked)}
                  color='primary'
                />
              }
              label={showHints ? '?????????????????? ??????????????????' : '???????????????? ????????????????'}
              labelPlacement='start'
            />
          </Grid>
          <Grid item>
            <Button
              disabled={disableStartButton}
              onClick={onStart}
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              ??????????????
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
              ???????????????????? ????????????????????
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item sx={{ display: displayExample ? 'block' : 'none' }}>
        <Typography variant='h5' align='center'>
          ????????????????????
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
                <TableRow sx={{ display: 'none' }}>
                  <TableCell sx={{ pr: 0 }}>
                    <Typography variant='h3' align='right'>
                      +
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant='h3'
                      align='center'
                      sx={{
                        borderRadius: '50%',
                        border: '2px solid #000',
                        width: '3rem',
                        height: '3rem',
                        fontSize: '2.3rem',
                      }}
                    >
                      {example && example.numberLeft > referenceNumber1
                        ? +example.numberLeft - referenceNumber1
                        : ''}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ pr: 0 }}>
                    <Typography variant='h3' align='right'>
                      +
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant='h3'
                      align='center'
                      sx={{
                        borderRadius: '50%',
                        border: '2px solid #000',
                        width: '3rem',
                        height: '3rem',
                        fontSize: '2.3rem',
                      }}
                    >
                      {example && example.numberRight > referenceNumber1
                        ? example.numberRight - referenceNumber1
                        : ''}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ pr: 0 }}>
                    <Typography variant='h3' align='right'></Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='h3' align='center'></Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography
                      variant='h3'
                      align='center'
                      color='error'
                      sx={{
                        borderRadius: '50%',
                        border: '2px solid #f00',
                        width: '4rem',
                        height: '4rem',
                        fontSize: '1.5rem',
                        lineHeight: 2.4,
                      }}
                    >
                      {`${referenceNumber1}x${referenceNumber2}`}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='h3' align='center'>
                      {example ? `${example.numberLeft}` : ''}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='h3' align='center'>
                      {operators[2]}
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
                    <TextField
                      // margin='normal'
                      // required
                      // fullWidth

                      name='userAnswer'
                      label='??????????'
                      type='number'
                      id='userAnswer'
                      value={userAnswer}
                      onChange={(e) => set__userAnswer(e.target.value)}
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

                <TableRow sx={{ display: showHints ? 'table-row' : 'none' }}>
                  <TableCell sx={{ pr: 0 }}>
                    <Typography variant='h3' align='right'>
                      -
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant='h3'
                      align='center'
                      sx={{
                        borderRadius: '50%',
                        border: '2px solid #000',
                        width: '3rem',
                        height: '3rem',
                        fontSize: '2.3rem',
                      }}
                    >
                      {example && example.numberLeft < referenceNumber1
                        ? referenceNumber1 - example.numberLeft
                        : ''}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ pr: 0 }}>
                    <Typography variant='h3' align='right'>
                      -
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant='h3'
                      align='center'
                      sx={{
                        borderRadius: '50%',
                        border: '2px solid #000',
                        width: '3rem',
                        height: '3rem',
                        fontSize: '2.3rem',
                      }}
                    >
                      {example &&
                      example.numberRight < referenceNumber1 * referenceNumber2
                        ? referenceNumber1 * referenceNumber2 -
                          example.numberRight
                        : ''}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ pr: 0 }}>
                    <Typography variant='h3' align='right'></Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='h3' align='center'></Typography>
                  </TableCell>
                </TableRow>
                <TableRow sx={{ display: showHints ? 'table-row' : 'none' }}>
                  <TableCell sx={{ pr: 0 }}>
                    <Typography variant='h3' align='right'>
                      -
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant='h3'
                      align='center'
                      sx={{
                        borderRadius: '50%',
                        border: '2px solid #000',
                        width: '3rem',
                        height: '3rem',
                        fontSize: '2.3rem',
                      }}
                    >
                      {example && example.numberLeft < referenceNumber1
                        ? (referenceNumber1 - example.numberLeft) *
                          referenceNumber2
                        : ''}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ display: 'none' }}>
                    <Typography variant='h3' align='right'>
                      -
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ display: 'none' }}>
                    <Typography
                      variant='h3'
                      align='center'
                      sx={{
                        borderRadius: '50%',
                        border: '2px solid #000',
                        width: '3rem',
                        height: '3rem',
                        fontSize: '2.3rem',
                      }}
                    >
                      {example &&
                      example.numberRight < referenceNumber1 * referenceNumber2
                        ? referenceNumber1 * referenceNumber2 -
                          example.numberRight
                        : ''}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ pr: 0 }}>
                    <Typography variant='h3' align='right'></Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='h3' align='center'></Typography>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell colSpan={8}>
                    <Typography variant='h4' align='center'>
                      ???????????????? ??????????????
                    </Typography>
                  </TableCell>
                </TableRow>

                {/* <TableRow>
                  <TableCell sx={{ pr: 0 }}>
                    <Typography variant='h3' align='right'></Typography>
                  </TableCell>
                  <TableCell
                    align='center'
                    sx={{
                      padding: 0,
                    }}
                  >
                    <TextField
                      sx={{
                        '& div': {
                          borderRadius: '50%',
                          width: '3rem',
                          height: '3rem',
                          border: '2px solid #0F0',
                          fontSize: '2rem',
                          color: '#F00',
                          '&:hover': {
                            border: '2px solid #F00',
                          },
                        },
                      }}
                      name='userAnswer_CheckNumberLeft'
                      // label='??????????'
                      type='number'
                      id='userAnswer_CheckNumberLeft'
                      value={userAnswer_CheckNumberLeft}
                      onChange={(e) =>
                        set__userAnswer_CheckNumberLeft(e.target.value)
                      }
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
                    <TextField
                      sx={{
                        '& div': {
                          borderRadius: '50%',
                          width: '3rem',
                          height: '3rem',
                          border: '2px solid #0F0',
                          fontSize: '2rem',
                          color: '#F00',
                          '&:hover': {
                            border: '2px solid #F00',
                          },
                        },
                      }}
                      name='userAnswer_CheckNumberRight'
                      // label='??????????'
                      type='number'
                      id='userAnswer_CheckNumberRight'
                      value={userAnswer_CheckNumberRight}
                      onChange={(e) =>
                        set__userAnswer_CheckNumberRight(e.target.value)
                      }
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          const userAnswer_CheckResultLeft_input =
                            document.getElementById(
                              'userAnswer_CheckResultLeft'
                            );

                          userAnswer_CheckResultLeft_input.focus();
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ pr: 0 }}></TableCell>
                  <TableCell></TableCell>
                </TableRow> */}

                {/* <TableRow>
                  <TableCell sx={{ pr: 0 }}>
                    <Typography variant='h3' align='right'></Typography>
                  </TableCell>
                  <TableCell
                    align='center'
                    sx={{
                      padding: 0,
                    }}
                    colSpan={3}
                  >
                    <TextField
                      sx={{
                        '& div': {
                          borderRadius: '50%',
                          width: '3rem',
                          height: '3rem',
                          border: '2px solid #0F0',
                          fontSize: '2rem',
                          color: '#F00',
                          '&:hover': {
                            border: '2px solid #F00',
                          },
                        },
                      }}
                      name='userAnswer_CheckResultLeft'
                      // label='??????????'
                      type='number'
                      id='userAnswer_CheckResultLeft'
                      value={userAnswer_CheckResultLeft}
                      onChange={(e) =>
                        set__userAnswer_CheckResultLeft(e.target.value)
                      }
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
                    <TextField
                      sx={{
                        '& div': {
                          borderRadius: '50%',
                          width: '3rem',
                          height: '3rem',
                          border: '2px solid #0F0',
                          fontSize: '2rem',
                          color: '#F00',
                          '&:hover': {
                            border: '2px solid #F00',
                          },
                        },
                      }}
                      name='userAnswer_CheckResultRight'
                      // label='??????????'
                      type='number'
                      id='userAnswer_CheckResultRight'
                      value={userAnswer_CheckResultRight}
                      onChange={(e) =>
                        set__userAnswer_CheckResultRight(e.target.value)
                      }
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          const onAnswer_Button =
                            document.getElementById('answerButton');

                          onAnswer_Button.focus();
                        }
                      }}
                    />
                  </TableCell>
                </TableRow> */}

                <TableRow>
                  <TableCell colSpan={8}>
                    <Button
                      id='answerButton'
                      fullWidth
                      variant='contained'
                      onClick={onAnswer}
                      disabled={
                        userAnswer.length < 1
                        // ||
                        // userAnswer_CheckNumberLeft.length < 1 ||
                        // userAnswer_CheckNumberRight.length < 1 ||
                        // userAnswer_CheckResultLeft.length < 1 ||
                        // userAnswer_CheckResultRight.length < 1
                      }
                    >
                      OK ??? {numberOf_Task}
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
          ???????? ????????????????????
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
                    ????????????
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6' align='center'>
                    ?????? ???????????
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6' align='center'>
                    ??????????????
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6' align='center'>
                    ???????????????? ????????????
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6' align='center'>
                    ???????????????? ??????????????
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6' align='center'>
                    ?????????????????????? ?????????? ??????????
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6' align='center'>
                    ?????????????????????? ?????????? ????????????
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6' align='center'>
                    ???????? ????????????
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
                            ??????
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant='h6' align='center'>
                            ????????
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
                              item.userAnswer - item.resultRight === 0
                                ? 'success.main'
                                : 'error.main'
                            }
                          >
                            {item.userAnswer}
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
                              item.userAnswer_CheckNumberLeft -
                                item.checkNumberLeft ===
                              0
                                ? 'success.main'
                                : 'error.main'
                            }
                          >
                            {item.userAnswer_CheckNumberLeft}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant='h6' align='center'>
                            {item.checkNumberLeft}
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
                              item.userAnswer_CheckNumberRight -
                                item.checkNumberRight ===
                              0
                                ? 'success.main'
                                : 'error.main'
                            }
                          >
                            {item.userAnswer_CheckNumberRight}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant='h6' align='center'>
                            {item.checkNumberRight}
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
                              item.userAnswer_CheckResultLeft -
                                item.checkResultLeft ===
                              0
                                ? 'success.main'
                                : 'error.main'
                            }
                          >
                            {item.userAnswer_CheckResultLeft}
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
                              item.userAnswer_CheckResultRight -
                                item.checkResultRight ===
                              0
                                ? 'success.main'
                                : 'error.main'
                            }
                          >
                            {item.userAnswer_CheckResultRight}
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
                        {item.doneExcercise ? '????!' : '????????????!'}
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
                      ? '?????????????????? ????????????????????'
                      : '???? ???????????????? ?????????????????? ???????????????????? - ???? ???? ????????????????????????'}
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
                    ?????????????????????????? ??????
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

export default TwoRefNumbers;
