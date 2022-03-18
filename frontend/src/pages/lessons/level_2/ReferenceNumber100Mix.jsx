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

function ReferenceNumber100Mix() {
  const [min, set__min] = useState(91);
  const [max, set__max] = useState(109);
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
                  href='/lessons/level_2/ref-number-100-below'
                >
                  Предыдущий урок
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  component={Link}
                  href='/lessons/level_2/checking-answers'
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
          (над и под опорным числом)
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
            <Typography variant='body1'>
              До сих пор мы перемножали числа, которые располагались либо выше,
              либо ниже опорного числа. А как нам перемножать числа, одно из
              которых находится выше опорного, а другое — ниже?
            </Typography>
            <Typography variant='body1'>
              Посмотрим, как поступать, на примере произведения 96 х 135. В
              качестве опорного числа будем использовать 100:
            </Typography>
            <Typography variant='body1'>
              98 меньше опорного числа 100, поэтому кружок рисуем под ним. На
              сколько меньше? На 2, значит, вписываем в кружок цифру 2. 135
              больше 100, поэтому рисуем кружок над 135. На сколько больше? На
              35, следовательно, вписываем в кружок 35
            </Typography>
            <Typography variant='body1'>
              135 равняется 100 плюс 35, поэтому ставим знак «плюс» перед 35. 98
              — это 100 минус 2, значит, перед 2 в кружке надо поставить минус
            </Typography>
            <Typography variant='body1'>
              Теперь вычисляем накрест. Берем либо 98 плюс 35, либо 135 минус 2.
              135 минус 2 равно 133. Записываем 133 после знака равенства.
              Теперь умножим 133 на опорное число 100. 133 на 100 равняется
              13300. (Чтобы умножить на 100 любое число, достаточно дописать к
              нему справа два нуля.)
            </Typography>
            <Typography variant='body1'>
              135 равняется 100 плюс 35, поэтому ставим знак «плюс» перед 35. 98
              — это 100 минус 2, значит, перед 2 в кружке надо поставить минус
            </Typography>
            <Typography variant='body1'>
              Теперь перемножим числа в кружках. 2 на 35 дает 70. Правда, это не
              совсем так. На самом деле нам необходимо перемножить 35 и минус 2.
              В ответе, соответственно, будет минус 70. Теперь решение примера
              выглядит следующим образом:
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
                      ></Typography>
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
                        35
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
                        98
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        X
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        135
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        =
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        13300
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
                        2
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
                      ></Typography>
                    </TableCell>
                    <TableCell sx={{ pr: 0 }}>
                      <Typography variant='h3' align='right'></Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        -70
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
                        13230
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant='h3' align='center'>
              Способ быстрого вычитания
            </Typography>
            <Typography variant='body1'>
              Отвлечемся на некоторое время от решения примера и посмотрим,
              каков самый короткий путь для нахождения разности двух чисел. Как
              самым простым способом вычесть 70 из числа? Разрешите мне
              поставить вопрос по-другому: каков простейший способ вычесть в уме
              9 из 56?
            </Typography>
            <Typography variant='h3' align='center'>
              56 - 9=
            </Typography>
            <Typography variant='body1'>
              Я уверен, что вы знаете правильный ответ, но как вы его получили?
              Некоторые люди сначала отняли бы 6 от 56, чтобы получить 50, а
              затем отняли бы З, что осталось от 9, и получили бы 47.
            </Typography>
            <Typography variant='body1'>
              Кое-кто отнял бы 10 от 56 и получил бы 46. Затем прибавил бы к
              ответу 1, поскольку отнята была лишняя единица (10 = 9 + 1). В
              результате опять получилось бы 47.
            </Typography>
            <Typography variant='body1'>
              Еще кто-нибудь решал бы данную задачу столбиком на листе бумаги.
              При этом ему пришлось бы переносить и занимать разряды в уме. Это,
              возможно, самый длинный способ решения. Не забывайте, что: Самый
              простой путь решения задачи является наискорейшим способом и самым
              защищенным дт ошибок.
            </Typography>
            <Typography variant='body1'>
              Для большинства людей самый простой способ вычитания 9 из числа —
              это отнимание от него сначала 10, а затем прибавление 1. Самый
              простой способ отнять 8 — это вычесть 10, а затем прибавить 2.
              Чтобы отнять 7, нужно вычесть 10, а потом прибавить З к ответу.
              Вот еще несколько «простейших» способов:
            </Typography>
            <Typography variant='body1'>
              Каков самый простой способ вычесть 90 из числа? Отнять от него 100
              и прибавить 10.
            </Typography>
            <Typography variant='body1'>
              Каков самый простой способ вычесть 80 из числа? Отнять от него 100
              и прибавить 20.
            </Typography>
            <Typography variant='body1'>
              Каков самый простой способ вычесть 70 из числа? Отнять от него 100
              и прибавить 30.
            </Typography>
            <Typography variant='body1'>
              Если вернуться к нашему примеру, как нам отнять 70 от 13300?
              Вычесть сначала 100, а затем прибавить 30
            </Typography>
            <Typography variant='body1'>
              Просто, правда? Попробуем еще раз. 13300 минус 100. 13200. Плюс
              30. 13230. Вот как теперь выглядит полностью решенный пример:
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
                      ></Typography>
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
                        35
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
                        98
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        X
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        135
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        =
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        13300
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
                        2
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
                      ></Typography>
                    </TableCell>
                    <TableCell sx={{ pr: 0 }}>
                      <Typography variant='h3' align='right'></Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        -70
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
                        13230
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant='h6' align='center'>
              Произведение чисел в кружках
            </Typography>
            <Typography variant='body1'>
              Правило, согласно которому находят произведение чисел в кружках,
              звучит так:
            </Typography>
            <Typography variant='body1'>
              Если оба кружка находятся над или под множителями, то мы
              прибавляем их произведение к промежуточному результату. Когда один
              из кружков располагается над множителями, а другой — под ними, мы
              вычитаем произведение чисел в кружках из промежуточного
              результата.
            </Typography>
            <Typography variant='body1'>
              Говоря математическим языком, когда мы перемножаем два
              положительных (с плюсом) числа, то получаем положительное (с
              плюсом) число в ответе. Когда перемножаем два отрицательных (с
              минусом) числа, мы также получаем положительное (с плюсом) число.
              Когда же умножаем положительное (с плюсом) число на отрицательное
              (с минусом), мы получаем отрицательное (с минусом) число.
            </Typography>
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
                <TableRow sx={{ display: showHints ? 'table-row' : 'none' }}>
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
                      {example && example.numberLeft > 100
                        ? +example.numberLeft - 100
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
                      {example && example.numberRight > 100
                        ? example.numberRight - 100
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
                      OK № {numberOf_Task}
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
                      {example && example.numberLeft < 100
                        ? 100 - example.numberLeft
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
                      {example && example.numberRight < 100
                        ? 100 - example.numberRight
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

export default ReferenceNumber100Mix;
