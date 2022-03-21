import React, { useState } from 'react';

import classes from './styles.module.scss';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

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
          Если вам надо разделить 368 долларов на 16 человек, то вы разделите
          368 на 16, чтобы узнать, сколько должен получить каждый.
        </Typography>
        <Typography variant='body1'>
          Если вы не знаете всех вариантов умножения на 16, есть простой способ
          решить эту задачу. 16 — это 2 на 8, а также 4 на 4. Простой способ
          деления на 16 состоит в том, чтобы использовать его множители. Можно
          разделить сначала на 4, а потом полученный результат разделить опять
          на 4. Это то же самое, что делить на 16, потому что 4 х 4 = 16.
        </Typography>
        <Typography variant='body1'>
          Можно было бы записать решение задачи следующим образом:
        </Typography>

        <TableContainer className={classes.desc_tablecontainer}>
          <Table className={classes.desc_table}>
            <TableBody className={classes.desc_table_body}>
              <TableRow className={classes.desc_table_row}>
                <TableCell className={classes.desc_cell_divider}>
                  <Typography variant='h6'>4</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_divident}>
                  <Typography variant='h6'>368</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.desc_table_row}>
                <TableCell className={classes.desc_cell_divider}>
                  <Typography variant='h6'>4</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_divident}>
                  <Typography variant='h6'>&nbsp;&nbsp;&nbsp;92</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.desc_table_row}>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_result}>
                  <Typography variant='h6'>&nbsp;&nbsp;&nbsp;23 </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'> r 0 </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>
          Деление на такие числа, как 14 и 16, достаточно легко выполнять в уме.
          Не представляет труда разделить число пополам, .прежде чем делить на
          больший множитель. Если вам надо разделить 368 на 16 в уме, вы могли
          бы сказать про себя: «Половина от тридцати шести — восемнадцать,
          половина от восьми — четыре». Вы получили 184. Теперь вы делите уже
          меньшее число на 8 (которое осталось от 16 после того, как мы
          разделили на 2).
        </Typography>
        <Typography variant='body1'>
          18 при делении на 8 дает 2 с остатком 2. Этот остаток (из разряда
          десятков) переносим в разряд единиц (цифра 4), получая 24. 24 при
          делении на 8 дает З без остатка. Таким образом, ответ равен 23 без
          остатка. Все это легко вычисляется в уме.
        </Typography>

        <Typography variant='h5' align='center'>
          Общее правило деления по множителям состоит в том, чтобы сначала
          делить на меньшее число, а потом на большее.
        </Typography>
        <Typography variant='body1'>
          Идея в том, что в итоге вы делите меньшее число на больший множитель.
        </Typography>
        <Typography variant='body1'>
          Например, если вам надо разделить 3444 на 21, то вы сначала делите на
          З, а потом на 7. К моменту, когда надо будет делить на 7, исходное
          число успеет уменьшиться в несколько раз.
        </Typography>
        <Typography variant='h5' align='center'>
          3444 : 3 = 1148
        </Typography>
        <Typography variant='h5' align='center'>
          1148 : 7 = 164
        </Typography>
        <Typography variant='body1'>
          Делить 1148 на 7 легче, чем 3444 на 7.
        </Typography>
        <Typography variant='h5' align='center'>
          Деление на числа, оканчивающиеся на 5
        </Typography>
        <Typography variant='body1'>
          Чтобы разделить на двузначное число, которое оканчивается на 5,
          удвойте оба числа и используйте деление по множителям.Например:
        </Typography>
        <Typography variant='h5' align='center'>
          1085 : 35 =
        </Typography>
        <Typography variant='body1'>
          Удвоим оба числа. 2 на 1000 равно 2000, 2 на 85 равно 170.
        </Typography>
        <Typography variant='h5' align='center'>
          1085 х 2 = 2170
        </Typography>
        <Typography variant='h5' align='center'>
          35 х 2 = 70
        </Typography>
        <Typography variant='body1'>Теперь задача выглядит так:</Typography>
        <Typography variant='h5' align='center'>
          2170 : 70 =
        </Typography>
        <Typography variant='body1'>
          Чтобы разделить на 70, делим сначала на 10, а потом на 7 (по
          множителям).
        </Typography>
        <Typography variant='h5' align='center'>
          2170 : 10 = 217
        </Typography>
        <Typography variant='h5' align='center'>
          217 : 7 = 31
        </Typography>
        <Typography variant='body1'>
          Вычисление очень простое. 21 при делении на 7 дает З (З х 7 = 21), а 7
          делится на 7 один раз без остатка. Теперь мы можем записать ответ для
          нашего исходного примера:
        </Typography>
        <Typography variant='h5' align='center'>
          1085 : 35 = 31 ОТВЕТ
        </Typography>
        <Typography variant='body1'>Попробуем решить другой пример:</Typography>
        <Typography variant='h5' align='center'>
          512 : 35 =
        </Typography>
        <Typography variant='body1'>
          500 при умножении на 2 дает 1000. 12, умноженное на 2, равно 24. Таким
          образом, 512, умноженное на 2, дает 1024. 35, увеличенное вдвое, дает
          70.Теперь задача выглядит так:
        </Typography>
        <Typography variant='h5' align='center'>
          1024 : 70 =
        </Typography>
        <Typography variant='body1'>
          Разделим сначала на 10, а потом на 7:
        </Typography>
        <Typography variant='h5' align='center'>
          1024 : 10 = 102,4
        </Typography>
        <Typography variant='h5' align='center'>
          102,4 : 7 =
        </Typography>
        <Typography variant='body1'>
          10 при делении на 7 дает 1. 1 — это первая цифра ответа. Прибавляем
          остаток 3 (из разряда десятков) к цифре 2, что дает нам 32.
        </Typography>
        <Typography variant='h5' align='center'>
          32 : 7 = 4 r4
        </Typography>
        <Typography variant='body1'>
          Мы получили в ответе 14 с остатком 4. Приписываем 4 к следующей цифре
          (после запятой), что дает нам 44
        </Typography>
        <Typography variant='h5' align='center'>
          44 : 7 = 6 r2
        </Typography>
        <Typography variant='body1'>
          Окончательный ответ: 14,62. Это ответ к нашей исходной задаче:
        </Typography>
        <Typography variant='h5' align='center'>
          512 : 35 = 14,62
        </Typography>
        <Typography variant='body1'>
          Можно делить числа с помощью множителей до любого количества знаков
          после запятой.
        </Typography>
        <Typography variant='body1'>
          Припишите столько нулей после запятой, сколько требуется для ответа, и
          добавьте еще один. Это позволит гарантировать, что последняя цифра
          после запятой будет получена с требуемой точностью.
        </Typography>
        <Typography variant='body1'>
          К примеру, если надо разделить 736 на 21 и при этом ответ должен быть
          получен с точностью до двух знаков после запятой, к делимому надо
          приписать три нуля после запятой.
        </Typography>
        <Typography variant='body1'>
          Таким образом, вы делили бы 736,000 на 21. Итак:
        </Typography>

        <TableContainer className={classes.desc_tablecontainer}>
          <Table className={classes.desc_table}>
            <TableBody className={classes.desc_table_body}>
              <TableRow className={classes.desc_table_row}>
                <TableCell className={classes.desc_cell_divider}>
                  <Typography variant='h6'>3</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_divident}>
                  <Typography variant='h6'>736,000</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.desc_table_row}>
                <TableCell className={classes.desc_cell_divider}>
                  <Typography variant='h6'>7</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_divident}>
                  <Typography variant='h6'>245,333</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.desc_table_row}>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_result}>
                  <Typography variant='h6'>
                    &nbsp;&nbsp;&nbsp;35,047{' '}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>{/* r 0  */}</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>
          Далее объясняется, как округлять три знака после запятой до двух.
        </Typography>
        <Typography variant='h5' align='center'>
          Округление десятичных дробей
        </Typography>
        <Typography variant='body1'>
          Чтобы округлить дробь до двух знаков после запятой, рассмотрим третью
          цифру после запятой. Если она меньше 5, тогда вторую цифру оставляем
          как есть и просто удаляем третью. А если же она равна или больше 5,
          следует вторую цифру увеличить на 1, а третью удалить.
        </Typography>
        <Typography variant='body1'>
          Таким образом, ответом с точностью до двух знаков после запятой
          является 35,05.
        </Typography>
        <Typography variant='body1'>
          Ответом с точностью до семи знаков будет 35,0476190. Потом знаки
          повторяются, так что до 13 знаков после запятой ответ выглядит так:
          35,0476190476190
        </Typography>
        <Typography variant='body1'>
          Чтобы округлить до 12 десятичных знаков, рассмотрим тринадцатую цифру,
          которая равна нулю (меньше 5), поэтому 9 оставляем без изменения:
          35,047619047619
        </Typography>
        <Typography variant='body1'>
          Двенадцатая цифра равна 9 (больше 5), поэтому при округлении до
          одиннадцатого знака цифра 1 переходит в 2:
        </Typography>
        <Typography variant='h5' align='center'>
          35,04761904762
        </Typography>
        <Typography variant='body1'>
          При округлении до десятого знака замечаем, что одиннадцатая цифра
          равна 2 (меньше 5), поэтому оставляем 6 без изменения:
        </Typography>
        <Typography variant='h5' align='center'>
          35,0476190476
        </Typography>
        <Typography variant='h5' align='center'>
          Определение остатка
        </Typography>
        <Typography variant='body1'>
          Иногда при делении нам хотелось бы знать остаток, а не цифры после
          запятой. Как нам узнать остаток, когда мы делим по множителям? Правило
          звучит так:
        </Typography>
        <Typography variant='h5' align='center'>
          Умножьте первый делитель на второй остаток и прибавьте первый остаток.
        </Typography>
        <Typography variant='body1'>
          Для вышеприведенного примера мы поступили бы следующим образом:
        </Typography>
        <TableContainer className={classes.desc_tablecontainer}>
          <Table className={classes.desc_table}>
            <TableBody className={classes.desc_table_body}>
              <TableRow className={classes.desc_table_row}>
                <TableCell className={classes.desc_cell_divider}>
                  <Typography variant='h6'>3</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_divident}>
                  <Typography variant='h6'>736</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.desc_table_row}>
                <TableCell className={classes.desc_cell_divider}>
                  <Typography variant='h6'>7</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_divident}>
                  <Typography variant='h6'>245&nbsp;&nbsp;r1</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.desc_table_row}>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_result}>
                  <Typography variant='h6'>
                    &nbsp;&nbsp;&nbsp;35&nbsp;&nbsp;r0
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>{/* r 0  */}</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='body1'>
          Начнем с того, что перемножим числа вверхнем левом и нижнем правом
          «углах» :
        </Typography>
        <Typography variant='h5' align='center'>
          3 x 0 = 0
        </Typography>
        <Typography variant='body1'>
          Теперь прибавим первый остаток (1). Искомый 1 остаток равен 1 или 1/21
        </Typography>
        <Typography variant='body1'>Еще один пример:</Typography>
        <Typography variant='h5' align='center'>
          2327 : 35 =
        </Typography>
        <Typography variant='body1'>
          Берем 7 и 5 в качестве множителей числа 35.
        </Typography>
        <TableContainer className={classes.desc_tablecontainer}>
          <Table className={classes.desc_table}>
            <TableBody className={classes.desc_table_body}>
              <TableRow className={classes.desc_table_row}>
                <TableCell className={classes.desc_cell_divider}>
                  <Typography variant='h6'>5</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_divident}>
                  <Typography variant='h6'>2327</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.desc_table_row}>
                <TableCell className={classes.desc_cell_divider}>
                  <Typography variant='h6'>7</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_divident}>
                  <Typography variant='h6'>
                    &nbsp;&nbsp;465&nbsp;&nbsp;r2
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.desc_table_row}>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_result}>
                  <Typography variant='h6'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;66&nbsp;&nbsp;r3
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>{/* r 0  */}</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='body1'>
          Чтобы найти окончательный остаток, перемножаем «угловые» числа (З х 5
          = 15). Теперь прибавим другой остаток (2):
        </Typography>
        <Typography variant='h5' align='center'>
          15 + 2 = 17
        </Typography>
        <Typography variant='body1'>
          Получаем в ответе 66 с остатком 17.
        </Typography>
        <Typography variant='body1'>
          Деление столбиком по множителям позволяет выполнять немало вычислений
          в уме, за которые иной человек не рискнул бы и взяться.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Description;
