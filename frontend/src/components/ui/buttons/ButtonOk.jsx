import Button from '@mui/material/Button';
import GetAppIcon from '@mui/icons-material/GetApp';

function ButtonOk({ children, onClick, disabled, id, tabIndex }) {
  return (
    <Button
      fullWidth
      id={id}
      variant='contained'
      color='success'
      onClick={onClick}
      disabled={disabled}
      tabIndex={tabIndex}
    >
      <GetAppIcon /> № {children}
    </Button>
  );
}

export default ButtonOk;
