import TextField from '@mui/material/TextField';

function InputCircleCheck({ id, name, value, onChange, onKeyPress }) {
  return (
    <TextField
      type='number'
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      sx={{
        '& div': {
          borderRadius: '50%',
          width: '3rem',
          height: '3rem',
          border: '2px solid #0F0',
          fontSize: '2rem',
          color: '#F00',
          '&:hover': {
            border: '2px solid #F00',
          },
        },
      }}
    />
  );
}

export default InputCircleCheck;
