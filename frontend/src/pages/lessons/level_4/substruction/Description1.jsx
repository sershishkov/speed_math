import React, { useState } from 'react';

import classes from './styles.module.scss';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';
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
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id='panel1'>
        <Typography variant='h6'>Введение</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant='body1'>
          Большинство людей считают, что вычитать сложнее, чем складывать. Вовсе
          не обязательно. В настоящей главе мы познакомимся с подходами, которые
          сделают для вас вычитание пустяковым делом.
        </Typography>
        <Typography variant='body1'>
          Прежде всего рассмотрим, как вычитать числа в уме.
        </Typography>
        <Typography variant='body1'>
          Чтобы вычесть два числа в уме, попробуйте округлить вычитаемое, а
          затем подкорректируйте полученный ответ.
        </Typography>
        <Typography variant='body1'>
          Чтобы вычесть 9, отнимите 10, а затем прибавьте к ответу 1; чтобы
          вычесть 8, отнимите 10 и прибавьте 2; чтобы вычесть 7, отнимите 10 и
          прибавьте З. Например:
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    56
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    9
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    =
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    1
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='body1'>
          Чтобы вычесть 9 из 56 в уме, самый простой способ сделать это —
          сначала вычесть 10 (получив в ответе 46), а затем прибавить 1 (47).
        </Typography>
        <Typography variant='body1'>
          Вычитая 8 из 47, отнимите 10 (37) и прибавьте 2 (39).
        </Typography>
        <Typography variant='body1'>
          Чтобы вычесть 38 из 54, отнимаем сначала 40 (что даст нам 14), а затем
          прибавляем 2, получив окончательный ответ 16.
        </Typography>
        <Typography variant='body1'>
          На бумаге решение выглядело бы так:
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    54
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    38
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    =
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    2
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='body1'>
          54 минус 40 и плюс 2 (в кружке) дает 16
        </Typography>
        <Typography variant='body1'>
          Чтобы вычесть число, близкое по величине к 100, отнимайте 100 и
          прибавляйте разницу. Например, вычитая 87 из какого-нибудь числа,
          отнимаем 100 и прибавляем 13, поскольку 100 — 87 = 13.
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    436
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    87
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    =
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    13
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='body1'>
          Отнимем 100, что даст нам 336. Прибавим 13 (для чего сначала
          прибавляем 10, а затем еще З), получив в ответе 349. Все очень просто.
        </Typography>
        <Typography variant='h5' align='center'>
          Вычитание числа меньше 100 из числа больше 100
        </Typography>
        <Typography variant='body1'>
          Если вычитаемое (число, которое вычитают) меньше 100, а уменьшаемое
          (число, из которого вычитают) больше 100, но меньше 200, есть простой
          способ вычислить разность в уме.Например:
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    134
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    76
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    =
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    24
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='body1'>
          76 на 24 меньше 100. 134 на 34 больше 100. Прибавим 24 к 34 и получим
          легкий ответ: 58. Решим другой пример:
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    152
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    88
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    =
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    12
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='h5' align='center'>
          12 + 52 = 64 ОТВЕТ
        </Typography>
        <Typography variant='body1'>
          Тот же принцип применим и к числам, которые больше или меньше 10. К
          примеру:
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    13
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    6
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    =
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    4
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='h5' align='center'>
          З + 4 = 7 ОТВЕТ
        </Typography>
        <Typography variant='body1'>
          Тот же подход справедлив и для вычитания трехзначных чисел:
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    461
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    275
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    =
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    25
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='h5' align='center'>
          461 - 300 = 161
        </Typography>
        <Typography variant='h5' align='center'>
          161 + 25 = 186
        </Typography>
        <Typography variant='body1'>
          Мы выполняем лишь одно несложное вычитание, все остальное в решении —
          это сложение. Попробуем еще:
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    834
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    286
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    =
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    14
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='h5' align='center'>
          834 - 300 = 534
        </Typography>
        <Typography variant='h5' align='center'>
          534 + 14 = 548
        </Typography>
        <Typography variant='body1'>
          Про себя можно проговорить решение так: «Четырнадцать, которых не
          хватает до трехсот, плюс пятьсот, которых не хватает до восьмисот,
          дает пятьсот четырнадцать, плюс тридцать четыре — это пятьсот сорок
          восемь».
        </Typography>
        <Typography variant='body1'>
          Чтобы прибавить 34, сначала приплюсовываем 30, а потом еще 4.
        </Typography>
        <Typography variant='body1'>
          В этом состоит простой метод вычитания в уме. Не надо переносить или
          забирать разряды, и не представляет труда удерживание в уме сразу
          нескольких чисел.
        </Typography>
        <Typography variant='h5' align='center'>
          Вычитание на бумаге
        </Typography>
        <Typography variant='body1'>
          Сейчас я расскажу о методе вычитания на бумаге, которому меня научили
          в третьем классе. Если вы достаточно освоили приемы умножения,
          описанные выше, данный метод не представит для вас труда.
        </Typography>
        <Typography variant='body1'>
          Легкий способ вычитания используется в каждом из двух методов с
          переносом разрядов. О них вы непременно узнаете.
        </Typography>
        <Typography variant='body1'>
          Разница между стандартным и легким способами вычитания является
          незначительной, но важной. Я объясню, как легче вычитать с помощью
          обоих методов, где используется перенос цифр из одного разряда в
          другой. Применяйте тот метод, который вам привычнее или кажется более
          простым.
        </Typography>
        <Typography variant='h5' align='center'>
          Вычитание: первый метод
        </Typography>
        <Typography variant='body1'>
          Возьмем типичный пример вычитания: 7254 - 3897 =
        </Typography>
        <TableContainer>
          <Table className={classes.substr_table}>
            <TableBody>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    6
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    <sub>1</sub>1
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    <sub>1</sub>4
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                    sx={{
                      textDecoration: 'line-through',
                      textDecorationColor: 'red',
                    }}
                  >
                    7
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                    sx={{
                      textDecoration: 'line-through',
                      textDecorationColor: 'red',
                    }}
                  >
                    2
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                    sx={{
                      textDecoration: 'line-through',
                      textDecorationColor: 'red',
                    }}
                  >
                    5
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    <sub>1</sub>4
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                className={classes.substr_row}
                sx={{ borderBottom: '1px solid #000' }}
              >
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    3
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    8
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    9
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    7
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    3
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    3
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    5
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    7
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='body1'>
          Вычтем 7 из 4. Это сделать невозможно, поэтому забираем 1 из разряда
          десятков. Вычеркиваем 5 и пишем выше 4. И вот в чем отличие. Вы не
          говорите «четырнадцать минус семь», а произносите: «Семь вычесть из
          десяти равно затем прибавляете число, записанное над 7 (4), и
          получаете 7 — это первая цифра ответа.
        </Typography>
        <Typography variant='body1'>
          Пользуясь таким подходом, вы никогда не вычитаете из числа, большего
          чем 10. Все остальное представляет собой операцию сложения. 9 вычесть
          из 4 невозможно, поэтому забираем 1 из разряда сотен. 10 МИнус 9 дает
          1, 1 плюс 4 равно 5 — следующая цифра ответа.
        </Typography>
        <Typography variant='body1'>
          8 вычесть из 1 нельзя, поэтому снова переносим 1 из следующего
          разряда. 10 минус 8 равно 2; 2 плюс 1 равно З — следующая цифра
          ответа.
        </Typography>
        <Typography variant='body1'>
          8 вычесть из 1 нельзя, поэтому снова переносим 1 из следующего
          разряда. 10 минус 8 равно 2; 2 плюс 1 равно З — следующая цифра
          ответа.
        </Typography>
        <Typography variant='body1'>
          6 минус З дает З — последняя цифра ответа.
        </Typography>
        <Typography variant='h5' align='center'>
          Вычитание: второй метод
        </Typography>
        <TableContainer>
          <Table className={classes.substr_table}>
            <TableBody>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    7
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    <sub>1</sub>2
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    <sub>1</sub>5
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    <sub>1</sub>4
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                className={classes.substr_row}
                sx={{ borderBottom: '1px solid #000' }}
              >
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    <sup>1</sup>3
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    <sup>1</sup>8
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    <sup>1</sup>9
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    7
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    3
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    3
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    5
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    7
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='body1'>
          Вычитаем 7 из 4. Этого сделать нельзя, поэтому переносим 1 из разряда
          десятков. Ставим 1 перед 4, чтобы получилось 14, а также записываем
          маленькую 1 перед 9 в колонке десятков. Вы не говорите «семь вычесть
          из четырнадцати», а произносите: «Семь вычесть из десяти дает три» ,
          плюс 4 сверху — получается 7 — это первая цифра ответа.
        </Typography>
        <Typography variant='body1'>
          10 (9 плюс перенесенная 1) вычесть из 5 не удается, поэтому забираем 1
          из следующего разряда, как и раньше. 10 при вычитании из 15 дает 5,
          или 10 минус 10 получается О, прибавляем 5, равно 5
        </Typography>
        <Typography variant='body1'>
          9 из 2 не вычитается, поэтому опять переносим 1.
        </Typography>
        <Typography variant='body1'>
          9 из 10 дает 1, прибавляем 2 и получаем З.
        </Typography>
        <Typography variant='body1'>7 минус 4 равно З. Ответ готов.</Typography>
        <Typography variant='body1'>
          Вам не надо запоминать комбинации однозначных чисел, которые дают в
          сумме числа, превышающие 10. Используя способ простого вычитания, вы
          никогда не отнимаете от чисел, больших 10. Это упрощает вычисления и
          снижает вероятность ошибки.
        </Typography>
        <Typography variant='body1'>
          Данный подход очень важен. Если вы вполне овладели умножением с
          помощью простых подходов, с которыми я познакомил вас ранее, то должны
          были усвоить комбинации чисел, дающих в сумме 10. Существует всего
          пять таких комбинаций.
        </Typography>
        <Typography variant='body1'>
          С другой стороны, если бы вам пришлось выучить все комбинации
          однозначных чисел, которые дают в сумме число больше 10, то их уже 20.
          Используяже рассматриваемый подход, эти комбинации вообще не придется
          запоминать. Чтобы вычесть 8 из 15, отнимаем 8 от 10 (получаем 2), а
          затем прибавляем 5 и получаем ответ: 7.
        </Typography>
        <Typography variant='body1'>
          Мой преподаватель в третьем классе учил меня никогда не вычитать из
          числа больше 10. Вероятность того, что вы допустите ошибку, вычитая из
          числа больше 10 и меньше 20, гораздо выше, нежели при вычитании из 10.
          Пользуясь таблицей умножения и правилами умножения из первых глав этой
          книги, вы почти никогда не допустите ошибок, вычитая из 10: ответы у
          вас будут получаться почти автоматически.
        </Typography>
        <Typography variant='h5' align='center'>
          Вычитание из чисел, кратных 10
        </Typography>
        <Typography variant='body1'>Правило такое:</Typography>
        <Typography variant='body1'>
          Вычитайте цифру разряда единиц из 10, каждую последующую — из 9, а
          затем уменьшите на 1 крайнюю левую цифру.Например:
        </Typography>
        <TableContainer>
          <Table className={classes.substr_table}>
            <TableBody>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    1
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                className={classes.substr_row}
                sx={{ borderBottom: '1px solid #000' }}
              >
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    5
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    7
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    4
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>
          Можно начинать либо с левой стороны, либо с правой.
        </Typography>
        <Typography variant='body1'>
          Попробуем сначала справа. Вычитаем цифру, соответствующую разряду
          единиц, из 10.
        </Typography>
        <Typography variant='h5' align='center'>
          10 - 4 = 6
        </Typography>
        <Typography variant='body1'>
          Это последняя цифра ответа. Теперь вычтем остальные цифры из 9. А из
          первой цифры уменьшаемого (1000) вычтем 1.
        </Typography>
        <Typography variant='body1'>
          10 минус 4 дает 6, 9 минус 7 дает 2, 9 минус 5 дает 4, 1 минус 1 дает
          0. Таким образом, ответ равен 426.
        </Typography>
        <Typography variant='body1'>
          Если нужно вычислить 40000 минус 2748, последовательность ваших
          действий должна быть такой:
        </Typography>
        <TableContainer>
          <Table className={classes.substr_table}>
            <TableBody>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    4
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                className={classes.substr_row}
                sx={{ borderBottom: '1px solid #000' }}
              >
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    2
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    7
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    4
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    2
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='body1'>
          Вычитаем 1 из крайней левой цифры (4) и получаем З — это первая цифра
          ответа. 9 минус 2 дает 7, 9 минус 7 дает 2, 9 минус 4 дает 5 и 10
          минус 8 дает 2
        </Typography>
        <Typography variant='body1'>
          Таким образом, ответ равен 37252.
        </Typography>
        <Typography variant='body1'>
          Используя этот способ, нам нужно лишь вычитать из чисел, не
          превышающих 10, а также выполнять сложение, когда это нужно.
        </Typography>
        <Typography variant='body1'>
          Сам подход точно такой же, как и прежде. Единственная разница состоит
          в том, что вы произносите про себя свои действия.
        </Typography>
        <Typography variant='h5' align='center'>
          Вычитание малых чисел из больших
        </Typography>
        <Typography variant='body1'>
          Если вычитаемое число имеет меньше разрядов, чем уменьшаемое, тогда
          прибавьте нули перед числом (по крайней мере, мысленно), перед тем как
          вычислять.Например:
        </Typography>
        <Typography variant='h5' align='center'>
          23000 - 46 =
        </Typography>
        <TableContainer>
          <Table className={classes.substr_table}>
            <TableBody>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    2
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    3
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                className={classes.substr_row}
                sx={{ borderBottom: '1px solid #000' }}
              >
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    4
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    6
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    2
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    2
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    9
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    5
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    4
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>
          Вычитаемое (число, которое вычитают) следует дополнить слева нулями до
          первой цифры уменьшаемого (число, из которого вычитают),отличающегося
          от нуля. Из этой цифры вы отнимаете 1. 3 минус 1 дает 2.
        </Typography>
        <Typography variant='body1'>
          Отнимите каждую последующую цифру от 9, пока Не дойдете до последней
          цифры, которую следует вычитать из 10.
        </Typography>
        <Typography variant='body1'>
          Согласно методу, которому обучают в школе, вы выполняете точно такое
          же вычисление, однако вам необходимо все время помнить о цифрах,
          переносимых из разряда в разряд. Преимущество метода, который
          предлагаю я, состоит в том, что вычисления с его помощью становятся
          механическими и выполняются с меньшей вероятностью ошибки.
        </Typography>
        <Typography variant='h5' align='center'>
          Проверка результата вычитания при помощи выбрасывания девяток
        </Typography>
        <Typography variant='body1'>
          Для операции вычитания метод, используемый нами для проверки ответов,
          похож на тот, который мы применяли в отношении примеров на сложение.
          Но есть небольшое отличие. Рассмотрим пример:
        </Typography>
        <TableContainer>
          <Table className={classes.substr_table}>
            <TableBody>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    8
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    4
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    6
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    5
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                className={classes.substr_row}
                sx={{ borderBottom: '1px solid #000' }}
              >
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    2
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    8
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    9
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    7
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    5
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    5
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    6
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    8
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='body1'>Верен ли полученный ответ?</Typography>
        <Typography variant='body1'>
          Давайте выбросим девятки и посмотрим.
        </Typography>
        <TableContainer>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    8
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                    sx={{
                      textDecoration: 'line-through',
                      textDecorationColor: 'red',
                    }}
                  >
                    4
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    6
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                    sx={{
                      textDecoration: 'line-through',
                      textDecorationColor: 'red',
                    }}
                  >
                    5
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    {'     '}
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    14
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    {'     '}
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    5
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                className={classes.substr_row}
                sx={{ borderBottom: '1px solid #000' }}
              >
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                    sx={{
                      textDecoration: 'line-through',
                      textDecorationColor: 'red',
                    }}
                  >
                    2
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    8
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                    sx={{
                      textDecoration: 'line-through',
                      textDecorationColor: 'red',
                    }}
                  >
                    9
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                    sx={{
                      textDecoration: 'line-through',
                      textDecorationColor: 'red',
                    }}
                  >
                    7
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    {'     '}
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    {'     '}
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    {'     '}
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    8
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    5
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    5
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    6
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    8
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    {'     '}
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    24
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    {'     '}
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    6
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='body1'>
          5 минус 8 равно 6? Может ли такое быть? Хотя в исходном примере мы
          вычитаем меньшее число из большего, в случае с подстановками
          вычитаемое больше, чем уменьшаемое.
        </Typography>
        <Typography variant='body1'>
          Есть два пути. Один из них состоит в том, чтобы прибавить 9 к числу,
          из которого мы вычитаем. 5 плюс 9 дает 14. Задача выглядит так:
        </Typography>
        <Typography variant='h5' align='center'>
          14 — 8 = 6
        </Typography>
        <Typography variant='body1'>
          Имеет место равенство с контрольным числом значит, наши вычисления
          верны.
        </Typography>
        <Typography variant='body1'>
          А вот путь, который предпочитаю я. Решим туже задачу в обратном
          направлении. Скорее всего, именно так вас учили проверять ответ в
          примерах на вычитание. Прибавьте ответ к числу, которое вычитали, и
          если получили уменьшаемое (контрольное число), значит, ответ
          правильный.
        </Typography>
        <Typography variant='body1'>
          Проделаем то же самое с числами-подстановками. Сложим их в направлении
          снизу вверх:
        </Typography>
        <Typography variant='h5' align='center'>
          6 + 8 = 5
        </Typography>
        <Typography variant='h5' align='center'>
          6 + 8 = 14 и 1 + 4 = 5
        </Typography>
        <Typography variant='body1'>Ответ верный.</Typography>
        <Typography variant='body1'>
          Данный метод позволяет выявить большинство ошибок в примерах на
          сложение и вычитание. Используйте его и сделайте неотъемлемой частью
          своих вычислений. Займет он совсем немного времени, но поможет вам
          заслужить репутацию человека, исключительно точного в операциях с
          числами.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Description;
