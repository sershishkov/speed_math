import Typography from '@mui/material/Typography';

function ExerciseHeader({ children, align }) {
  return (
    <Typography variant='h5' align={align}>
      {children}
    </Typography>
  );
}

export default ExerciseHeader;
