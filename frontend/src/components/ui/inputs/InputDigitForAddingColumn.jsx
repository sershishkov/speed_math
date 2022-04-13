import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

function InputDigitForAddingColumn({
  name,
  id,
  value,
  onChange,
  onKeyPress,
  tabIndex,
}) {
  return (
    <Grid
      item
      sx={{
        marginRight: '7px',
      }}
    >
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
            padding: 0,
            width: '1.05rem',
            height: '2rem',
            textAlign: 'center',
            fontSize: '2rem',
            border: '1px solid #f00',
            borderRadius: '3px',

            '&:focus , &:active,&:hover': {
              border: '1px solid green',
              outline: '1px solid transparent',
            },
          },
        }}
      />
    </Grid>
  );
}

export default InputDigitForAddingColumn;
