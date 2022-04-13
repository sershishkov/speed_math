import Typography from '@mui/material/Typography';

function NumberForAdditionColumn({ children }) {
  return (
    <Typography
      sx={{
        textAlign: 'right',
        letterSpacing: '0.5rem',
        fontWeight: 'bild',
        fontSize: '2rem',
      }}
    >
      {children}
    </Typography>
  );
}

export default NumberForAdditionColumn;
