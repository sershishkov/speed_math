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
        <Typography variant='h5' align='center'>
          Числа, оканчивающиеся на 9
        </Typography>
        <Typography variant='body1'>Пример:</Typography>
        <Typography variant='h5' align='center'>
          29<sup>2</sup>=
        </Typography>
        <Typography variant='body1'>
          Во-первых, прибавим 1 к числу, возводимому в квадрат. Теперь оно
          оканчивается на О, и его квадрат легко найти.
        </Typography>
        <Typography variant='h5' align='center'>
          30<sup>2</sup> = 900 (3 х 3 х 10 х 10)
        </Typography>
        <Typography variant='body1'>
          Это наш промежуточный результат. Теперь сложим 30 и 29 (число, которое
          мы возвели в квадрат, и число, которое собираемся возвести в квадрат):
        </Typography>
        <Typography variant='h5' align='center'>
          30 + 29 = 59
        </Typography>
        <Typography variant='body1'>
          Вычтем 59 из 900 и получим в ответе 841. (Я удваиваю 30, получая 60, а
          затем вычитаю 60 из 900 и потом прибавляю 1.)
        </Typography>
        <Typography variant='h5' align='center'>
          900 - 59 = 841 ОТВЕТ
        </Typography>
        <Typography variant='body1'>Возьмем другой пример:</Typography>
        <Typography variant='h5' align='center'>
          119<sup>2</sup> =
        </Typography>
        <Typography variant='h5' align='center'>
          119 + 1 = 120
        </Typography>
        <Typography variant='h5' align='center'>
          120<sup>2</sup> = 14400 (12 х 12 х 10 х 10)
        </Typography>
        <Typography variant='h5' align='center'>
          120 + 119 = 239
        </Typography>
        <Typography variant='h5' align='center'>
          14400 - 239 = 14161
        </Typography>
        <Typography variant='h5' align='center'>
          14400 — 240 + 1 = 14161 ОТВЕТ
        </Typography>
        <Typography variant='body1'>Возьмем другой пример:</Typography>
        <Typography variant='h5' align='center'>
          349<sup>2</sup> =
        </Typography>
        <Typography variant='h5' align='center'>
          350<sup>2</sup> = 122500 (используем способ для возведения в квадрат
          чисел, оканчивающихся на 5)
        </Typography>
        <Typography variant='h5' align='center'>
          350 + 349 = 699
        </Typography>
        <Typography variant='body1'>
          (Вычтем 1000, а потом прибавим 301, чтобы вычислить ответ.)
        </Typography>
        <Typography variant='h5' align='center'>
          122500 - 699 = 121801 ОТВЕТ
        </Typography>
        <Typography variant='body1'>
          А как нам вычислить 84 в квадрате?
        </Typography>
        <Typography variant='body1'>
          Можно использовать способ для возведения в квадрат чисел,
          оканчивающихся на 9 или 4. Будем Рассматривать 84 как число, которое
          на 1 меньше 85.
        </Typography>
        <Typography variant='h5' align='center'>
          84<sup>2</sup> =
        </Typography>
        <Typography variant='h5' align='center'>
          85<sup>2</sup> = 7225
        </Typography>
        <Typography variant='h5' align='center'>
          85 + 84 = 169
        </Typography>
        <Typography variant='body1'>Теперь вычтем 169 из 7225:</Typography>
        <Typography variant='h5' align='center'>
          7225 - 169 = 7056 ОТВЕТ
        </Typography>
        <Typography variant='body1'>
          (Вычитаем 200, а затем прибавляем 31, чтобы получить ответ.)
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Description;
