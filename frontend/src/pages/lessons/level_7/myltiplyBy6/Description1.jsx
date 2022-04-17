// import Typography from '@mui/material/Typography';
// import TableContainer from '@mui/material/TableContainer';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableRow from '@mui/material/TableRow';
// import TableCell from '@mui/material/TableCell';

import DescAccent from '../../../../components/ui/description/DescAccent';
import DescrBody from '../../../../components/ui/description/DescrBody';
import DescAccordion from '../../../../components/ui/description/DescAccordion';
import Grid from '@mui/material/Grid';

function Description() {
  return (
    <Grid
      item
      sx={{
        width: '100%',
      }}
    >
      <DescAccordion title='Введение'>
        <DescrBody></DescrBody>
        <DescAccent></DescAccent>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
