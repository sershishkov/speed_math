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
          Если вы чувствуете себя уверенно с данным видом деления, тогда можете
          смело пропустить эту главу. Однако у многих людей бывают проблемы с
          решением даже простых задач на деление.
        </Typography>
        <Typography variant='body1'>
          Если вам надо разделить 32 доллара на четырех человек, вы разделите 32
          на 4, чтобы узнать, сколько долларов получить каждый. Поскольку 4 на 8
          равно 32 (4 х 8 = 32), каждый человек должен получить 8 долларов. Это
          простая задача на деление. Если бы вам пришлось делить 32 доллара на
          восемь человек, тогда каждый получил бы по 4 доллара.
        </Typography>
        <Typography variant='body1'>
          Если нам нужно раздать 35 книг четырем студентам, то каждый из них
          получил бы по восемь книг, и осталось бы еще три. Мы называем их
          остатком. Вычисление можно было бы записать так:
        </Typography>
        <TableContainer className={classes.desc_tablecontainer}>
          <Table className={classes.desc_table}>
            <TableBody className={classes.desc_table_body}>
              <TableRow className={classes.desc_table_row}>
                <TableCell className={classes.desc_cell_divider}>
                  <Typography variant='h6'>4</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_divident}>
                  <Typography variant='h6'>35</Typography>
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
                  <Typography variant='h6'>&nbsp;&nbsp;&nbsp;8 </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>r3 (r-остаток)</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>
          А вот как мы стали бы делить большее по величине число. Чтобы
          разделить 4921 на 4, запишем задачу следующим образом:
        </Typography>

        <TableContainer className={classes.desc_tablecontainer}>
          <Table className={classes.desc_table}>
            <TableBody className={classes.desc_table_body}>
              <TableRow className={classes.desc_table_row}>
                <TableCell className={classes.desc_cell_divider}>
                  <Typography variant='h6'>4</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_divident}>
                  <Typography variant='h6'>4921</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant='body1'>
          Начинаем решать с левой цифры числа, которое мы делим (делимое). 4 —
          это первая цифра слева. Начинаем с вопроса: на что нужно умножить 4,
          чтобы получить в ответе 4? Ответом будет 1, поскольку 1 х 4 = 4.
          Запишем 1 под цифрой 4. 4 делится на 4 без остатка, так что переносить
          ничего не придется.
        </Typography>
        <Typography variant='body1'>
          Теперь переходим к следующей цифре: 9. На что нужно умножить 4, чтобы
          получить 9? Нет целого числа, которое даст 9 после умножения на 4.
          Теперь спросим себя, какое число надо умножить на 4, чтобы получить
          число меньше 9? 2, умноженное на 4, дает 8, которое меньше 9 и
          одновременно ближе всех других чисел к 9.Записываем 2 под цифрой 9, а
          остаток 1 переносим в следующий разряд и указываем перед следующей за
          9 цифрой в виде маленькой 1 вверху.
        </Typography>
        <Typography variant='body1'>
          Теперь делим 12 на 4. Какое число после умножения на 4 дает 12?
          Ответом является 3 (3 х 4 = 12). Записываем 3 под цифрой 2. Следующая
          цифра меньше, чем 4, поэтому деление не может быть выполнено. Иными
          словами 1 при делении на 4 дает О и в остатке 1.
        </Typography>

        <TableContainer className={classes.desc_tablecontainer}>
          <Table className={classes.desc_table}>
            <TableBody className={classes.desc_table_body}>
              <TableRow className={classes.desc_table_row}>
                <TableCell className={classes.desc_cell_divider}>
                  <Typography variant='h6'>4</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_divident}>
                  <Typography variant='h6'>
                    49<sup>1</sup>21{' '}
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
                  <Typography variant='h6'>12&nbsp;&nbsp;30&nbsp; </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>r1 (остаток 1)</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant='body1'></Typography>
        <Typography variant='body1'></Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Description;
