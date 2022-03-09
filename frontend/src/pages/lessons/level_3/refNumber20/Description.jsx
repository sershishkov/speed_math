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
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id='panel1'>
        <Typography variant='h4'>Введение</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant='body1'>
          Мы узнали, как перемножать числа, используя простой метод,
          превращающий эту операцию в незатейливое занятие. Он легок в
          применении, когда множители являются числами, расположенными недалеко
          от 10 или 100. А как насчет перемножения чисел, находящихся вблизи 30
          или 60? Можно ли и для них использовать изученный метод? Безусловно.
        </Typography>
        <Typography variant='body1'>
          Мы выбирали числа 10 и 100 в качестве опорных, поскольку на них легко
          умножать. Метод будет прекрасно работать и с другими опорными числами,
          однако надо стараться выбирать те из них, на которые легко умножать.
        </Typography>
        <Typography variant='h3' align='center'>
          Умножение по множителям
        </Typography>
        <Typography variant='body1'>
          Легко умножать на 20, поскольку 20 равно 2 х 10, На которые умножать
          очень легко. Речь идет об умножении по множителям, а 10 и 2 являются
          множитеЛями числа 20.
        </Typography>
        <Typography variant='h3' align='center'>
          10 х 2 = 20
        </Typography>
        <Typography variant='body1'>Рассмотрим пример:</Typography>
        <Typography variant='h3' align='center'>
          23 х 24 =
        </Typography>
        <Typography variant='body1'>
          23 и 24 больше, чем опорное число 20, поэтому рисуем кружки над
          множителями. Больше, но на сколько? На З и 4 соответственно. Вписываем
          эти числа в соответствующие кружки, которые мы нарисовали вверху,
          потому что речь идет о положительных числах (23 = 20 + З, 24 = 20 +
          4).
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
                    20
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    23
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    24
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* 13300 */}
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
        <Typography variant='body1'>Складываем накрест, как раньше:</Typography>
        <Typography variant='h3' align='center'>
          23 + 4 = 27 или 24 + 3 = 27
        </Typography>
        <Typography variant='body1'>
          Теперь умножим полученный ответ на опорное число 20. Для этого умножим
          сначала на 2, а потом на 10
        </Typography>
        <Typography variant='h3' align='center'>
          27 х 2 = 54
        </Typography>
        <Typography variant='h3' align='center'>
          54 х 10 = 540
        </Typography>
        <Typography variant='body1'>
          В остальном все то же самое. Перемножаем числа в кружках и прибавляем
          к промежуточному результату 540.
        </Typography>
        <Typography variant='h3' align='center'>
          3 х 4 = 12
        </Typography>
        <Typography variant='h3' align='center'>
          540 + 12 = 552
        </Typography>
        <Typography variant='body1'>
          Полностью решенный пример выглядит так:
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
                    20
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    23
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    24
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    540
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

              <TableRow
                sx={
                  {
                    // display: 'none'
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
                    552
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='h3' align='center'>
          Проверка ответов
        </Typography>
        <Typography variant='body1'>
          Применим то, чему мы научились , чтобы проверить, верный ли получили
          ответ:
        </Typography>
        <Typography variant='h3' align='center'>
          23 х 24 =
        </Typography>
        <Typography variant='body1'>
          Числами-подстановками для 23 и 24 будут 5 и 6 соответственно
        </Typography>
        <Typography variant='h3' align='center'>
          5 х 6 = 30
        </Typography>
        <Typography variant='h3' align='center'>
          3 + 0 = 3
        </Typography>
        <Typography variant='body1'>3 — это наше контрольное число.</Typography>
        <Typography variant='body1'>
          Цифры исходного ответа (552) дают в сумме 3:
        </Typography>
        <Typography variant='h3' align='center'>
          5 + 5 + 2 = 12
        </Typography>
        <Typography variant='h3' align='center'>
          1 + 2 = 3
        </Typography>
        <Typography variant='body1'>
          Полученное число равно контрольному, значит, ответ мы получили верный.
        </Typography>
        <Typography variant='body1'>
          Попробуем решить еще один пример:
        </Typography>
        <Typography variant='h3' align='center'>
          23 х 31 =
        </Typography>
        <Typography variant='body1'>
          Пишем З и 11 в кружках над 23 и 31 , поскольку наши множители больше
          опорного числа 20 на З и 11 соответственно.
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
                    11
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
                    20
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    23
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    31
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* 13300 */}
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
        <Typography variant='body1'>Складывая накрест, получаем 34:</Typography>
        <Typography variant='h3' align='center'>
          31 + 3 = 34 или 23 + 11 = 34
        </Typography>
        <Typography variant='body1'>
          Умножаем полученный ответ на опорное число 20. Для этого сначала
          умножим 34 на 2, а то, что получится, — на 10
        </Typography>
        <Typography variant='h3' align='center'>
          34 х 2 = 68
        </Typography>
        <Typography variant='h3' align='center'>
          68 х 10 = 680
        </Typography>
        <Typography variant='body1'>
          Это наш промежуточный ответ. Теперь перемножаем числа в кружках:
        </Typography>
        <Typography variant='h3' align='center'>
          3 х 11 = 33
        </Typography>
        <Typography variant='body1'>Прибавим 33 к 680:</Typography>
        <Typography variant='h3' align='center'>
          680 + 33 = 713
        </Typography>
        <Typography variant='body1'>
          Полностью решенный пример выглядит следующим образом:
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
                    11
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +33
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
                    20
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    23
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    31
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    680
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

              <TableRow
                sx={
                  {
                    // display: 'none'
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
                    713
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='h3' align='center'>
          Проверка ответов
        </Typography>
        <Typography variant='body1'>
          Применим то, чему мы научились , чтобы проверить, верный ли получили
          ответ:
        </Typography>
        <Typography variant='h3' align='center'>
          23 х 31 =
        </Typography>
        <Typography variant='body1'>
          Числами-подстановками для 23 и 24 будут 5 и 4 соответственно
        </Typography>
        <Typography variant='h3' align='center'>
          5 х 4 = 20
        </Typography>
        <Typography variant='h3' align='center'>
          2 + 0 = 2
        </Typography>
        <Typography variant='body1'>2 — это наше контрольное число.</Typography>
        <Typography variant='body1'>
          Цифры исходного ответа (713) дают в сумме 2:
        </Typography>
        <Typography variant='h3' align='center'>
          7 + 1 + 3 = 11
        </Typography>
        <Typography variant='h3' align='center'>
          1 + 1 = 2
        </Typography>
        <Typography variant='body1'>
          Полученное число равно контрольному, значит, ответ мы получили верный.
        </Typography>
        <Typography variant='body1'>
          Вы должны уметь решать эти примеры в уме. Это нетрудно, если немного
          попрактиковаться.
        </Typography>
        <Typography variant='h3' align='center'>
          Умножение чисел меньше 20
        </Typography>
        <Typography variant='body1'>
          А как насчет перемножения чисел, которые меньше 20? Если они (или хотя
          бы одно из них) больше 15, но меньше 20, можно использовать 20 в
          качестве опорного числа.
        </Typography>
        <Typography variant='body1'>Решим пример:</Typography>
        <Typography variant='h3' align='center'>
          19 х 16 =
        </Typography>
        <Typography variant='body1'>
          Взяв 20 в качестве опорного числа, получим:
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
                    11
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +33
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
                    20
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    19
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    16
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* 300 */}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                sx={
                  {
                    // display: 'none'
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
                    1
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
                    4
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* +4 */}
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
                    304
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='body1'>Вычитаем накрест:</Typography>
        <Typography variant='h3' align='center'>
          16 -1 = 15 или 19 - 4 = 15
        </Typography>
        <Typography variant='body1'>Умножаем на 20:</Typography>
        <Typography variant='h3' align='center'>
          15 х 2 = 30
        </Typography>
        <Typography variant='h3' align='center'>
          30 х 10 = 300
        </Typography>
        <Typography variant='body1'>
          300 является нашим промежуточным ответом.
        </Typography>
        <Typography variant='body1'>
          Теперь перемножим числа в кружках и прибавим результат к
          промежуточному ответу:
        </Typography>
        <Typography variant='h3' align='center'>
          1 х 4 = 4
        </Typography>
        <Typography variant='h3' align='center'>
          300 + 4 = 304
        </Typography>
        <Typography variant='body1'>
          Полностью решенный пример выглядит так:
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
                    11
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +33
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
                    20
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    19
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    16
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    300
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                sx={
                  {
                    // display: 'none'
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
                    1
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
                    4
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +4
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
                    304
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='body1'>
          Попробуем решить тот же пример, взяв на этот раз 10 в качестве
          опорного числа:
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
              <TableRow
                sx={
                  {
                    // display: 'none'
                  }
                }
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
                    9
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
                    6
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* +54 */}
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
                    19
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    16
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* 250 */}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  display: 'none',
                }}
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
                    1
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
                    4
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* +4 */}
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
                    304
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='body1'>
          Сложим накрест, а затем умножим результат на 10, получив промежуточный
          ответ:
        </Typography>
        <Typography variant='h3' align='center'>
          19 + 6 = 25
        </Typography>
        <Typography variant='h3' align='center'>
          10 х 25 = 250
        </Typography>
        <Typography variant='body1'>
          Перемножим числа в кружках и прибавим результат к промежуточному
          ответу:
        </Typography>
        <Typography variant='h3' align='center'>
          9 х 6 = 54
        </Typography>
        <Typography variant='h3' align='center'>
          250 + 54 = 304
        </Typography>
        <Typography variant='body1'>
          Полностью решенный пример выглядит следующим образом:
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
              <TableRow
                sx={
                  {
                    // display: 'none'
                  }
                }
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
                    9
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
                    6
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +54
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
                    19
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    16
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    250
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  display: 'none',
                }}
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
                    1
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
                    4
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +4
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
                    304
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='body1'>
          Это подтверждает ранее полученный результат.
        </Typography>
        <Typography variant='body1'>
          Большой разницы между двумя использованными опорными числами нет. Это
          вопрос личных предпочтений. Просто выбирайте то опорное число, с
          которым вам легче работать.
        </Typography>
        <Typography variant='h3' align='center'>
          Числа больше и меньше 20
        </Typography>
        <Typography variant='body1'>
          Третий случай — это когда одно число больше, а другое меньше 20.
          Например:
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
                    12
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
                    20
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    18
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    32
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* 600 */}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  display: 'none',
                }}
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
                    -24
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
                    576
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='body1'>
          Можно либо сложить 18 и 12, либо вычесть 2 из 32, а затем умножить
          результат на опорное число:
        </Typography>
        <Typography variant='h3' align='center'>
          32 - 2 = 30
        </Typography>
        <Typography variant='h3' align='center'>
          30 x 20 = 600
        </Typography>
        <Typography variant='body1'>
          Можно либо сложить 18 и 12, либо вычесть 2 из 32, а затем умножить
          результат на опорное число:
        </Typography>
        <Typography variant='body1'>
          Теперь перемножаем числа в кружках:
        </Typography>
        <Typography variant='h3' align='center'>
          2 х 12 = 24
        </Typography>
        <Typography variant='body1'>
          На самом деле мы перемножаем минус 2 и 12, поэтому ответом будет минус
          24.
        </Typography>
        <Typography variant='h3' align='center'>
          600 - 24 = 576
        </Typography>
        <Typography variant='body1'>
          Решение примера выглядит следующим образом:
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
              <TableRow
                sx={
                  {
                    // display: 'none',
                  }
                }
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
                    12
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
                    20
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    18
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    32
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    600
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
                    -24
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
                    576
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>
          Чтобы отнять 24, вычитаем сначала 30, а затем прибавляем 6.
        </Typography>

        <Typography variant='h3' align='center'>
          Проверка ответов
        </Typography>
        <Typography variant='body1'>
          Применим то, чему мы научились , чтобы проверить, верный ли получили
          ответ:
        </Typography>
        <Typography variant='h3' align='center'>
          18 х 32 =
        </Typography>
        <Typography variant='body1'>
          Числами-подстановками для 18 и 32 будут 9 и 5 соответственно
        </Typography>
        <Typography variant='h3' align='center'>
          9 х 5 = 45
        </Typography>
        <Typography variant='h3' align='center'>
          4 + 5 = 9
        </Typography>
        <Typography variant='body1'>9 — это наше контрольное число.</Typography>
        <Typography variant='body1'>
          Цифры исходного ответа (576) дают в сумме 9:
        </Typography>
        <Typography variant='h3' align='center'>
          5 + 7 + 6 = 18
        </Typography>
        <Typography variant='h3' align='center'>
          1 + 8 = 9
        </Typography>
        <Typography variant='body1'>
          Полученное число равно контрольному, значит, ответ мы получили верный.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Description;
