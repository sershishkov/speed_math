import TextField from '@mui/material/TextField';

function InputUserAnswerSimple({
  name,
  label,
  id,
  value,
  onChange,
  onKeyPress,
  // display,
}) {
  return (
    <TextField
      name={name}
      label={label}
      type='number'
      id={id}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      sx={
        {
          // display: display,
        }
      }
    />
  );
}

export default InputUserAnswerSimple;
