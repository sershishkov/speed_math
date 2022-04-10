import React, { useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Description() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Accordion
      expanded={expanded === 'panel1'}
      onChange={handleChange('panel1')}
      sx={{
        minWidth: '300px',
        width: '95%',
        margin: 'auto',
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id='panel1'>
        <Typography variant='h4'>Введение</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant='body1'>
          Числа состоят из цифр: 0, 1, 2, З, 4, 5, 6, 7, 8 и 9. Цифры подобны
          буквам, из которых мы составляем слова. 23 — это двузначное число,
          состоящее из цифр 2 и З. Положение цифры в числе определяет разряд,
          соответствующий этой цифре. Например, цифра 2 в числе 23 соответствует
          разряду десятков и обозначает 2 десятка, а цифра З — разряду единиц и
          обозначает З единицы. 435 — это трехзначное число. Цифра 4
          соответствует разряду сотен и обозна чает 4 сотни, или 400. Цифра З
          соответствует числу десятков и обозначает З десятка, или 30. Цифра 5
          соответствует числу единиц и обозначает 5 единиц, или просто 5. Когда
          мы записываем число, порядок, в котором в нем расположены цифры, имеет
          нема ловажное значение.
        </Typography>
        <Typography variant='body1'>
          Когда мы записываем цену, или число, соответствующее количеству денег,
          мы используем десятичную запятую, чтобы отделить доллары от центов.
          Например, 1,25 доллара обозначает 1 доллар и 25 сотых доллара (25
          центов). Первая цифра после Запятой обозначает десятые доллара (10
          монет по 1 0 центов составляют 1 доллар). Вторая цифра после запятой
          обозначает сотые доллара (100 центов составляют 1 доллар).
        </Typography>
        <Typography variant='body1'>
          Перемножение десятичных дробей* не более сложная операция, чем
          перемножение любых других чисел. Рассмотрим на примерах. Например:
        </Typography>
        <Typography variant='h3' align='center'>
          1,3 х 1,4 =
        </Typography>
        <Typography variant='body1'>
          Перемножение десятичных дробей* не более сложная операция, чем
          перемножение любых других чисел. Рассмотрим на примерах. Например:
        </Typography>
        <Typography variant='body1'>
          (1,3 — одна целая и три десятых; 1,4 — одна целая и четыре десятых.)
          Записываем пример как есть; однако не обращаем внимания на запятые:
        </Typography>
        <Typography variant='body1'>
          Хотя мы и записали 1,3 х 1,4, пример будем решать так, будто он
          выглядит следуюфим образом:
        </Typography>
        <Typography variant='h3' align='center'>
          13 х 14 =
        </Typography>
        <Typography variant='body1'>
          Забудьте про запятую и скажите про себя: «Тринадцать плюс четыре равно
          семнадцать... умножим на десять... сто семьдесят. Четырежды три —
          двенадать... плюс сто семьдесят... сто восемьдесят два». Решение
          примера выглядит так:
        </Typography>
        <Typography variant='h3' align='center'>
          1,3 х 1,4 = 182
        </Typography>
        <Typography variant='body1'>
          Однако нашим искомым произведением являлось 1,3 х 1,4, а мы пока
          вычислили только 13 х 14. Пример решен не до конца. Нам необходимо
          выяснить, где расположить десятичную запятую в полученном ответе.
          Чтобы это сделать, посмотрим на множители и отсчитаем количество цифр
          после запятой. Имеются две цифры после запятой: З в числе 1,3 и 4 в
          числе 1,4. Поскольку имеем в сумме две цифры после запятой в
          множителях, в ответе также должно быть две цифры после запятой.
          Отсчитываем две цифры с конца и ставим запятую между цифрами 1 и 8.
        </Typography>
        <Typography variant='h3' align='center'>
          1,3 х 1,4 = 1,82
        </Typography>
        <Typography variant='body1'>
          Простым способом проверки полученного ответа является оценка
          приближением. Это означает, что вместо того, чтобы использовать
          исходные числа (1,3 и 1,4), мы округлим их до 1 и 1,5 соответственно.
          Произведение 1 х 1,5 дает 1,5. Таким образом, искомый ответ должен
          находиться где-то между 1 и 2, а не, скажем, 20 или 200. Это дает нам
          понять, что мы правильно определили место десятичной запятой.
          Попробуем решить такой пример:
        </Typography>
        <Typography variant='h3' align='center'>
          9,6 х 97 =
        </Typography>

        <TableContainer
          component={Paper}
          sx={{ width: 620, margin: '1rem auto' }}
        >
          <Table
            // sx={{ minWidth: 650 }}
            align='center'
            aria-label='simple table'
          >
            <TableBody>
              <TableRow
                sx={{
                  display: 'none',
                }}
              >
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
                    12
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
                    12
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +144
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
                    100
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    9,6
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
                    {/* 9300 */}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                sx={
                  {
                    // display: 'none',
                  }
                }
              >
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
                    {/* +12 */}
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow
                sx={{
                  display: 'none',
                }}
              >
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
        <br />
        <Typography variant='h3' align='center'>
          96 - 3 = 93
        </Typography>
        <Typography variant='h3' align='center'>
          93 х 100 (опорное число) = 9300
        </Typography>
        <Typography variant='h3' align='center'>
          4 х 3 = 12
        </Typography>

        <Typography variant='h3' align='center'>
          9300 + 12 = 9312
        </Typography>
        <Typography variant='body1'>
          Промежуточное решение выглядит так:
        </Typography>
        <TableContainer
          component={Paper}
          sx={{ width: 620, margin: '1rem auto' }}
        >
          <Table
            // sx={{ minWidth: 650 }}
            align='center'
            aria-label='simple table'
          >
            <TableBody>
              <TableRow
                sx={{
                  display: 'none',
                }}
              >
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
                    12
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
                    12
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +144
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
                    100
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    9,6
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
              <TableRow
                sx={
                  {
                    // display: 'none',
                  }
                }
              >
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

              <TableRow
                sx={
                  {
                    // display: 'none',
                  }
                }
              >
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
          Где нам поставить десятичную запятую? Сколько всего цифр после запятой
          имеется в множителях примера? Одна. Столько же цифр после запятой
          должно быть и в ответе. Окончательный ответ
        </Typography>
        <Typography variant='h3' align='center'>
          9,6 х 97 = 931,2
        </Typography>
        <Typography variant='body1'>
          Для того чтобы определить, где поставить десятичную запятую, мы должны
          подсчитать общее количество цифр после запятой у обоих чисел, которые
          мы перемножаем. Не забудьте проследить, чтобы такое же число цифр
          после запятой было и в ответе. Можно дополнительно проверить ответ,
          умножив 10 (округленное значение числа 9,6 в сторону увеличения) на 90
          (округленное значение числа 97 в сторону уменьшения), что дает 900.
          Теперь мы знаем, что ответ должен быть где-то в районе.числа 900, а не
          9000 или 90.
        </Typography>
        <Typography variant='body1'>
          Если бы требовалось перемножить 9,6 и 9,7, мы получили бы в ответе
          93,12. Данный факт может помочь нам найти пути еще большего упрощения
          вычислений, которые иначе были бы не так очевидны. Мы скоро рассмотрим
          эти возможности
        </Typography>
        <Typography variant='body1'>
          Предположим, что вам надо было бы решить следующий пример:
        </Typography>
        <Typography variant='h3' align='center'>
          0,13 x 0,14 =
        </Typography>
        <Typography variant='body1'>Вспомним, что:</Typography>
        <Typography variant='h3' align='center'>
          13 х 14 = 182
        </Typography>
        <Typography variant='body1'>
          Где нам поставить запятую? Сколько всего цифр после запятой у обоих
          множителей? Четыре: цифры 1 и З в первом множителе и цифры 1 и 4 во
          втором. Стало быть, необходимо отсчитать четыре цифры в ответе,
          начиная с конца. Нам придется добавить одну цифру, поскольку у нас
          получился трехзначный ответ (182). Поэтому отсчитываем три цифры и
          добавляем 0. Наш ответ теперь выглядит следующим образом:
        </Typography>
        <Typography variant='h3' align='center'>
          0,13 x 0,14 =0,0182
        </Typography>
        <Typography variant='body1'>
          Нам также необходимо поставить 0 и перед запятой, поскольку перед ней
          всегда должна стоять хотя бы одна цифра. В нашем случае мы добавляем 0
          в качестве четвертой цифры после запятой, а также ставим 0 перед
          запятой.
        </Typography>
        <Typography variant='body1'>
          Рассмотрим еще один пример, чтобы закрепить усвоенное:
        </Typography>
        <Typography variant='h3' align='center'>
          0,014 x 1,4 =
        </Typography>
        <Typography variant='h3' align='center'>
          14 x 14 = 196
        </Typography>

        <Typography variant='body1'>
          Где должна стоять запятая? У множителей в сумме четыре цифры после
          запятой, а именно: 0, 1 и 4 — У первого множителя и 4 — у второго.
          Поэтому и в ответе после запятой должны стоять четыре цифры. Поскольку
          цифр в ответе всего три, мы добавляем 0 в качестве четвертой цифры
          после запятой. Ответ таков:
        </Typography>
        <Typography variant='h3' align='center'>
          0,014 x 1,4 = 0,0196
        </Typography>
        <Typography variant='body1'>
          Знание этого простого принципа поможет нам решить некоторые задачи,
          которые могут показаться трудными, если применить к ним изученный нами
          метод. После некоторой модификации условия задачи можно значительно
          упростить решение. Рассмотрим пример:
        </Typography>
        <Typography variant='h3' align='center'>
          8 х 68 =
        </Typography>
        <Typography variant='body1'>
          Какое опорное число нам использовать в данном случае? Можно было бы
          взять 10 в качестве опорного для множителя 8, но для 68 лучше взять
          100, поскольку эти числа ближе друг к другу. Может быть, попробовать
          50? Однако наш метод работает лучше, могда числа расположены недалеко
          друг от друга. В таком случае как нам решать задачу? А почему не
          написать 8,0 вместо 8?
        </Typography>
        <Typography variant='body1'>
          Какое опорное число нам использовать в данном случае? Можно было бы
          взять 10 в качестве опорного для множителя 8, но для 68 лучше взять
          100, поскольку эти числа ближе друг к другу. Может быть, попробовать
          50? Однако наш метод работает лучше, могда числа расположены недалеко
          друг от друга. В таком случае как нам решать задачу? А почему не
          написать 8,0 вместо 8?
        </Typography>
        <Typography variant='body1'>
          Между 8 и 8,0 нет никакой разницы. Первое число (8) означает, что мы
          имеем 8 единиц, а второе (8,0) — что у нас есть 8 единиц с точностью
          до одного десятичного знака. Однако этот знак, будучи нулевым, ничего
          ни прибавляет, ни убавляет от целой части (8). Итак, мы получили:
        </Typography>

        <TableContainer
          component={Paper}
          sx={{ width: 620, margin: '1rem auto' }}
        >
          <Table
            // sx={{ minWidth: 650 }}
            align='center'
            aria-label='simple table'
          >
            <TableBody>
              <TableRow
                sx={{
                  display: 'none',
                }}
              >
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
                    12
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
                    12
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +144
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
                    100
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    8,0
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    68
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* 4800 */}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                sx={
                  {
                    // display: 'none',
                  }
                }
              >
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
                    20
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
                    32
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* +640 */}
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow
                sx={{
                  display: 'none',
                }}
              >
                <TableCell colSpan={5}>
                  <Typography variant='h3' align='right'>
                    Ответ
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    5440
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='body1'>
          Теперь задача решается легко. Вычитаем накрест:
        </Typography>
        <Typography variant='h3' align='center'>
          68 - 20 = 48
        </Typography>

        <Typography variant='body1'>
          Умножаем 48 на опорное число 100 и получаем 4800. Перемножим числа в
          кружках.
        </Typography>
        <Typography variant='h3' align='center'>
          20 х 32 = 640
        </Typography>
        <Typography variant='body1'>
          (Чтобы умножить на 20, умножаем сначала на 2, а затем на 10, поскольку
          2 х 10 = 20.) 4800 + 640 = 5440. Таким образом:
        </Typography>

        <TableContainer
          component={Paper}
          sx={{ width: 620, margin: '1rem auto' }}
        >
          <Table
            // sx={{ minWidth: 650 }}
            align='center'
            aria-label='simple table'
          >
            <TableBody>
              <TableRow
                sx={{
                  display: 'none',
                }}
              >
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
                    12
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
                    12
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +144
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
                    100
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    8,0
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    68
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    4800
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                sx={
                  {
                    // display: 'none',
                  }
                }
              >
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
                    20
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
                    32
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +640
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow
                sx={
                  {
                    // display: 'none',
                  }
                }
              >
                <TableCell colSpan={5}>
                  <Typography variant='h3' align='right'>
                    Ответ
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    5440
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>
          Теперь необходимо правильно расположить десятичную запятую. Сколько
          цифр после запятой в множителях в условии задачи? Одна, тот нуль, что
          мы прибавили сами. Таким образом, мы отсчитываем одну цифру справа в
          ответе.
        </Typography>
        <Typography variant='h3' align='center'>
          8,0 х 68 = 544,0
        </Typography>
        <Typography variant='body1'>
          Решение примеров не составило труда, не так ли? Применив немного
          воображения, вы сможете использовать данные подходы для решения любой
          задачи на умножение.
        </Typography>

        {/* <section>
          <Typography variant='h3' align='center'>
            Проверка ответов
          </Typography>
          <Typography variant='body1'>
            Применим то, чему мы научились , чтобы проверить, верный ли получили
            ответ:
          </Typography>
          <Typography variant='h3' align='center'>
            52 х 63 =
          </Typography>
          <Typography variant='body1'>
            Числами-подстановками для 52 и 63 будут 7 и 9 соответственно
          </Typography>
          <Typography variant='h3' align='center'>
            7 х 9 = 63
          </Typography>
          <Typography variant='h3' align='center'>
            6 + 3 = 9
          </Typography>
          <Typography variant='body1'>
            9 — это наше контрольное число.
          </Typography>
          <Typography variant='body1'>
            Цифры исходного ответа (3) дают в сумме 9:
          </Typography>
          <Typography variant='h3' align='center'>
            3 + 2 + 7 + 6 = 18
          </Typography>
          <Typography variant='h3' align='center'>
            1 + 8 = 9
          </Typography>
          <Typography variant='body1'>
            Полученное число равно контрольному, значит, ответ мы получили
            верный.
          </Typography>
        </section> */}
      </AccordionDetails>
    </Accordion>
  );
}

export default Description;
