import { useEffect } from 'react';

import ButtonSave from '../../ui/buttons/ButtonSave';
import ButtonRepeat from '../../ui/buttons/ButtonRepeat';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';

function ReportDivisionWithRest({
  displayStatistics,
  resultsList,
  user,
  onSaveResults,
  onContinue,
}) {
  useEffect(() => {
    if (user && displayStatistics) {
      const buttonSave = document.getElementById('buttonSave');
      buttonSave.focus();
    } else if (!user && displayStatistics) {
      const buttonRepeat = document.getElementById('buttonRepeat');
      buttonRepeat.focus();
    }
  }, [user, displayStatistics]);
  return (
    <Grid item sx={{ display: displayStatistics ? 'block' : 'none' }}>
      <Typography variant='h4' align='center'>
        Ваши результаты
      </Typography>

      <TableContainer component={Paper}>
        <Table
          sx={{
            width: '70%',
            margin: 'auto',
            minWidth: '550px',
          }}
          align='center'
          aria-label='simple table'
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant='h6' align='center'>
                  Пример
                </Typography>
              </TableCell>

              <TableCell>
                <Typography variant='h6' align='center'>
                  решение ваше
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h6' align='center'>
                  Комп
                </Typography>
              </TableCell>

              <TableCell>
                <Typography variant='h6' align='center'>
                  остаток ваше
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h6' align='center'>
                  Комп
                </Typography>
              </TableCell>

              <TableCell>
                <Typography variant='h6' align='center'>
                  Сдан пример
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resultsList &&
              resultsList.length > 0 &&
              resultsList.map((item, index) => (
                <TableRow key={index} sx={{}}>
                  <TableCell>
                    <Typography variant='h6' align='center'>
                      {item.example}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography
                      variant='h6'
                      align='center'
                      color={
                        item.userResult - item.resultRight === 0
                          ? 'success.main'
                          : 'error.main'
                      }
                    >
                      {item.userResult}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant='h6' align='center'>
                      {item.resultRight}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography
                      variant='h6'
                      align='center'
                      color={
                        item.userAnswerRem - item.reminderOfDivision === 0
                          ? 'success.main'
                          : 'error.main'
                      }
                    >
                      {item.userAnswerRem}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant='h6' align='center'>
                      {item.reminderOfDivision}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography
                      variant='h6'
                      align='center'
                      color={item.doneExcercise ? 'success.main' : 'error.main'}
                    >
                      {item.doneExcercise ? 'ок!' : 'ошибка!'}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={6}>
                <Grid
                  container
                  alignItems='center'
                  flexDirection='column-reverse'
                >
                  <Grid item sx={{ width: '100%' }}>
                    <ButtonSave
                      disabled={!user}
                      onClick={onSaveResults}
                      id='buttonSave'
                    >
                      {user
                        ? 'Сохранить результаты'
                        : 'Не возможно сохранить результаты - вы не авторизованы'}
                    </ButtonSave>
                  </Grid>
                  <Grid
                    item
                    sx={{ display: !user ? 'block' : 'none', width: '100%' }}
                  >
                    <ButtonRepeat onClick={onContinue} id='buttonRepeat' />
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default ReportDivisionWithRest;
