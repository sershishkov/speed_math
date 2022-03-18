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
          Возвести число в квадрат — значит умножить его на самого себя. Хороший
          способ представить себе это состоит в следующем. Если у вас во дворе
          нужно выложить плиткой квадратный участок и необходимо узнать, сколько
          для этого потребуется материала, то достаточно посчитать, сколько
          плитки пойдет на одну сторону, а затем умножить это число на самого
          себя. Если сторону участка занимают З плитки, тогда 9 плиток составят
          всю площадь участка (З х З = 9). Если сторона составлена из 5•плиток,
          то весь квадрат состоит из 25 плиток (5 х 5 25).
        </Typography>
        <Typography variant='body1'>
          5 в квадрате означает 5 х 5. Мы записываем это как 5<sup>2</sup> .
          Маленькая 2, записанная после 5, означает, Что речь идет о
          перемножении двух пятерок. А что Означает маленькая З, записанная
          после 5? Она Означает, что надо перемножить подряд три пятерки. Это
          общепринятое математическое обозначение, и каждому человеку положено
          его знать. Вот несколько примеров:
        </Typography>
        <Typography variant='h5' align='center'>
          5<sup>3</sup>= 5 х 5 х 5
        </Typography>
        <Typography variant='h5' align='center'>
          4<sup>5</sup>= 4 х 4 х 4 х 4 х 4
        </Typography>
        <Typography variant='h5' align='center'>
          7<sup>3</sup>= 7 х 7 х 7
        </Typography>
        <Typography variant='body1'>
          6<sup>2</sup> (произносится как «шесть в квадрате») = 36, по. тому что
          6 х 6 = 36. Мы говорим, что 36 — это квадрат числа 6.
        </Typography>
        <Typography variant='h5' align='center'>
          13<sup>2</sup> = 13 х 13 = 169
        </Typography>
        <Typography variant='body1'>
          Мы легко можем вычислять подобные примеры, используя изученный выше
          метод перемножения чисел больше 10 и меньше 20. В частности, метод
          умножения с использованием кружков особенно легко применять в
          отношении квадратов чисел, поскольку он лучше всего работает, когда
          перемножаемые числа являются близкими по значению. Добавлю, что все
          способы возведения в квадрат, представленные в настоящей главе,
          используют общий принцип перемножения чисел, рассмотренный нами ранее.
        </Typography>
        <Typography variant='h5' align='center'>
          Возведение в квадрат чисел, оканчивающихся на 5
        </Typography>
        <Typography variant='body1'>
          Метод возведения в квадрат чисел, которые оканчиваются на 5,
          использует ту же формулу, что и общий метод перемножения, освоенный
          нами ранее.
        </Typography>
        <Typography variant='body1'>
          Если нам необходимо найти квадрат числа, оканчивающегося на 5, отделим
          прежде всего последнюю цифру 5 от находящейся перед ней цифры (ИЛИ
          цифр). Прибавьте 1 к числу, состоящему из отделенной цифры (цифр), а
          затем перемножьте результаТ сложения и число. Припишите 25 справа к
          результату умножения, и вы получите окончательный ответ! Например:
        </Typography>
        <Typography variant='h5' align='center'>
          35<sup>2</sup> =
        </Typography>
        <Typography variant='body1'>
          Отделим 5 от цифр впереди нее. В данном случае речь идет всего лишь о
          цифре З, стоящей перед 5. прибавим 1 к З и получим в результате 4.
        </Typography>
        <Typography variant='h5' align='center'>
          3 + 1 = 4
        </Typography>
        <Typography variant='body1'>Перемножим числа:</Typography>
        <Typography variant='h5' align='center'>
          3 х 4 = 12
        </Typography>
        <Typography variant='body1'>
          Припишем 25 (5 в квадрате) справа к 12. Полученное число и есть
          искомый ответ: 1225.
        </Typography>
        <Typography variant='h5' align='center'>
          35<sup>2</sup> = 1225
        </Typography>
        <Typography variant='body1'>
          Попробуем решить еще один пример:
        </Typography>
        <Typography variant='h5' align='center'>
          75<sup>2</sup> (или 75 в квадрате) =
        </Typography>
        <Typography variant='body1'>
          Отделим 7 от 5. Прибавим 1 к 7 и получим 8.8 умножить на 8 равно 56.
          Это первая часть нашего ответа. Припишем 25 справа и получим искомый
          ответ: 5625.
        </Typography>
        <Typography variant='h5' align='center'>
          75<sup>2</sup> = 5625
        </Typography>
        <Typography variant='body1'>
          Сочетание этого метода с изученными ранее позволит получить еще более
          впечатляющие результаты. Рассмотрим это на примере:
        </Typography>
        <Typography variant='h5' align='center'>
          135<sup>2</sup> =
        </Typography>
        <Typography variant='body1'>
          Отделим 5 от 13. Прибавим 1 к 13 и получим 14. Произведение 13 х 14
          дает 182 (используем метод, изученный в главе 2). Припишем 25 справа к
          182 и Получим ответ: 18225. Все эти расчеты можно легко произвести в
          уме.
        </Typography>
        <Typography variant='h5' align='center'>
          135<sup>2</sup> = 18225
        </Typography>
        <Typography variant='body1'>Еще один пример:</Typography>
        <Typography variant='h5' align='center'>
          965<sup>2</sup> =
        </Typography>
        <Typography variant='body1'>
          96 плюс 1 дает 97. Умножим 96 на 97 и получим 9312. Теперь припишем 25
          справа к результату и получим ответ: 931225
        </Typography>
        <Typography variant='h5' align='center'>
          965<sup>2</sup> = 931225
        </Typography>
        <Typography variant='body1'>
          Данный метод применим также к числам с десятичной запятой. Например, в
          случае 6,5 х 6,5 мы просто «забываем» о запятой и находим ей место
          лишь в самом конце вычислений.
        </Typography>
        <Typography variant='h5' align='center'>
          6,5<sup>2</sup> =
        </Typography>
        <Typography variant='h5' align='center'>
          65<sup>2</sup> = 4225
        </Typography>
        <Typography variant='body1'>
          В сумме у множителей в данном примере имеютсЯ две цифры после запятой,
          если квадрат записать в виде произведения двух одинаковых чисел, и в
          ответе после запятой также должно быть две цифры. Поэтому искомый
          ответ равен 42,25.
        </Typography>
        <Typography variant='h5' align='center'>
          6,5<sup>2</sup> = 42,25
        </Typography>
        <Typography variant='body1'>
          Тот же метод работает и для произведения 6,5 х 65, которое
          соответственно будет равно 422,5.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Description;
