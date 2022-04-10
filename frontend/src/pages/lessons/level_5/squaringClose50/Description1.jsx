import React, { useState } from 'react';

import classes from './styles.module.scss';

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
        <Typography variant='h6'>Введение</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant='h5' align='center'>
          Возведение в квадрат чисел, близких по значению к 50
        </Typography>
        <Typography variant='body1'>
          Метод для возведения в квадрат чисел, близких по значению к 50,
          использует ту же формулу, что и при перемножении любых чисел. Однако
          есть еще один способ, позволяющий значительно упростить
          вычисления.Например:
        </Typography>
        <Typography variant='h5' align='center'>
          46<sup>2</sup>=
        </Typography>
        <Typography variant='body1'>
          46 в квадрате означает 46 х 46. Округляя, получаем 50 х 50 = 2500.
          Берем 50 и 2500 в качестве опорных чисел.
        </Typography>
        <Typography variant='body1'>
          46 меньше, чем 50, поэтому рисуем кружок под примером.
        </Typography>
        <TableContainer>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    50
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='center'>
                    {'    '}
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='center'>
                    46<sup>2</sup>
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='center'>
                    =
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='center'>
                    {'    '}
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='right'>
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    4
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='center'>
                    {'    '}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='body1'>
          46 на 4 меньше 50, поэтому вписываем 4 в кружок. Впереди ставим минус.
        </Typography>
        <Typography variant='body1'>
          Отнимаем 4 из числа сотен в 2500.
        </Typography>
        <Typography variant='h5' align='center'>
          25 - 4 = 21
        </Typography>
        <Typography variant='body1'>
          Это число сотен в искомом ответе. Его можно записать как 2100 (21 х
          100). Чтобы получить остальную часть ответа, возведем в квадрат число
          в кружке
        </Typography>
        <Typography variant='h5' align='center'>
          4<sup>2</sup> = 16
        </Typography>
        <Typography variant='h5' align='center'>
          2100 + 16 = 2116 ОТВЕТ
        </Typography>
        <Typography variant='body1'>Рассмотрим другой пример:</Typography>
        <Typography variant='h5' align='center'>
          56<sup>2</sup> =
        </Typography>
        <Typography variant='body1'>
          56 больше, чем 50, поэтому рисуем кружок над примером.
        </Typography>
        <TableContainer>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='center'>
                    {'    '}
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='right'>
                    +
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    6
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='center'>
                    {'    '}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    50
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='center'>
                    {'    '}
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='center'>
                    56<sup>2</sup>
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='center'>
                    =
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='body1'>
          Прибавляем 6 к числу сотен в 2500 (25). 25 плюс 6 дает 31.
          Промежуточный ответ равен 3100.
        </Typography>
        <Typography variant='h5' align='center'>
          6<sup>2</sup> = 36
        </Typography>
        <Typography variant='h5' align='center'>
          3100 + 36 = 3136 ОТВЕТ
        </Typography>
        <Typography variant='body1'>
          Попробуем решить еще один пример:
        </Typography>
        <Typography variant='h5' align='center'>
          62<sup>2</sup> =
        </Typography>
        <TableContainer>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='center'>
                    {'    '}
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='right'>
                    +
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    12
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='center'>
                    {'    '}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    50
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='center'>
                    {'    '}
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='center'>
                    62<sup>2</sup>
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='center'>
                    =
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='body1'>
          25 + 12 = 37 (промежуточный ответ равен 3700)
        </Typography>
        <Typography variant='h5' align='center'>
          12<sup>2</sup> = 144
        </Typography>
        <Typography variant='h5' align='center'>
          3700 + 144 = 3844 ОТВЕТ
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Description;
