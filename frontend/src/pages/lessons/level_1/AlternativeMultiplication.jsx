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

function SimpleMultiplication() {
  const [min, set__min] = useState(1);
  const [max, set__max] = useState(10);
  const [examplesNumber, set__examplesNumber] = useState(10);
  const [example, set__example] = useState(null);
  const [userAnswer, set__userAnswer] = useState('');
  const [displayExample, set__displayExample] = useState(false);
  const [displaySettings, set__displaySettings] = useState(true);
  const [displayStatistics, set__displayStatistics] = useState(false);
  const [displayStopButton, set__displayStopButton] = useState(false);
  const [disableStartButton, set__disableStartButton] = useState(false);
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
                  href='/lessons/level_1/simple-multiplication'
                >
                  Предыдущий урок
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  component={Link}
                  href='/lessons/level_2/mult-close-to-100'
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
          Алтернативный способ умножения
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
              Насколько хорошо вы знаете таблицу умножения? Хотелось бы вам
              освоить таблицу умножения для чисел от 1 до 10 менее чем за 10
              минут? А таблицу для чисел от 10 до 20 менее чем за полчаса? Все
              это возможно, используя методы, о которых я рассказываю . Я лишь
              предполагаю, что вы достаточно хорошо знаете таблицу умножения для
              числа 2, а также что вы владеете операциями сложения и вычитания
              для небольших чисел.
            </Typography>
            <Typography variant='h6' align='center'>
              Умножение чисел до 10
            </Typography>
            <Typography variant='body1'>
              Начнем с того, что научимся умножать всевозможные числа от 1 до 10
              вплоть до 10 х 10. Метод состоит в следующем:
            </Typography>
            <Typography variant='body1'>
              Возьмем в качестве примера произведение 7 X 8.
            </Typography>

            <Typography variant='body1'>
              Запишем 7 х 8 = на листе бумаги и нарисуем кружки под каждым из
              двух перемножаемых чисел.
            </Typography>
            <TableContainer
              component={Paper}
              sx={{ width: 300, margin: 'auto' }}
            >
              <Table
                // sx={{ minWidth: 650 }}
                align='center'
                aria-label='simple table'
              >
                <TableBody>
                  <TableRow>
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
                    <TableCell>
                      <Typography
                        variant='h3'
                        align='center'
                        sx={{
                          borderRadius: '50%',
                          border: '2px solid #000',
                          width: '3rem',
                          height: '3rem',
                        }}
                      ></Typography>
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
                        }}
                      ></Typography>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant='body1'>
              Рассмотрим первый из множителей, число 7. СКолько ему недостает до
              числа 10? Ответ: З. Впишем З в кружок под числом 7. Теперь
              обратимся к числу 8.Что надо вписать в кружок под числом 8?
              Сколько недостает до 10? Ясное дело, что 2. Вписываем 2 в кружок
              под множителем 8.Вот что у нас получилось:
            </Typography>

            <TableContainer
              component={Paper}
              sx={{ width: 300, margin: 'auto' }}
            >
              <Table
                // sx={{ minWidth: 650 }}
                align='center'
                aria-label='simple table'
              >
                <TableBody>
                  <TableRow>
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
                        2
                      </Typography>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant='body1'>
              Теперь выполним вычитание накрест. Это значит, надо вычесть любое
              из чисел в кружке (З или 2) из числа не прямо над ним, а из того,
              что расположено по диагонали, то есть над другим числом в кружке.
              Иными словами, вы вычитаете либо З из 8, либо 2 из 7. Делать это
              нужно всего один раз, поэтому выбирайте тот вариант, который вам
              кажется легче. В любом случае результат получается один и тот же:
              5. Это первая цифра вашего ответа.
            </Typography>
            <Typography variant='h3' align='center'>
              8-3=5 или 7-2=5
            </Typography>
            <Typography variant='body1'>
              Теперь перемножим числа в кружках. З на 2 дает 6. Это будет
              последняя цифра вашего ответа. Таким образом, ответом будет 56.
              Вот так выглядит решенная задача:
            </Typography>
            <TableContainer
              component={Paper}
              sx={{ width: 310, margin: 'auto' }}
            >
              <Table
                // sx={{ minWidth: 650 }}
                align='center'
                aria-label='simple table'
              >
                <TableBody>
                  <TableRow>
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
                        2
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
                        56
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
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
          <Grid item sx={{ display: 'none' }}>
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
          <Grid item sx={{ display: 'none' }}>
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
                <TableRow>
                  <TableCell>
                    <Typography
                      variant='h3'
                      align='center'
                      sx={{
                        margin: 'auto',
                        borderRadius: '50%',
                        border: '2px solid #000',
                        width: '3rem',
                        height: '3rem',
                        fontSize: '2.3rem',
                      }}
                    >
                      {example ? 10 - example.numberLeft : ''}
                    </Typography>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Typography
                      variant='h3'
                      align='center'
                      sx={{
                        margin: 'auto',
                        borderRadius: '50%',
                        border: '2px solid #000',
                        width: '3rem',
                        height: '3rem',
                        fontSize: '2.3rem',
                      }}
                    >
                      {example ? 10 - example.numberRight : ''}
                    </Typography>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
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

export default SimpleMultiplication;
