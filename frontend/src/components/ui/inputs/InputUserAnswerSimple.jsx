import TextField from '@mui/material/TextField';

function InputUserAnswerSimple({
  name,
  label,
  id,
  value,
  onChange,
  onKeyPress,
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
          // border: '1px solid red'
        }
      }
    />
  );
}

export default InputUserAnswerSimple;
