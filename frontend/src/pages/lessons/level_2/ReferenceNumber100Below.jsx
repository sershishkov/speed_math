import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTimer } from 'use-timer';
import { generateExample__AddMultSub } from '../../../utils/generateExample';
import {
  update__statistic,
  reset as resetStatistic,
} from '../../../features/statistics/statisticSlice';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import Link from '@mui/material/Link';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const operators = ['+', '-', '*', '/', '='];

function ReferenceNumber100Below() {
  const [min, set__min] = useState(85);
  const [max, set__max] = useState(99);
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
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [showHints, set__showHints] = useState(true);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { time, start, pause, reset } = useTimer();
  const userAnswerInput = document.getElementById('userAnswer');

  const onStart = () => {
    set__displayExample(true);
    set__displayStopButton(true);
    set__displaySettings(false);
    set__disableStartButton(true);
    // userAnswerInput.focus();
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
    set__example(new generateExample__AddMultSub(min, max));
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
  };

  const onAnswer = () => {
    const obj = {
      example: `${example.numberLeft} ${operators[2]} ${example.numberRight}`,
      userAnswer,
      rightAnswer: example.resultMult,
      done: +userAnswer === +example.resultMult,
    };
    set__resultsList((prevState) => [...prevState, obj]);

    set__userAnswer('');

    if (numberOf_Task < examplesNumber) {
      nextTask();

      userAnswerInput.focus();
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
      if (item.done) {
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
                  href='/lessons/level_2/ref-number-100-above'
                >
                  Предыдущий урок
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  component={Link}
                  href='/lessons/level_2/ref-number-100-mix'
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
          Умножение чисел с опорным числом 100
        </Typography>
        <Typography variant='h3' align='center'>
          (числа меньше 100)
        </Typography>
      </Grid>
      <Grid item>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id='panel1'>
            <Typography variant='h4'>Введение</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='h6' align='center'>
              Решение примеров в уме
            </Typography>
            <Typography variant='body1'>
              При использовании изложенного выше подхода очень важно то, что
              возникает перед вашим мысленным взором, или то, что вы произносите
              про себя. Это может помочь вам решать задачи с большей легкостью и
              с более высокой скоростью.
            </Typography>
            <Typography variant='body1'>
              Давайте умножим 16 на 16 и затем посмотрим, что Мы могли бы при
              этом проговаривать про себя.
            </Typography>
            <Typography variant='body1'>
              Складываем накрест. 16 плюс 6 (от второго множителя 16) равно 22.
              Потом умножаем на 10 и получаем 220. 6, умноженное на 6, равно 36.
              Прибавляем Сначала 30, а потом 6. 220 плюс 30 равно 250, плюс еще
              6 — получаем 256
            </Typography>
            <Typography variant='body1'>
              Про себя мы могли бы при этом проговаривать: «Шестнадцать плюс
              шесть, двадцать два, двести двадцать. Тридцать шесть, двести
              пятьдесят шесть». Обретя некоторый навык, вы сможете опускать
              половину всего этого. Вам не надо будет комментировать буквально
              каждый свой шаг. Достаточно будет скаваты. «Двадцать два, двести
              пятьдесят шесть».
            </Typography>
            <Typography variant='body1'>
              Практикуйтесь в том, как вы проговариваете про себя ход решения.
              Произносить только самое необходимое во время вычисления — значит
              более чем вдвое сократить время решения.
            </Typography>
            <Typography variant='body1'>
              Как вы станете вычислять 7 х 8 в уме? Вы немедленно представите
              себе цифры З и 2 в кружках под 7 и 8. Затем отнимите 2 от 7 (или З
              от 8) и после того, как тут же умножите на 10, скажете вслух:
              «Пятьдесят». З на 2 равно 6. Вслух же вы произнесете практически
              без паузы: «Пятьдесят... шесть».
            </Typography>
            <Typography variant='body1'>А как насчет 6 х 7?</Typography>
            <Typography variant='body1'>
              Вы немедленно представите себе цифры 4 и З в кружках под 6 и 7. 6
              минус З дает З, поэтому вы скажете про себя: «Тридцать». 4 на З
              дает 12, плюс 30 — 42. Про себя же вы просто проговорите:
              «Тридцать, сорок два».
            </Typography>
            <Typography variant='body1'>
              Не очень сложно, не так ли? Чем больше примеров вы решите
              самостоятельно, тем легче вам будет выполнять эти вычисления.
            </Typography>
            <Typography variant='h6' align='center'>
              Когда использовать опорное число?
            </Typography>
            <Typography variant='body1'>
              Люди спрашивают : «Когда нужно использовать опорное число?»
              Предыдущий пример дает ответ на этот вопрос. Вычисляя произведение
              6 на 7 в уме, вы автоматически используете опорное число — 10. Ваш
              промежуточный результат равен 30. Вы говорите: «Тридцать... »
              Затем вычисляете: 4 на З равно 12. Вы не скажете вслух: «Тридцать
              двенадцать».
            </Typography>
            <Typography variant='body1'>
              Вам известно, что необходимо прибавить 12 к 30, чтобы получить
              ответ.
            </Typography>
            <Typography variant='body1'>
              Ответ прост: всегда используйте опорное число.
            </Typography>
            <Typography variant='body1'>
              По мере освоения описанных здесь методов вы обнаружите, что
              автоматически используете опорное число, даже когда уже не
              записываете его во время вычислений.
            </Typography>
            <Typography variant='body1'>
              Посмотрим на следующий пример:
            </Typography>
            <TableContainer
              component={Paper}
              sx={{ width: 600, margin: '1rem auto' }}
            >
              <Table
                // sx={{ minWidth: 650 }}
                align='center'
                aria-label='simple table'
              >
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography
                        variant='h3'
                        align='center'
                        color='error'
                        sx={{
                          borderRadius: '50%',
                          border: '2px solid #f00',
                          width: '3rem',
                          height: '3rem',
                          fontSize: '1.5rem',
                          lineHeight: 1.8,
                        }}
                      >
                        100
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        92
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        X
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        93
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        =
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ visibility: 'hidden' }}>
                      <Typography variant='h3' align='center'>
                        8500
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
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
                        8
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
                        7
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ pr: 0 }}>
                      <Typography variant='h3' align='right'></Typography>
                    </TableCell>
                    <TableCell sx={{ visibility: 'hidden' }}>
                      <Typography variant='h3' align='center'>
                        +56
                      </Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ display: 'none' }}>
                    <TableCell colSpan={5}>
                      <Typography variant='h3' align='right'>
                        Ответ
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        8556
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant='body1'>
              Вычтем 8 из 93 путем отнимания 10 и прибавления 2. 93 минус 10
              равно 83, плюс 2 — получаем 85. Умножаем на опорное число 100 и
              имеем промежуточный результат: 8500. 7 умножить на 8 будет 56 Вот
              как теперь выглядит решение примера:
            </Typography>
            <TableContainer
              component={Paper}
              sx={{ width: 600, margin: '1rem auto' }}
            >
              <Table
                // sx={{ minWidth: 650 }}
                align='center'
                aria-label='simple table'
              >
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography
                        variant='h3'
                        align='center'
                        color='error'
                        sx={{
                          borderRadius: '50%',
                          border: '2px solid #f00',
                          width: '3rem',
                          height: '3rem',
                          fontSize: '1.5rem',
                          lineHeight: 1.8,
                        }}
                      >
                        100
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        92
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        X
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        93
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        =
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        8500
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
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
                        8
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
                        7
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ pr: 0 }}>
                      <Typography variant='h3' align='right'></Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        +56
                      </Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell colSpan={5}>
                      <Typography variant='h3' align='right'>
                        Ответ
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        8556
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant='body1'>
              Можно также, к примеру, умножить 86 на 87.
            </Typography>
            <TableContainer
              component={Paper}
              sx={{ width: 600, margin: '1rem auto' }}
            >
              <Table
                // sx={{ minWidth: 650 }}
                align='center'
                aria-label='simple table'
              >
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography
                        variant='h3'
                        align='center'
                        color='error'
                        sx={{
                          borderRadius: '50%',
                          border: '2px solid #f00',
                          width: '3rem',
                          height: '3rem',
                          fontSize: '1.5rem',
                          lineHeight: 1.8,
                        }}
                      >
                        100
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        86
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        X
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        87
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        =
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        7300
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
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
                        14
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
                        13
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ pr: 0 }}>
                      <Typography variant='h3' align='right'></Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        +182
                      </Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell colSpan={5}>
                      <Typography variant='h3' align='right'>
                        Ответ
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        7482
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item></Grid>
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
                // display: 'none'
              }
            }
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
            sx={
              {
                // display: 'none'
              }
            }
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
            <FormControlLabel
              // value={showHints}
              control={
                <Switch
                  checked={showHints}
                  onChange={(e) => set__showHints(e.target.checked)}
                  color='primary'
                />
              }
              label={showHints ? 'отключить подсказки' : 'включить посказки'}
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
            sx={{ width: '90%', margin: 'auto' }}
          >
            <Table align='center' aria-label='simple table'>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography
                      variant='h3'
                      align='center'
                      color='error'
                      sx={{
                        borderRadius: '50%',
                        border: '2px solid #f00',
                        width: '3rem',
                        height: '3rem',
                        fontSize: '1.5rem',
                        lineHeight: 1.8,
                      }}
                    >
                      100
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='h3' align='center'>
                      {example ? example.numberLeft : ''}
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
                      label='Ответ'
                      type='number'
                      id='userAnswer'
                      value={userAnswer}
                      onChange={(e) => set__userAnswer(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          const onAnswer_Button =
                            document.getElementById('answerButton');

                          onAnswer_Button.focus();
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      id='answerButton'
                      variant='contained'
                      onClick={onAnswer}
                      disabled={userAnswer.length < 1}
                    >
                      OK
                    </Button>
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
                      {example ? 100 - example.numberLeft : ''}
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
                      {example ? 100 - example.numberRight : ''}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ pr: 0 }}>
                    <Typography variant='h3' align='right'></Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='h3' align='center'></Typography>
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
                <TableCell colSpan={2}>
                  <Button
                    fullWidth
                    disabled={!user}
                    onClick={onSaveResults}
                    variant='contained'
                    sx={{ mt: 3, mb: 2 }}
                  >
                    {user
                      ? 'Сохранить результаты'
                      : 'Не возможно сохранить результаты - вы не авторизованы'}
                  </Button>
                </TableCell>
                <TableCell
                  colSpan={2}
                  sx={{ display: !user ? 'block' : 'none' }}
                >
                  <Button
                    fullWidth
                    onClick={onContinue}
                    variant='contained'
                    sx={{ mt: 3, mb: 2 }}
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

export default ReferenceNumber100Below;
