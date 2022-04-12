import Typography from '@mui/material/Typography';

function ExerciseHeader({ children, align }) {
  return (
    <Typography variant='h4' align={align}>
      {children}
    </Typography>
  );
}

export default ExerciseHeader;
