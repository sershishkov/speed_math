import Typography from '@mui/material/Typography';

function DescrBody({ children }) {
  return (
    <Typography
      variant='body1'
      sx={{
        textIndent: '1rem',
      }}
    >
      {children}
    </Typography>
  );
}

export default DescrBody;
