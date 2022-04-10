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
        <Typography variant='body1'>А как насчет 512 х 512?</Typography>
        <Typography variant='h3' align='center'>
          512 х 512 =
        </Typography>
        <Typography variant='h3' align='center'>
          512 + 12 = 524
        </Typography>
        <Typography variant='body1'>
          512 х 500 равно произведению 524 х 1000, деленному на 2.
        </Typography>
        <Typography variant='h3' align='center'>
          524 х 1000 = 524000
        </Typography>
        <Typography variant='body1'>
          Половина от 524000 равняется 262000 .
        </Typography>
        <Typography variant='body1'>
          Для деления 524 тысяч пополам можно разбить его на 500 тысяч и 24
          тысячи. Половину обоих чисел легко вычислить в уме. Половина от 500
          тысяч равна 250 тысячам. Половина от 24 тысяч равна 12 тысячам. 250
          тысяч плюс 12 тысяч дает 262 тысячи. Теперь перемножим числа в
          кружках:
        </Typography>
        <Typography variant='h3' align='center'>
          12 х 12 = 144
        </Typography>
        <Typography variant='h3' align='center'>
          262000 + 144 = 262144
        </Typography>
        <Typography variant='body1'>Полный пример выглядит так:</Typography>

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
                    500
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    512
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    X
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    512
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    =
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h3' align='center'>
                    262000
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
                    262144
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
