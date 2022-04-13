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
      onInput={(e) => {
        e.target.value = Math.max(0, parseInt(e.target.value))
          .toString()
          .slice(0, 1); //   maxLength: 1,
      }}
      sx={{
        fieldset: {
          display: 'none',
        },

        input: {
          padding: 0,
          textAlign: 'center',
          borderRadius: '50%',
          width: '3rem',
          height: '3rem',
          border: '2px solid #0F0',
          fontSize: '2rem',
          color: '#F00',
          '&:hover,&:focus,&:active': {
            border: '2px solid #F00',
          },
        },
      }}
    />
  );
}

export default InputCircleCheck;
