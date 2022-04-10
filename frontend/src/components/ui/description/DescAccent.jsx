import Typography from '@mui/material/Typography';

function DescAccent({ children }) {
  return (
    <Typography
      variant='h5'
      align='center'
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
