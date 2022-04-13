import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

function ButtonSave({ children, onClick, disabled, id }) {
  return (
    <Button
      fullWidth
      variant='contained'
      color='primary'
      onClick={onClick}
      disabled={disabled}
      sx={{ mt: 3, mb: 2 }}
      id={id}
    >
      <SaveIcon />
      {children}
    </Button>
  );
}

export default ButtonSave;
