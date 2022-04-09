import Button from '@mui/material/Button';
import LoopIcon from '@mui/icons-material/Loop';

function ButtonRepeat({ onClick }) {
  return (
    <Button fullWidth variant='contained' color='primary' onClick={onClick}>
      <LoopIcon />
      try again
    </Button>
  );
}

export default ButtonRepeat;
