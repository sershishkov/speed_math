import Typography from '@mui/material/Typography';

function DescAccent({ children, align = 'center' }) {
  return (
    <Typography
      variant='h5'
      align={align}
      sx={{
        // color: 'red',
        fontWeight: 'bold',
      }}
    >
      {children}
    </Typography>
  );
}

export default DescAccent;
