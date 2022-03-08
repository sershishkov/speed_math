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

const operators = ['+', '-', '*', '/', '='];

function ReferenceNumber10() {
  const [min, set__min] = useState(11);
  const [max, set__max] = useState(21);
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
                  href='/lessons/level_2/mult-close-to-100'
                >
                  Предыдущий урок
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  component={Link}
                  href='/lessons/level_2/ref-number-100-above'
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
          Умножение чисел с опорным числом 10
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
              Опорное число
            </Typography>
            <Typography variant='body1'>
              Мы еще не до конца разобрались с методом перемножения чисел. Для
              задач, которые мы рассматривали до сих пор, метод работал
              безупречно. Теперь, после некоторой модификации, мы сможем
              применить его к любым числам.
            </Typography>

            <Typography variant='h6' align='center'>
              Число 10 в качестве опорного Вернемся к примеру 7 х 8.
            </Typography>

            <TableContainer
              component={Paper}
              sx={{ width: 400, margin: '1rem auto' }}
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
                          fontSize: '2.3rem',
                        }}
                      >
                        10
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        7
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        X
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        8
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        =
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ display: 'none' }}>
                    <TableCell></TableCell>
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
                        4
                      </Typography>
                    </TableCell>
                    <TableCell></TableCell>
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
                        3
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {/* <Typography
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
                        56
                      </Typography> */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant='body1'>
              Число 10 слева от примера является опорным. Это число, из которого
              мы вычитаем множители.
            </Typography>
            <Typography variant='body1'>
              Итак, запишем опорное число слева от примера. Теперь спросим себя,
              числа, которые мы перемножаем, являются больше (выше) или меньше
              (ниже), чем опорное число? В рассматриваемом случае множитель
              меньше (ниже), чем опорное число, оба раза. Поэтому рисуем кружки
              ниже множителей. На сколько множители меньше опорного числа? На З
              и 2 соответственно. Вписываем З и 2 в кружки. 7 равно 10 минус З,
              поэтому ставим знак «минус» перед кружком с цифрой З. 8 — это 10
              минус 2, значит, ставим знак «минус» и перед кружком с цифрой 2
            </Typography>
            <TableContainer
              component={Paper}
              sx={{ width: 400, margin: '1rem auto' }}
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
                          fontSize: '2.3rem',
                        }}
                      >
                        10
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        7
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        X
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        8
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        =
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
                        3
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
                        2
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {/* <Typography
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
                        56
                      </Typography> */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant='body1'>
              Теперь вычитаем накрест. 7 минус 2 и 8 минус З дают 5. Записываем
              5 после знака равенства. Теперь умножим 5 на опорное число 10. 5,
              умноженное на 10, дает 50, поэтому записываем 0 после 5. (При
              умножении любого числа на 10 достаточно дописать к числу справа
              нуль.) 50 является нашим промежуточным результатом.
            </Typography>
            <Typography variant='body1'>
              Теперь перемножим числа в кружках. З на 2 дает 6. Прибавим
              результат к 50 и получим окончательный ответ: 56. полностью
              решенный пример выглядит так:
            </Typography>
            <TableContainer
              component={Paper}
              sx={{ width: 500, margin: '1rem auto' }}
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
                          fontSize: '2.3rem',
                        }}
                      >
                        10
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        7
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        X
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        8
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        =
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        50
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
                        3
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
                        2
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ pr: 0 }}>
                      <Typography variant='h3' align='right'></Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        +6
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
                        56
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant='h3' align='center'>
              Число 100 в качестве опорного
            </Typography>
            <Typography variant='body1'>
              Каким было опорное число для примера 96 х 97 в главе 1? 100,
              поскольку мы также выясняли, сколько не хватает у 96 и 97, чтобы
              получилось 100. Пример, решенный полностью, теперь выглядел бы
              так:
            </Typography>

            <TableContainer
              component={Paper}
              sx={{ width: 550, margin: '1rem auto' }}
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
                        96
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        X
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        97
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        =
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        9300
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
                        4
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
                        3
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ pr: 0 }}>
                      <Typography variant='h3' align='right'></Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        +12
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
                        9312
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant='body1'>
              Прием для счета в уме, который я приводил выше, просто заставляет
              вас использовать данный метод. Давайте перемножим 98 на 98, и вы
              поймете, что я имею в виду.
            </Typography>
            <Typography variant='body1'>
              Вычитаем 98 и 98 из 100 и получаем 2 и 2. Отнимаем 2 от 98 и
              получаем 96. Но мы говорим не «девяносто шесть», а «девять тысяч
              шестьсот...». 9600 получится, когда мы умножим 96 на
              вспомогательное число 100. Теперь перемножим числа в кружках.
              Произведение 2 на 2 равняется 4, поэтому окончательным ответом
              будет 9604
            </Typography>
            <Typography variant='body1'>
              Теперь вы, возможно, уже умеете быстро находить ответы для
              подобных примеров. Наверняка вполне освоили данный метод и
              применительно к числам меньше 10, решая соответствующие примеры с
              завидной скоростью. Например, если вы захотите вычислить, сколько
              будет 9 х 9, то немедленно «увидите» по единичке под каждой
              девяткой. 9 минус 1 дает 8 — и вы сразу получаете 80 (произведение
              8 на 10). 1 на 1 дает 1. Таким образом, в ответе вы получаете 81
            </Typography>
            <Typography variant='h3' align='center'>
              Умножение чисел от 10 до 20
            </Typography>
            <Typography variant='body1'>
              Посмотрим, как работает метод для перемножения чисел от 10 до 20.
              В качестве примера возьмем 13 х 14, а 10 — в качестве опорного
              числа.
            </Typography>
            <TableContainer
              component={Paper}
              sx={{ width: 550, margin: '1rem auto' }}
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
                        10
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        13
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        X
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        14
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        =
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ display: 'none' }}>
                      <Typography variant='h3' align='center'>
                        9300
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ display: 'none' }}>
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
                        4
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
                        3
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ pr: 0 }}>
                      <Typography variant='h3' align='right'></Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        +12
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
                        9312
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant='body1'>
              И 13, и 14 больше (выше) опорного числа 10, поэтому рисуем кружки
              над множителями. На сколько они больше опорного числа? На З и 4
              соответственно. Поэтому вписываем З и 4 в кружки над 13 и 14. 13
              равно 10 плюс З, поэтому ставим знак «плюс» перед цифрой З; 14
              равно 10 плюс 4, поэтому ставим знак «плюс» перед цифрой 4.
            </Typography>
            <TableContainer
              component={Paper}
              sx={{ width: 550, margin: '1rem auto' }}
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
                      >
                        3
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
                        4
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ pr: 0 }}>
                      <Typography variant='h3' align='right'></Typography>
                    </TableCell>
                    <TableCell></TableCell>
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
                        10
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        13
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        X
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        14
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        =
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ display: 'none' }}>
                      <Typography variant='h3' align='center'>
                        9300
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
                        9312
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant='body1'>
              Как и прежде, складываем накрест. И 13 плюс 4, и 14 плюс З равно
              17. Пишем 17 после знака равенства. Умножаем 17 на опорное число
              10 и получаем 170 — это наш промежуточный результат, записываем
              его после знака равенства.Прибавляем 12 к 170 и получаем ответ:
              182. Вот так выглядит полностью решенный пример:
            </Typography>

            <TableContainer
              component={Paper}
              sx={{ width: 550, margin: '1rem auto' }}
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
                      >
                        3
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
                        4
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ pr: 0 }}>
                      <Typography variant='h3' align='right'></Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        +12
                      </Typography>
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
                        10
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        13
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        X
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        14
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        =
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        170
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
                        182
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant='body1'>
              Если число, которое перемножаем, больше (выше) опорного, мы
              помещаем кружок над числом. Если число меньше (ниже) опорного, мы
              рисуем кружок под числом.
            </Typography>
            <Typography variant='body1'>
              Если числа в кружках выше множителей, мы склаДываем накрест, если
              же они ниже, тогда вычитаем накрест.
            </Typography>
            <Typography variant='body1'>
              Если вы где-то допустили ошибку, прочтите раздел заново и
              выясните, что сделали не так, после чего попробуйте решить примеры
              снова
            </Typography>
            <Typography variant='body1'>
              А как бы вы перемножали 12 и 21? Давайте разберем данный пример.
            </Typography>

            <TableContainer
              component={Paper}
              sx={{ width: 550, margin: '1rem auto' }}
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
                      >
                        2
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
                        11
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ pr: 0 }}>
                      <Typography variant='h3' align='right'></Typography>
                    </TableCell>
                    <TableCell sx={{ visibility: 'hidden' }}>
                      <Typography variant='h3' align='center'>
                        +22
                      </Typography>
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
                        10
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        12
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        X
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        21
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        =
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ visibility: 'hidden' }}>
                      <Typography variant='h3' align='center'>
                        230
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
                        252
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant='body1'>
              В качестве опорного числа берем 10. Оба множителя больше 10,
              поэтому рисуем кружки над ними. 12 больше 10 на 2, а 21 — на 11,
              поэтому вписываем 2 и 11 в соответствующие кружки. 21 плюс 2 равно
              23, которое после умножения на 10 дает 230. 2, умноженное на 11 ,
              равно 22, которое в сумме с 230 равняется 252.
            </Typography>
            <Typography variant='body1'>
              Полностью решенный пример выглядит следующим образом:
            </Typography>
            <TableContainer
              component={Paper}
              sx={{ width: 550, margin: '1rem auto' }}
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
                      >
                        2
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
                        11
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ pr: 0 }}>
                      <Typography variant='h3' align='right'></Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        +22
                      </Typography>
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
                        10
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        12
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        X
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        21
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        =
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h3' align='center'>
                        230
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
                        252
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
                      {example ? example.numberLeft - 10 : ''}
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
                      {example ? example.numberRight - 10 : ''}
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
                      10
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
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant='contained'
                      onClick={onAnswer}
                      disabled={userAnswer.length < 1}
                    >
                      OK
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

export default ReferenceNumber10;
