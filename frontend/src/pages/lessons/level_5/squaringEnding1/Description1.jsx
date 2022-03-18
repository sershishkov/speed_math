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
          Данный способ применяется для возведения в квадрат любого числа,
          оканчивающегося на 1: Если вы попробуете перемножить два подобных
          числа традиционным способом, то поймете, почему данный метод
          работает.Например:
        </Typography>

        <Typography variant='h5' align='center'>
          31<sup>2</sup>=
        </Typography>
        <Typography variant='body1'>
          Во-первых, вычтем 1 из числа, возводимого в квадрат. Число теперь
          оканчивается на нуль, и его легко возвести в квадрат.
        </Typography>
        <Typography variant='h5' align='center'>
          30<sup>2</sup> = 900 (3 х 3 х 10 х 10)
        </Typography>
        <Typography variant='body1'>
          Это наш промежуточный результат.
        </Typography>
        <Typography variant='body1'>
          Во-вторых, сложим 30 и 31 (число, которое мы возвели в квадрат, и
          число, которое собираемся возвести в квадрат):
        </Typography>
        <Typography variant='h5' align='center'>
          30 + 31 = 61
        </Typography>
        <Typography variant='body1'>
          Прибавим полученный результат к 900 и получим 961
        </Typography>
        <Typography variant='h5' align='center'>
          900 + 61 = 961 ОТВЕТ
        </Typography>
        <Typography variant='body1'>
          На втором этапе решения вы могли бы просто удвоить число, которое
          ранее возвели в квадрат (30 х 2 = 60), а затем прибавить 1. Разберем
          другой пример:
        </Typography>
        <Typography variant='h5' align='center'>
          121<sup>2</sup> =
        </Typography>
        <Typography variant='h5' align='center'>
          121 - 1 = 120
        </Typography>
        <Typography variant='h5' align='center'>
          120<sup>2</sup> = 14400 (12 х 12 х 10 х 10)
        </Typography>
        <Typography variant='h5' align='center'>
          120 + 121 = 241
        </Typography>
        <Typography variant='h5' align='center'>
          14400 + 241 = 14641 ОТВЕТ
        </Typography>
        <Typography variant='body1'>Попробуем еще:</Typography>
        <Typography variant='h5' align='center'>
          351<sup>2</sup> =
        </Typography>
        <Typography variant='body1'>
          350<sup>2</sup> = 122500 (используем способ для возведения в квадрат
          чисел, оканчивающихся на 5)
        </Typography>
        <Typography variant='h5' align='center'>
          350 + 351 = 701
        </Typography>
        <Typography variant='h5' align='center'>
          122500 + 701 = 123201 ОТВЕТ
        </Typography>
        <Typography variant='body1'>Еще один пример:</Typography>
        <Typography variant='h5' align='center'>
          86<sup>2</sup> =
        </Typography>
        <Typography variant='body1'>
          Можно использовать способ для возведения в квадрат чисел,
          оканчивающихся на 1, а также для чисел, оканчивающихся на 6. Например,
          вычислим 86<sup>2</sup> . Будем рассматривать 86 как число, которое на
          1 больше 85
        </Typography>
        <Typography variant='h5' align='center'>
          85<sup>2</sup> = 7225
        </Typography>
        <Typography variant='h5' align='center'>
          85 + 86 = 171
        </Typography>
        <Typography variant='h5' align='center'>
          7225 + 171 = 7396 ОТВЕТ
        </Typography>
        <Typography variant='body1'>
          Чтобы решить эти примеры в уме, я называю первый промежуточный
          результат в виде сотен — тогда вторую часть ответа легче прибавлять.
          Например, для возведения в квадрат 71 в уме я проговариваю про себя:
          «Семьдесят в квадрате равно сорок девять сотен; семьдесят на два — сто
          сорок, пятьдесят сотен и сорок плюс один, пять тысяч сорок один
          (5041)».
        </Typography>
        <Typography variant='body1'>
          На самом деле я говорю еще короче: «Сорок пять сотен; пять тысяч
          сорок... один».
        </Typography>
        <Typography variant='body1'>
          Чтобы найти квадрат 66 в уме, я говорю про себя: «Шестьдесят пять в
          квадрате — сорок два и двадцать пять», использовав способ для
          возведения в квадрат чисел, оканчивающихся на 5. «Шестьдесят пять на
          два равно сто тридцать, сорок три пятьдесят пять плюс один, сорок три
          пятьдесят шесть (4356)».
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Description;
