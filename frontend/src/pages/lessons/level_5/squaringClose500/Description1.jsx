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
        <Typography variant='body1'>
          Метод напоминает тот, что мы использовали для чисел, близких по
          значению к 50.
        </Typography>
        <Typography variant='body1'>
          500, умноженное на 500, дает 250000. Берем 500 и 250000 в качестве
          опорных чисел. Например:
        </Typography>
        <Typography variant='h5' align='center'>
          506<sup>2</sup> =
        </Typography>
        <Typography variant='body1'>
          506 больше, чем 500, поэтому рисуем кружок вверху. В него вписываем 6.
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
                    className={classes.description_rounded_base}
                  >
                    500
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='center'>
                    {'    '}
                  </Typography>
                </TableCell>
                <TableCell className={`${classes.description_cell} `}>
                  <Typography variant='h5' align='center'>
                    506<sup>2</sup>
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

        <Typography variant='h5' align='center'>
          506<sup>2</sup> = 250000
        </Typography>
        <Typography variant='body1'>
          Число в кружке следует прибавлять к числу тысяч.
        </Typography>
        <Typography variant='h5' align='center'>
          250 + 6 = 256 тысяч
        </Typography>
        <Typography variant='body1'>
          Возведем в квадрат число в кружке:
        </Typography>
        <Typography variant='h5' align='center'>
          6<sup>2</sup> = 36
        </Typography>
        <Typography variant='h5' align='center'>
          256000 + 36 = 256036 ОТВЕТ
        </Typography>
        <Typography variant='body1'>Разберем другой пример:</Typography>
        <Typography variant='h5' align='center'>
          512<sup>2</sup> =
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
                    className={classes.description_rounded_base}
                  >
                    500
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='center'>
                    {'    '}
                  </Typography>
                </TableCell>
                <TableCell className={`${classes.description_cell} `}>
                  <Typography variant='h5' align='center'>
                    512<sup>2</sup>
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

        <Typography variant='h5' align='center'>
          250 + 12 = 262
        </Typography>
        <Typography variant='body1'>Промежуточный ответ — 262000</Typography>
        <Typography variant='h5' align='center'>
          12<sup>2</sup> = 144
        </Typography>
        <Typography variant='h5' align='center'>
          262000 + 144 = 262144 ОТВЕТ
        </Typography>
        <Typography variant='body1'>
          Для возведения в квадрат чисел, которые немного меньше 500,
          используйте следующий способ. Рассмотрим пример:
        </Typography>
        <Typography variant='h5' align='center'>
          488<sup>2</sup> =
        </Typography>
        <Typography variant='body1'>
          488 меньше, чем 500, поэтому рисуем кружок вниЗУ. Поскольку 488 на 12
          меньше, Чем 500, вписываем в кружок 12.
        </Typography>

        <TableContainer>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded_base}
                  >
                    500
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='center'>
                    {'    '}
                  </Typography>
                </TableCell>
                <TableCell className={`${classes.description_cell} `}>
                  <Typography variant='h5' align='center'>
                    488<sup>2</sup>
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
                    12
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
          250 тысяч минус 12 тысяч дает 238 тысяч. Прибавляем 12 в квадрате (12
          <sup>2</sup> =144).
        </Typography>
        <Typography variant='h5' align='center'>
          238000 + 144 = 238144 ОТВЕТ
        </Typography>
        <Typography variant='body1'>
          Можно добиться результата еще более впечатляющим способом. Например:
        </Typography>
        <Typography variant='h5' align='center'>
          535<sup>2</sup> =
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
                    35
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
                    className={classes.description_rounded_base}
                  >
                    500
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='center'>
                    {'    '}
                  </Typography>
                </TableCell>
                <TableCell className={`${classes.description_cell} `}>
                  <Typography variant='h5' align='center'>
                    535<sup>2</sup>
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

        <Typography variant='h5' align='center'>
          250000 + 35000 = 285000
        </Typography>
        <Typography variant='h5' align='center'>
          35<sup>2</sup> = 1225
        </Typography>
        <Typography variant='h5' align='center'>
          285000 + 1225 = 286225 ОТВЕТ
        </Typography>

        <Typography variant='body1'>
          Все это легко рассчитывается в уме. Мы использовали два ускоряющих
          метода: метод для возведения в квадрат чисел, близких по значению к
          500, и метод для возведения в квадрат чисел, оканчивающихся на 5. А
          как насчет 635<sup>2</sup> ?
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
                    className={classes.description_rounded_base}
                  >
                    135
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
                    className={classes.description_rounded_base}
                  >
                    500
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='center'>
                    {'    '}
                  </Typography>
                </TableCell>
                <TableCell className={`${classes.description_cell} `}>
                  <Typography variant='h5' align='center'>
                    635<sup>2</sup>
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

        <Typography variant='h5' align='center'>
          250000 + 135000 = 385000
        </Typography>
        <Typography variant='h5' align='center'>
          135<sup>2</sup> = 18225
        </Typography>

        <Typography variant='body1'>
          Чтобы вычислить 135<sup>2</sup> , мы используем способ для вычисления
          квадрата чисел, оканчивающихся на 5, и способ для перемножения чисел
          больше 10, но меньше 20 (13 + 1 = 14, 13 х 14 = 182). Приписываем 25
          справа к 182, получаем: 135<sup>2</sup> = 18225.
        </Typography>
        <Typography variant='body1'>
          Можно произносить полученный ответ так: «Восемнадцать тысяч, два, два,
          пять».
        </Typography>
        <Typography variant='body1'>
          Чтобы прибавить 18000, прибавляем 20 и вычитаем 2.
        </Typography>
        <Typography variant='h5' align='center'>
          385 + 20 = 405
        </Typography>
        <Typography variant='h5' align='center'>
          405 - 2 = 403
        </Typography>
        <Typography variant='body1'>Припишем 225 справа.</Typography>
        <Typography variant='body1'>Искомый ответ: 403225.</Typography>
        <Typography variant='body1'>Решим еще один пример:</Typography>

        <TableContainer>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded_base}
                  >
                    500
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='center'>
                    {'    '}
                  </Typography>
                </TableCell>
                <TableCell className={`${classes.description_cell} `}>
                  <Typography variant='h5' align='center'>
                    445<sup>2</sup>
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
                    55
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

        <Typography variant='h5' align='center'>
          250 - 55 = 195 (195 х 1000 = 195000)
        </Typography>
        <Typography variant='body1'>
          55<sup>2</sup> = 3025 (используем способ для возведения в квадрат
          чисел, оканчивающихся на 5)
        </Typography>
        <Typography variant='h5' align='center'>
          195000 + 3025 = 198025
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Description;
