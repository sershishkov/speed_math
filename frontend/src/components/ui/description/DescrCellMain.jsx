import Typography from '@mui/material/Typography';

function DescrCellMain({ children, align }) {
  return (
    <Typography variant='h3' align={align}>
      {children}
    </Typography>
  );
}

export default DescrCellMain;
