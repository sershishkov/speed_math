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
          Наш метод умножения прекрасно работал для чисел, которые не очень
          сильно разнятся между собой по величине. В противном случае метод
          также работает, но вычисления будут более громоздкими. Например, что,
          если бы мы захотели вычислить, сколько будет 13 х 64? Какое опорное
          число нам выбрать? В настоящей главе мы рассмотрим простой метод,
          позволяющий следовать прежней стратегии, но с использованием двух
          опорных чисел.
        </Typography>
        <Typography variant='body1'>
          Можно перемножить два числа, которые сильно разнятся между собой по
          величине, с помощью двух опорных чисел. Давайте сначала рассмотрим
          суть вопроса, а затем я покажу, как работает метод. Возьмем
          произведение 8 х 27 в качестве примера. 8 ближе к 10, поэтому
          используем 10 в качестве первого опорного числа. 27 ближе к 30,
          поэтому 30 будет нашим Вторым опорным числом. Из данных чисел выберем
          то, на которое легче всего умножать. Поскольку очень легко умножать на
          10, выберем его. Оно будет Нашим основным опорным числом. Второе
          опорное число должно быть кратным основному. Число, которое мы
          выбрали, является кратным основному, превышая его в три раза (30 : 10
          = З). Вместо того чтобы рисовать кружок, я записываю два опорных числа
          в скобках слева от условия примера.
        </Typography>
        <Typography variant='body1'>
          Основным опорным числом является 10. Второе опорное число — это 30,
          или З х 10. Мы записываем опорные числа в скобках в виде второго
          числа, выраженного через первое, то есть:
        </Typography>
        <Typography variant='h3' align='center'>
          (10х3) 8 х 27 =
        </Typography>
        <Typography variant='body1'>
          Оба множителя в примере меньше своих опорных чисел, поэтому рисуем
          кружки под множителями. Под цифрой 8, опорным числом которой является
          10, нарисуем еще один кружок.
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
                      width: '5rem',
                      height: '5rem',
                      fontSize: '1.5rem',
                      lineHeight: 3,
                    }}
                  >
                    10x3
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    8
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    27
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* 210 */}
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
                    {/* 20 */}
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
                    {/* 32 */}
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* +6 */}
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
                    {/* 6 */}
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    216
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>
          На сколько 8 и 27 меньше своих опорных чисел (не забывайте, что З
          представляет 30)? На 2 и З. Вписываем 2 и З в кружки.
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
                      width: '5rem',
                      height: '5rem',
                      fontSize: '1.5rem',
                      lineHeight: 3,
                    }}
                  >
                    10x3
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    8
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    27
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* 210 */}
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
                  >
                    3
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* +6 */}
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
                    {/* 6 */}
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    216
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>
          Теперь умножим 2, расположенное под множителем 8, на множитель З в
          скобках.
        </Typography>
        <Typography variant='h3' align='center'>
          2 х 3 = 6
        </Typography>

        <Typography variant='body1'>
          Впишем 6 в самый нижний кружок, под 2. Теперь вычтем число в самом
          нижнем кружке накрест из 27:
        </Typography>

        <Typography variant='h3' align='center'>
          27 - 6 = 21
        </Typography>

        <Typography variant='body1'>
          Умножим 21 на основное опорное число 10:
        </Typography>

        <Typography variant='h3' align='center'>
          21 х 10 = 210
        </Typography>

        <Typography variant='body1'>
          210 является нашим промежуточным ответом. чтобы получить остальную его
          часть, перемножим чисЛа в верхних кружках (2 и З), что даст нам 6.
          Прибавим 6 к 210 и получим окончательный ответ: 216.
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
                      width: '5rem',
                      height: '5rem',
                      fontSize: '1.5rem',
                      lineHeight: 3.2,
                    }}
                  >
                    10x3
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    8
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    27
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    210
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
                  >
                    3
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
                    6
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    216
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>Решим другой пример:</Typography>

        <Typography variant='h3' align='center'>
          9 х 48 =
        </Typography>

        <Typography variant='body1'>
          Какие опорные числа нам следует выбрать? 10 и 50. Запишем пример
          по-новому:
        </Typography>
        <Typography variant='h3' align='center'>
          (10х5) 9 х 48 =
        </Typography>

        <Typography variant='body1'>
          Оба множителя меньше своих опорных чисел, поэтому располагаем кружки
          внизу. На сколько они меньше своих опорных чисел? На 1 и 2. Вписываем
          1 и 2 в кружки:
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
                      width: '5rem',
                      height: '5rem',
                      fontSize: '1.5rem',
                      lineHeight: 3.2,
                    }}
                  >
                    10x5
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    9
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    48
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* 430 */}
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
                    2
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* +2 */}
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
                    {/* 5 */}
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +2 */}
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
                    432
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>
          Теперь умножим 1 под 9 на множитель 5, который в скобках
        </Typography>

        <Typography variant='h3' align='center'>
          1 х 5 = 5
        </Typography>

        <Typography variant='body1'>
          Записываем 5 в самый нижний кружок, под 1. Решение нашего примера
          теперь выглядит следующим образом:
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
                      width: '5rem',
                      height: '5rem',
                      fontSize: '1.5rem',
                      lineHeight: 3.2,
                    }}
                  >
                    10x5
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    9
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    48
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* 430 */}
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
                    2
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* +2 */}
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
                    5
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +2 */}
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
                    432
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>Вычтем 5 из 48</Typography>

        <Typography variant='h3' align='center'>
          48 — 5 = 43
        </Typography>

        <Typography variant='body1'>
          Запишем 43 после знака равенства. Умножим 43 на опорное число 10 (для
          этого просто припишем О справа к 43), что и даст ответ.
        </Typography>

        <Typography variant='h3' align='center'>
          43 х 10 = 430
        </Typography>

        <Typography variant='body1'>
          В качестве последнего шага перемножим числа в двух верхних кружках:
        </Typography>

        <Typography variant='h3' align='center'>
          1 х 2 = 2
        </Typography>

        <Typography variant='body1'>
          Прибавим 2 к промежуточному ответу 430:
        </Typography>
        <Typography variant='h3' align='center'>
          430 + 2 = 432
        </Typography>
        <Typography variant='body1'>
          Полностью решенный пример теперь выглядит так:
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
                      width: '5rem',
                      height: '5rem',
                      fontSize: '1.5rem',
                      lineHeight: 3.2,
                    }}
                  >
                    10x5
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    9
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    48
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    430
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
                    2
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +2
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
                    5
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +2 */}
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
                    432
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>
          Просто, не так ли? Единственная трудность, с которой вы можете
          столкнуться, состоит в том, чтобы вспомнить, каким должен быть
          следующий шаг.
        </Typography>
        <Typography variant='body1'>
          Если множители больше опорных чисел, тогда мы поступаем следующим
          образом. Возьмем в качестве примера произведение 13 х 42:
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
                  >
                    12
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +144 */}
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
                    2
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* +6 */}
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
                      width: '5rem',
                      height: '5rem',
                      fontSize: '1.5rem',
                      lineHeight: 3.2,
                    }}
                  >
                    10x4
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
                    42
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* 540 */}
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
                    2
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +2
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
                    5
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +2 */}
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
                    432
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>
          Основным опорным числом является 10. Вторым мы взяли 40, или 10 х 4.
          Стараемся подобрать опорные числа так, чтобы они были либо меньше,
          либо больше перемножаемых чисел. Оба множителя в рассматриваемом
          примере больше соответствующих опорных чисел, поэтому мы нарисовали
          кружки сверху. Множителю 13 соответствует основное опорное число 10,
          поэтому мы рисуем над этим множителем два кружка. На сколько больше
          своих опорных чисел 13 и 42? На З и 2. Вписываем З и 2 в нижние
          кружки. Умножаем З в кружке над множителем 13 на 4 в скобках
        </Typography>

        <Typography variant='h3' align='center'>
          3 х 4 = 12
        </Typography>
        <Typography variant='body1'>
          Записываем 12 в верхний кружок над 13. Теперь складываем накрест.
        </Typography>
        <Typography variant='h3' align='center'>
          42 + 12 = 54
        </Typography>
        <Typography variant='body1'>
          Произведение 54 на опорное число 10 дает 540. Это наш промежуточный
          ответ. Теперь перемножим числа в нижних кружках
        </Typography>
        <Typography variant='h3' align='center'>
          3 х 2 = 6
        </Typography>
        <Typography variant='body1'>
          Прибавим 6 к 540, чтобы получить окончательный ответ: 546. Так
          выглядит полностью решенный пример:
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
                  >
                    12
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +144 */}
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
                <TableCell>
                  <Typography
                    variant='h3'
                    align='center'
                    color='error'
                    sx={{
                      borderRadius: '50%',
                      border: '2px solid #f00',
                      width: '5rem',
                      height: '5rem',
                      fontSize: '1.5rem',
                      lineHeight: 3.2,
                    }}
                  >
                    10x4
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
                    42
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
                    2
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +2
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
                    5
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +2 */}
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
                    546
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>
          Основным опорным числом необязательно должно быть 10. Чтобы найти
          произведение 23 х 87, разумнее использовать 20 в качестве основного
          опорного числа, а 80 (20 х 4) — в качестве второго опорного. Давайте
          закрепим усвоенное на примере:
        </Typography>
        <Typography variant='h3' align='center'>
          (20х4) 23 х 87 =
        </Typography>
        <Typography variant='body1'>
          Оба множителя в примере больше, чем их опорные числа (20 и 80),
          поэтому рисуем кружки вверху. На сколько больше? На З и 7. Вписываем З
          и 7 в соответствующие кружки.
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
                  >
                    {/* 12 */}
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +144 */}
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
                    7
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* +21 */}
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
                      width: '5rem',
                      height: '5rem',
                      fontSize: '1.5rem',
                      lineHeight: 3.2,
                    }}
                  >
                    20x4
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
                    {/* 1980 */}
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
                    2
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +2
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
                    5
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +2 */}
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
                    546
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>
          Умножаем З, которое над множителем 23, на 4 в скобках.
        </Typography>

        <Typography variant='h3' align='center'>
          3 х 4 = 12
        </Typography>
        <Typography variant='body1'>
          Вписываем 12 в верхний кружок, над З. Проделанная вами работа теперь
          выглядит так:
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
                  >
                    12
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +144 */}
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
                    7
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* +21 */}
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
                      width: '5rem',
                      height: '5rem',
                      fontSize: '1.5rem',
                      lineHeight: 3.2,
                    }}
                  >
                    20x4
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
                    {/* 1980 */}
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
                    2
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +2
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
                    5
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +2 */}
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
                    546
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>Теперь сложим 12 и 87.</Typography>
        <Typography variant='h3' align='center'>
          87 + 12 = 99
        </Typography>
        <Typography variant='body1'>
          Умножаем 99 на основное опорное число
        </Typography>
        <Typography variant='h3' align='center'>
          99 х 20 = 1980
        </Typography>
        <Typography variant='body1'>
          (Умножаем 99 сначала на 2, а полученный результат — на 10. 99 — это
          100 минус 1. 2 умножить на 100 минус 1 дает 200 минус 2, а это равно
          198. Теперь умножим 198 на 10 и получим ответ для произведения 99 х
          20.) Теперь перемножим числа в нижних кружках.
        </Typography>
        <Typography variant='h3' align='center'>
          3 х 7 = 21
        </Typography>
        <Typography variant='h3' align='center'>
          1980 + 21 = 2001
        </Typography>
        <Typography variant='body1'>
          Окончательное решение примера выглядит так:
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
                  >
                    12
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +144 */}
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
                    7
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +21
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
                      width: '5rem',
                      height: '5rem',
                      fontSize: '1.5rem',
                      lineHeight: 3.2,
                    }}
                  >
                    20x4
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
                    1980
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
                    2
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +2
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
                    5
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +2 */}
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
                    2001
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>Давайте решим пример:</Typography>
        <Typography variant='h3' align='center'>
          96 х 389 =
        </Typography>
        <Typography variant='body1'>
          Будем использовать 100 и 400 в качестве опорных чисел:
        </Typography>
        <Typography variant='h3' align='center'>
          (100 х 4) 96 х 389 =
        </Typography>
        <Typography variant='body1'>
          Умножаем 4 в кружке под множителем 96 на 4 в скобках:
        </Typography>
        <Typography variant='h3' align='center'>
          4 х 4 = 16
        </Typography>
        <Typography variant='body1'>
          Вписываем 16 в нижний кружок, под 4. Решение Пока выглядит следующим
          образом:
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
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +144 */}
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
                    7
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +21
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
                      width: '5rem',
                      height: '5rem',
                      fontSize: '1.5rem',
                      lineHeight: 3.2,
                    }}
                  >
                    100x4
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
                    389
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* 37300 */}
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
                    11
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* +44 */}
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
                    16
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +2 */}
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
                    37344
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>
          Вычтем 16 из 389 и получим 373. Далее умножим 373 на основное опорное
          число 100, это даст нам 37300.
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
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +144 */}
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
                    7
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +21
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
                      width: '5rem',
                      height: '5rem',
                      fontSize: '1.5rem',
                      lineHeight: 3.2,
                    }}
                  >
                    100x4
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
                    389
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    37300
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
                    11
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* +44 */}
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
                    16
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +2 */}
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
                    37344
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>
          Теперь перемножим 4 и 11 в кружках, в результате чего получим 44.
          Сумма 44 и 37300 дает 37344. Полностью решенный пример выглядит так:
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
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +144 */}
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
                    7
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +21
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
                      width: '5rem',
                      height: '5rem',
                      fontSize: '1.5rem',
                      lineHeight: 3.2,
                    }}
                  >
                    100x4
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
                    389
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    37300
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
                    11
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +44
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
                    16
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +2 */}
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
                    37344
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>Теперь попробуем решить пример </Typography>
        <Typography variant='h3' align='center'>
          8 х 136 =
        </Typography>
        <Typography variant='body1'>
          Возьмем 10 и 140 (10 х 14) в качестве опорных чисел:
        </Typography>
        <Typography variant='h3' align='center'>
          (10 х 14) 8 х 136 =
        </Typography>
        <Typography variant='body1'>
          Умножим 2 под множителем 8 на число 14, которое в скобках:
        </Typography>
        <Typography variant='h3' align='center'>
          2 х 14 = 28
        </Typography>
        <Typography variant='body1'>
          Записываем 28 в нижний кружок, под 2. Теперь вычтем 28 из 136 (сначала
          отнимаем 30, а затем добавим 2) и получаем 108. Умножаем теперь 108 на
          основное опорное число 10, получая в ответе 1080. Проделанная до сих
          пор работа выглядит следующим образом:
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
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +144 */}
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
                    7
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +21
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
                      width: '5rem',
                      height: '5rem',
                      fontSize: '1.5rem',
                      lineHeight: 3.2,
                    }}
                  >
                    10x14
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    8
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    136
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* 1080 */}
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
                  >
                    4
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* +8 */}
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
                    28
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +2 */}
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
                    1088
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>
          Теперь перемножим числа 2 и 4 в кружках
        </Typography>
        <Typography variant='h3' align='center'>
          2 х 4 = 8
        </Typography>
        <Typography variant='body1'>
          Прибавим 8 к 1080 и получим окончательный ответ: 1088.
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
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +144 */}
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
                    7
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +21
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
                      width: '5rem',
                      height: '5rem',
                      fontSize: '1.5rem',
                      lineHeight: 3.2,
                    }}
                  >
                    10x14
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    8
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    136
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    1080
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
                  >
                    4
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +8
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
                    28
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography
                    variant='h3'
                    align='right'
                    sx={{ display: 'none' }}
                  >
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
                      display: 'none',
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
                    {/* +2 */}
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
                    1088
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

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
