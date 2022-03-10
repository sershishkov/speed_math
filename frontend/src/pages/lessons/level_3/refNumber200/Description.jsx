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
        <Typography variant='h3' align='center'>
          Числа 200 и 500 в качестве опорных
        </Typography>

        <Typography variant='body1'>
          Если перемножаемые числа близки либо к 200, либо к 500, вычисления не
          представляют особого труда, поскольку и 200, и 500 легко использовать
          в качестве опорных чисел.
        </Typography>
        <Typography variant='body1'>
          Как, - например, нам найти произведение 216 Х 216?
        </Typography>
        <Typography variant='body1'>
          Если использовать 200 в качестве опорного, пример решается легко, в
          том числе и в уме:
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
                  >
                    16
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
                    16
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* +256 */}
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
                    200
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    216
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    216
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    {/* 46400 */}
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
                    2
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
                    46656
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='h3' align='center'>
          216 + 16 = 232
        </Typography>
        <Typography variant='h3' align='center'>
          232 х 200 = 46400
        </Typography>
        <Typography variant='h3' align='center'>
          (232 х 2 = 464, 464 х 100 = 46400)
        </Typography>
        <Typography variant='body1'>
          Вычисляем 16 х 16, взяв 10 в качестве опорного числа.
        </Typography>
        <Typography variant='h3' align='center'>
          16 х 16 = 256
        </Typography>
        <Typography variant='body1'>Полное решение выглядит так:</Typography>
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
                  >
                    16
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
                    16
                  </Typography>
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <Typography variant='h3' align='right'></Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    +256
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
                    200
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    216
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    216
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    46400
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
                    2
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
                <TableCell colSpan={5}>
                  <Typography variant='h3' align='right'>
                    Ответ
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    46656
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
