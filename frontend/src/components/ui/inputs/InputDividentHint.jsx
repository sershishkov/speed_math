import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';

function InputDividentHint({
  name,
  id,
  value,
  onChange,
  onKeyPress,
  tabIndex,
  display,
  top = '0.4rem',
  left = '-0.8rem',
}) {
  return (
    <TextField
      type='number'
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      inputProps={{
        // maxLength: 1,
        tabindex: tabIndex,
      }}
      onInput={(e) => {
        e.target.value = Math.max(0, parseInt(e.target.value))
          .toString()
          .slice(0, 1); //   maxLength: 1,
      }}
      sx={{
        div: {},
        fieldset: {
          display: 'none',
        },
        input: {
          display: display,
          position: 'absolute',
          top: top,
          left: left,
          padding: 0,
          width: '1rem',
          height: '1rem',
          textAlign: 'center',
          fontSize: '0.8rem',
          border: '1px solid blue',
          borderRadius: '50%',
          color: 'blue',

          '&:focus , &:active,&:hover': {
            border: '1px solid green',
            outline: '1px solid transparent',
          },
        },
      }}
    />
  );
}

export default InputDividentHint;
