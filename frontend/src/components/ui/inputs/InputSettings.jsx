import TextField from '@mui/material/TextField';

function InputSettings({ name, label, value, onChange, id, onKeyPress }) {
  return (
    <TextField
      id={id}
      name={name}
      type='number'
      margin='normal'
      label={label}
      required
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress}
    />
  );
}

export default InputSettings;
