import Typography from '@mui/material/Typography';

function HintOperator({ children }) {
  return (
    <Typography
      sx={{
        position: 'absolute',
        top: '0.2rem',
        right: '1.5rem',
        fontSize: '2rem',
        fontWeight: 'bold',
        // color: 'red',
      }}
    >
      {children}
    </Typography>
  );
}

export default HintOperator;
