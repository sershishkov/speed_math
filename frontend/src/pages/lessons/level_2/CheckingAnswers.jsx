import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTimer } from 'use-timer';
import { generateExample__ForCheckMultiplication } from '../../../utils/generateExample';
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

function CheckingAnswers() {
  const [min, set__min] = useState(101);
  const [max, set__max] = useState(999);
  const [examplesNumber, set__examplesNumber] = useState(10);
  const [example, set__example] = useState(null);
  const [userAnswer_CheckNumberLeft, set__userAnswer_CheckNumberLeft] =
    useState('');
  const [userAnswer_CheckNumberRight, set__userAnswer_CheckNumberRight] =
    useState('');
  const [userAnswer_CheckResultLeft, set__userAnswer_CheckResultLeft] =
    useState('');
  const [userAnswer_CheckResultRight, set__userAnswer_CheckResultRight] =
    useState('');

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

    set__userAnswer_CheckNumberLeft('');
    set__userAnswer_CheckNumberRight('');
    set__userAnswer_CheckResultLeft('');
    set__userAnswer_CheckResultRight('');
  };

  const nextTask = () => {
    set__example(new generateExample__ForCheckMultiplication(min, max));

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
    set__userAnswer_CheckNumberLeft('');
    set__userAnswer_CheckNumberRight('');
    set__userAnswer_CheckResultLeft('');
    set__userAnswer_CheckResultRight('');
  };

  const onAnswer = () => {
    const obj = {
      example: `${example.numberLeft} ${operators[2]} ${example.numberRight} ${operators[4]} ${example.resultRight} `,

      userAnswer_CheckNumberLeft,
      userAnswer_CheckNumberRight,
      userAnswer_CheckResultLeft,
      userAnswer_CheckResultRight,

      checkNumberLeft: example.checkNumberLeft,
      checkNumberRight: example.checkNumberRight,
      checkResultLeft: example.checkResultLeft,
      checkResultRight: example.checkResultRight,

      doneCheck:
        +userAnswer_CheckNumberLeft === +example.checkNumberLeft &&
        +userAnswer_CheckNumberRight === +example.checkNumberRight &&
        +userAnswer_CheckResultLeft === +example.checkResultLeft &&
        +userAnswer_CheckResultRight === +example.checkResultRight,
    };
    set__resultsList((prevState) => [...prevState, obj]);

    set__userAnswer_CheckNumberLeft('');
    set__userAnswer_CheckNumberRight('');
    set__userAnswer_CheckResultLeft('');
    set__userAnswer_CheckResultRight('');

    if (numberOf_Task < examplesNumber) {
      nextTask();
      const userAnswer_CheckNumberLeftInput = document.getElementById(
        'userAnswer_CheckNumberLeft'
      );
      userAnswer_CheckNumberLeftInput.focus();
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
      if (item.doneCheck) {
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

    set__userAnswer_CheckNumberLeft('');
    set__userAnswer_CheckNumberRight('');
    set__userAnswer_CheckResultLeft('');
    set__userAnswer_CheckResultRight('');
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
                  href='/lessons/level_2/ref-number-100-mix'
                >
                  Предыдущий урок
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  component={Link}
                  href='/lessons/level_3/ref-number-20'
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
          Проверка ответов:
        </Typography>
        <Typography variant='h3' align='center'>
          часть первая
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
            <Typography variant='h3' align='center'>
              Проверка ответов:
            </Typography>
            <Typography variant='body1'>
              Вы хотели бы решать правильно все без исключения задачи в любой
              школьной контрольной? Хотелось бы вам приобрести репутацию
              человека, который никогда не допускает ошибок в вычислениях? Если
              да, то я научу вас, как обнаружить и исправить ошибку еще до того,
              как кто-нибудь заметит ваш промах.
            </Typography>
            <Typography variant='body1'>
              В математике недостаточно вычислить ответ; задача не является
              решенной до тех пор, пока вы не сделали проверку полученного
              ответа.
            </Typography>
            <Typography variant='body1'>
              Я не разрабатывал метода проверки ответов, который собираюсь вам
              предложить. Математики знают о нем уже, наверное, тысячу лет, но
              дело в том, что он по какой-то причине не был включен в школьную
              Программу в большинстве стран.
            </Typography>
            <Typography variant='body1'>
              В детстве я, бывало, допускал массу ошибок в вычислениях чисто по
              оплошности. Я знал, как решать задачи, и делал все правильно. Но
              ответ все равно получался неверным. Я то забывал перенести разряд,
              то по невнимательности записывал неверные числа и еще бог весть по
              какой причине допускал досадные ошибки.
            </Typography>
            <Typography variant='body1'>
              Учителя и родители постоянно напоминали мне, что я всегда должен
              перепроверять свои решения. Но единственный известный мне способ
              сделать это — решить задачу заново. Однако если ответ получался
              другой, откуда мне было знать, в каком случае он являлся
              правильным? Быть может, задачу я решил верно именно в первый раз,
              а при повторном решении допустил ошибку? Поэтому приходилось
              решать задачу в третий раз. Если два ответа из трех сходились, то
              это, как я рассуждал, вероятно, и был правильный ответ. А что,
              если я просто-напросто дважды допустил одну и ту же ошибку? Мне
              посоветовали решать задачу двумя различными способами. Это был
              дельный совет. Однако на контрольных никому не дают времени на то,
              чтобы трижды решить одно и то же задание. Если бы кто-нибудь в то
              время научил меня тому, чему я собираюсь научить вас, я бы,
              наверное, прослыл математическим гением.
            </Typography>
            <Typography variant='body1'>
              Мне досадно, что этот метод был известен в те времена, но никто
              меня ему не научил. Он называется суммированием цифр числа, или
              выбрасыванием девяток. Ниже описано, как он работает.
            </Typography>
            <Typography variant='h3' align='center'>
              Числа-подстановки
            </Typography>
            <Typography variant='body1'>
              Чтобы проверить, верный ли получен ответ, мы используем
              числа-подстановки вместо тех, которые задействованы в примере.
              Запасные в футбольной или баскетбольной команде служат для подмены
              игроков во время матча. Нечто подобное мы будем делать и с
              числами, найдя для них подходящих «запасных». Последние помогут
              нам проверить, к правильному ли ответу мы пришли с основными
              числами в задаче.
            </Typography>
            <Typography variant='body1'>
              Рассмотрим это на примере. Допустим, что вы только что перемножили
              13 и 14 и получили 182. Надо проверить, правильный ли это ответ.{' '}
            </Typography>
            <Typography variant='h3' align='center'>
              13 х 14 = 182
            </Typography>
            <Typography variant='body1'>
              Сначала у нас идет число 13. Найдем сумму его цифр и получим
              первую подстановку:
            </Typography>
            <Typography variant='h3' align='center'>
              1 + 3 = 4
            </Typography>
            <Typography variant='body1'>
              4 становится подстановкой для 13.
            </Typography>
            <Typography variant='body1'>
              Следующим числом идет 14. Найдем и ему подстановку, для чего
              сложим его цифры:
            </Typography>
            <Typography variant='h3' align='center'>
              1 + 4 = 5
            </Typography>
            <Typography variant='body1'>
              5 служит подстановкой для 14
            </Typography>
            <Typography variant='body1'>
              Теперь выполним умножение, используя вместо исходных чисел
              подстановки:
            </Typography>
            <Typography variant='h3' align='center'>
              4 х 5 = 20
            </Typography>
            <Typography variant='body1'>
              20 — это опять двузначное число, поэтому сложим и его цифры и
              получим наше контрольное число, которое поможет нам определить
              правильность ответа:
            </Typography>
            <Typography variant='h3' align='center'>
              2 + 0 = 2
            </Typography>
            <Typography variant='body1'>
              2 — это контрольное число, служащее для определения правильности
              ответа.
            </Typography>
            <Typography variant='body1'>
              Если мы верно решили исходный пример, тогда сумма цифр ответа
              должна совпасть с контрольным числом.
            </Typography>
            <Typography variant='body1'>
              Складываем цифры исходного полученного ответа:
            </Typography>
            <Typography variant='h3' align='center'>
              1 + 8 + 2 = 11
            </Typography>
            <Typography variant='body1'>
              11 — это двузначное число, а нам нужно однозначное, поэтому сложим
              и его цифры:
            </Typography>
            <Typography variant='h3' align='center'>
              1 + 1 = 2
            </Typography>
            <Typography variant='body1'>
              2 — это тоже число-подстановка, но на этот раз для проверяемого
              ответа. Поскольку оно совпало с контрольным числом, пример решен
              правильно.
            </Typography>
            <Typography variant='body1'>
              Попробуем еще раз, взяв произведение 13 х 15:
            </Typography>
            <Typography variant='h3' align='center'>
              13 x 15 = 195
            </Typography>
            <Typography variant='body1'>
              1 + З = 4 (подстановка для 13)
            </Typography>
            <Typography variant='body1'>
              1 + 5 = 6 (подстановка для 15)
            </Typography>
            <Typography variant='h3' align='center'>
              4 х 6 = 24
            </Typography>
            <Typography variant='body1'>
              24 — двузначное число; для получения однозначного сложим его
              цифры:
            </Typography>
            <Typography variant='h3' align='center'>
              2 + 4 = 6
            </Typography>
            <Typography variant='body1'>6 — наше контрольное число.</Typography>
            <Typography variant='body1'>
              Теперь, чтобы проверить, правильно ли мы решили пример, сложим
              цифры исходного полученного ответа.
            </Typography>
            <Typography variant='h3' align='center'>
              1 + 9 + 5 = 15
            </Typography>
            <Typography variant='body1'>
              Превратим 15 в однозначное число:
            </Typography>
            <Typography variant='h3' align='center'>
              1 + 5 = 6
            </Typography>
            <Typography variant='body1'>
              Поскольку данный ответ совпадает с контрольным числом, можно быть
              уверенными, что мы не допустили ошибки в решении исходного
              примера.
            </Typography>
            <Typography variant='h3' align='center'>
              Выбрасывание девяток
            </Typography>
            <Typography variant='body1'>
              Есть способ, который позволяет еще больше сократить по времени
              данную процедуру. Когда бы нам ни встречалось число 9 в наших
              вычислениях в ходе проверки, можно смело его вычеркивать. В случае
              предыдущего полученного ответа — 195, — вместо того чтобы находить
              сумму 1 + 9 + 5, мы могли просто вычеркнуть 9 и складывать уже
              только 1 + 5, что дало бы в итоге 6. Это никак не сказывается на
              результате, но позволяет избежать лишней работы и сэкономить
              время. Такие вещи мне всегда по душе.
            </Typography>
            <Typography variant='body1'>
              А как насчет ответа на первый решенный пример — 182?
            </Typography>
            <Typography variant='body1'>
              Мы складывали 1 + 2 + 8, получили 11, а затем сложили 1 + 1 и
              получили контрольное число 2. В числе 182 две цифры дают в сумме
              9: 1 и 8. Просто вычеркните их, и в результате у вас получится
              требуемое число 2. И делать ничего не надо.
            </Typography>
            <Typography variant='body1'>
              Решим еще один пример, чтобы посмотреть, как работает метод:
            </Typography>
            <Typography variant='h3' align='center'>
              167 х 346 = 57782
            </Typography>
            <Typography variant='body1'>
              1 + 6 + 7 = 14 =&gt; 1 + 4 = 5 (подстановка для 167)
            </Typography>
            <Typography variant='body1'>
              С первым числом никакого фокуса не получилось. 5 является
              подстановкой для 167.
            </Typography>
            <Typography variant='h3' align='center'>
              3 + 4 + 6 =
            </Typography>
            <Typography variant='body1'>
              Сразу замечаем, что З + 6 = 9, поэтому вычеркиваем З и 6, как
              будто их и не было. Остается 4, которое является подстановкой для
              числа 346.
            </Typography>
            <Typography variant='body1'>
              Имеются ли девятки или цифры, дающие в сумме 9, в ответе примера,
              который мы, собственно, и проверяем? Да, есть: 7 + 2 = 9, поэтому
              вычеркиваем эти цифры. Остальные складываем: 5 + 7 + 8 = 20. Затем
              2 + 0 = 2. Это число, служащее подстановкой для ответа.
            </Typography>
            <Typography variant='body1'>Рассмотрим еще пример:</Typography>
            <Typography variant='h3' align='center'>
              456 x 831 = 368936
            </Typography>
            <Typography variant='body1'>
              Запишем под множителями числа-подстановки:
            </Typography>
            <TableContainer sx={{ width: '500px', margin: 'auto' }}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell align='center'>
                      <Typography
                        component='span'
                        align='center'
                        sx={{
                          textDecorationLine: 'line-through',
                          textDecorationColor: 'red',
                        }}
                      >
                        4
                      </Typography>
                      <Typography
                        component='span'
                        align='center'
                        sx={{
                          textDecorationLine: 'line-through',
                          textDecorationColor: 'red',
                        }}
                      >
                        5
                      </Typography>
                      <Typography component='span' align='center'>
                        6
                      </Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography component='span' align='center'>
                        x
                      </Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography
                        component='span'
                        align='center'
                        sx={{
                          textDecorationLine: 'line-through',
                          textDecorationColor: 'red',
                        }}
                      >
                        8
                      </Typography>
                      <Typography component='span' align='center'>
                        3
                      </Typography>
                      <Typography
                        component='span'
                        align='center'
                        sx={{
                          textDecorationLine: 'line-through',
                          textDecorationColor: 'red',
                        }}
                      >
                        1
                      </Typography>
                    </TableCell>
                    <TableCell align='center'>=</TableCell>
                    <TableCell align='center'>
                      <Typography
                        component='span'
                        align='center'
                        sx={{
                          textDecorationLine: 'line-through',
                          textDecorationColor: 'red',
                        }}
                      >
                        3
                      </Typography>
                      <Typography
                        component='span'
                        align='center'
                        sx={{
                          textDecorationLine: 'line-through',
                          textDecorationColor: 'red',
                        }}
                      >
                        6
                      </Typography>
                      <Typography component='span' align='center'>
                        8
                      </Typography>
                      <Typography
                        component='span'
                        align='center'
                        sx={{
                          textDecorationLine: 'line-through',
                          textDecorationColor: 'red',
                        }}
                      >
                        9
                      </Typography>
                      <Typography
                        component='span'
                        align='center'
                        sx={{
                          textDecorationLine: 'line-through',
                          textDecorationColor: 'red',
                        }}
                      >
                        3
                      </Typography>
                      <Typography
                        component='span'
                        align='center'
                        sx={{
                          textDecorationLine: 'line-through',
                          textDecorationColor: 'red',
                        }}
                      >
                        6
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align='center'>
                      <Typography component='span' align='center'>
                        6
                      </Typography>
                    </TableCell>
                    <TableCell align='center'></TableCell>
                    <TableCell align='center'>
                      <Typography component='span' align='center'>
                        3
                      </Typography>
                    </TableCell>
                    <TableCell align='center'></TableCell>
                    <TableCell align='center'>
                      <Typography component='span' align='center'>
                        8
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant='body1'>
              Это не составило труда, поскольку мы вычеркнули 4 и 5 из первого
              множителя, и у нас осталось 6; затем мы вычеркнули 8 и 1 из
              второго множителя, и у нас осталось З; и потом нам удалось
              вычеркнуть почти все цифры в ответе.
            </Typography>
            <Typography variant='body1'>
              Теперь посмотрим, что дают нам числа-подстановки. 6 умножить на З
              равно 18, цифры которого в сумме дают 9, которое тоже можно
              вычеркнуть.
            </Typography>
            <Typography variant='body1'>
              Остается 0. Контрольным же числом у нас является 8. Значит, мы
              где-то допустили ошибку.
            </Typography>
            <Typography variant='body1'>
              Заново решив пример, получаем 378936.
            </Typography>
            <Typography variant='body1'>
              Правильный ли ответ мы получили на этот раз? 936 можно вычеркнуть,
              после чего складываем первые три цифры: З + 7 + 8 = 18, что в
              сумме дает 9, от которого тоже остается О, поэтому его можно
              выбросить. Имеет место совпадение с контрольным числом, значит, на
              сей раз ответ получен верный.
            </Typography>
            <Typography variant='body1'>
              Доказывает ли метод выбрасывания девяток, что мы поЛучили верный
              ответ? Нет, но мы можем быть почти уверены в правильности ответа
              Например, предположим, что мы получили в ответе последнего примера
              3789360, по ошибке добавив лишний нуль в его конце. Он не
              отразится на проверке при выбрасывании девяток, и мы не сможем
              определить, допущена ошибка или нет. Однако в тех случаях, когда
              использование метода указывает на ошибку, мы можем быть абсолютно
              уверены, что это так.
            </Typography>
            <Typography variant='body1'>
              Выбрасывание девяток является простым и быстрым способом проверки,
              который позволяет легко обнаруживать ошибки. Метод поможет вам
              безошибочно решать контрольные по математике, можете быть уверены.
            </Typography>
            <Typography variant='h3' align='center'>
              Каким образом работает данный метод?
            </Typography>

            <Typography variant='body1'>
              Загадайте число и умножьте его на 9. Сколько будет 4 на 9? 36.
              Сложим цифры этого числа (З + 6), и в результате получится 9.
            </Typography>
            <Typography variant='body1'>
              Попробуем с другим числом. 3 на 9 равно 27. Сложим цифры (2 + 7),
              и у нас получится снова 9.
            </Typography>
            <Typography variant='body1'>
              11 на 9 дает 99. 9 плюс 9 равно 18. Неверный ответ? Не так быстро.
              18 — двузначное число, поэтому опять сложим цифры: 1 + 8. Снова в
              ответе получается 9.
            </Typography>
            <Typography variant='body1'>
              Если умножить любое число на 9, сумма полученного числа всегда
              даст 9, если продолжать складывать цифры, пока не получится
              однозначное число. Это простой способ узнать, делится ли число на
              9 без остатка.
            </Typography>
            <Typography variant='body1'>
              Если цифры числа дают в сумме 9 или число, кратное ему, значит,
              само число без остатка делится на 9. Вот почему, если умножить
              любое число на 9 или число, кратное ему, цифры числа, полученного
              в результате умножения, должны давать в сумме 9 (пока не получится
              однозначное число). Например, вам необходимо проверить, правильно
              ли решен следующий пример:
            </Typography>
            <Typography variant='h3' align='center'>
              135 х 83615 = 11288025
            </Typography>
            <Typography variant='body1'>
              Сложим цифры первого множителя:
            </Typography>
            <Typography variant='body1'>
              Чтобы проверить ответ, не нужно складывать цифры второго множителя
              (83615), поскольку нам известно, что сумма цифр числа 135 дает 9.
              Если ответ верен, его цифры также должны давать в сумме 9. Найдем
              сумму цифр ответа:
            </Typography>
            <Typography variant='h3' align='center'>
              1+1+2+8+8+0+2+5 =
            </Typography>
            <Typography variant='body1'>
              Можно вычеркнуть 8 + 1 дважды, остается 2 + 2 + 5, что дает 9.
              Итак, проверка показала, что ответ верен.
            </Typography>
            <Typography variant='body1'>
              Можно обнаружить и другие интересные вещи
            </Typography>
            <Typography variant='body1'>
              Если цифры числа дают в сумме отличное от 9 число, тогда оно
              является тем остатком, который вы получите в результате деления
              исходного числа на 9.
            </Typography>
            <Typography variant='body1'>
              Возьмем, к примеру, 14. 1 плюс 4 дает 5. Итак, 5 — это сумма цифр
              числа 14. Это остаток, который вы получите, если разделите 14 на
              9. Проверим: 14 один раз делится на 9, а остаток составляет 14 —
              9, что дает 5. Если прибавите З к числу, вы прибавите З к остатку
              от деления этого числа на 9. Если удвоить число, опять-таки,
              удвоится остаток. Иными словами, что бы вы ни делали с числом, вы
              делаете это с остатком от деления на 9, поэтому такие остатки
              могут служить числами-подстановками.
            </Typography>
            <Typography variant='body1'>
              Почему мы используем остатки от деления на 9? разве нельзя
              использовать остатки от деления, например, на 17? Конечно, можно,
              однако деление на 17 представляет собой такое хлопотное дело, что
              проверка правильности полученного ответа в итоге окажется сложнее,
              чем сама задача. Мы выбираем число 9, поскольку существует простой
              способ для определения остатка от деления на него.
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
                    <TextField
                      sx={{
                        '& div': {
                          borderRadius: '50%',
                          width: '3rem',
                          height: '3rem',
                          border: '2px solid #F00',
                          fontSize: '2rem',
                          color: '#F00',
                          '&:hover': {
                            border: '2px solid #F00',
                          },
                        },
                      }}
                      name='userAnswer_CheckNumberLeft'
                      // label='Ответ'
                      type='number'
                      id='userAnswer_CheckNumberLeft'
                      value={userAnswer_CheckNumberLeft}
                      onChange={(e) =>
                        set__userAnswer_CheckNumberLeft(e.target.value)
                      }
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
                          border: '2px solid #F00',
                          fontSize: '2rem',
                          color: '#F00',
                          '&:hover': {
                            border: '2px solid #F00',
                          },
                        },
                      }}
                      name='userAnswer_CheckNumberRight'
                      // label='Ответ'
                      type='number'
                      id='userAnswer_CheckNumberRight'
                      value={userAnswer_CheckNumberRight}
                      onChange={(e) =>
                        set__userAnswer_CheckNumberRight(e.target.value)
                      }
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
                    <TextField
                      sx={{
                        '& div': {
                          borderRadius: '50%',
                          width: '3rem',
                          height: '3rem',
                          border: '2px solid #F00',
                          fontSize: '2rem',
                          color: '#F00',
                          '&:hover': {
                            border: '2px solid #F00',
                          },
                        },
                      }}
                      name='userAnswer_CheckResultLeft'
                      // label='Ответ'
                      type='number'
                      id='userAnswer_CheckResultLeft'
                      value={userAnswer_CheckResultLeft}
                      onChange={(e) =>
                        set__userAnswer_CheckResultLeft(e.target.value)
                      }
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
                          border: '2px solid #F00',
                          fontSize: '2rem',
                          color: '#F00',
                          '&:hover': {
                            border: '2px solid #F00',
                          },
                        },
                      }}
                      name='userAnswer_CheckResultRight'
                      // label='Ответ'
                      type='number'
                      id='userAnswer_CheckResultRight'
                      value={userAnswer_CheckResultRight}
                      onChange={(e) =>
                        set__userAnswer_CheckResultRight(e.target.value)
                      }
                    />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell colSpan={5}>
                    <Button
                      fullWidth
                      variant='contained'
                      onClick={onAnswer}
                      disabled={
                        userAnswer_CheckNumberLeft.length < 1 ||
                        userAnswer_CheckNumberRight.length < 1 ||
                        userAnswer_CheckResultLeft.length < 1 ||
                        userAnswer_CheckResultRight.length < 1
                      }
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
                    Проверка левого
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6' align='center'>
                    Проверка правого
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
                        color={item.doneCheck ? 'success.main' : 'error.main'}
                      >
                        {item.doneCheck ? 'ок!' : 'ошибка!'}
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

export default CheckingAnswers;
