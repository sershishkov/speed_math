import Button from '@mui/material/Button';
import LoopIcon from '@mui/icons-material/Loop';

function ButtonRepeat({ onClick, id }) {
  return (
    <Button
      fullWidth
      variant='contained'
      color='primary'
      onClick={onClick}
      id={id}
    >
      <LoopIcon />
      try again
    </Button>
  );
}

export default ButtonRepeat;
